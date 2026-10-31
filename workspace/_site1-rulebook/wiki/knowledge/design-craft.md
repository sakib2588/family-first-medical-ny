---
title: Design craft (anti-slop) skill and evaluation
type: knowledge
status: skill installed as .claude/skills/site1-design-craft (version 3); evaluation verdict "partly works"; owner blind vote pending
updated: 2026-10-30
---

# Design craft: making pages that do not look like AI output

**Goal (owner, 2026-10-30):** the AI can produce a proper design for any client that does not look like AI slop. The tutorial videos were collected for this ([[video-design-notes]]).

## What exists
- `playbook/design-craft/anti-slop-design-guide.md`: the 21 tells of generic AI design with how many sources agree, and fixes. Source of the skill; not copied here.
- Skill `site1-design-craft` (draft in `playbook/design-craft/skill-draft/`, installed copy in `.claude/skills/`): nine hard gates, each leaves a file (facts, design brief, references, three concepts, locked tokens, screenshot review, audit and fact audit, slop test) checked by `tools/check-gates.py`; tools for screenshots (`shoot.mjs`), automatic checks (`auto_checks.py`) and fact audit (`craft.py`). `.claude/skills/site1-skill-router` names it the entry skill for design tasks.
- Evaluation harness `playbook/design-craft/eval/`: six briefs of different client types, no-skill baselines built first, craft builds, blind pairs judged by two opus judges in both orders (holistic preference first, rubric after), a neutral judge, an anchor pair (slop control vs plain control) to test the judges, results in `eval/RESULTS.md`.

## Result (2026-10-30)
Craft preferred in 4 of 5 pairs (lost: B2B software); consistent on the held-out client; no regression on the automatic checks; a "keep it quick" build still followed every gate. Verdict **partly works**. Limits: five clients, model judges, CSS-only imagery, auto-trigger of the skill not tested, part of the gain may come from the vertical overlay text the craft builders read. Details and next steps: `playbook/design-craft/eval/RESULTS.md`.

## Stitch pilot (2026-10-30)
One mobile screen for the practice client: kept the brief's facts and labels but invented service descriptions and copy, and added an eyebrow pill, equal icon cards, app-style bottom navigation and two call actions, while claiming "zero invented facts". Use it as an idea sketch only and run gate 8 on anything rebuilt from it. Record: `docs/superpowers/logs/2026-10-29-overnight/stitch-pilot.md`. The pilot project is in the owner's Stitch account and can be deleted.

## Open
- Owner blind vote (`eval/owner-votes.md`, pages in `eval/blind/`) before trusting the verdict.
- Repeated design idea (hours as a day or time strip) across several craft pages.
- Guide edits needed: placeholder advice conflicts with U00.10 (U00.21 settles it), test item 9 and tells 2 and 8.
- To undo the install: delete `.claude/skills/site1-design-craft` and the router row.
