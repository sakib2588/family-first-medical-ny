# U09. Design direction and design system

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module turns the approved brief into a visual direction and a design system: concept directions that really differ, one locked direction, tokens in a portable file, a component inventory and a review loop. It runs after the brief (see U04) and site plan (see U06), and feeds hierarchy, type, color, imagery and motion (see U10 to U14). Its output is approved at sign-off S3.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U09.1 | The concept stage explores before it narrows: two or three directions per client or template, presented before any page build. | universal | B | [source: https://www.designcouncil.org.uk/our-resources/the-double-diamond/, B, 2019]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U09.2 | Each direction differs from every other on at least 4 of these 10 axes: layout density, typography treatment, weight play, visual metaphor, hero treatment, section rhythm, shape language, elevation, proof style, whitespace; color alone is not a difference. | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: https://www.designcouncil.org.uk/our-resources/the-double-diamond/, B, 2019] | G |
| U09.3 | Locked across all directions: positioning, voice, conversion strategy, required brand colors and fonts, and colors to avoid; free per direction: the palette roles and one heading and body font pair with a confirmed web license. | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U09.4 | Each direction is a complete proposal: an evocative name (never "Option 1"), palette with hex values, fonts with license source, a short visual approach, the axes it changes, and one line tying it to the brief; "clean and professional" as a description fails. | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | G |
| U09.5 | Directions are judged against the brief's audience, tasks and voice, not personal taste; the client approver locks one at S3, and palette or type changes after the lock go through a change request. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U09.6 | Tokens are defined before pages as a limited set of named options (color roles, type scale, spacing, radii, elevation, durations); components use tokens and never raw values. | universal | A | [source: https://designsystem.digital.gov/design-tokens/, A, 2025, opened 2026-10-30] | G |
| U09.7 | Tokens live in one source file in a portable format; the DTCG Format Module 2025.10 (JSON with `$value` and `$type`, `.tokens.json` files, curly-brace aliases) is an option, and it is a Community Group report, not a W3C standard. | universal | B | [source: https://www.designtokens.org/TR/2025.10/format/, B, 2025, opened 2026-10-30] | G |
| U09.8 | Primitive values are aliased to semantic roles (ground, surface, ink, muted, accent, states), and components reference only the roles, so a rebrand changes the mapping, not the components. | universal | B | [source: https://www.designtokens.org/TR/2025.10/format/, B, 2025, opened 2026-10-30]; [source: https://designsystem.digital.gov/design-tokens/, A, 2025, opened 2026-10-30] | G |
| U09.9 | Every text and background role pair in the tokens is contrast-checked by a build guard against the conformance target (see U12, U16). | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024] | G |
| U09.10 | The component inventory lists each component with purpose, props and defaults, states (default, hover, focus, disabled, error, loading), tokens used and where it is used, grouped from small parts up to page templates; each component renders with no props passed. | universal | B | [source: https://atomicdesign.bradfrost.com/chapter-2/, B, 2016, opened 2026-10-30]; [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | G |
| U09.11 | Standard controls (form fields, buttons, accordions, navigation, modals) take their behavior from an established public pattern library and only their look from the client tokens (see U15). | universal | A | [source: https://designsystem.digital.gov/, A, 2025]; [source: https://design-system.service.gov.uk/patterns/, A, 2026] | R |
| U09.12 | The design review checks foundations first (type pairing and scale, color roles), then each section at desktop and phone width for layout, type, spacing, depth, color, details, motion, density and phone layout, and ends with REFINE (exact changes) or REBUILD per section. | universal | B | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024] | R |
| U09.13 | A 1-to-5 appearance rubric (rendering, content relevance, layout harmony, modernness) is used only to rank versions of the same page; the absolute score is never quoted to a client, and a version below 3 is rejected before review time is spent. | universal | B | [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | R |
| U09.14 | Before design judgment, the page must load with every imported file present; then it is checked against the nine generated-site flaws, especially an uncustomized template, missing UI parts, misplaced text and a wrong background color. | universal | B | [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | G |
| U09.15 | The review loop is concept, lock, build, audit, refine; each pass is logged with its decision and approver, and the reviewer is not the agent that built the page, since a model reviewing its own build is not an independent check. | universal | B | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | R |
| U09.16 | Concepts and mockups use real proof or proof clearly labeled as a sample; "plausible" testimonials, statistics or people are never generated. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content, A, 2026]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | G |
| U09.17 | Craft details from the course quality bar (a recurring motif, layout tension, an inverted section) are optional and apply only where they do not hurt the primary action, the performance budget (see U17) or reduced-motion behavior (see U14). | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | R |
| U09.18 | The handoff includes a design system document: tokens, components, do and don't examples, and font and image licenses (see U24). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |

## Anti-patterns
- Three "directions" that are one layout in three palettes. The client chooses a color, not a direction. Fix: vary at least four axes (U09.2).
- Directions invented from taste, with no link to the brief. The winner is the prettiest, not the one that fits the audience. Fix: tie each to the brief and judge against it (U09.4, U09.5).
- Hex values pasted into components. Rebrands and dark mode become a search-and-replace job. Fix: semantic tokens (U09.6, U09.8).
- A custom dropdown or modal with novel behavior. It breaks keyboard and screen-reader use. Fix: pattern-library behavior (U09.11).
- The building agent grades its own page as excellent. Fix: independent reviewer, rubric for ranking only (U09.13, U09.15).
- Mockups filled with plausible fake reviews that later ship. Fix: real or labeled samples (U09.16).

## Checklist
- [ ] Two or three directions exist, each differing on at least four axes (U09.1, U09.2).
- [ ] Locked and free items are listed (U09.3).
- [ ] Each direction has name, palette, licensed fonts, approach, axes and brief link (U09.4).
- [ ] S3 lock recorded with approver (U09.5).
- [ ] Token file exists; components contain no raw values (U09.6, U09.7, U09.8).
- [ ] Contrast guard passes for all role pairs (U09.9).
- [ ] Component inventory complete with states and defaults (U09.10).
- [ ] Standard controls follow a pattern library (U09.11).
- [ ] Review log shows REFINE or REBUILD per section, rubric used for ranking only, flaws checked (U09.12, U09.13, U09.14).
- [ ] Reviewer differs from builder (U09.15).
- [ ] No unlabeled sample proof anywhere (U09.16).
- [ ] Craft details checked against budgets (U09.17).
- [ ] Design system document in the handoff pack (U09.18).

## How an AI builder uses this
The builder reads the signed brief (U04), the site plan (U06), the record's `brand_assets` and `voice`, and the vertical overlay's UX patterns. It writes the directions file (name, palette, fonts, approach, axes, rationale), then after the lock writes the token file, the component inventory and components with props and defaults. It runs the foundations-first audit with screenshots at desktop and phone widths and logs each pass. It must refuse to present directions that differ only in color, to use fonts or images without a license record, to generate plausible proof, to hard-code values outside tokens, or to sign off its own build as the reviewer.

## Open questions
- Owner: whether the concept stage runs per client or only once per reusable template for low-budget sites.
- Evidence: the ten axes and the audit come from course material (grade C); no independent study tests them.
- V52 (unverified, from tutorial dYUL9-m6U1o): generate about four concepts before building.
- V53 (unverified, from tutorial drHar9V62LE): each concept states its intent and trade-offs and is dropped if off-brand.
- V65 (unverified, from tutorial Ysr7oNDajJI): reuse the same tokens across the site and other client documents.
- V73 (unverified, from tutorial G-F5Qvy-7KM): a recreated reference is a base to change until little of it remains; originality of reference-based work is a counsel question.
