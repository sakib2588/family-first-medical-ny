# Session 3 handoff (cloud, 2026-10-31 to 2026-11-01)

Read this first in the next session, then `CLAUDE.md`, then `04-logs/LOG.md` (latest lines).

## State of main (all merged, live)
- Live demo: https://family-first-medical-ny.rnqbank.workers.dev. It is a Cloudflare Worker with static assets and deploys on every merge to `main`. Branch previews are posted on each PR. This cloud session cannot open `*.workers.dev`.
- Merged this session: #13 to #24. They cover:
  - the cloud Chromium fix
  - the Workers deploy docs
  - security headers and a strict CSP
  - robots.txt
  - the Home rounds 1 to 4
  - the Gate 9 slop fixes
  - the competitor teardown
  - the premium breakdowns
  - the design spec
  - the D hybrid build
- Home now follows `02-analysis/home-design-spec-2026-10-31.md` in palette **D hybrid** (`03-decisions/2026-10-31-palette-d-hybrid.md`):
  - AIMSS indigo-to-teal gradient hero with a gold pulse line, one gold underline, a gold "Request a visit" button and gold arch frames on the doctors
  - teal-deep action colour on light grounds
- Every client fact is a typed `Fact` slot in `src/data/practice.ts`. The demo shows `[need: ...]`. Set `practice.demo = false` only at launch, after facts are filled with source and date; a clean build then shows no slots (tested).

## Owner method (follow it)
- One page at a time, mobile first.
- Ask the rulebook questions first (`workspace/_site1-rulebook/`), then build with the skill CLAUDE.md names.
- Take a phone screenshot after each task.
- Run Gate 9 (`_site1-rulebook/playbook/design-craft/site1-design-craft/slop-test.md`) and the code-reviewer agent before every PR.
- Never merge without the owner's word.
- The owner likes dedicated subagents for research, specs and builds.

## Client direction (WhatsApp, via the owner)
"Create a standout website." Follow familyfirstmedicalny.com: its structure, improved, never cloned. "Work on layout and design; later we can change info." The owner also likes aimssfoundation.org (hence palette D).

## Key files
- Decisions: `03-decisions/` (Home page decisions; colour and hero; layout round 3; palette D hybrid).
- Analysis: `02-analysis/`
  - `competitor-teardown-2026-10-31.md`
  - `premium-breakdown-A.md` and `premium-breakdown-B.md`
  - `premium-upgrade-plan-2026-10-31.md`
  - `home-design-spec-2026-10-31.md`
  - `palette-research-2026-10-31.md`
  - `slop-test-home-2026-10-31.md` (Gate 9 rounds 1 to 4)
- Screenshots: `04-logs/home-demo/H5-*` to `H9-*`, `palette-option*.png`.

## Open items
1. Owner to review the new live Home. Open question: the phone header now has Menu instead of Call (both numbers sit under the gold button). Restore Call if the owner asks.
2. Phone Home is 11,439 px against a 10,000 target. Trim after real facts replace the slots.
3. Gate 9 item 1 waits on client facts:
   - names and photos with consent
   - credentials (checked against NYSED or ABMS)
   - languages
   - new-patient status (dated)
   - insurance (dated)
   - Google profiles and ratings
   - doctor days per office
   - transit and parking
   - office photos
4. Next pages in the owner's method: Doctors, then Locations, Contact and legal. Inner pages still use lavender and have accent colour on some non-actions; align each in its own round.
5. Content task (the client's next): improve copy using the 10-site analysis, after the layout is approved.
6. Small items:
   - favicon
   - custom 404 (`not_found_handling`)
   - check the live `/robots.txt`
   - footer raw colours to tokens
   - no-JS fallback for the sticky bar
7. Owner actions still open: rotate the ngrok token; add `.claude/settings.json` from `06-handoffs/suggested-claude-settings.json`.

## Cloud gotchas learned
- Playwright's own browser download is blocked. QA uses `/opt/pw-browsers/chromium-*` (handled by `scripts/cloud-setup.sh` and `qa-pages.mjs`).
- `pkill -f`/`pgrep -f` patterns can match your own shell command and kill it. Kill by PID from a separate command.
- While subagents read the working tree, do git branch work in a separate `git worktree`.
- Every PR adds a `LOG.md` line, so later PRs conflict on it. Merge main into each one and keep both lines (never rebase or force-push).
- `wrangler dev` (npx wrangler@4, compatibility date 2026-10-30) applies `_headers` locally, for CSP tests.
