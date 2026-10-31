# Universal Website Design Playbook: structure (fixed ids)

Source: `playbook/_research/R14-universal-playbook-research.md` Part 1. These ids are the contract every author, check script and cross-link uses. Do not rename or renumber; add new ids at the end.

Status values: `planned` (no file) | `draft` (file written, not reviewed) | `reviewed` (passed two-reviewer grading) | `parked` (blocked, reason in the morning report).

## Layer A: universal modules (`playbook/universal/Uxx-<slug>.md`)

| id | slug | module | question it answers |
|---|---|---|---|
| U00 | how-to-use | How to use this playbook | which files to read, in what order; what binds and what is advice; how overlays merge |
| U01 | engagement | Engagement: qualify, scope, price, contract | is this a fit; scope in and out; price model; SOW contents; who approves |
| U02 | discovery-intake | Discovery and intake | what to learn before planning; when to decline |
| U03 | goals-metrics | Goals, success metrics, measurement plan | one primary conversion; KPIs with baseline, target, source |
| U04 | audience-brand | Audience, positioning and brand | who it is for; tasks and objections; voice; narrative |
| U05 | proof-assets | Proof, assets and rights | what real proof exists; permission; how each item is shown |
| U06 | ia-page-sets | Information architecture and page sets | sitemap, navigation, URLs, templates, redirects |
| U07 | content-copy | Content, copy and voice | job of each page; message hierarchy; claims rules; human-edit rule |
| U08 | conversion-paths | Conversion paths: CTAs, forms, booking, checkout, donation | which pattern; field minimums; errors; confirmation |
| U09 | design-direction | Design direction and design system | concept directions; tokens; component inventory |
| U10 | hierarchy-layout | Visual hierarchy, layout and grid | what the eye sees first; grid; spacing; rhythm |
| U11 | typography | Typography | pairing; scale; measure; loading budget |
| U12 | color | Color | palette roles; contrast pairs; dark mode |
| U13 | imagery | Imagery, photography, illustration, video | real vs stock vs AI; licensing; alt text; formats |
| U14 | motion | Motion and interaction | what motion is for; budget; reduced motion; scroll rules |
| U15 | components-nav | Components and navigation patterns | header, footer, cards, filters, search, finders |
| U16 | accessibility | Accessibility | conformance target; test method; statement page |
| U17 | performance | Performance | budgets; third-party scripts; image pipeline |
| U18 | seo-schema | SEO, structured data and AI search | query map; titles; schema per archetype; spam limits |
| U19 | analytics | Analytics, attribution and experiments | event map; consent-aware analytics; when a test is valid |
| U20 | legal-privacy | Legal, privacy, consent and claims | required pages; consent posture; endorsements; AI disclosure |
| U21 | security-hosting | Security and hosting | headers; forms and spam; secrets; access matrix |
| U22 | multilingual | Multilingual and localization (optional) | languages; hreflang; locale formats |
| U23 | qa-launch | QA and launch | QA matrix; launch runbook; rollback; T+7/30/90 checks |
| U24 | handoff-maintenance | Handoff, training and maintenance | ownership transfer; docs; care plan; incident runbook |

## Layer B: overlays (`playbook/overlays/<axis>/<slug>.md`)

Merge order, which layer wins, and conflict rules: see U00 step 4 ("How an AI builder uses this"); every override is logged per U00.8.

**vertical (client type, 15):** local-trades, restaurants, legal-accounting, medical-wellness, real-estate, ecommerce, saas-b2b, portfolios-creatives, nonprofits, education-courses, events-venues, coaches-personal-brands, manufacturers-industrial, local-retail-salons-fitness, regulated-finance.

**model (business model, 7):** lead-gen, microsite, ecommerce, subscription, booking, donations, ticketing.

**jurisdiction (6):** us-federal, new-york, nyc, california, eu-eea, uk.

Overlay headings (identical in every overlay, so they merge mechanically): `Trigger`, `Primary conversion`, `Page-set delta`, `Trust signals`, `UX patterns`, `Schema types`, `Compliance rows` (rule, source, date checked, counsel flag), `Common mistakes`, `Reference sites`, `Open counsel questions`.

## Layer C: kit (`playbook/kit/`)

intake-questionnaire.md, kickoff-checklist.md, asset-and-proof-request.md, content-request.md, signoff-log.md, handoff-pack.md, site.yaml (generalized client record; null means omit).

## Authoring rules (binding)

- One author per file per round. A module may link to other modules by id (`see U12`), never copy them.
- Rule table columns: `id | rule | scope | grade | source | enforce`. Rule ids are `<module id>.<n>` (for example `U12.3`); overlay rules `<slug>.<n>`. `scope` is always `universal` in modules; a module row that holds only for one client type, model or jurisdiction begins its rule text with the U00.18 condition `When <record key> includes <value>:`, and overlay rows use `overlay:<slug>`. `grade` is A, B or C (see the plan's Global Constraints). `enforce` is G (a guard can check) or R (a reviewer judges).
- Every number, law, study, price or threshold has a source tag: `source:` then the URL or file, the grade and the year, inside square brackets (for example [source: https://www.w3.org/TR/WCAG22/, A, 2024]). No source means delete it or write "unverified".
- A row's grade is the grade of its sources for the whole rule: a row is graded A only when its A sources alone carry every part of it; a `DR:<id>` source is itself at most B and adds no grade, so a part of a rule that rests only on `DR:` (or on another B source) caps the row at B. One source carries one grade in every file that cites it.
- Overlay rule ids: `vertical/ecommerce` rows are numbered `ecommerce.101` and up, `model/ecommerce` rows `ecommerce.1` to `ecommerce.100`, so the shared slug never collides; a link names the axis (`overlay:vertical/ecommerce` or `overlay:model/ecommerce`).
- At most 25 words quoted from any source [source: playbook/_research/R13-parts/STANDING-RULES.md, C, 2026]. Course material and transcripts are summarized, never copied.
- Red lines apply: no fabricated reviews, people, addresses or proof; legal items are flagged `counsel` and never described as "compliant".

## Status board (updated by the controller)

| id | status | author task |
|---|---|---|
| U00-U24 | draft (25 files written 2026-10-30, checks pass; adversarial review T11 pending) | T7 |
| overlays (28) | draft (17 full overlays); `Status: planned` (11 stubs: 5 model, 6 jurisdiction; U00.7) | T8 |
| kit (7) | draft (7 files written 2026-10-30) | T9 |
