#!/usr/bin/env python3
"""Check the gate files of site1-design-craft (standard library only).

Usage: python3 tools/check-gates.py <gate dir> [--upto N | --gates 1,5,6] [--page <built index.html>]

<gate dir> holds 00-brief.md, 01-facts.md ... 09-slop-test.md and shots/. --upto N checks gates
1..N (default 9); run it with --upto <previous gate> before starting a gate (from gate 2 on).
--gates checks only the listed gates (a one-section restyle that reuses a locked token file).
--page defaults to <gate dir>/index.html; for a framework page pass the built file
(dist/<route>/index.html). A URL cannot be checked and fails gate 6.

"ok" means every slot is filled and every recorded result passes. It does not judge the design.
Prints one line per problem; exit 0 = ok, 1 = problems, 2 = bad input.
"""
from __future__ import annotations

import argparse
import importlib.util
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

SENTINEL = "@@" + "FILL" + "@@"

REQUIRED: dict[int, list[tuple[str, list[str]]]] = {
    1: [("00-brief.md", []),
        ("01-facts.md", ["## Overlay", "## Jurisdictions", "## Questions", "## Fact list",
                         "## Brief and overlay conflicts", "## Counsel items", "## Placeholders"])],
    2: [("02-design-brief.md", ["## Primary action", "## First-look order", "## Subject inventory",
                                "## Argument", "## Idea sentence", "## Swap test", "## Only here", "## Parts"])],
    3: [("03-references.md", ["## References"])],
    4: [("04-concepts.md", ["## Axis table", "## Chosen"])],
    5: [("05-tokens.css", ["--font-display", "--font-body", "--color-accent", "--tap-min"])],
    7: [("07-review.md", ["## Metrics", "## Screenshots viewed", "## Generic items and changes",
                          "## Parts check", "## Trades first screen", "## Blur test"])],
    8: [("08-audit.md", ["## Scores", "## Idea diversity", "## Removal pass", "## Grader"]),
        ("08-fact-audit.md", ["## Claims", "## Result"])],
    9: [("09-slop-test.md", ["## Automatic checks", "## Release gates", "## Slop test",
                             "Score:", "Result:", "Graded by:", "Status:"])],
}
FACT_STATUSES = {"ok", "overlay-required", "sample-structure", "placeholder", "not-a-claim", "removed"}
SOURCE_ID = re.compile(r"\bF\d+\b|\b[a-z][a-z-]+\.\d+\b")
GRADER_LINES = ("Self-audit by the builder; not an independent review.",
                "Audit by a helper that did not build the page.")
DEFAULT_BODY = {"inter", "roboto", "open sans", "arial", "helvetica", "helvetica neue", "system-ui",
                "-apple-system", "segoe ui", "sans-serif", "serif"}
CONTRAST_PAIRS = [("--color-ink", "--color-ground", 4.5), ("--color-muted", "--color-ground", 4.5),
                  ("--color-ink", "--color-surface", 4.5), ("--color-on-accent", "--color-accent", 4.5),
                  ("--color-focus", "--color-ground", 3.0)]
STATUS_VALUES = ("DRAFT", "READY FOR REVIEW", "READY")


def _load_craft():
    spec = importlib.util.spec_from_file_location("craft", Path(__file__).with_name("craft.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


craft = _load_craft()


class _Cta(HTMLParser):
    """Counts elements marked data-cta="primary" (comments, CSS and scripts do not count)."""

    def __init__(self) -> None:
        super().__init__()
        self.count = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if dict(attrs).get("data-cta") == "primary":
            self.count += 1


def _section(text: str, heading: str) -> str:
    m = re.search(re.escape(heading) + r"\n(.*?)(?=\n## |\Z)", text, re.S)
    return m.group(1) if m else ""


def _table_rows(block: str) -> list[list[str]]:
    rows = []
    for ln in block.splitlines():
        ln = ln.strip()
        if not ln.startswith("|") or re.fullmatch(r"\|[\s:|-]+\|", ln):
            continue
        rows.append([c.strip() for c in ln.strip("|").split("|")])
    return rows[1:]  # drop the header row


def _no_hints(s: str) -> str:
    """Drop parenthesised hints so a leftover '(yes / no)' cannot satisfy a check."""
    return re.sub(r"\([^)]*\)", "", s)


def _read(gate_dir: Path | None, name: str) -> str:
    f = gate_dir / name if gate_dir else None
    return f.read_text(encoding="utf-8") if f and f.is_file() else ""


def _line_value(text: str, label: str, keep_hints: bool = False) -> str:
    m = re.search(rf"^\W*{re.escape(label)}\s*(.*)$", text, re.M | re.I)
    if not m:
        return ""
    return m.group(1).strip() if keep_hints else _no_hints(m.group(1)).strip()


def _token_hex(css: str, name: str) -> str | None:
    m = re.search(re.escape(name) + r"\s*:\s*(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})\b", css)
    return m.group(1) if m else None


def _norm(s: str) -> str:
    return re.sub(r"\s+", " ", s.replace(" ", " ").replace("–", "-").replace("|", "/")).strip().lower()


def _check_facts(name: str, text: str) -> list[str]:
    if not re.search(r"^\|\s*F\d+\s*\|", _section(text, "## Fact list"), re.M):
        return [f"{name}: fact list has no F-rows"]
    return []


def _check_brief(name: str, text: str) -> list[str]:
    problems = []
    items = re.findall(r"^\d+\.\s+\S", _section(text, "## Subject inventory"), re.M)
    if not 8 <= len(items) <= 12:
        problems.append(f"{name}: subject inventory has {len(items)} items (need 8 to 12)")
    argument = _table_rows(_section(text, "## Argument"))
    if len(argument) < 2:
        problems.append(f"{name}: argument table needs a row per section (at least 2)")
    parts = _table_rows(_section(text, "## Parts"))
    if len(parts) < max(4, len(argument) + 2):
        problems.append(f"{name}: parts table has {len(parts)} rows; need header, footer and one per argument section")
    swap = _section(text, "## Swap test")
    if not re.match(r"no\b", _line_value(swap, "Still works for the category:").lower()):
        problems.append(f"{name}: swap test must end 'Still works for the category: no' (else find another idea)")
    if not _line_value(swap, "Another client of this type with this idea:"):
        problems.append(f"{name}: swap test lacks 'Another client of this type with this idea:'")
    only = _line_value(_section(text, "## Only here"), "Only here:", keep_hints=True)
    if not re.search(r"\bF\d+\b", only):
        problems.append(f"{name}: 'Only here:' needs one thing a competitor page would not have, with its F-id")
    return problems


def _check_concepts(name: str, text: str) -> list[str]:
    problems = []
    if len(re.findall(r"^### Direction \d", text, re.M)) < 3:
        problems.append(f"{name}: needs three '### Direction n' headings")
    if text.count("Idea sentence:") < 3 or text.count("```") < 6:
        problems.append(f"{name}: each direction needs its own idea sentence and 390 px wireframe")
    sources = [_no_hints(v).strip().lower() for v in re.findall(r"^- Inventory item:\s*(.+)$", text, re.M)]
    ids = [re.search(r"\d+", v).group(0) if re.search(r"\d+", v) else v for v in sources]
    if len(ids) < 3 or len(set(ids[:3])) < 3:
        problems.append(f"{name}: the three directions must each start from a different inventory item")
    row = re.search(r"\|\s*differences \(count\)\s*\|([^\n]*)", text)
    counts = [int(n) for n in re.findall(r"\d+", row.group(1))] if row else []
    if len(counts) < 3 or min(counts) < 4:
        problems.append(f"{name}: axis table needs a count of at least 4 for each pair (got {counts or 'none'})")
    if not _line_value(_section(text, "## Chosen"), "- Default check:"):
        problems.append(f"{name}: '## Chosen' lacks '- Default check:'")
    return problems


def _check_tokens(name: str, text: str, gate_dir: Path | None) -> list[str]:
    problems = []
    if not re.search(r"(?::root|@theme)\b[^{;]*\{", re.sub(r"/\*.*?\*/", "", text, flags=re.S)):
        problems.append(f"{name}: no :root {{ }} block")
    m = re.search(r"--font-body\s*:\s*([^;]+);", text)
    first = m.group(1).split(",")[0].strip().strip("\"'").lower() if m else ""
    if first in DEFAULT_BODY and first not in _read(gate_dir, "00-brief.md").lower():
        problems.append(f"{name}: body face '{first}' is a default the brief does not pin")
    for fg, bg, need in CONTRAST_PAIRS:
        a, b = _token_hex(text, fg), _token_hex(text, bg)
        if not (a and b):
            problems.append(f"{name}: {fg} or {bg} is not a hex value; the contrast cannot be checked")
        elif craft.contrast(a, b) < need:
            problems.append(f"{name}: {fg} on {bg} is {craft.contrast(a, b)}:1 (need {need})")
    return problems


def _check_review(name: str, text: str, gate_dir: Path | None) -> list[str]:
    problems = []
    rows = _table_rows(_section(text, "## Parts check"))
    brief_parts = _table_rows(_section(_read(gate_dir, "02-design-brief.md"), "## Parts"))
    if not rows or len(rows) < len(brief_parts):
        problems.append(f"{name}: parts check has {len(rows)} rows; the brief's Parts table has {len(brief_parts)}")
    for r in rows:
        if len(r) < 4:
            problems.append(f"{name}: malformed parts-check row {r}")
        elif "default" in r[2].lower() or not r[2].lower().startswith("designed"):
            problems.append(f"{name}: part '{r[0]}' is not marked designed")
        elif not r[3].lower().startswith("none"):
            problems.append(f"{name}: part '{r[0]}' still has clipped or cut-off text: {r[3]}")
    if not _no_hints(_section(text, "## Trades first screen")).strip():
        problems.append(f"{name}: trades first screen is empty (write 'not a call-first trades page' if so)")
    for tile in ("-390-fold.png", "-1440-fold.png"):
        if tile not in text and "NOT VIEWED" not in text:
            problems.append(f"{name}: does not name the {tile} tile it viewed")
    shots = gate_dir / "shots" if gate_dir else None
    if shots and shots.is_dir():
        for png in sorted(shots.glob("*.png")):
            if png.name not in text:
                problems.append(f"{name}: {png.name} is in shots/ but not listed as viewed")
    elif gate_dir and "NOT VIEWED" not in text:
        problems.append(f"{name}: no shots/ folder and no 'NOT VIEWED' line")
    return problems


def _check_audit(name: str, text: str) -> list[str]:
    problems = []
    if not any(g in _section(text, "## Grader") for g in GRADER_LINES):
        problems.append(f"{name}: grader line is not one of the two honesty lines")
    if not _no_hints(_section(text, "## Idea diversity")).strip():
        problems.append(f"{name}: idea diversity is empty")
    for r in _table_rows(_section(text, "## Scores")):
        score = next((c for c in (r[3:4] + r[1:2]) if re.fullmatch(r"[1-5]", c)), None)
        if score is None:
            problems.append(f"{name}: '{r[0]}' has no 1 to 5 score")
        elif int(score) < 3 and "carried" not in " ".join(r).lower():
            problems.append(f"{name}: '{r[0]}' is {score}, under 3 (fix it, or write 'carried' for the final report)")
    return problems


def _check_fact_audit(name: str, text: str, gate_dir: Path | None) -> list[str]:
    problems = []
    rows = _table_rows(_section(text, "## Claims"))
    fids = set(re.findall(r"\bF\d+\b", _section(_read(gate_dir, "01-facts.md"), "## Fact list")))
    if not rows:
        problems.append(f"{name}: no claim rows")
    for row in rows:
        if len(row) < 3:
            problems.append(f"{name}: malformed row {row}")
            continue
        status = row[2].lower()
        if status not in FACT_STATUSES:
            problems.append(f"{name}: status '{row[2]}' not one of {sorted(FACT_STATUSES)}")
        elif status != "removed" and not row[1]:
            problems.append(f"{name}: '{row[0][:40]}' has no source")
        elif status in ("ok", "overlay-required") and not SOURCE_ID.search(row[1]):
            problems.append(f"{name}: '{row[0][:40]}' is {status} but cites no F-id or overlay row")
        elif status == "ok" and fids and not set(re.findall(r"\bF\d+\b", row[1])) & fids:
            problems.append(f"{name}: '{row[0][:40]}' cites an F-id that is not in 01-facts.md")
    result = re.search(r"from the page:\s*(\w+)", _no_hints(_section(text, "## Result")), re.I)
    if not result or result.group(1).lower() != "yes":
        problems.append(f"{name}: result is not 'yes'")
    if gate_dir:
        audited = _norm(" / ".join(r[0] for r in rows))
        for t in sorted((gate_dir / "shots").glob("*-text.txt")):
            if (gate_dir / name).is_file() and t.stat().st_mtime > (gate_dir / name).stat().st_mtime:
                problems.append(f"{name}: older than {t.name}; redo the audit on the last shot")
            missing = [ln for ln in craft.claim_lines(t.read_text(encoding="utf-8")) if _norm(ln) not in audited]
            problems += [f"{name}: claim line has no row: '{ln[:50]}'" for ln in missing[:15]]
    return problems


def _check_slop(name: str, text: str, gate_dir: Path | None) -> list[str]:
    problems = []
    m = re.search(r"Score:\s*(\d+)\s*/\s*15", text)
    answers = {r[0]: r[1].lower() for r in _table_rows(_section(text, "## Slop test")) if len(r) > 1}
    yes = [str(i) for i in range(1, 16) if answers.get(str(i), "").startswith("yes")]
    if not m:
        problems.append(f"{name}: no 'Score: n / 15' line")
    elif int(m.group(1)) != len(yes):
        problems.append(f"{name}: Score says {m.group(1)} but the table has {len(yes)} yes")
    if len(yes) < 12 or not all(str(i) in yes for i in range(1, 5)):
        problems.append(f"{name}: slop test fails (needs 12 of 15 yes, items 1 to 4 yes)")
    if not re.match(r"PASS\b", _line_value(text, "Result:")):
        problems.append(f"{name}: Result is not PASS")
    for r in _table_rows(_section(text, "## Release gates")):
        if len(r) > 1 and re.match(r"(fail|no)\b", r[1].lower()):
            problems.append(f"{name}: release gate failed: {r[0][:50]}")
    auto = _section(text, "## Automatic checks")
    if not re.search(r"^PASS\s+no_lorem", auto, re.M):
        problems.append(f"{name}: the auto_checks output is not pasted")
    problems += [f"{name}: auto_checks {f} FAILED" for f in re.findall(r"^FAIL\s+(\w+)", auto, re.M)]
    graded, status = _line_value(text, "Graded by:", keep_hints=True), _line_value(text, "Status:")
    if not graded:
        problems.append(f"{name}: 'Graded by:' is empty")
    if not status.upper().startswith(STATUS_VALUES):
        problems.append(f"{name}: Status must start DRAFT, READY FOR REVIEW or READY")
    if re.search(r"\bself\b", graded, re.I) and re.match(r"READY\s*:", status.upper()):
        problems.append(f"{name}: a self-graded page cannot be READY (use READY FOR REVIEW)")
    if re.search(r"\[Placeholder:|\[Photo:", _read(gate_dir, "index.html")) and not status.upper().startswith("DRAFT"):
        problems.append(f"{name}: the page shows a placeholder but Status is not DRAFT")
    return problems


def extra_checks(name: str, text: str, gate_dir: Path | None = None) -> list[str]:
    checks = {
        "01-facts.md": lambda: _check_facts(name, text),
        "02-design-brief.md": lambda: _check_brief(name, text),
        "04-concepts.md": lambda: _check_concepts(name, text),
        "05-tokens.css": lambda: _check_tokens(name, text, gate_dir),
        "07-review.md": lambda: _check_review(name, text, gate_dir),
        "08-audit.md": lambda: _check_audit(name, text),
        "08-fact-audit.md": lambda: _check_fact_audit(name, text, gate_dir),
        "09-slop-test.md": lambda: _check_slop(name, text, gate_dir),
    }
    return checks[name]() if name in checks else []


def check_page(gate_dir: Path, page: str) -> list[str]:
    if re.match(r"https?://", page):
        return ["gate 6: a URL cannot be checked; build first and pass --page dist/<route>/index.html"]
    p = Path(page)
    if not p.is_file():
        return [f"gate 6: page not found: {p}"]
    html = p.read_text(encoding="utf-8")
    problems = []
    cta = _Cta()
    cta.feed(html)
    if cta.count != 1:
        problems.append(f"gate 6: data-cta=\"primary\" is on {cta.count} elements (need exactly 1)")
    tokens = _read(gate_dir, "05-tokens.css")
    root = re.search(r":root\s*\{[^}]*\}", re.sub(r"/\*.*?\*/", "", tokens, flags=re.S))
    squash = lambda s: re.sub(r"\s+", "", re.sub(r"/\*.*?\*/", "", s, flags=re.S))
    if root and squash(root.group(0)) not in squash(html):
        problems.append("gate 6: the page does not hold the :root block of 05-tokens.css unchanged")
    found, _ = craft.raw_colors(html)
    if found:
        problems.append(f"gate 6: raw colors outside the token block: {found[:6]}")
    return problems


def check(gate_dir: Path, upto: int, page: str, only: list[int] | None = None) -> list[str]:
    problems: list[str] = []
    for gate in (only if only else range(1, upto + 1)):
        if gate == 6:
            problems += check_page(gate_dir, page)
            continue
        for name, markers in REQUIRED.get(gate, []):
            f = gate_dir / name
            if not f.is_file() or not f.read_text(encoding="utf-8").strip():
                problems.append(f"gate {gate}: {name} missing or empty")
                continue
            text = f.read_text(encoding="utf-8")
            problems += [f"gate {gate}: {name} lacks '{m}'" for m in markers if m not in text]
            left = text.count(SENTINEL)
            if left:
                problems.append(f"gate {gate}: {name} still has {left} fill marker(s)")
            problems += [f"gate {gate}: {p}" for p in extra_checks(name, text, gate_dir)]
    return problems


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("gate_dir", type=Path)
    ap.add_argument("--upto", type=int, default=9, choices=range(1, 10))
    ap.add_argument("--gates", help="comma-separated gate numbers, instead of --upto")
    ap.add_argument("--page")
    args = ap.parse_args(argv)
    if not args.gate_dir.is_dir():
        print(f"check-gates: not a folder: {args.gate_dir}", file=sys.stderr)
        return 2
    only = None
    if args.gates:
        try:
            only = sorted({int(g) for g in args.gates.split(",")})
        except ValueError:
            only = []
        if not only or any(g < 1 or g > 9 for g in only):
            print("check-gates: --gates takes numbers 1 to 9, comma-separated", file=sys.stderr)
            return 2
    page = args.page or str(args.gate_dir / "index.html")
    problems = check(args.gate_dir, args.upto, page, only)
    for p in problems:
        print(p)
    label = ",".join(map(str, only)) if only else f"1-{args.upto}"
    print(f"{'FAIL' if problems else 'ok'}: gates {label}, {len(problems)} problem(s)")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
