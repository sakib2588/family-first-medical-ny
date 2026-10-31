---
title: Vibe-coding workflow (Authority Hacker course)
type: knowledge
status: draft
updated: 2026-10-24
---

# Vibe-coding workflow

How the Authority Hacker "Vibe Code High Performing Websites" course builds a site with Claude Code (B12, 15 lessons, one dog-trainer demo). It is built for brand-led single sites, so each step below says whether we **adopt**, **adapt** or **reject** it for lead-gen trade sites. Technical settings are in [[astro-cloudflare-build-spec]].

## The loop

1. **Brief by interview** (adapt). The skill interviews one section at a time and pushes back on vague answers ("modern and clean", "everyone"). Build around the proof that exists today (B12 F03). For us the `business.yaml` record plus the GBP kit intake replaces most of the interview; keep the "what proof do we actually have" question.
2. **Concepts in parallel** (adapt). 3-5 directions that differ on 4-5 axes, built by Opus sub-agents, then mixed ("hero from 2, stats from 4") (F04). Do this once for the roofing reference template, not per client; per-client change is config and preset colours.
3. **Refine pass with a browser** (adopt). Second prompt: creative-director audit, desktop plus 375 px, REFINE or REBUILD per section, plan mode first (F05, `prompt2.txt`). Use `playwright-cli` instead of Chrome MCP. Vision misses small bugs, so check by hand.
4. **Lock and harden** (adopt). `prompt.txt` part 1: delete other concepts, tokens into `@theme static`, `<Image>` rules, lint + build must pass (F08).
5. **Docs + design-system page** (adopt). `docs/brand-guide.md`, lean `CLAUDE.md`, noindex `/design-system` page; rule "reuse before you build, register new components" (F09). Keep subsystem docs in `docs/` and link them, not in CLAUDE.md (F27).
6. **Repeatable pages as content collections** (adopt, high value). One template, one markdown file per service or area; status field in frontmatter (F15). Fits service pages and the area page set in [[page-architecture]].
7. **Branch, preview, merge** (adopt). Never edit `main`; every branch gets a Cloudflare preview URL; merge only after the check passes (F14). Commit often, push in batches, private repo (F07).
8. **Detail pass** (adapt). Point-and-comment tools finish spacing and colour. Drawbridge is an indie extension that can read the project folder; review it as we did [[security-audit-openoutreach]] before installing (F17).

## Working rules worth copying

- Re-run `/frontend-design` after plan approval and before sub-agents; in the terminal approval clears context (F02).
- Paste Cloudflare build logs into Claude for every failed deploy; say "Workers, not Pages" (F13).
- A new integration: link its docs, let Claude install it, then "document it in docs/ and link from CLAUDE.md" (F20).
- Check every generated fact. Claude put the demo business in the wrong city twice (F11).

## What we change or reject

| Course step | Our rule |
|---|---|
| Sub-agent brief asks for "plausible" testimonials, names and stats (F23) | **Reject.** Delete those lines; fabricated reviews break [[red-lines]]. Use real proof or skip the section. |
| Desktop-app lesson bypasses permission prompts (F25) | **Reject.** Owner rule: never skip permissions. |
| Conductor.build (Mac only) and the Claude desktop Code tab (F16, F18) | Not usable on this Linux machine; use VS Code + branches. |
| Heavy motif, parallax, 3+ animation types per page (F23) | **Adapt.** Budgets in [[tech-stack-decision]] win (JS <= 200 KB, LCP <= 2.5 s). Motion only where it guides toward the call/form CTA. |
| Images dropped in `public/` (F12 level 1) | Use `src/assets/images/` + `<Image>`; the course's own later prompt says so. |
| Redesign helpers that scrape a prospect's site (F24) | Private demo mock-ups only. Do not publish a prospect's images. |

## Gaps for lead-gen (not in the course)

No call tracking, GA4 events, tap-to-call, form spam protection, accessibility audit, GBP/NAP or service-area guidance (F29). Use [[call-tracking-and-lead-routing]], [[on-page-seo-and-schema]], [[pre-launch-checklist]].

Related: [[claude-code-build-method]] · [[content-and-ai-quality]]
