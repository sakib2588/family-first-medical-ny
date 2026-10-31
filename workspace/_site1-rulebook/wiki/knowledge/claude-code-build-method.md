---
title: Claude Code build method (gated pipeline and wiki)
type: knowledge
status: stable
updated: 2026-10-24
---

# Claude Code build method

What the course teaches for building sites with Claude Code (B06 F14, B11 F03-F05, blueprint `CLAUDE.md`).

## Five approval gates (never run unsupervised end to end)

1. **Research:** niche validation, keyword and SERP data (course used DataForSEO), domain recommendation.
2. **Plan:** page count, areas, keyword per page.
3. **Structure:** per-page sections, metadata, slugs, schema.
4. **Copy:** write all page copy.
5. **Build:** assemble the static site.

Pause for human approval after each gate. After a build, ask "did we learn anything that should update the wiki?" and append the fixes to the knowledge base so the next site starts better.

## Prompt sequence for a live build (B11 F04)

Primer with working rules (announce each task in one sentence, mask secrets, plain language) -> git + deploy loop (edit, commit, deploy, refresh) -> **recon** of the top 3 ranking sites in the target town plus 2 nearby towns (page inventory, titles, H1s, trust elements, CTAs, and the gaps nobody covers) -> **three sitemap options** (mirror / competitor-informed / hybrid) with honest estimates -> build with house rules -> AEO pass (LocalBusiness JSON-LD, liftable answers, entity sweep, meta under 160) -> 10-point pre-launch check -> ship list (DNS, sitemap submit).

House rules: first paragraph answers "do you serve me, how fast"; identical business/service/town everywhere; real local specifics or skip the page; **no fabricated trust content**; phone placeholder wired everywhere a number belongs.

Design can be steered by giving 1-2 reference sites and asking for "the best aspects of each" without copying their copy. In our setup that role is played by `awesome-design-md`, `design-taste-frontend` and `impeccable`.

## Access boundary and secrets

Give the agent only what the task needs (course: SFTP into the theme folder plus the public site, never the admin login or database). Secrets in a gitignored `.env`, never pasted into chat, rotate anything that touched plaintext, repo private. Commit after each small validated change and keep a rollback point before batch edits (CV03 F02).

## LLM-wiki pattern (this vault)

`CLAUDE.md` (job description) + `raw/` (read-only sources) + `wiki/` (AI-owned pages with frontmatter and `[[links]]`) + `index.md` + append-only `log.md`. Two standing commands: "I added a source, update the wiki" and "check the wiki first: ...". The claim that Google formalized an "Open Knowledge Format" in June 2026 is unverified (B11 F05).

The vibe-code course adds the design side of this pipeline (concept generation, refine pass, design-system page, branch/preview/merge): [[vibe-coding-workflow]], with settings in [[astro-cloudflare-build-spec]].

Related: [[tech-stack-decision]] · [[pre-launch-checklist]]
