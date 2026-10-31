---
title: On-page SEO, schema and AI-search rules
type: knowledge
status: stable
updated: 2026-10-23
---

# On-page SEO, schema and AI-search rules

Merged from the course blueprint (`seo/on-page-rules`), B11 F04, B09/B02 via MASTER_REPORT §3, and kit file 05.

## Titles, meta, headings

- Money/location title: `{Service} in {City}, {ST} | {Brand}`, about 60 chars, unique. Utility pages: `{Page} | {Brand}`. Meta descriptions under 160 chars, with a reason to click and a CTA. Write them for money and location pages.
- Exactly one H1 per page, no skipped levels. Keep widgets at H2/H4 so main content stays prioritized.
- Front-load: first paragraph answers "do you serve me, and how fast" in a liftable 40-60 word quote (B11 F04, playbook 12.6).

## Internal links

- Editorial in-content links, not nav/footer: link value roughly footer 1x / sidebar 2x / nav 5x / in-content 10x / first paragraph 20x (B09 F12, practitioner multiplier). One CTA per paragraph.
- Anchor text: never repeat the same anchor, body text only.

## Schema (JSON-LD, generated from `business.yaml`, never hand-typed per page)

- Most specific `LocalBusiness` subtype (e.g. `Plumber`, `RoofingContractor`, `HVACBusiness`). Add `Service` per service page, `FAQPage` on FAQ, `BreadcrumbList` on inner pages.
- Service-area business with hidden address: omit street address, use `areaServed`.
- Do not add self-serving `AggregateRating`/`Review` expecting stars. FAQ rich results are limited, do not promise them.
- Phone as **text**, not an image (breaks parsing). Include `hasMap` and `openingHours` where valid.
- Validate with zero errors (Rich Results Test + schema.org validator) before launch.

## Social and images

Open Graph and Twitter tags on every page. WebP, hero eager and content lazy, width/height set. Unique descriptive alt text; hyphenated keyword filenames. Real photos for team and work; stock only for abstract backgrounds.

## AI search

- Check `robots.txt` for accidental AI-bot blocks (Cloudflare Pages default blocks training crawlers).
- Entity consistency: business, service and town named identically everywhere; `sameAs` links to official profiles.
- AI Overviews are less dominant on local-intent queries (B11 F14, practitioner view).

## GBP floors (for real clients)

2-4 secondary categories (up to 9), 20-30 services, 750-char description, 20+ real geotagged photos; website-to-GBP NAP matches character for character; turn off GBP "automated calls"; do not change name, address, category or URL on a ranking listing without a reason (MASTER_REPORT §3).

Related: [[page-architecture]] · [[pre-launch-checklist]] · [[tech-stack-decision]]

> **Under review (2026-10-24):** the playbook proposes dropping the geotag floor, making `FAQPage` optional and `BreadcrumbList` conditional above 50 to 100 pages (Appendix A, PR5, PR6). Not yet adopted here.
