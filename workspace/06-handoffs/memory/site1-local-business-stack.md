---
name: site1-local-business-stack
description: Site1 = lead-generating sites/microsites for NYC-area home-service trades; stack, vault location, state at end of 2026-10-23 session, next steps
metadata:
  node_type: memory
  type: project
  originSessionId: 19d11248-2ffa-41cd-90fc-0dd2960ddbc1
  modified: 2026-10-24T05:59:24.610Z
---

Site1 at `/mnt/All/Sakib/Website creation/Site1` is a **lead-generating website business for NYC-area home-service trades** (roofing and HVAC first; plumber and GC later; Queens, Bronx, Brooklyn, Long Island). The user's rule: people want leads, not sites, so the job is a lead-generating site. A partner (business side) charges $500/site, builder gets 30%, partner handles outreach, ads, legal entity and brand name.

**Read first in any new session:** `Site1/CLAUDE.md` then `Site1/vault/wiki/index.md`. The vault holds decisions, distilled course knowledge, red lines, open questions, a security audit of OpenOutreach and web research on lead data sources. `vault/wiki/log.md` has the dated history.

**Decisions (2026-10-23):**
- Stack: Astro + Tailwind, one config-driven template (`business.yaml`), roofing reference first, then HVAC/plumber/GC presets. No shadcn/Ant/MUI unless React islands are needed. JS <= 200 KB, LCP <= 2.5 s.
- Process follows `Site1/gbp-site-kit.zip` (6 gated Markdown files; not yet unzipped into the project).
- Design skills vendored in `Site1/.claude/skills/` (README lists sources and commits): design-taste-frontend, impeccable, playwright-cli, awesome-design-md, shadcn.
- Lead finder: build on open data (NYC DCWP licenses `w7w3-xahh`, NYS DOS corporations `n9v6-gdp6`), score "good business, weak lead-gen site", weekly/monthly diffs. No Google Places lead database (terms bar caching). Do not use OpenOutreach with a real mailbox or list (audit: data uploaded to vendor hub, unverified TLS, plaintext secrets).

**State at end of session:** nothing is built or tested yet; only the vault, skills, memory and research exist. Node.js is NOT installed (user was told: `sudo pacman -S nodejs npm`, then `npm i -g @playwright/cli@latest`).

**Next steps (user ended the session after my summary of what the system can do; had not yet answered "start with the lead finder?"):**
1. Build the open-data lead finder in Python (needs no Node), after confirming with the user.
2. Install Node, then build the Astro template.
3. Open items: verify NYC advertising-license-number rule and HVAC/plumbing licensing; set Google Cloud budget alert before any paid API (project n8nn); brand name and entity from partner; read course PDFs (`17-Claude Code Building/06`, `07-Microsite Empire/01-02`) before the template; ingest remaining findings (B01-B04, B07-B10) into the vault.

**Update 2026-10-24:** ingested the Authority Hacker "Vibe Code High Performing Websites" course (`/mnt/All/Sakib/sharif/7. Vibe Code High Performing Websites/`). Findings `SEO_Transcripts/_findings/B12__authority-hacker-vibe-code.md`; vault pages `vibe-coding-workflow` and `astro-cloudflare-build-spec`. Flags raised: course deploys to Cloudflare **Workers** (vault said Pages, now an open question); its `new-site` sub-agent brief invents testimonials (red line, strip before use); `@theme static` is wrong for our per-business palettes; Conductor and Claude desktop Code tab are Mac-only. Still nothing built.

**Update 2026-10-24 (later):** wrote the **Lead-Site Playbook v1.0** (about 48,000 words, sister of the SEO playbook v6) at `Site1/playbook/Lead_Site_Playbook_v1.md`; parts in `playbook/parts/`, join and check with `python3 playbook/build.py`; plan `playbook/PLAN.md`; research briefs `playbook/_research/R1-R5`; vault pointer page `lead-site-playbook`. Appendix A holds 22 proposals (PR) awaiting owner confirmation and 19 open questions (OQ). Biggest open decision: a $500 build with a 30% builder share ($150) cannot fund the ~6-8 h/month/client of post-launch work, so a recurring Care fee or pay-per-lead model is needed. Resolved by research: host on Cloudflare Workers (no adapter for static), Astro 7 needs Node 22.23.4+ (use Node 24 LTS; machine has Node 26 Current), NYC DCWP ads must show the HIC license number and NYC contractors cannot arrange financing. Two independent reviews (`REVIEW-1-factcheck.md`, `REVIEW-2-consistency.md`) were applied; playbook is now ~52,000 words, also built as DOCX and a 94-page PDF (use pdflatex, not xelatex: the xelatex format is not set up here; see playbook/README.md). Form leads: D1 is the system of record. Cloudflare account is client-owned with the Owner as a member. Nothing is built yet; the next step is the reference template build (playbook 9.10).

**Update 2026-10-24 (gap-closing pass):** playbook is now v1.1 (~62,000 words, Appendix H edge-case register, `playbook/counsel_brief.md` = questions for a lawyer with working assumptions). **Reference template built** at `Site1/site-template/` (not a git repo; Astro 7.4.2, Tailwind 4, Worker + D1, vitest, Playwright+axe). Use Node 24 via `~/.local/share/node/node-v24.22.1-linux-x64/bin` prepended to PATH. `npm run check` runs types, tests, build, guards and e2e. On a fictional fixture: 501 unit tests (98% stmt), 18 component tests (`npm run test:components`), 71 browser tests, Lighthouse mobile 96-99/100/100/100. Three independent reviews (code, security, re-review) applied; REVIEW-3/4 in playbook/_research. Worker has retry cron + migrations (`wrangler d1 migrations apply`); honeypot field is `hp_site_url`. Not done: preview deploy (Owner deploys), concept/design process, second-person QA, tag, real D1 id, hours per gate. Playbook is v1.1 with DOCX/PDF rebuilt (109 pages). Nothing committed to git. Still unfixable by me: lawyer review, real-client results.

**Why:** the user wants whatever converts best, and wants honest guardrails (no fake reviews/addresses, real named licensed business receives every lead).
**How to apply:** don't suggest shadcn/Ant/MUI; don't quote course money numbers to clients (practitioner claims); confirm before any paid API or outward-facing step.

**Update 2026-10-25:** Site1 is now its own git repo (separate from the parent `uni-planning` repo, which ignores it), pushed to **private** GitHub repo `sakib2588/site1-lead-sites` (branch main) so the user can clone it on their laptop. Root `.gitignore` excludes node_modules (incl. design-lab symlinks), dist, .astro, .wrangler, .env, .dev.vars, *.pem. Repo-local git identity set to sakib2588 / noreply email (no global identity on this machine).
Design-lab on a fresh clone: `npm install` in site-template, then `node design-lab/setup.mjs` (links dir-*/node_modules to the template's, creates .env). npm 11 warns that esbuild/workerd install scripts are not approved; harmless here, builds, tests and the workerd binary all work without them.
