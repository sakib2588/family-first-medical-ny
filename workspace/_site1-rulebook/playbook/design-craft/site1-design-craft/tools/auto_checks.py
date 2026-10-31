#!/usr/bin/env python3
"""Automatic checks for one built page (code grader of the anti-slop evaluation).

Usage: python3 auto_checks.py <page dir> --brief <brief.md> --metrics <metrics.json>
       [--facts 01-facts.md 08-fact-audit.md] [--json]

The page is <page dir>/index.html. The metrics file comes from shoot.mjs. Any metric
that is missing, null or unmeasurable is a FAIL, never "n/a". Contrast is checked at 390 and
1440; the call to action at 390 and, when the metrics hold it, at the 358 x 667 trades screen.
--facts adds sourced values: F-rows of 01-facts.md and fact-audit rows marked overlay-required
or sample-structure. The claim checks are a hint list, not a proof; the fact audit is the check.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path

MIN_CONTRAST_BODY = 4.5
MIN_CONTRAST_ANY = 3.0  # large text allowance; unknown size, so the floor is the large-text value
MIN_TAP_PX = 44
MAX_HTML_BYTES = 150 * 1024
FOLD_WIDTH = "390"

CLAIM_PATTERNS = (
    (re.compile(r"[\"“”][^\"“”]{20,}[\"“”]\s*[—–-]\s*[A-Z]"), "quote followed by a dash and a name"),
    (re.compile(r"[★⭐]"), "star rating"),
    (re.compile(r"\brated\b", re.I), "the word 'rated'"),
    (re.compile(r"\b(?:over|more than)?\s*\d+\+?\s+years\b", re.I), "a number of years"),
    (re.compile(r"\bsince\s+(?:19|20)\d\d\b", re.I), "'since <year>'"),
    (re.compile(r"\best\.\s*(?:19|20)\d\d\b", re.I), "'est. <year>'"),
    (re.compile(r"\d+(?:\.\d+)?\s*%"), "a percentage"),
    (re.compile(r"\b\d\s*-?\s*(?:hours?|hrs?|minutes?|mins?|years?|stars?|days?|trucks?|vans?|technicians?|staff)\b", re.I),
     "a one-digit count, time or rating"),
)
WORD_HINTS = (
    r"reviews?|reviewed", r"testimonials?", r"five[- ]star", r"licen[cs]ed", r"insured", r"bonded", r"certified",
    r"guarant\w*", r"warrant(?:y|ies|ed)", r"awards?|award-winning", r"(?:family|locally|veteran)[- ]owned",
    r"owned and operated", r"best", r"trusted by", r"owners?|founders?|founded", r"same[- ]day",
)
SOURCED_STATUSES = ("overlay-required", "sample-structure")


@dataclass(frozen=True)
class Result:
    name: str
    passed: bool
    detail: str


class _TextAndTags(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.text: list[str] = []
        self.imgs_missing_alt = 0
        self.lang: str | None = None
        self._skip = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        if tag == "img" and "alt" not in a:
            self.imgs_missing_alt += 1
        if tag in ("script", "style"):
            self._skip += 1

    def handle_endtag(self, tag: str) -> None:
        if tag in ("script", "style") and self._skip:
            self._skip -= 1

    def handle_data(self, data: str) -> None:
        if not self._skip:
            self.text.append(data)


def _numbers(text: str) -> set[str]:
    found = {m.rstrip(".,") for m in re.findall(r"\d[\d,.]*", text)}
    return {n for n in found if len(n.replace(",", "").replace(".", "")) > 1}


def _width_metrics(metrics: dict) -> dict | None:
    return (metrics.get("widths") or {}).get(FOLD_WIDTH)


def check_no_lorem(text: str) -> Result:
    hit = re.search(r"lorem ipsum|dolor sit amet", text, re.I)
    return Result("no_lorem", hit is None, "found placeholder text" if hit else "none")


def sourced_facts_text(texts: list[str]) -> str:
    """Table rows that count as sourced: F-rows of 01-facts.md, and fact-audit rows marked
    overlay-required or sample-structure. Prose and other rows add nothing."""
    keep = []
    for text in texts:
        for ln in text.splitlines():
            row = ln.strip()
            if not row.startswith("|"):
                continue
            cells = [c.strip() for c in row.strip("|").split("|")]
            if re.fullmatch(r"F\d+", cells[0]) or (cells and cells[-1].lower() in SOURCED_STATUSES):
                keep.append(row)
    return "\n" + "\n".join(keep) if keep else ""


def check_claim_hints(text: str, brief: str) -> Result:
    squash = lambda v: re.sub(r"\s+", " ", v).lower()
    low_brief = squash(brief)
    hints = [label for pat, label in CLAIM_PATTERNS
             if any(squash(m.group(0)) not in low_brief for m in pat.finditer(text))]
    words = [w for w in WORD_HINTS if re.search(rf"\b(?:{w})\b", text, re.I) and not re.search(rf"\b(?:{w})\b", brief, re.I)]
    if words:
        hints.append("claim words not in the brief: " + ", ".join(words))
    extra = sorted(_numbers(text) - _numbers(brief))
    # numbers inside a copyright line are not claims
    extra = [n for n in extra if not re.search(r"©[^\n]*" + re.escape(n), text)]
    if extra:
        hints.append("numbers not in the brief: " + ", ".join(extra[:8]))
    return Result("no_invented_claims", not hints, "; ".join(hints) if hints else "none")


def check_contrast(metrics: dict) -> Result:
    problems, seen = [], []
    for width in ("390", "1440"):
        m = (metrics.get("widths") or {}).get(width) or {}
        body, low = m.get("bodyContrast"), m.get("minTextContrast")
        small, unmeasurable = m.get("minSmallTextContrast", "missing"), m.get("unmeasurableText")
        if body is None or low is None or unmeasurable is None or small == "missing":
            problems.append(f"{width}: metric missing")
            continue
        if body["ratio"] < MIN_CONTRAST_BODY:
            problems.append(f"{width}: body {body['ratio']}:1 under {MIN_CONTRAST_BODY}")
        if low < MIN_CONTRAST_ANY:
            problems.append(f"{width}: lowest text {low}:1 under {MIN_CONTRAST_ANY}")
        if small is not None and small < MIN_CONTRAST_BODY:
            problems.append(f"{width}: text under 24 px (18.66 px bold) at {small}:1, under {MIN_CONTRAST_BODY}")
        if unmeasurable:
            problems.append(f"{width}: {unmeasurable} text elements over an image or gradient (unmeasurable)")
        seen.append(f"{width}: body {body['ratio']}:1, lowest {low}:1")
    return Result("contrast", not problems, "; ".join(problems) or "; ".join(seen))


def check_tap_targets(metrics: dict) -> Result:
    m = _width_metrics(metrics)
    tap = (m or {}).get("tapOutsideText")
    if not m or tap is None:
        return Result("tap_targets", False, "metric missing")
    smallest = min(tap["minWidth"], tap["minHeight"])
    return Result("tap_targets", smallest >= MIN_TAP_PX, f"smallest {tap['minWidth']}x{tap['minHeight']} px (need {MIN_TAP_PX})")


def check_html_size(metrics: dict, html: str = "") -> Result:
    size = metrics.get("htmlBytes") or (len(html.encode("utf-8")) if html else None)
    if size is None:
        return Result("html_size", False, "metric missing")
    return Result("html_size", size < MAX_HTML_BYTES, f"{size} bytes (limit {MAX_HTML_BYTES})")


def check_lang(lang: str | None) -> Result:
    return Result("lang", bool(lang), lang or "missing")


def check_alt(missing: int) -> Result:
    return Result("img_alt", missing == 0, f"{missing} images without alt")


def check_cta(metrics: dict) -> Result:
    m = _width_metrics(metrics)
    if not m or "cta" not in m:
        return Result("cta_visible", False, "metric missing")
    cta = m["cta"]
    if cta is None:
        return Result("cta_visible", False, "no primary call to action found (mark it data-cta=\"primary\")")
    if not cta.get("inFold"):
        return Result("cta_visible", False, "below the first phone screen")
    trades = (metrics.get("widths") or {}).get("358")
    if trades is not None:
        tcta = trades.get("cta") or {}
        if not tcta.get("inFold"):
            return Result("cta_visible", False, "below the 358x667 trades first screen")
        return Result("cta_visible", True, "in the first 390x844 and 358x667 screens")
    return Result("cta_visible", True, "in the first 390x844 screen")


def check_fonts(metrics: dict) -> Result:
    m = _width_metrics(metrics)
    if not m or "fonts" not in m:
        return Result("fonts", False, "metric missing")
    if "fontsNotLoaded" not in m:
        return Result("fonts", False, "metric missing: fontsNotLoaded (re-shoot with the current shoot.mjs)")
    errors = [f["family"] for f in m["fonts"] if f.get("status") == "error"]
    fallback = list(m["fontsNotLoaded"] or [])
    problems = []
    if errors:
        problems.append("failed: " + ", ".join(errors))
    if fallback:
        problems.append("named but not loaded (browser fallback shown): " + ", ".join(fallback))
    return Result("fonts", not problems, "; ".join(problems) or "no font errors, no fallback")


def run_checks(html: str, brief: str, metrics: dict) -> list[Result]:
    parser = _TextAndTags()
    parser.feed(html)
    text = " ".join(parser.text)
    return [
        check_no_lorem(text),
        check_claim_hints(text, brief),
        check_contrast(metrics),
        check_tap_targets(metrics),
        check_html_size(metrics, html),
        check_lang(parser.lang),
        check_alt(parser.imgs_missing_alt),
        check_cta(metrics),
        check_fonts(metrics),
    ]


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("page_dir", type=Path)
    ap.add_argument("--brief", type=Path, required=True)
    ap.add_argument("--metrics", type=Path, required=True)
    ap.add_argument("--facts", type=Path, nargs="+", default=[],
                    help="01-facts.md and 08-fact-audit.md: F-rows and rows marked overlay-required or sample-structure count as sourced")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args(argv)
    try:
        html = (args.page_dir / "index.html").read_text(encoding="utf-8")
        brief = args.brief.read_text(encoding="utf-8")
        metrics = json.loads(args.metrics.read_text(encoding="utf-8"))
        brief += sourced_facts_text([f.read_text(encoding="utf-8") for f in args.facts])
    except (OSError, json.JSONDecodeError) as err:
        print(f"auto_checks: cannot read inputs: {err}", file=sys.stderr)
        return 2
    results = run_checks(html, brief, metrics)
    if args.json:
        print(json.dumps([r.__dict__ for r in results], indent=2))
    else:
        for r in results:
            print(f"{'PASS' if r.passed else 'FAIL'}  {r.name:<20} {r.detail}")
    return 0 if all(r.passed for r in results) else 1


if __name__ == "__main__":
    sys.exit(main())
