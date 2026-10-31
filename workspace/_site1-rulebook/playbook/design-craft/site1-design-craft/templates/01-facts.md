# Facts and answers: @@FILL@@

Gate 1 of `site1-design-craft`. Replace every fill marker. `tools/check-gates.py` fails while one is left.

## Brief file
Save the client brief word for word as `00-brief.md` next to this file. Write the path here:
@@FILL@@

## Overlay
Write the overlay path you read. Other allowed values: "overlay text pasted in the brief", "none fits", or "not available: <reason>".
- Vertical overlay read: @@FILL@@

Read these sections: Primary conversion, Trust signals, UX patterns, Compliance rows, Common mistakes, Reference sites.

List each line the overlay requires on this page, with its row id, marked overlay-required. Write "none" if there are none.
- @@FILL@@

## Jurisdictions
Take them from `site.yaml` `jurisdictions`. Failing that, take them from the brief's place and mark them ASSUMED (for example: nyc, new-york, us-federal, ASSUMED from the brief's borough).
@@FILL@@

## Questions
Status is ANSWERED, ASSUMED or UNKNOWN.

| # | question | answer | status |
|---|---|---|---|
| Q1 | @@FILL@@ | @@FILL@@ | @@FILL@@ |

## Fact list
Only these may appear on the page. Kinds:
- **fact:** from the brief, the client record or an owner reply.
- **overlay-required:** a safety, legal, disclosure or contact line that the overlay requires.
- **sample:** a value the brief labels as a sample.

| id | fact as it may appear on the page | source (brief line, record field, owner reply, overlay row) | kind |
|---|---|---|---|
| F1 | @@FILL@@ | @@FILL@@ | @@FILL@@ |

## Brief and overlay conflicts
Precedence:
- **The overlay wins** on its safety, legal, license and disclosure rows: the line is added.
- **The brief wins** on UX patterns, such as the number of form fields: write `ASSUMED: brief overrides <row>`.

Write each conflict, or "none":
@@FILL@@

## Counsel items
List every overlay or red-line row with a counsel flag that this page triggers, and what waits on it. For example: `local-trades.16: gas-line wording taken from the overlay; publishing waits on counsel`. Write "none" if there are none.
- @@FILL@@

## Placeholders
Use the brief's own wording when it gives one. Otherwise write `[Placeholder: what is needed]`. Any placeholder makes the page a draft.

On a service-area trades site, no address line appears at all, not even a placeholder.

List each placeholder, or "none":
- @@FILL@@
