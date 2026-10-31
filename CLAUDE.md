# AIMSS Family Health (family-first-medical-ny)

Paid-client website: a family medicine and pediatrics practice site for AIMSS (aimssfoundation.org, a 501(c)(3)). Astro 7 + Tailwind 4, static, zero third-party requests. Currently a design demo with PLACEHOLDER content.

## Start here (a fresh session has no memory of earlier chats)
1. `workspace/06-handoffs/2026-10-31-session-2-cloud-handoff.md` (current state), then `2026-10-31-session-handoff.md`.
2. `workspace/06-handoffs/cloud-readiness-plan.md` (what the cloud lacks and how we replaced it).
3. `workspace/04-logs/LOG.md` (append-only history), `workspace/03-decisions/` (owner decisions, home-demo-direction), `workspace/02-analysis/improvement-plan.md` (ranked work).
4. Notes carried over from the laptop's memory: `workspace/06-handoffs/memory/`.

## Commands
`npm install` · `npm run dev` (:4321) · `npm run check` (build + fail on any external resource or dead link; MUST pass before every PR) · `cd workspace/tools && npm install && node qa-pages.mjs` (phone + desktop QA, dev server must run).
First time in a new environment: `bash scripts/cloud-setup.sh`.

## Red lines (from our research and legal review)
- NO third-party scripts, trackers, cookies, chat, embedded maps, or external fonts. `npm run check` enforces it.
- NO invented reviews, ratings, stats, credentials, "board-certified", "years of experience", or "accepting new patients" until the client confirms and it is dated. No AggregateRating markup.
- Request form collects contact info only (name, phone, office, best time). NEVER symptoms, diagnoses, DOB, insurance. It does not send yet (needs endpoint, BAA, counsel).
- Legal pages are DRAFT until counsel approves. Put unknowns in [brackets]; never invent legal text or copy other sites' wording.
- No "Open 7 Days"-style claims that are false for one office. Hours come only from `src/data/practice.ts`.
- Never commit secrets (an ngrok token was pasted in chat once; rotate it). Never rewrite history or force-push (owner decision: `workspace/` stays in git).
- Do not build the base site's intro splash (owner decision).

## Design
Direction in `workspace/03-decisions/home-demo-direction.md`. Calm, warm, credible. One shape device (the arch), Fraunces + Figtree, one filled action per screen, 44 px tap targets, WCAG 2.2 AA. Tokens in `src/styles/global.css` (button teal is `teal-deep` #0b6f6f; brand teal fails AA with white text; gold is never text on cream).
Single source of truth for offices, hours, doctors: `src/data/practice.ts`; draft legal text: `src/data/legal.ts`. Pages read from them; never hard-code a phone or address in a component.

## Skills, agents and rules in this repo (`.claude/`)
- **Skills (31, copied from the owner's local set).** UI: frontend-design-direction, design-system, make-interfaces-feel-better, motion-foundations. Quality: accessibility, frontend-a11y, browser-qa, click-path-audit, production-audit, verification-loop, ai-regression-testing, tdd-workflow, e2e-testing. Security and health data: security-review, hipaa-compliance, healthcare-phi-compliance, error-handling. Research pipeline (how we studied competitors): competitive-platform-analysis -> benchmark-methodology -> competitive-report-structure, plus benchmark, deep-research, market-research, search-first, seo. Copy: brand-voice, article-writing. Process: architecture-decision-records (log owner decisions in `workspace/03-decisions/`), git-workflow, conventional-commit-review, coding-standards.
- **Agent:** `code-reviewer` (run it on every change before a PR). **Command:** `/code-review`.
- **Rules:** `.claude/rules/` = the owner's global rules (coding style, testing, security, git, review).
- Use frontend-design-direction + design-system for UI, accessibility + browser-qa before any PR, hipaa-compliance + healthcare-phi-compliance for anything that touches the form or data.
- `.claude/rules/agents.md` and `development-workflow.md` mention ECC agents such as `ecc:planner` and `ecc:tdd-guide`. They were never installed on the owner's PC either (only code-reviewer and mle-reviewer were). Do that planning/TDD work yourself, or install the full set: source https://github.com/affaan-m/ECC (the local skills came from commit ef648e0, installed 2026-10-09).

## Git
Identity: `sakib2588` / `153538974+sakib2588@users.noreply.github.com`. NEVER the AIUB address. Branch per task, PR to `main`, conventional commit messages (feat/fix/docs/chore). Do not merge a PR without the owner saying so.

## Gotchas
- Typed backslash-u escapes can turn into raw characters when written to files; compose such strings with `chr(92)` (see `workspace/06-handoffs/memory/tool-unicode-escape-quirk.md`).
- The Astro dev server blocks unknown hostnames: tunnel hosts need `astro dev --host --allowed-hosts <host>`.
- Folder names may contain spaces (`Website creation`); quote paths.
