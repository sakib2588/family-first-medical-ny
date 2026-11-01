> **Superseded for current state by `2026-11-01-session-3-handoff.md`.** The sharing setup below is still accurate.

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
- Home rebuilt 2026-10-31 (session 3, one page at a time, rulebook questions first): decisions in `03-decisions/2026-10-31-home-page-decisions.md`, screenshots `04-logs/home-demo/H5-*`. Round 2 after the owner's phone review: three-colour system and doctors in an indigo hero (`03-decisions/2026-10-31-home-colour-and-hero.md`, screenshots `H6-*`). Inner pages still use lavender; align each when its question round comes. Round 3 (client: layout now, info later): Home follows the competitor teardown (`02-analysis/competitor-teardown-2026-10-31.md`) with every fact as a typed slot in `practice.ts` (`Fact<T>`, `practice.demo`); to launch, fill the facts with source and date, then set `demo: false` (a clean build then shows no slots). Decision: `03-decisions/2026-10-31-home-layout-round3.md`. Done: hero doctor-avatar repeat, dark About band (folded into Doctors), one photo treatment, unverified claims removed, headings copied from the base site rewritten.
- Can do without the client: performance budget numbers, more a11y passes (screen reader), favicon, custom 404 on Cloudflare (`not_found_handling`), footer raw colours to tokens, one small-text size token, inner pages: doctor page heading "Where to see Mehta" and the sticky bar showing next to the page's own Call/Request pair.
- Next page (owner method): ask the rulebook questions for the next page before building it.

## Sharing the site (decided 2026-10-31: PUBLIC, Cloudflare Workers static assets)
Owner decision: anyone with the link may view the demo. No login. Use Cloudflare, not ngrok (ngrok only works while a PC is on, shows a warning page, and the domain can be online from one machine only). ngrok stays an optional local tool.

**Live URL (deployed and checked by the owner 2026-10-31):** https://family-first-medical-ny.rnqbank.workers.dev

It is a Cloudflare **Worker with static assets** (not Cloudflare Pages, and not `*.pages.dev`). The owner connected the GitHub repo in the Cloudflare dashboard; every merge to `main` redeploys it.

**Settings (as set by the owner in the Cloudflare dashboard):**
| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy --assets=./dist --compatibility-date=2026-10-31` |
| Preview (non-production branches) command | `npx wrangler versions upload --assets=./dist --compatibility-date=2026-10-31` |
| Preview builds | On (each branch/PR gets its own public preview URL) |
| Node version | 24, read from `.nvmrc` (no env var) |
| Access protection | Off (public, owner decision) |
| Secrets | None. No server code, no functions. There is no `wrangler.toml`/`wrangler.jsonc` in the repo; the flags above are the whole config |

No token is in the repo and none may ever be. If a session ever needs to deploy by hand, the owner sets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as environment secrets; never commit them or paste them in files or PRs. Claude cloud sessions cannot reach `*.workers.dev` or `api.cloudflare.com` unless the owner adds them under the environment's Network access > Allowed domains.

**Owner checks done 2026-10-31:** every page returns 200, `noindex` and the demo banner are present, no analytics beacon.

**Privacy traps (the site promises zero trackers; re-check after any Cloudflare setting change):**
- Keep Cloudflare Web Analytics OFF for this Worker. Its beacon is injected at the edge, so `npm run check` cannot see it. Verify by loading the live page and confirming there is no request to `static.cloudflareinsights.com` (`QA_BASE_URL=<live url> node qa-pages.mjs` in `workspace/tools`, or a Playwright network log).
- Keep `noindex, nofollow` (in `src/layouts/Base.astro`). The content is placeholder; search engines must not index it. Do not add a sitemap.
- **Cloudflare adds its own `robots.txt` at the edge.** It is not in `dist`, so `npm run check` cannot see it, and its content is Cloudflare's, not ours. Our own `public/robots.txt` (`Disallow: /`) shipped in PR #16; open the live `/robots.txt` and confirm what is actually served (not yet checked: the cloud session cannot reach `*.workers.dev`).
- Keep the "Design demo · sample content" banner. Legal pages are DRAFTS and will be publicly visible; the banner and DRAFT boxes must stay until counsel approves.
- Preview URLs for branches are public too. Do not push placeholder phone numbers that look real to a public branch beyond what is already in `src/data/practice.ts` (they are 555 numbers; keep it that way).

**Security headers (F16): done, PR #15.** `public/_headers` sends a strict CSP (everything `'self'`, no inline code, `frame-ancestors 'none'`), one-year HSTS for this host, `nosniff` and `strict-origin-when-cross-origin`. Astro emits all scripts and CSS as files; `npm run check` fails on any inline script, style, style attribute or event handler, or if the CSP stops being self-only. Tested in `wrangler dev` with the new Home: no violations, dialog, menu, open-now chip and fonts work.

**Not yet checked:** the deploy command sets no `not_found_handling`, so an unknown URL may get Cloudflare's bare 404 instead of our `/404` page. Open a made-up path on the live site to see.

**Custom domain:** later, when the client confirms a domain (blocker DOM). Until then the `*.workers.dev` URL above is the share link.

The deployed URL: https://family-first-medical-ny.rnqbank.workers.dev

## Local-only things (not in git, will not exist in the cloud)
- ngrok: installed on the laptop and the PC. The reserved domain can only be online from ONE machine at a time (error ERR_NGROK_334 otherwise). The auth token was pasted in chat once, so rotate it at dashboard.ngrok.com. Never commit it.
- Dev server for ngrok needs `npx astro dev --host --allowed-hosts <ngrok-domain>` or it returns 403.
- `workspace/tools/node_modules`, `dist/`, `.claude/`.

## Git identity
Use `sakib2588` / `153538974+sakib2588@users.noreply.github.com`. Never the AIUB address.
