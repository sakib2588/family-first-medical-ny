# U10. Visual hierarchy, layout and grid

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers what the eye sees first on each template, and how the grid, spacing scale and section rhythm deliver that order on a small phone, a common phone and a wide desktop. It runs after the direction is locked (see U09) and before type, color and imagery details are tuned (see U11, U12, U13); its checks feed the design review and launch QA (see U23).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U10.1 | Each page template has a written first-look order (for example: H1 naming the offer, primary action, supporting visual or proof, secondary link), and a blurred screenshot at 5-10 px blur shows that order with no unintended focal point. | universal | B | [source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/, B, 2021, opened 2026-10-30] | R |
| U10.2 | The first small-screen view (390 x 844) holds what the business or organization offers and where or for whom, one specific H1, the primary action and one secondary text link, all visible without scrolling. | universal | B | [source: DR:A1, B, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U10.3 | The hero is never full-viewport with nothing below: at 390 x 844 and at 1440 x 900 a visible part of the next section shows at the fold, and the page never says "scroll down" (old study, 2016: use the direction, not a figure). | universal | B | [source: DR:A3, B, 2026]; [source: https://www.nngroup.com/articles/illusion-of-completeness/, B, 2016, opened 2026-10-30] | G |
| U10.4 | No false floor sits at or just above the fold: no full-width rule, large empty band or ad-like interruption that makes the page look finished (old study, 2016: use the direction, not a figure). | universal | B | [source: https://www.nngroup.com/articles/illusion-of-completeness/, B, 2016, opened 2026-10-30] | R |
| U10.5 | Within one section use at most three size levels and at most two large elements, so scale signals importance instead of competing for it. | universal | B | [source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/, B, 2021, opened 2026-10-30] | R |
| U10.6 | Hierarchy never depends on color alone: the most important element also differs by size, weight, position or space (see U12). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html, A, 2024, opened 2026-10-30]; [source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/, B, 2021, opened 2026-10-30] | R |
| U10.7 | Every margin, padding and gap comes from a spacing token on a 4 px step written in rem (0.25rem, 0.5rem, 1rem and up); components contain no raw spacing values. | universal | B | [source: https://designsystem.digital.gov/design-tokens/spacing-units/, A, 2025, opened 2026-10-30]; [source: DR:C4, C, 2026] | G |
| U10.8 | Use one grid for all sections, alternate section tones on purpose (an inverted section is optional, a taste choice), and keep 64-96 px between sections on desktop, scaled down on phones through the same token. | universal | C | [source: DR:F1, C, 2026] | G |
| U10.9 | Group by proximity: the space inside a group is always smaller than the space between groups, so the page reads as a whole in seconds. | universal | B | [source: DR:F5, B, 2026]; [source: https://lawsofux.com/law-of-proximity/, B, 2026, opened 2026-10-30] | R |
| U10.10 | Keep standard patterns: logo top-left linking home, navigation at the top, a standard menu icon on phones; a moved logo needs a stated reason (old study, 2016: use the direction, not a figure). | universal | B | [source: DR:F5, B, 2026]; [source: https://www.nngroup.com/articles/logo-placement-brand-recall/, B, 2016, opened 2026-10-30] | G |
| U10.11 | The layout reflows at 320 CSS px width with no horizontal scrolling and no clipped or overlapping text, except maps, data tables and similar two-dimensional content. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html, A, 2024, opened 2026-10-30] | G |
| U10.12 | Each template is screenshotted and reviewed at 320, 360, 390 x 844 and 1440 px; the phone layout is designed (order changed, items hidden or tightened), not only stacked from desktop. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | R |
| U10.13 | At 1440 px the content container is capped (for example near the 1200 px USWDS named width) and text columns keep the measure set in U11; body text never runs the full screen width. | universal | B | [source: https://designsystem.digital.gov/design-tokens/spacing-units/, A, 2025, opened 2026-10-30]; [source: https://practicaltypography.com/line-length.html, B, 2026, opened 2026-10-30] | G |
| U10.14 | Breaking the grid on purpose (an overlap, a full-bleed band) is optional, at most once per page, and never at the cost of the primary action. | universal | C | [source: DR:F4, C, 2026] | R |
| U10.15 | Depth effects (tinted shadow, 1 px highlight, soft glow, at most 3-4 glass surfaces with solid fallbacks) are optional and never cost speed or the primary action. | universal | C | [source: DR:F2, C, 2026] | R |
| U10.16 | Hierarchy is judged with the real content in place, not placeholder text, since a bold image or long heading can override the intended order. | universal | B | [source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/, B, 2021, opened 2026-10-30] | R |
| U10.17 | The design review runs the creative-director audit (foundations first, then each section at phone and desktop width with a REFINE or REBUILD verdict) and adds a usability pass against the ten heuristics; the course grading stays a review aid, not proof (see U09). | universal | B | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024] | R |
| U10.18 | The six-principle quality bar (one recurring motif, authored motion, layout tension, typography as a tool, micro-details, visual rhythm) is a prompt list for the review, not a pass gate; any item that hides the primary action or breaks a budget is dropped (see U14, U17). | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024] | R |

## Anti-patterns
- A full-screen hero image or video with nothing below it. Visitors take it as the whole page and miss the content. Fix: let the next section show at the fold (U10.3) [source: https://www.nngroup.com/articles/illusion-of-completeness/, B, 2016, opened 2026-10-30].
- Everything large and bold. Nothing leads, so nothing is seen first. Fix: limit size levels and large elements (U10.5).
- The accent color is the only signal of importance. Color-blind visitors lose the order. Fix: add size, weight or space (U10.6).
- Raw pixel paddings that drift between sections. Rhythm breaks and edits become guesswork. Fix: spacing tokens only (U10.7).
- The desktop layout squeezed into one column on phones, with the primary action several screens down. Fix: design the phone order (U10.2, U10.12).
- Body text spanning a wide monitor. Lines become too long to track. Fix: cap the container and keep the measure (U10.13).
- A centered heading over a grid of identical cards in every section, by reflex. The page looks generated. Fix: run the audit and change layout per section where the content calls for it (U10.17).
- Craft details stacked until the call to action is buried. Fix: drop any bar item that costs the primary action (U10.18).

## Checklist
- [ ] First-look order is written per template and confirmed by the blur test (U10.1, U10.16).
- [ ] Phone first view holds offer, H1, primary action and one secondary link (U10.2).
- [ ] Next section visible at the fold on phone and desktop; no false floor; no "scroll down" text (U10.3, U10.4).
- [ ] Size levels and large elements per section within limits; hierarchy holds in grayscale (U10.5, U10.6).
- [ ] No raw spacing values in components; spacing tokens on the token step in rem (U10.7).
- [ ] One grid, tone alternation with one inverted section, section gaps from tokens (U10.8).
- [ ] Group spacing smaller than between-group spacing; standard header pattern (U10.9, U10.10).
- [ ] No horizontal scroll or clipped text at the smallest test width (U10.11).
- [ ] Screenshots at all test widths reviewed; phone layout deliberately ordered (U10.12).
- [ ] Wide-screen container capped and measure kept (U10.13).
- [ ] Grid break and depth effects, if any, checked against the primary action and speed budget (U10.14, U10.15).
- [ ] Audit log with REFINE or REBUILD per section and the heuristic pass; quality bar used as prompts only (U10.17, U10.18).

## How an AI builder uses this
The builder reads the locked direction and tokens (see U09), the site plan and page sets (see U06), `goals.primary` and `goals.secondary` from the record (see U03), and the message hierarchy (see U07). For each template it writes the first-look order, sets the grid and the spacing tokens, builds the sections, then captures screenshots at the test widths of U10.12 with the playwright-cli skill, runs the blur test and the reflow check, and logs the creative-director audit with a verdict per section. Mechanical checks (fold visibility of the next section, elements in the first phone view, raw spacing values, horizontal scroll) run as guards. It merges the vertical overlay's first-view items (for example a license line) only from the overlay. It must refuse to ship a full-viewport hero with nothing below, to put "scroll down" on a page, to add a grid break or depth effect that hides the primary action, or to sign off a layout it built itself (see U09).

## Open questions
- Evidence: the 64-96 px section gap and the six-principle bar are course and practitioner material; no independent study was found [source: DR:F1, C, 2026].
- Evidence: the illusion-of-completeness and logo studies are from 2016 and desktop-led; phone behavior may differ.
- V90 (unverified, from tutorial 5QM78yqpONI): read all section padding from one shared token.
- V91 (unverified, from tutorial 83geKREHQY0): name micro and macro space in the brief, then set exact numbers.
- V92 (unverified, from tutorial 83geKREHQY0): explain to clients that empty space is part of the design.
- V93 (unverified, from tutorial 83geKREHQY0): specify the hero in five parts, each with a stated job.
- V94 (unverified, from tutorial Ivd-dxxPvLE): build and judge the hero alone before the rest.
- V95 (unverified, from tutorial VMvZuhcDdnw): headline, sub-line and body in three clearly different size steps.
- V96 (unverified, from tutorial VMvZuhcDdnw): a dedicated phone pass deciding what to hide, tighten and resize.
- V97 (unverified, from tutorial Ysr7oNDajJI): a layout-review pass for clipped or overflowing text.
- V98 (unverified, from tutorial Ysr7oNDajJI): a screen-critique pass on what stands out first.
- Owner: whether dense archetypes (dashboards, catalogs) get their own spacing scale in an overlay.
