# Fact audit: @@FILL@@

Gate 8 of `site1-design-craft`. Run it on the final page text, `shots/<name>-text.txt`, which `tools/shoot.mjs` writes. The file holds every width, plus alt, title, meta and JSON-LD text. Do this after the last re-shoot: `check-gates.py` fails when this file is older than the text file.

## Commands
- `python3 <skill dir>/tools/craft.py claims shots/<name>-text.txt`: every line it prints is a row below, copied exactly.
- Then read the whole text file once. Add a row for any line the filter missed that names a person, credential, review, guarantee, warranty, response time, count or business attribute.
- The `no_invented_claims` line from `tools/auto_checks.py`: @@FILL@@

## Claims
Status values:
- **ok:** the line is in the fact list. Cite its F-id.
- **overlay-required:** the line comes from an overlay or red-line row. Cite the row id, for example `local-trades.16`, or its F-id.
- **sample-structure:** an axis step, unit, day name, legend or neutral label of a component labelled as a sample illustration. Never a business fact: no result, rating, count, price or time a visitor would read as the client's.
- **placeholder:** a `[Placeholder: …]` slot, or the brief's own placeholder wording.
- **not-a-claim:** a line the filter printed that holds no claim, such as a heading or a button label. Say why in the source column.
- **removed:** the line had no source, and you removed it from the page.

| page text | source | status |
|---|---|---|
| @@FILL@@ | @@FILL@@ | @@FILL@@ |

## Result
Write yes or no after the colon.
Every row has a valid status, and the removed lines are gone from the page: @@FILL@@
