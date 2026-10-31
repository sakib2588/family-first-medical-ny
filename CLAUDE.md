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
- Sharing: the demo is PUBLIC at https://family-first-medical-ny.rnqbank.workers.dev (Cloudflare Workers static assets, deploys from `main`; owner decision, no login). Keep `noindex`, keep the demo banner and DRAFT legal boxes, and keep Cloudflare Web Analytics OFF. Setup steps and privacy checks: `workspace/06-handoffs/2026-10-31-session-2-cloud-handoff.md`, section "Sharing the site". Do not use ngrok to share.

## Design
Direction in `workspace/03-decisions/home-demo-direction.md`. Calm, warm, credible. One shape device (the arch), Fraunces + Figtree, one filled action per screen, 44 px tap targets, WCAG 2.2 AA. Tokens in `src/styles/global.css` (button teal is `teal-deep` #0b6f6f; brand teal fails AA with white text; gold is never text on cream).
Single source of truth for offices, hours, doctors: `src/data/practice.ts`; draft legal text: `src/data/legal.ts`. Pages read from them; never hard-code a phone or address in a component.

## Which skill for which task (routing table)
Pick the FIRST matching row. Use only the skills named; do not browse the rest. Always finish with the Definition of done below.

| Task | Use (in order) | Notes |
|---|---|---|
| Change layout, copy placement, or visuals of a page | `frontend-design-direction` (decide) -> `design-system` (tokens, consistency) -> `make-interfaces-feel-better` (polish) | Direction file: `workspace/03-decisions/home-demo-direction.md`. Tokens: `src/styles/global.css`. |
| Accessibility check or fix | `accessibility` (PRIMARY) | `frontend-a11y` is React/Next: take its principles (labels, focus, keyboard) but NOT its React code. |
| Motion or animation | `motion-foundations` (principles only) | Site is CSS-only; no React, no animation library. Respect reduced motion. |
| Touch the request form, any data field, or anything patient-related | `hipaa-compliance` -> `healthcare-phi-compliance` -> `security-review` | Contact info only. Stop and ask the owner if a field might hold health info. |
| Add a page, link, or button | `click-path-audit` after building | Then `npm run check` (dead-link scan). |
| Before opening any PR | `verification-loop` -> `code-reviewer` agent (or `/code-review`) -> `browser-qa` | See "Definition of done". |
| Site speed or SEO | `seo`, `benchmark` | Budget in `workspace/02-analysis/improvement-plan.md` (rank 6). No analytics or third-party tools to measure. |
| Pre-launch readiness | `production-audit` | Needs client facts first (see handoff). |
| Deploy or share the site | none (follow the handoff, "Sharing the site") | Cloudflare Workers static assets, public, deploys on merge to `main`. Check no analytics beacon appears and what the edge serves at `/robots.txt` (Cloudflare adds its own). |
| Write a commit or PR | `conventional-commit-review`, `git-workflow` | Identity rule below. |
| Record an owner decision | `architecture-decision-records` | Write to `workspace/03-decisions/`, dated. |
| Compare more sites or redo research | `competitive-platform-analysis` -> `benchmark-methodology` -> `competitive-report-structure`, `deep-research` | ON REQUEST ONLY. Research is done (`workspace/01-research`, `02-analysis`). |
| Write marketing or site copy | `brand-voice`, `article-writing` | ON REQUEST ONLY, and only after the client confirms facts. Never invent claims. |
| Market sizing or investor-style research | `market-research` | ON REQUEST ONLY. Not part of this project. |
| Look for an existing library before writing code | `search-first` | Zero-third-party rule still applies to anything shipped to the browser. |

## Tools a skill may expect that you do NOT have here (use these instead)
| Skill expects | Fallback |
|---|---|
| firecrawl / exa MCP (`deep-research`) | Built-in WebSearch and WebFetch. Cite sources, mark unverified claims `(U)`. |
| Browser MCP (`browser-qa`: claude-in-chrome, Puppeteer) | Playwright from `workspace/tools` (installed by `scripts/cloud-setup.sh`): `node qa-pages.mjs` with `npm run dev` running. |
| Jest, Vitest, React Testing Library (`tdd-workflow`, `ai-regression-testing`, `e2e-testing`) | There is no test runner. Our tests are `npm run check` and `qa-pages.mjs`. Use these skills for principles only (write the failing check first, then fix). |
| React / Next.js patterns (`frontend-a11y`, `coding-standards`, `error-handling`, `motion-foundations`) | This is Astro + Tailwind. Translate the idea into `.astro` components and plain CSS; never add React. |
| `ecc:*` agents named in `.claude/rules/agents.md` and `development-workflow.md` | Not installed anywhere. Do the planning yourself, or use `code-reviewer`. Full set: https://github.com/affaan-m/ECC (local skills came from commit ef648e0). |
| 80% unit-test coverage (`.claude/rules/testing.md`) | Does not apply to a static site with no logic layer. Our gates are below. |

## Definition of done (every task, in this order)
1. `npm run check` passes (build, no external resource, no dead link).
2. If any page or component changed: `npm run dev` then `cd workspace/tools && node qa-pages.mjs` shows no horizontal overflow and no tap target under 44 px, and the call dialog still closes on Escape.
3. `code-reviewer` agent run on the diff; fix CRITICAL and HIGH findings.
4. Red lines above re-read against the diff (claims, trackers, form fields).
5. Append a dated line to `workspace/04-logs/LOG.md`. Update the handoff if state changed.
6. Open a PR; do not merge without the owner saying so.

## First-session self-test (run once in a fresh cloud session)
Ask: "List the project skills you can see. Then name the skill(s) and fallback you would use for: (a) fixing the hero crop on mobile, (b) wiring the request form to an endpoint, (c) reviewing a PR." Expected: (a) frontend-design-direction + design-system + make-interfaces-feel-better, then Definition of done; (b) hipaa-compliance + healthcare-phi-compliance + security-review, and asks the owner about the endpoint and BAA before coding; (c) verification-loop + code-reviewer + browser-qa with the Playwright fallback. If any answer differs, fix this table.

## Agents, commands, rules (`.claude/`)
`.claude/agents/code-reviewer.md`, `.claude/commands/code-review.md`, `.claude/rules/` (owner's global coding style, security, git, review rules). Where a rule conflicts with this file (for example test coverage), this file wins for this project.

## Git
Identity: `sakib2588` / `153538974+sakib2588@users.noreply.github.com`. NEVER the AIUB address. Branch per task, PR to `main`, conventional commit messages (feat/fix/docs/chore). Do not merge a PR without the owner saying so.

## Gotchas
- Typed backslash-u escapes can turn into raw characters when written to files; compose such strings with `chr(92)` (see `workspace/06-handoffs/memory/tool-unicode-escape-quirk.md`).
- The Astro dev server blocks unknown hostnames: tunnel hosts need `astro dev --host --allowed-hosts <host>`.
- Folder names may contain spaces (`Website creation`); quote paths.
