# Session 2 handoff: moving to the cloud (2026-10-31)

Read this first, then `2026-10-31-session-handoff.md` (session 1), then `../02-analysis/improvement-plan.md`.

## Repo state
- Repo: sakib2588/family-first-medical-ny (private). Default branch `main`. Everything below is merged except the open PR listed at the end.
- Merged this session: PR #5 (research and notes), #6 (docs, NCI-badge image removed), #7 (inner pages, call dialog, legal drafts, build check).
- Owner decisions recorded 2026-10-31: `workspace/` stays in git (no history rewrite, no force-push); `care-visit.webp` removed; READMEs fixed.
- Intro splash from the base site is deliberately NOT built (owner: "no need").

## What exists now (Astro 7 + Tailwind 4, static, zero third-party requests)
- One data file `src/data/practice.ts` (offices, hours, doctors, legal page list) and `src/data/legal.ts` (draft policy text). Every page reads from them. All values are PLACEHOLDERS.
- Pages (17): `/`, `/doctors`, `/doctors/[slug]` (2), `/locations`, `/locations/[slug]` (2), `/contact`, `/legal` hub, `/legal/[slug]` (7 drafts), `/404`.
- Shell `src/layouts/Page.astro` = header + main + footer + sticky bar + `CallDialog` (native `<dialog>`, Escape closes). Every "Call" button has `data-call` and falls back to `/locations` without JS.
- `OpenNow.astro`: "Open now until 4 PM" in New York time, static weekly line when JS is off.
- Footer redesigned (closing call to action, brand, two offices, Explore, 911 band, policy grid).
- Legal pages follow `02-analysis/legal-and-footer-comparison.md` section 5: plain-words box, anchored outline, tracker-status table, `[brackets]` for anything the client or counsel must supply. DRAFT until counsel approves.

## Commands
```bash
npm install
npm run dev            # http://localhost:4321
npm run check          # build + fail on any external resource or dead internal link (must pass)
cd workspace/tools && npm install && node qa-pages.mjs   # phone+desktop QA (needs dev server running)
```
Last results (2026-10-31): `check` passes, 17 pages; QA shows no horizontal overflow at 390 and 1280, no tap target under 44 px, dialog opens and closes on Escape.

## Still open (nothing below can be finished without the client)
- Client facts: practice name and domain, real phones, hours, parking and transit, doctor bios, languages, board and license numbers, insurance list with a date, accepting-new status. Questionnaire `Family-First-Medical-Client-Questions.docx` is not yet sent.
- Photos: stand-in Unsplash images, mixed treatment. Needs one treatment, then real photos with written consent.
- Trust layer: none, on purpose. Do not invent reviews or stats.
- Request form does not send. Needs endpoint decision, business associate agreement and counsel (Q13, Q4, Q19 in `03-decisions/deferred-questions.md`).
- Can do without the client: hero doctor-avatar repeat, About band crop, one photo treatment for stand-ins, performance budget numbers, more a11y passes (screen reader).

## Local-only things (not in git, will not exist in the cloud)
- ngrok: installed on the laptop and the PC. The reserved domain can only be online from ONE machine at a time (error ERR_NGROK_334 otherwise). The auth token was pasted in chat once, so rotate it at dashboard.ngrok.com. Never commit it.
- Dev server for ngrok needs `npx astro dev --host --allowed-hosts <ngrok-domain>` or it returns 403.
- `workspace/tools/node_modules`, `dist/`, `.claude/`.

## Git identity
Use `sakib2588` / `153538974+sakib2588@users.noreply.github.com`. Never the AIUB address.
