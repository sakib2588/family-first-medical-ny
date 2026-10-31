"""Tests for craft.py and check-gates.py (standard library only).

Run: cd <skill dir>/tools && python3 -m unittest test_tools -v
"""
from __future__ import annotations

import importlib.util
import json
import re
import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path

HERE = Path(__file__).parent
SKILL = HERE.parent


def _load(name: str, file: str):
    spec = importlib.util.spec_from_file_location(name, HERE / file)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


craft = _load("craft", "craft.py")
gates = _load("check_gates", "check-gates.py")
MARK = "@@" + "FILL" + "@@"


class CraftTest(unittest.TestCase):
    def test_contrast_accepts_three_digit_hex(self) -> None:
        self.assertEqual(craft.contrast("#fff", "#000000"), 21.0)

    def test_contrast_rejects_bad_hex(self) -> None:
        with self.assertRaises(ValueError):
            craft.contrast("#ggg", "#fff")

    def test_raw_colors_ignores_tokens_entities_and_anchors(self) -> None:
        html = ('<style>:root{--a:#123456}a{color:var(--a)}</style>'
                '<p>&#8212; <a href="#cafe">x</a> <svg><rect fill="url(#bad)"/></svg></p>')
        self.assertEqual(craft.raw_colors(html)[0], [])

    def test_raw_colors_finds_hex_functions_and_named(self) -> None:
        html = '<div style="color:rgb(1,2,3);background:white"></div><style>p{border-color:#abc}</style>'
        found = craft.raw_colors(html)[0]
        self.assertIn("rgb(1,2,3)", found)
        self.assertIn("white", found)
        self.assertIn("#abc", found)

    def test_raw_colors_ignores_token_names_inside_var(self) -> None:
        self.assertEqual(craft.raw_colors("<style>a{color:var(--teal);background:var(--white)}</style>")[0], [])

    def test_claims_picks_numbers_and_attributes(self) -> None:
        lines = craft.claim_lines("Welcome\nOpen Tuesday 9 am\nFully insured\nPlain words")
        self.assertEqual(lines, ["Open Tuesday 9 am", "Fully insured"])


class CraftV3Test(unittest.TestCase):
    def test_claims_catch_inflected_red_line_words(self) -> None:
        for ln in ("Licensed master technician", "Read our reviews", "Satisfaction guaranteed", "Lifetime warranty",
                   "Testimonials", "Locally owned and operated", "Same-day service", "Owner answers every call",
                   "Serving the north side and the harbour", "We arrive within the hour", "Award-winning kitchen",
                   "No hidden fees", "Experienced technicians", "\u201cThey fixed it fast.\u201d"):
            self.assertEqual(craft.claim_lines(ln), [ln], ln)

    def test_claims_catch_a_name_in_mid_sentence(self) -> None:
        self.assertEqual(craft.claim_lines("call and ask for Jordan"), ["call and ask for Jordan"])

    def test_claims_skip_plain_lines(self) -> None:
        self.assertEqual(craft.claim_lines("Tell us what is wrong\nSend request"), [])

    def test_raw_colors_finds_tailwind_palette_and_svg_named(self) -> None:
        found = craft.raw_colors('<div class="bg-red-600 text-white"></div><svg><path fill="red"/><path fill="currentColor"/></svg>')[0]
        self.assertEqual(found, ["bg-red-600", "red", "text-white"])

    def test_raw_colors_allows_theme_block_and_token_classes(self) -> None:
        css = "@theme { --color-bg: #fff; --color-text: #111; }\n.a{color:var(--color-text)}"
        self.assertEqual(craft.raw_colors(css)[0], [])
        self.assertEqual(craft.raw_colors('<div class="bg-surface text-primary"></div>')[0], [])

    def test_raw_colors_ignores_copy_ids_urls_and_comments(self) -> None:
        html = ('<p>Suite #200, Color: white or black</p><style>#cafe-menu{color:var(--a)} '
                '.h{background:url(img/white-oak.jpg)} /* no rgb() here */</style>')
        self.assertEqual(craft.raw_colors(html)[0], [])

    def test_raw_colors_flags_extra_root_block_outside_media(self) -> None:
        css = ":root{--a:#111}\n:root{--b:#f00}\n@media (prefers-color-scheme: dark){:root{--a:#eee}}"
        found, blocks = craft.raw_colors(css)
        self.assertIn("extra :root block", " ".join(found))


GOOD = {
    "00-brief.md": "Brief: a sample client. Call (555) 010-0000.\n",
    "01-facts.md": """# Facts
## Brief file
Saved: yes
## Overlay
- Vertical overlay read: none fits
## Jurisdictions
us-federal (ASSUMED from the brief's place)
## Questions
| # | question | answer | status |
|---|---|---|---|
| Q1 | Who calls? | ASSUMED: owners | ASSUMED |
## Fact list
| id | fact | source | kind |
|---|---|---|---|
| F1 | Call (555) 010-0000 | brief line 1 | fact |
## Brief and overlay conflicts
none
## Counsel items
none
## Placeholders
none
""",
    "02-design-brief.md": """# Brief
## Primary action
Call
## First-look order
H1, call
## Subject inventory
1. a (F1)
2. b
3. c
4. d
5. e
6. f
7. g
8. h
## Argument
| # | section | claim | proof | layout |
|---|---|---|---|---|
| 1 | first screen | x | F1 | split |
| 2 | prices | y | F1 | list |
## Idea sentence
On this page, item 3 becomes the page order.
## Swap test
Another client of this type with this idea: would need a different item 3, so it breaks.
Still works for the category: no
## Only here
Only here: item 3 (F1)
## Parts
| part | how | default |
|---|---|---|
| header | a | b |
| hero | a | b |
| prices | a | b |
| footer | a | b |
""",
    "03-references.md": "## References\nnone available: the brief lists none.\n",
    "04-concepts.md": "".join(
        f"### Direction {i}: Name {i}\n- Inventory item: {i}\n- Idea sentence: idea {i}\n```\nwire\n```\n" for i in (1, 2, 3)
    ) + """## Axis table
| axis | 1 vs 2 | 1 vs 3 | 2 vs 3 |
|---|---|---|---|
| differences (count) | 5 | 5 | 6 |
## Chosen
- Direction: 2
- Default check: not a default; differs in hero and density.
""",
    "05-tokens.css": ":root {\n  --font-display: \"Fraunces\", serif;\n  --font-body: \"Literata\", serif;\n"
                     "  --color-ground: #ffffff;\n  --color-surface: #f4f4f4;\n  --color-ink: #111111;\n"
                     "  --color-muted: #555555;\n  --color-accent: #0b5d3b;\n  --color-on-accent: #ffffff;\n"
                     "  --color-focus: #1a4fd6;\n  --tap-min: 2.75rem;\n}\n",
    "07-review.md": """## Metrics
ok
## Screenshots viewed
- p-390-fold.png
- p-1440-fold.png
## Generic items and changes
| round | shot | element | tell | change |
|---|---|---|---|---|
| 1 | p-390-fold.png | nav | 23 | styled |
## Parts check
| part | screenshot | designed or default | clipped | fix |
|---|---|---|---|---|
| header | p-390-fold.png | designed | none | - |
| hero | p-390-fold.png | designed | none | - |
| prices | p-1440-fold.png | designed | none | - |
| footer | p-1440-fold.png | designed | none | - |
## Trades first screen
not a call-first trades page
## Blur test
holds
""",
    "08-audit.md": """## Scores
| principle | before | change | after | screenshot |
|---|---|---|---|---|
| P1 | 3 | x | 4 | p-390-fold.png |
## Idea diversity
The idea comes from inventory item 3, not hours or a sample diagram.
## Removal pass
| section | removed | why |
|---|---|---|
| hero | a rule | - |
## Grader
Self-audit by the builder; not an independent review.
""",
    "09-slop-test.md": "## Automatic checks\n```\nPASS  no_lorem   none\nPASS  contrast  ok\n```\n## Release gates\n"
                       "| gate | result | evidence |\n|---|---|---|\n| contrast | pass | auto |\n## Slop test\n"
                       "| # | yes / no | screenshot | reason |\n|---|---|---|---|\n"
                       + "".join(f"| {i} | yes | p-390-fold.png | ok |\n" for i in range(1, 16))
                       + "\nScore: 15 / 15\nItems 1 to 4: all yes\nResult: PASS\nGraded by: builder (self)\n"
                       "Status: READY FOR REVIEW: self-graded\n",
}
GOOD_PAGE = ('<!doctype html><html lang="en"><head><style>' + GOOD["05-tokens.css"] +
             'body{color:var(--color-ink)}</style></head><body><a data-cta="primary" href="tel:+15550100000">'
             'Call (555) 010-0000</a></body></html>')


def make_good(d: Path) -> None:
    for name, text in GOOD.items():
        if name != "08-fact-audit.md":
            (d / name).write_text(text, encoding="utf-8")
    (d / "index.html").write_text(GOOD_PAGE, encoding="utf-8")
    (d / "shots").mkdir()
    for png in ("p-390-fold.png", "p-1440-fold.png"):
        (d / "shots" / png).write_bytes(b"")
    (d / "shots" / "p-text.txt").write_text("Call (555) 010-0000\n", encoding="utf-8")
    (d / "08-fact-audit.md").write_text(
        "## Claims\n| page text | source | status |\n|---|---|---|\n| Call (555) 010-0000 | F1 | ok |\n\n"
        "## Result\nEvery row is sourced and the removed lines are gone from the page: yes\n", encoding="utf-8")


class CheckGatesTest(unittest.TestCase):
    def setUp(self) -> None:
        self.dir = Path(tempfile.mkdtemp())

    def tearDown(self) -> None:
        shutil.rmtree(self.dir)

    def edit(self, name: str, old: str, new: str) -> None:
        f = self.dir / name
        text = f.read_text(encoding="utf-8")
        self.assertIn(old, text)
        f.write_text(text.replace(old, new), encoding="utf-8")

    def problems(self, gates_: str = "1-9") -> list[str]:
        return gates.check(self.dir, 9, str(self.dir / "index.html"))

    def test_honest_folder_passes(self) -> None:
        make_good(self.dir)
        self.assertEqual(self.problems(), [])

    def test_missing_files_fail(self) -> None:
        problems = gates.check(self.dir, 1, str(self.dir / "index.html"))
        self.assertEqual(problems, ["gate 1: 00-brief.md missing or empty", "gate 1: 01-facts.md missing or empty"])

    def test_unfilled_templates_fail(self) -> None:
        shutil.copy(SKILL / "templates" / "01-facts.md", self.dir / "01-facts.md")
        (self.dir / "00-brief.md").write_text("b", encoding="utf-8")
        self.assertTrue(any("fill marker" in p for p in gates.check(self.dir, 1, "")))

    def test_templates_carry_their_required_markers(self) -> None:
        sources = {"01-facts.md": "templates/01-facts.md", "02-design-brief.md": "design-brief-template.md",
                   "03-references.md": "templates/03-references.md", "04-concepts.md": "templates/04-concepts.md",
                   "05-tokens.css": "token-lock-template.css", "07-review.md": "templates/07-review.md",
                   "08-audit.md": "templates/08-audit.md", "08-fact-audit.md": "templates/08-fact-audit.md",
                   "09-slop-test.md": "templates/09-slop-test.md"}
        for gate, files in gates.REQUIRED.items():
            for name, markers in files:
                if name in sources:
                    text = (SKILL / sources[name]).read_text(encoding="utf-8")
                    for m in markers:
                        self.assertIn(m, text, f"{sources[name]} lacks {m}")

    def test_templates_hold_no_yes_no_hints(self) -> None:
        for f in list((SKILL / "templates").glob("*.md")) + [SKILL / "design-brief-template.md"]:
            self.assertNotIn("(yes / no)", f.read_text(encoding="utf-8"), f.name)

    def test_filler_folder_fails_widely(self) -> None:
        make_good(self.dir)
        for f in self.dir.glob("0*.md"):
            f.write_text(re.sub(r"(?m)^(?!#|\|)(.+)$", "x", f.read_text(encoding="utf-8")), encoding="utf-8")
        self.assertGreater(len(self.problems()), 10)

    def test_short_inventory_fails(self) -> None:
        make_good(self.dir)
        self.edit("02-design-brief.md", "8. h\n", "")
        self.assertTrue(any("7 items" in p for p in self.problems()))

    def test_swap_test_yes_fails(self) -> None:
        make_good(self.dir)
        self.edit("02-design-brief.md", "Still works for the category: no", "Still works for the category: partly")
        self.assertTrue(any("swap test" in p for p in self.problems()))

    def test_only_here_needs_a_fact_id(self) -> None:
        make_good(self.dir)
        self.edit("02-design-brief.md", "Only here: item 3 (F1)", "Only here: nice colours")
        self.assertTrue(any("Only here" in p for p in self.problems()))

    def test_brief_without_enough_parts_fails(self) -> None:
        make_good(self.dir)
        self.edit("02-design-brief.md", "| footer | a | b |\n", "")
        self.assertTrue(any("parts table" in p for p in self.problems()))

    def test_concepts_from_one_inventory_item_fail(self) -> None:
        make_good(self.dir)
        self.edit("04-concepts.md", "- Inventory item: 2", "- Inventory item: 1")
        self.assertTrue(any("different inventory item" in p for p in self.problems()))

    def test_axis_count_under_4_fails(self) -> None:
        make_good(self.dir)
        self.edit("04-concepts.md", "| 5 | 5 | 6 |", "| 0 | 5 | 6 |")
        self.assertTrue(any("at least 4" in p for p in self.problems()))

    def test_default_body_face_and_low_contrast_fail(self) -> None:
        make_good(self.dir)
        self.edit("05-tokens.css", '"Literata", serif', "Inter, sans-serif")
        self.edit("05-tokens.css", "--color-muted: #555555", "--color-muted: #bbbbbb")
        problems = self.problems()
        self.assertTrue(any("default the brief does not pin" in p for p in problems))
        self.assertTrue(any("--color-muted on --color-ground" in p for p in problems))

    def test_tokens_without_root_block_fail(self) -> None:
        make_good(self.dir)
        (self.dir / "05-tokens.css").write_text("/* :root --font-display --font-body --color-accent --tap-min */",
                                                encoding="utf-8")
        self.assertTrue(any("no :root" in p for p in gates.check(self.dir, 5, "", [5])))

    def test_primary_marker_counts_elements_not_strings(self) -> None:
        make_good(self.dir)
        page = self.dir / "index.html"
        page.write_text(GOOD_PAGE.replace("<body>", '<body><!-- data-cta="primary" --><style>[data-cta="primary"]{}</style>'),
                        encoding="utf-8")
        self.assertEqual([p for p in gates.check(self.dir, 6, str(page), [6]) if "data-cta" in p], [])
        page.write_text(GOOD_PAGE.replace(' data-cta="primary"', ""), encoding="utf-8")
        self.assertTrue(any("on 0 elements" in p for p in gates.check(self.dir, 6, str(page), [6])))

    def test_url_page_and_raw_colors_and_unpasted_tokens_fail_gate_6(self) -> None:
        make_good(self.dir)
        self.assertTrue(gates.check(self.dir, 6, "http://localhost:4321/", [6]))
        page = self.dir / "index.html"
        page.write_text('<html><body><a data-cta="primary" class="bg-red-600" href="#">x</a></body></html>', encoding="utf-8")
        problems = gates.check(self.dir, 6, str(page), [6])
        self.assertTrue(any("raw colors" in p for p in problems))
        self.assertTrue(any(":root block of 05-tokens.css" in p for p in problems))

    def test_parts_check_rows_must_match_and_be_clean(self) -> None:
        make_good(self.dir)
        self.edit("07-review.md", "| footer | p-1440-fold.png | designed | none | - |\n", "")
        self.edit("07-review.md", "| hero | p-390-fold.png | designed | none | - |",
                  "| hero | p-390-fold.png | designed | clipped at 390 right edge | - |")
        problems = self.problems()
        self.assertTrue(any("parts check has 3 rows" in p for p in problems))
        self.assertTrue(any("clipped" in p for p in problems))

    def test_unlisted_png_fails(self) -> None:
        make_good(self.dir)
        (self.dir / "shots" / "p-390-s1.png").write_bytes(b"")
        self.assertTrue(any("p-390-s1.png" in p for p in self.problems()))

    def test_audit_needs_grader_and_scores(self) -> None:
        make_good(self.dir)
        self.edit("08-audit.md", "| P1 | 3 | x | 4 |", "| P1 | 1 | x | 2 |")
        self.edit("08-audit.md", "Self-audit by the builder; not an independent review.", "me")
        problems = self.problems()
        self.assertTrue(any("under 3" in p for p in problems))
        self.assertTrue(any("grader line" in p for p in problems))

    def test_fact_audit_result_no_fails_despite_hint(self) -> None:
        make_good(self.dir)
        self.edit("08-fact-audit.md", "from the page: yes", "from the page: no (yes / no)")
        self.assertTrue(any("result is not 'yes'" in p for p in self.problems()))

    def test_fact_audit_ok_row_needs_a_real_f_id(self) -> None:
        make_good(self.dir)
        self.edit("08-fact-audit.md", "| F1 | ok |", "| F99 | ok |")
        self.assertTrue(any("not in 01-facts.md" in p for p in self.problems()))
        self.edit("08-fact-audit.md", "| F99 | ok |", "| none found | ok |")
        self.assertTrue(any("cites no F-id" in p for p in self.problems()))

    def test_fact_audit_must_cover_claim_lines(self) -> None:
        make_good(self.dir)
        (self.dir / "shots" / "p-text.txt").write_text("Call (555) 010-0000\nLicensed and insured\n", encoding="utf-8")
        import os
        os.utime(self.dir / "08-fact-audit.md", (1, 1))
        problems = self.problems()
        self.assertTrue(any("Licensed and insured" in p for p in problems))
        self.assertTrue(any("older than" in p for p in problems))

    def test_sample_structure_status_is_allowed(self) -> None:
        make_good(self.dir)
        self.edit("08-fact-audit.md", "| Call (555) 010-0000 | F1 | ok |",
                  "| Call (555) 010-0000 | F1 | ok |\n| 10:00 | axis of the labelled sample chart | sample-structure |")
        self.assertEqual(self.problems(), [])

    def test_failed_slop_test_fails_the_gate(self) -> None:
        make_good(self.dir)
        self.edit("09-slop-test.md", "| 1 | yes |", "| 1 | no |")
        self.edit("09-slop-test.md", "Score: 15 / 15", "Score: 3 / 15")
        self.edit("09-slop-test.md", "Result: PASS", "Result: FAIL")
        self.edit("09-slop-test.md", "PASS  contrast  ok", "FAIL  contrast  body 2.1:1")
        problems = self.problems()
        for needle in ("Score says 3", "slop test fails", "Result is not PASS", "contrast FAILED"):
            self.assertTrue(any(needle in p for p in problems), needle)

    def test_self_graded_page_cannot_be_ready(self) -> None:
        make_good(self.dir)
        self.edit("09-slop-test.md", "Status: READY FOR REVIEW: self-graded", "Status: READY: ship it")
        self.assertTrue(any("cannot be READY" in p for p in self.problems()))

    def test_placeholder_page_must_be_draft(self) -> None:
        make_good(self.dir)
        self.edit("index.html", "</body>", "<p>[Placeholder: hours]</p></body>")
        self.assertTrue(any("not DRAFT" in p for p in self.problems()))


def _repo_root() -> Path | None:
    for d in [HERE, *HERE.parents]:
        if (d / "site-template" / "package.json").is_file():
            return d
    return None


PROBE = """<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="description" content="Meta words for the audit">
<style>body{margin:0;font:18px/1.5 serif;color:#111;background:#fff}
.faint{color:rgb(0 0 0 / 0.25)} .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
.desk{display:none} @media (min-width:1000px){.desk{display:block}}
a.big{display:inline-block;padding:16px 24px;background:#222;color:#fff}
section{min-height:300px}</style></head><body>
<a class="sr" href="#main">Skip to content</a>
<main id="main"><h1>Probe page heading</h1><p class="faint">Faint secondary words</p>
<p class="desk">Desktop only line</p><img src="data:," alt="Alt words here">
<a class="big" data-cta="primary" href="tel:+15550100000">Call</a><section>a</section><section>b</section></main>
</body></html>"""


@unittest.skipUnless(_repo_root(), "site-template with Playwright not found")
class ShootTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.dir = Path(tempfile.mkdtemp())
        (cls.dir / "index.html").write_text(PROBE, encoding="utf-8")
        cls.proc = subprocess.run(["node", str(HERE / "shoot.mjs"), str(cls.dir / "index.html"), str(cls.dir / "shots"),
                                  "p", "--fold-only", "--viewport", "358x667"], capture_output=True, text=True, timeout=180)
        cls.m = json.loads((cls.dir / "shots" / "p-metrics.json").read_text(encoding="utf-8"))
        cls.text = (cls.dir / "shots" / "p-text.txt").read_text(encoding="utf-8")

    @classmethod
    def tearDownClass(cls) -> None:
        shutil.rmtree(cls.dir)

    def test_alpha_text_is_measured_as_faint(self) -> None:
        self.assertLess(self.m["widths"]["390"]["minTextContrast"], 3)

    def test_small_text_contrast_is_recorded(self) -> None:
        self.assertIn("minSmallTextContrast", self.m["widths"]["1440"])

    def test_visually_hidden_skip_link_is_not_a_tap_target(self) -> None:
        self.assertGreater(self.m["widths"]["390"]["tapOutsideText"]["minHeight"], 1)

    def test_text_file_holds_both_widths_and_attribute_text(self) -> None:
        for needle in ("Desktop only line", "Alt words here", "Meta words for the audit", "Faint secondary words"):
            self.assertIn(needle, self.text)

    def test_viewport_option_adds_the_trades_screen(self) -> None:
        self.assertIn("358", self.m["widths"])
        self.assertTrue(self.m["widths"]["358"]["cta"]["inFold"])

    def test_unknown_flag_exits_2(self) -> None:
        r = subprocess.run(["node", str(HERE / "shoot.mjs"), "a", "b", "c", "--full-slice"], capture_output=True, text=True)
        self.assertEqual(r.returncode, 2)

    def test_no_marker_means_no_cta(self) -> None:
        d = Path(tempfile.mkdtemp())
        try:
            (d / "index.html").write_text(PROBE.replace(' data-cta="primary"', ""), encoding="utf-8")
            subprocess.run(["node", str(HERE / "shoot.mjs"), str(d / "index.html"), str(d / "s"), "n", "--fold-only"],
                           capture_output=True, text=True, timeout=180)
            m = json.loads((d / "s" / "n-metrics.json").read_text(encoding="utf-8"))
            self.assertIsNone(m["widths"]["390"]["cta"])
        finally:
            shutil.rmtree(d)

if __name__ == "__main__":
    unittest.main()
