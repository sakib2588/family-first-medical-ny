#!/usr/bin/env python3
"""Small helpers for the site1-design-craft gates (standard library only).

Usage:
  python3 tools/craft.py contrast '#1b1b1b' '#fff'        ratio of two hex colors (3 or 6 digits)
  python3 tools/craft.py raw-colors index.html [more files] colors written outside :root blocks
  python3 tools/craft.py claims shots/<name>-text.txt      lines of page text that hold a claim

Exit codes: 0 = nothing found / ok, 1 = findings (raw colors) , 2 = bad input.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT_BLOCK = re.compile(r"(?::root|@theme)\b[^{;]*\{[^}]*\}")
COMMENT = re.compile(r"/\*.*?\*/|<!--.*?-->", re.S)
STYLE_BLOCK = re.compile(r"<style[^>]*>(.*?)</style>", re.S | re.I)
STYLE_ATTR = re.compile(r"""\sstyle\s*=\s*(["'])(.*?)\1""", re.S | re.I)
DECL_VALUE = re.compile(r":\s*([^;{}]+)")
URL = re.compile(r"url\([^)]*\)", re.I)
HEX = re.compile(r"(?<![\w&])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})\b(?!-)")
FUNC = re.compile(r"\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\([^)]*\)", re.I)
NAMED_COLORS = (
    "white|black|red|blue|green|gray|grey|orange|purple|yellow|pink|navy|teal|silver|maroon|olive|lime|aqua|"
    "fuchsia|gold|tomato|beige|brown|coral|crimson|cyan|indigo|ivory|khaki|lavender|magenta|salmon|tan|"
    "turquoise|violet|wheat|chocolate|firebrick|orchid|plum|sienna|skyblue|steelblue|slategray|darkgray|lightgray|"
    "whitesmoke|gainsboro|linen|snow|honeydew|mintcream|azure|aliceblue|ghostwhite|seashell|oldlace|cornsilk"
)
NAMED = re.compile(
    r"(?:^|[;{\s])(?:color|background(?:-color)?|border(?:-[a-z]+)*|fill|stroke|outline(?:-color)?|box-shadow|text-shadow|"
    r"text-decoration-color|caret-color|accent-color)\s*:\s*[^;\"'}]*?\b(" + NAMED_COLORS + r")\b",
    re.I,
)
TAILWIND = re.compile(
    r"\b(?:[a-z-]+:)*(?:bg|text|border(?:-[trblxy])?|fill|stroke|ring|outline|decoration|divide|from|via|to|shadow|"
    r"accent|caret|placeholder)-(?:white|black|(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|"
    r"emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3})(?:/\d+)?\b"
)
SVG_ATTR = re.compile(r"""\b(?:fill|stroke|stop-color|color|bgcolor)\s*=\s*["']([^"']+)["']""", re.I)
SVG_OK = re.compile(r"^(?:none|currentcolor|transparent|inherit|url\(.*\)|var\(.*\))$", re.I)
CLAIM = re.compile(
    r"\d|@|[\"\u201c\u201d\u00ab\u00bb]|\b(?:since|years?|est\.|award\w*|rat(?:ed|ings?)|reviews?|reviewed|testimonials?|"
    r"stars?|five[- ]star|guarant\w*|warrant\w*|licen[cs]\w*|insur\w*|bonded|certif\w*|accredit\w*|"
    r"owned|operated|owners?|founders?|founded|family|veteran|master|expert\w*|experienced|professionals?|"
    r"technicians?|crew|staff|team|same[- ]day|emergency|response|arriv\w*|within|minutes?|around the clock|24/7|"
    r"free|fees?|prices?|cost|no hidden|upfront|satisf\w*|background[- ]checked|fast(?:est)?|"
    r"trusted|best|top|leading|favou?rite|#1|"
    r"open|opens|closed|hours?|am|pm|monday|tuesday|wednesday|thursday|friday|saturday|sunday|weekdays?|weekends?|daily|"
    r"street|avenue|ave\.|road|blvd|suite|floor|serv(?:e|es|ing|ed)|areas?|neighbou?rhoods?|boroughs?|"
    r"clients?|customers?|homeowners?|families)\b",
    re.I,
)
# A capitalised word in mid-sentence: a person, place or brand name.
NAME = re.compile(r"(?<=[a-z,;:]\s)[A-Z][a-z]+")


def _expand(h: str) -> str:
    h = h.strip().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    if not re.fullmatch(r"[0-9a-fA-F]{6}", h):
        raise ValueError(f"not a 3- or 6-digit hex color: {h!r}")
    return h


def _luminance(h: str) -> float:
    h = _expand(h)
    chans = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    lin = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in chans]
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]


def contrast(a: str, b: str) -> float:
    lo, hi = sorted([_luminance(a), _luminance(b)])
    return round((hi + 0.05) / (lo + 0.05), 2)


def _top_level_roots(css: str) -> int:
    count = 0
    for m in re.finditer(r":root\b[^{;]*\{", css):
        before = css[:m.start()]
        if before.count("{") - before.count("}") == 0:
            count += 1
    return count


def raw_colors(text: str) -> tuple[list[str], int]:
    """Colors written outside the token blocks (:root, @theme). In HTML only <style> blocks,
    style="" attributes, color attributes and class names are read, so copy text, ids and
    anchors are not flagged."""
    s = COMMENT.sub("", text)
    if re.search(r"<[a-zA-Z!]", s):
        css = "\n".join(m.group(1) for m in STYLE_BLOCK.finditer(s))
        inline = "\n".join(m.group(2) for m in STYLE_ATTR.finditer(s))
    else:
        css, inline = s, ""
    roots = _top_level_roots(css)
    css = ROOT_BLOCK.sub("", css)
    values = " ; ".join(DECL_VALUE.findall(css) + DECL_VALUE.findall(inline))
    values = URL.sub("", values)
    found = set(HEX.findall(values)) | set(FUNC.findall(values))
    found |= {m.group(1) for m in NAMED.finditer(URL.sub("", re.sub(r"var\([^)]*\)", "", css + ";" + inline)))}
    found |= {m.group(0) for m in TAILWIND.finditer(s)}
    found |= {v for v in SVG_ATTR.findall(s) if not SVG_OK.match(v.strip())}
    if roots > 1:
        found.add(f"extra :root block ({roots} at top level; tokens belong in one block plus theme blocks)")
    return sorted(found), roots


def claim_lines(text: str) -> list[str]:
    """A filter, not a proof: lines that may hold a claim. Read the whole text file as well."""
    return [ln.strip() for ln in text.splitlines() if ln.strip() and (CLAIM.search(ln) or NAME.search(ln))]


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print(__doc__, file=sys.stderr)
        return 2
    cmd, args = argv[0], argv[1:]
    try:
        if cmd == "contrast" and len(args) == 2:
            print(contrast(args[0], args[1]))
            return 0
        if cmd == "raw-colors":
            hits = 0
            for f in args:
                found, blocks = raw_colors(Path(f).read_text(encoding="utf-8"))
                print(f"{f}: {found}")
                hits += len(found)
            return 1 if hits else 0
        if cmd == "claims" and len(args) == 1:
            for ln in claim_lines(Path(args[0]).read_text(encoding="utf-8")):
                print(ln)
            return 0
    except (OSError, ValueError) as err:
        print(f"craft.py: {err}", file=sys.stderr)
        return 2
    print(__doc__, file=sys.stderr)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
