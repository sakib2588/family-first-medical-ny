# Slop test and release gates: @@FILL@@

Gate 9 of `site1-design-craft`. The 15 statements are in `slop-test.md`.

## Automatic checks
Paste the full output of `tools/auto_checks.py` here. It must have no FAIL line.
```
@@FILL@@
```

## Release gates
Write pass or fail in the result column.

| gate | result | evidence |
|---|---|---|
| contrast: auto_checks `contrast`, at 390 and 1440 | @@FILL@@ | @@FILL@@ |
| tap targets, 44 px project rule: auto_checks `tap_targets` | @@FILL@@ | @@FILL@@ |
| call to action: auto_checks `cta_visible`; `data-cta="primary"` on one element; working target | @@FILL@@ | @@FILL@@ |
| fonts: auto_checks `fonts`; at most two families | @@FILL@@ | @@FILL@@ |
| speed: auto_checks `html_size`; no video, canvas or animation library on a task page | @@FILL@@ | @@FILL@@ |
| basics: lang, img_alt, no_lorem | @@FILL@@ | @@FILL@@ |
| reduced motion and no JavaScript: name the `shots/<name>-nojs-390.png` file and the result | @@FILL@@ | @@FILL@@ |
| fact audit: `08-fact-audit.md` result is yes | @@FILL@@ | @@FILL@@ |

## Slop test
Answer each item yes or no.

| # | answer | screenshot | reason |
|---|---|---|---|
| 1 | @@FILL@@ | 08-fact-audit.md | @@FILL@@ |
| 2 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 3 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 4 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 5 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 6 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 7 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 8 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 9 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 10 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 11 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 12 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 13 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 14 | @@FILL@@ | @@FILL@@ | @@FILL@@ |
| 15 | @@FILL@@ | @@FILL@@ | @@FILL@@ |

Score: @@FILL@@ / 15
Items 1 to 4: @@FILL@@
Result: @@FILL@@

Write "builder (self)", or the name of the agent that did not build the page.
Graded by: @@FILL@@

Status takes one of three forms:
- `DRAFT: not for publishing until these are filled: …`, when any placeholder or sample value is visible.
- `READY FOR REVIEW: self-graded`
- `READY: graded by <a helper that did not build the page, or the owner>`

Only READY may be published.

Status: @@FILL@@
