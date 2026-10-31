# U06. Information architecture and page sets

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module sets the sitemap, navigation, URL scheme, page templates and content model for any client, and, for a redesign, the content inventory, audit and redirect map. It runs after the brief (see U04) and goals (see U03) and before conversion paths (see U08) and page design. Its output is the site plan that the client approves at sign-off S2.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U06.1 | Start from the archetype overlay's page set and prune it: every page serves a named top task (see U04) or is a required utility or legal page (see U20), and names the one action it serves (see U03); a page with neither is cut. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U06.2 | The shared skeleton across client types is: home, one page per primary offer or program, proof (cases, reviews or results), people or about, the conversion page, contact, a confirmation page per conversion, and legal pages; overlays add or rename pages but keep this logic. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U06.3 | Each page has unique content for a distinct offer, task or place with its own proof; near-duplicate pages that swap a city or keyword and funnel to one page are not built. | universal | A | [source: https://developers.google.com/search/docs/essentials/spam-policies, A, 2026, opened 2026-10-30]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U06.4 | Primary navigation labels use the words the audience uses (from top tasks and search terms), not internal names, and the primary conversion is reachable from every page. | universal | B | [source: https://www.nngroup.com/articles/tree-testing/, B, 2023, opened 2026-10-30] | R |
| U06.5 | URLs use readable words joined by hyphens, one consistent case, and as few parameters as possible, with no session IDs and no fragments that change content; the URL pattern of each template is written in the site plan. | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/url-structure, A, 2026, opened 2026-10-30] | G |
| U06.6 | Every indexable page is reachable through a crawlable link from at least one other page with descriptive link text; no orphan pages; duplicate URLs redirect or carry a canonical to the preferred URL. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide, A, 2025, opened 2026-10-30] | G |
| U06.7 | Each page type has one template with a named section order; a structure needed twice becomes a content collection with a schema instead of a copied page. | universal | B | [source: https://atomicdesign.bradfrost.com/chapter-2/, B, 2016, opened 2026-10-30]; [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | G |
| U06.8 | Every collection field is declared with type, required or optional, owner and source (record field or interview); a template renders nothing for a null field and never shows a placeholder on a published page. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U06.9 | Utility pages exist: a 404 page that routes to top tasks, a confirmation page for each conversion pattern, and a service-unavailable page where the site has transactions. | universal | A | [source: https://design-system.service.gov.uk/patterns/, A, 2026] | G |
| U06.10 | Redesign: the content inventory lists every existing URL from sitemaps, server logs, analytics, the CMS and Search Console links, including images and files, with title, owner, topic, format, last-modified date and metadata. | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30]; [source: https://www.nngroup.com/articles/content-audits/, B, 2020, opened 2026-10-30] | G |
| U06.11 | Redesign: each inventoried item gets keep, update or remove, with an owner for updates; decisions are reviewed with the content owner, starting with top-task and high-traffic content. | universal | B | [source: https://www.nngroup.com/articles/content-audits/, B, 2020, opened 2026-10-30] | G |
| U06.12 | The redirect map sends each old URL with a successor to its closest equivalent by a permanent server-side redirect (301 or 308); removed content returns 404 or 410; no mass redirect to the homepage; each redirect goes straight to the final URL; where a chain cannot be avoided it stays short (Google: ideally no more than 3 hops); this module owns the redirect rule (U18.7 and U23.11 point here). | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | G |
| U06.13 | After a move, redirects stay for at least 1 year (longer where possible); internal links, canonicals, the sitemap and ad links point to new URLs; a Change of Address is filed only for domain or subdomain changes; index coverage is monitored (see U23). | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | G |
| U06.14 | Where budget allows, tree-test the proposed hierarchy as text only, before content and layout, with tasks that do not reuse the category labels; record success and directness, and relabel or regroup where tasks fail. | universal | B | [source: https://www.nngroup.com/articles/tree-testing/, B, 2023, opened 2026-10-30] | R |
| U06.15 | Card sorting is used only to generate groupings for a large or unfamiliar content set (30-50 cards; at least 15 participants for a qualitative sort) and its result is then tree-tested, never adopted directly. | universal | B | [source: https://www.nngroup.com/articles/card-sorting-definition/, B, 2024, opened 2026-10-30] | R |
| U06.16 | Where budget allows, a five-second test on the home and main landing templates checks first impression and message clarity (what is offered, what to do next); it is not treated as a usability test. | universal | B | [source: https://smashingmagazine.com/2023/12/five-second-testing-case-study, B, 2023, opened 2026-10-30] | R |
| U06.17 | A multi-language or multi-region site picks its URL structure (subdirectory or country domain) before URLs lock (see U22). | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/url-structure, A, 2026, opened 2026-10-30] | R |
| U06.18 | The sitemap, page specs and content matrix are approved at S2 before page design; a page added later goes through a change request. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |

## Anti-patterns
- Copying the last client's sitemap. The page set fits another business and pages ship empty. Fix: start from the overlay and prune to real offers and tasks (U06.1).
- Navigation named after the org chart or internal product names. Visitors cannot predict where things live. Fix: audience words, checked by a tree test where possible (U06.4, U06.14).
- A page per town with only the name swapped. It is a doorway pattern and adds nothing. Fix: one page per distinct offer or place with its own proof (U06.3).
- Relaunching without a redirect map, or pointing every old URL at the homepage. Bookmarks, links and rankings break. Fix: inventory, then one-to-one redirects (U06.10, U06.12).
- Hand-built repeated pages that drift apart. Fix: a collection with a schema (U06.7, U06.8).
- Adopting a card-sort result as the final menu. Fix: tree-test it first (U06.15).

## Checklist
- [ ] Every sitemap row names a top task or a utility or legal reason, plus its action (U06.1, U06.2).
- [ ] No near-duplicate pages (U06.3).
- [ ] Nav labels traced to audience words; conversion reachable from every page (U06.4).
- [ ] URL patterns documented and linted (U06.5).
- [ ] Crawl finds no orphans; duplicates resolve to one URL (U06.6).
- [ ] Templates and collection schemas defined; null fields render nothing (U06.7, U06.8).
- [ ] 404, confirmation and service-unavailable pages exist (U06.9).
- [ ] Redesign: inventory complete with keep, update or remove per row (U06.10, U06.11).
- [ ] Redirect map tested; no chains, no mass homepage redirects (U06.12).
- [ ] Post-move tasks scheduled (U06.13).
- [ ] Tree test, card sort or five-second test run where budgeted, or the reason it was skipped is logged (U06.14, U06.15, U06.16).
- [ ] Locale URL structure decided if needed (U06.17).
- [ ] S2 signed (U06.18).

## How an AI builder uses this
The builder reads the brief and top tasks (U04), the goals (U03), the record's `archetype`, `model` and `features`, and the matching overlays' page-set deltas. It writes the sitemap with a reason and action per page, the URL patterns, the template list with section order, the collection schemas and the content matrix. For a redesign it crawls the old site, builds the inventory and the redirect map, and tests every redirect on staging. It must refuse to create pages with no task or proof, city-swap pages, placeholder content on published pages, or a launch with an untested redirect map.

## Open questions
- Owner: which IA tests (tree, card sort, five-second) are in the standard price and which are add-ons.
- Owner: multi-location clients (one location template, per-location schema and listings, a finder); today only `business.locations` and U15 cover it; a multi-location overlay is an owner decision.
- Evidence: the five-second test has little published validation; the opened source is a practitioner case study.
- V18 (unverified, from tutorial 8aVeVLsfp24): the author lists the sections wanted and the model fills only the rest.
- V19 (unverified, from tutorial VMvZuhcDdnw): state out-of-scope pages in the brief, not only in-scope ones.
- V159 (unverified, from tutorial VMvZuhcDdnw): collapse phone navigation only above a set number of top-level links.
