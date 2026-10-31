---
title: Pre-launch checklist (merged)
type: knowledge
status: stable
updated: 2026-10-24
---

# Pre-launch checklist

Merged from the course (B06 F15, blueprint `publishing-and-launch`, B11 F04) and kit file 06. Run on staging, tester is not the builder.

## Content and placeholders
- [ ] No `{{...}}`, `[PHONE]`, `TODO`, lorem or unfilled template tokens anywhere (search the built HTML).
- [ ] Phone number identical everywhere, `tel:` uses the E.164 value; CTAs not empty or broken.
- [ ] Business name, service and town identical across all pages (entity sweep).
- [ ] Spelling pass; banned-phrase search clean ([[content-and-ai-quality]]).
- [ ] No fabricated reviews, team, or addresses ([[red-lines]]).

## SEO
- [ ] Unique title and meta per page; one H1; heading order sane.
- [ ] Canonical on every page; sitemap.xml has the expected page count; `robots.txt` has no stray `Disallow: /` and no accidental AI-bot block (staging rules removed in production).
- [ ] JSON-LD valid with zero errors ([[on-page-seo-and-schema]]).
- [ ] One-hop redirects: http to https, www to apex (or reverse); custom 404 returns a real 404.
- [ ] Internal links resolve; every page reachable from nav or hub pages.

- [ ] Astro `site` URL is the live domain (not the dev placeholder); `/sitemap-index.xml` lists every service and area page; `/design-system` is `noindex` (B12 F20).
- [ ] No `r2.dev` image URLs in production HTML; no Google Fonts `<link>`; no secrets or webhook test URLs in the repo (B12 F12, F19, F26).

## Performance and access
- [ ] Lighthouse mobile >= 90; JS <= 200 KB; page <= 1 MB; hero <= 150 KB with width/height; other images lazy.
- [ ] axe: zero critical/serious; keyboard-only walkthrough of nav, form and CTA.
- [ ] Real-device check at 375 / 768 / 1280 / 1920 px (iOS Safari, Android Chrome, desktop).

## Function
- [ ] Form test reaches both destinations and the auto-reply; failure state shows the phone number.
- [ ] Form posts to the **production** webhook URL, not the n8n test URL (works in testing, silently dies live; B12 F19).
- [ ] Tap-to-call works on a real phone; a **test call** comes through tracking and (if used) the voice agent.
- [ ] Each GA4 event fires once.

## Launch
- [ ] Lower DNS TTL 48 h before; export the DNS zone and a backup; rollback plan written.
- [ ] After go-live: submit sitemap in Search Console (client sites) or the chosen indexing method; request indexing for the home page and top services; drip-feed new pages.
- [ ] Update GBP website field with the UTM URL (client sites only).

Related: [[compliance-checklist]] · [[tech-stack-decision]]
