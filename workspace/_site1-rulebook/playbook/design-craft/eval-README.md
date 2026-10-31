# Anti-slop evaluation: how to read this folder

Plan: docs/superpowers/plans/2026-10-30-anti-slop-design-capability.md. Skill under test: ../skill-draft/site1-design-craft/ (not installed in .claude/skills/).

## Gate files a craft build must leave (from SKILL.md, 2026-10-30)
`00-brief.md`, `01-facts.md`, `02-design-brief.md`, `03-references.md`, `04-concepts.md`, `05-tokens.css`, `07-review.md`, `08-audit.md`, `08-fact-audit.md`, `09-slop-test.md` (gate 6 is the page itself). Compliance check: `python3 ../skill-draft/site1-design-craft/tools/check-gates.py <gate dir> --gates 1,2,3,4,5,7,8,9` (see SKILL.md for exact flags). Missing or empty gates are recorded in scores.md as `skill not followed: <gates>`; more than two missing = the build ignored the skill.

## Isolation rulings (controller, 2026-10-30)
- Baseline builds had no skill and read nothing under playbook/.
- Craft builds may read the skill folder and ONE extra file: the client's vertical overlay (gate 1 requires it). It is handed over as a copy at `input/vertical-overlay.md` in the builder's scratch folder, so no builder opens playbook/ itself. Limit to report: baselines never had overlay text, so part of any craft gain may come from the overlay's required lines (safety, hours, address), not from the skill's design gates.
- Spare/rebuild rules as in the plan.
