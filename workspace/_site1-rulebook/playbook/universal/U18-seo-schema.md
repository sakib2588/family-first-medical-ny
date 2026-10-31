# U18. SEO, structured data and AI search

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers how each page earns its place in search: which query it serves, how titles, headings and links describe it, how URLs stay canonical through launches and redesigns, which structured data it carries, and what we may and may not promise about rich results, AI answers and rankings. It runs with the page set (see U06) and content (see U07) and is checked at launch (see U23).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U18.1 | A page-to-query map exists before writing: each page in `pages` names one primary search task or query group, and no two pages target the same one; a page with no query and no navigation job is cut or merged. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide, A, 2025, opened 2026-10-30]; [source: https://developers.google.com/search/docs/essentials/spam-policies, A, 2026, opened 2026-10-30] | G |
| U18.2 | Every page has its own `<title>`, descriptive and concise, with no keyword stuffing, no boilerplate repeated across pages and no vague label such as "Home"; the site name goes at the start or end after a delimiter; there is no fixed length limit, since Google truncates to fit the device. | universal | A | [source: https://developers.google.com/search/docs/appearance/title-link, A, 2025, opened 2026-10-30] | G |
| U18.3 | The main page title is the most prominent heading and each page has exactly one `h1`; headings follow semantic order for screen readers (see U16), not for ranking, since Google does not depend on heading order. | universal | A | [source: https://developers.google.com/search/docs/appearance/title-link, A, 2025, opened 2026-10-30]; [source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide, A, 2025, opened 2026-10-30] | G |
| U18.4 | Each page has a meta description of one or two sentences, unique to that page and summarizing its main points; no page is padded to a word-count target, because Google states there is none. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide, A, 2025, opened 2026-10-30] | G |
| U18.5 | Every indexable page is reachable through a crawlable `<a href>` link from another page, and link text says what the target page is (never "click here" or a bare URL). | universal | A | [source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide, A, 2025, opened 2026-10-30] | G |
| U18.6 | Every indexable page declares a self-referencing `rel="canonical"` with an absolute URL; duplicates point to the preferred URL; robots.txt is never used to canonicalize; the sitemap lists only canonical URLs. | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls, A, 2026, opened 2026-10-30] | G |
| U18.7 | On a redesign or domain change, the redirect map follows U06.12 and U06.13 (see U06, which owns hops and duration); this module adds the SEO checks: internal links and sitemaps point to the new URLs. | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | G |
| U18.8 | Structured data is JSON-LD generated only from `site.yaml` fields that have a provenance entry; a null field emits no property, a sample record (`is_sample: true`) emits no markup, and no value is typed by hand into a template. | universal | C | [source: DR:H10, C, 2026]; [source: https://developers.google.com/search/docs/appearance/structured-data/sd-policies, A, 2026, opened 2026-10-30] | G |
| U18.9 | Markup describes only content visible on the same page, uses the most specific schema.org type available (for example a LocalBusiness subtype such as Dentist, LegalService, Restaurant or Store rather than LocalBusiness), and includes every property Google lists as required for that feature. | universal | A | [source: https://developers.google.com/search/docs/appearance/structured-data/sd-policies, A, 2026, opened 2026-10-30]; [source: https://developers.google.com/search/docs/appearance/structured-data/local-business, A, 2026, opened 2026-10-30]; [source: https://schema.org/LocalBusiness, A, 2026] | G |
| U18.10 | Schema per archetype comes from the overlay's Schema types list: every site gets Organization (or its LocalBusiness subtype) on the home or contact page, and overlays add Product, Event, Course or SoftwareApplication only where Google's search gallery lists the feature and the record holds the data. | universal | A | [source: https://developers.google.com/search/docs/appearance/structured-data/search-gallery, A, 2026]; [source: https://developers.google.com/search/docs/appearance/structured-data/local-business, A, 2026, opened 2026-10-30] | R |
| U18.11 | No `Review` or `AggregateRating` markup is added to a site's own business or organization pages, including ratings pulled in by an embedded third-party review widget, since Google treats these as self-serving and ineligible for stars. | universal | A | [source: https://developers.google.com/search/docs/appearance/structured-data/review-snippet, A, 2026, opened 2026-10-30]; [source: DR:H10, C, 2026] | G |
| U18.12 | FAQ markup is optional and nobody is promised an FAQ rich result: Google stopped showing FAQ rich results in Search on 2026-05-07; FAQs are written for visitors and for answer engines. | universal | A | [source: https://developers.google.com/search/docs/appearance/structured-data/faqpage, A, 2026, opened 2026-10-30]; [source: DR:H7, C, 2026] | R |
| U18.13 | Every JSON-LD block passes the Rich Results Test (or schema validator for types without a rich result) before merge, and the report states that valid markup makes a page eligible, not guaranteed, for a rich result. | universal | A | [source: https://developers.google.com/search/docs/appearance/structured-data/local-business, A, 2026, opened 2026-10-30]; [source: https://developers.google.com/search/docs/appearance/structured-data/sd-policies, A, 2026, opened 2026-10-30] | G |
| U18.14 | Location or area pages exist only for places really served, each with unique local proof from `business.service_areas`; near-identical pages with swapped place names are folded into one page, since Google lists city-targeted funnel pages as doorway abuse. | universal | A | [source: https://developers.google.com/search/docs/essentials/spam-policies, A, 2026, opened 2026-10-30]; [source: DR:H9, C, 2026] | G |
| U18.15 | Generated or AI-drafted pages are published only after human editing adds real value (see U07); many pages produced mainly to rank are scaled content abuse and are not built. | universal | A | [source: https://developers.google.com/search/docs/essentials/spam-policies, A, 2026, opened 2026-10-30] | R |
| U18.16 | Where the business has a physical location or serves customers in person, the business profile follows Google's guidelines (real name, address or service area, phone, website), the site's name, address and phone match it exactly, and the client owns the profile (see U24). | universal | A | [source: https://support.google.com/business/answer/3038177, A, 2026] | R |
| U18.17 | No special file, AI text file or markup is added to "appear in AI answers" in Google; eligibility is the same as Search (indexed and allowed a snippet), so AI-search work is ordinary SEO plus clear, people-first content. | universal | A | [source: https://developers.google.com/search/docs/appearance/ai-features, A, 2025, opened 2026-10-30] | R |
| U18.18 | No proposal, report or page promises a ranking, a position or an AI-answer placement; Google says no one can guarantee a number one ranking. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/do-i-need-seo, A, 2026, opened 2026-10-30] | R |
| U18.19 | SEO changes are made against a baseline (Search Console export before launch or redesign) and checked afterwards, never by a one-line "optimize for SEO" request with no measurement. | universal | A | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | R |

## Anti-patterns
- Star ratings in the site's own business markup, copied from a review widget. Google ignores them for stars and they misstate the source. Fix: show reviews as visible text with their platform, no rating markup (U18.11).
- A promise of FAQ rich results in a proposal. That feature no longer shows. Fix: FAQs for people, markup optional (U18.12).
- Twenty town pages with the same text and a swapped name. Fix: one service-area page, or real pages with unique local proof (U18.14).
- JSON-LD with an invented founding year, rating or address typed into a template. Fix: generate from the record; null emits nothing (U18.8).
- A redesign that changes every URL and redirects all of them to the home page. Fix: a one-to-one redirect map kept a year or more (U18.7).
- An `llms.txt` file sold as an AI-search fix. Fix: ordinary SEO and clear content (U18.17).
- "We will get you to number one." Fix: no ranking promises (U18.18).

## Checklist
- [ ] Page-to-query map complete; no duplicate targets (U18.1).
- [ ] Unique titles and meta descriptions; one `h1` per page (U18.2, U18.3, U18.4).
- [ ] Every indexable page linked with descriptive text (U18.5).
- [ ] Canonical tags absolute and self-referencing; sitemap canonical only (U18.6).
- [ ] Redirect map tested on redesigns (U18.7).
- [ ] JSON-LD generated from the record; none on sample records (U18.8).
- [ ] Most specific type; only visible content marked up; required properties present (U18.9, U18.10).
- [ ] No self-serving review or rating markup (U18.11).
- [ ] No FAQ rich-result promise (U18.12).
- [ ] Rich Results Test passed for every block (U18.13).
- [ ] Location pages each have unique local proof (U18.14).
- [ ] Generated pages human-edited (U18.15).
- [ ] Business profile owned by the client and matching the site (U18.16).
- [ ] No ranking or AI-placement promises anywhere (U18.17, U18.18).
- [ ] Search Console baseline exported before changes (U18.19).

## How an AI builder uses this
The builder reads `site.yaml` (`business`, `pages`, `proof`, `provenance`, `is_sample`), the page set from U06, the content matrix from U07, the selected overlays' Schema types lists, and any old URL inventory for redesigns. It produces the page-to-query map, titles and meta descriptions, canonical tags, the sitemap, the redirect map and a JSON-LD generator that reads only the record. It must refuse to emit markup for any field without provenance, to add self-serving review or rating markup, to build near-duplicate location pages, to promise rankings, rich results or AI-answer placement, and to emit markup for a sample record. Vertical overlays add their schema types and local listing rules; the multilingual module adds hreflang (see U22).

## Open questions
- Does `llms.txt` or a similar AI text file help any answer engine other than Google? No opened source supports it; Google says it needs none (U18.17). Revisit only with a primary source from the engine itself.
- Do engines other than Google (Bing, AI assistants) use FAQ markup for understanding? Not verified tonight.
- The Google FAQPage page now records the documentation as removed; confirm whether Google still reads FAQPage markup for understanding (R14 said yes; the page opened tonight did not say).
- Owner decision: when a client's existing site has self-serving rating markup, remove it at redesign by default?
- Local listing rules beyond Google (Apple Business Connect, Bing Places) were not researched.
