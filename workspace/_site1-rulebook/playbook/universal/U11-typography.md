# U11. Typography

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers which type families a site uses, how they pair, how the scale, measure and line height are set, and what the fonts may cost in licenses and loading time. It runs once the direction is locked (see U09), sets type tokens used by the layout (see U10), and hands its file sizes to the performance budget (see U17).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U11.1 | Use two families, a display face and a text face that differ clearly (classification, weight or width), plus an optional mono for numerals only; two similar sans faces are not a pairing. | universal | C | [source: DR:C1, C, 2026]; [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | G |
| U11.2 | Create contrast inside the H1 with one change only: a weight change, an italic, or one word in the ink or muted color role, never the action color (U12.4). | universal | C | [source: DR:C2, C, 2026] | R |
| U11.3 | Define a fluid type scale of 5-7 named steps as `clamp()` tokens in rem; headings step down on small screens while body sizes stay the same, and a long H1 steps down further so the primary action stays in the first view (see U10). | universal | B | [source: https://design-system.service.gov.uk/styles/type-scale/, A, 2026, opened 2026-10-30]; [source: DR:C4, C, 2026] | G |
| U11.4 | Body text is at least 16 px effective size (16-18 px is the working range) and every font size is set in rem, so text follows the reader's browser settings. | universal | A | [source: https://designsystem.digital.gov/components/typography/, A, 2025, opened 2026-10-30]; [source: https://design-system.service.gov.uk/styles/type-scale/, A, 2026, opened 2026-10-30]; [source: DR:C4, C, 2026] | G |
| U11.5 | Body line height is at least 1.5 (1.55 to 1.65 is the working range); headings and short text use 1 to 1.35. | universal | B | [source: https://designsystem.digital.gov/components/typography/, A, 2025, opened 2026-10-30]; [source: DR:C4, C, 2026] | G |
| U11.6 | Running text has a measure of 45-80 characters per line (sources allow up to 90; the project caps at 80) with a target near 66 (the project range is 60-68), set as a `max-width` in `ch`. | universal | B | [source: https://designsystem.digital.gov/components/typography/, A, 2025, opened 2026-10-30]; [source: https://practicaltypography.com/line-length.html, B, 2026, opened 2026-10-30]; [source: https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html, A, 2024, opened 2026-10-30] | G |
| U11.7 | Left-align any text longer than three lines and every form; center only short headlines; never fully justify body text. | universal | B | [source: DR:C5, B, 2026]; [source: https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html, A, 2024, opened 2026-10-30] | G |
| U11.8 | With the WCAG 1.4.12 overrides applied (line height 1.5, paragraph spacing 2, letter spacing 0.12 and word spacing 0.16 times the font size) no text is clipped, overlapped or lost; fixed-height text boxes are not allowed. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html, A, 2024, opened 2026-10-30] | G |
| U11.9 | Headings, body copy, prices and calls to action are live text, never images of text; logotypes are the only exception (see U13). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html, A, 2024, opened 2026-10-30] | G |
| U11.10 | Every family has a license record before use (`brand.fonts`: `family`, `license`, `web_embedding`, `self_hosting`, `licensee`); fonts under the SIL Open Font License may be used on web pages, and a commercial font without a web-embedding grant in the client's or our name is not used. | universal | A | [source: https://openfontlicense.org/, A, 2007, opened 2026-10-30]; [source: playbook/kit/asset-and-proof-request.md, C, 2026] | G |
| U11.11 | For a family from an open-source font collection, read the license file or metadata that ships with that family instead of assuming one license for the whole collection, and rename any modified font that has a Reserved Font Name. | universal | A | [source: https://openfontlicense.org/open-font-license-official-text/, A, 2007, opened 2026-10-30]; [source: https://github.com/google/fonts, C, 2026, opened 2026-10-30] | R |
| U11.12 | Serve fonts as WOFF2 only, subset to the scripts the site needs (where the license allows subsetting), and use a variable font when several weights are needed. | universal | A | [source: https://web.dev/articles/font-best-practices, A, 2022, opened 2026-10-30] | G |
| U11.13 | Record each WOFF2 file's size and count the total as a line of the performance budget (see U17); for scale, the median font file on the web is about 35 KB. | universal | A | [source: https://almanac.httparchive.org/en/2025/fonts, A, 2025, opened 2026-10-30] | G |
| U11.14 | Preload only the font file used by the first-view text, with `crossorigin`; inline the `@font-face` rules in the head. | universal | A | [source: https://web.dev/articles/font-best-practices, A, 2022, opened 2026-10-30] | G |
| U11.15 | Set `font-display: swap` for the display face and `swap` or `optional` for body text, and give each family a system fallback stack tuned with `size-adjust` so the swap causes little layout shift. | universal | A | [source: https://web.dev/articles/font-best-practices, A, 2022, opened 2026-10-30] | G |
| U11.16 | Self-host fonts only behind a CDN with HTTP/2 or later and only when the license allows self-hosting; otherwise use the font service's own delivery. | universal | A | [source: https://web.dev/articles/font-best-practices, A, 2022, opened 2026-10-30] | R |
| U11.17 | Type contrast is checked like any color pair: text color tokens meet the contrast rule at their actual size and weight (see U12). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2024, opened 2026-10-30] | G |

## Anti-patterns
- The default body sans of every generated site, under a heading in the same face. The page reads as a template. Fix: a real pairing chosen in the direction (U11.1).
- Heading sizes copied from desktop to phones. A long H1 fills the first screen and pushes the action down. Fix: fluid steps that shrink headings (U11.3).
- Paragraphs across the full container width. Fix: a `ch` measure (U11.6).
- Centered multi-line paragraphs and centered forms. Readers lose the start of each line. Fix: left-align (U11.7).
- Fixed-height cards that clip text when a reader raises line or letter spacing. Fix: let boxes grow (U11.8).
- Headline text baked into a hero image. It cannot be read by screen readers, translated or resized. Fix: live text over the image with a scrim (U11.9, see U12).
- A font downloaded from a free font site with no license file. Fix: a license record per family (U11.10).
- Four families and nine static weights, all preloaded. Fix: two families, variable font, one preload (U11.12, U11.14).

## Checklist
- [ ] Two families plus optional mono, recorded with their contrast reason (U11.1).
- [ ] H1 uses at most one contrast device (U11.2).
- [ ] Type scale tokens use `clamp()` and rem; headings step down on phones (U11.3, U11.4).
- [ ] Body size, line height and measure tokens are within the ranges in U11.4, U11.5 and U11.6.
- [ ] No justified or centered long text; forms left-aligned (U11.7).
- [ ] Text-spacing override test passes with nothing clipped (U11.8).
- [ ] No images of text except logotypes (U11.9).
- [ ] `brand.fonts` has a license row per family, read from the family's own license file (U11.10, U11.11).
- [ ] WOFF2 only, subset, sizes recorded in the budget (U11.12, U11.13).
- [ ] One preload, `font-display` set, fallback stack with `size-adjust` (U11.14, U11.15).
- [ ] Hosting choice matches the license and the CDN condition (U11.16).
- [ ] Contrast guard covers every text token at its size (U11.17).

## How an AI builder uses this
The builder reads the locked direction and token file (see U09), `brand.fonts` and `brand.guide` from the record, and the languages from U22. It writes the type tokens (families, fallback stacks, scale steps, line heights, measure), the `@font-face` rules and the preload tag, then runs guards: font files are WOFF2 and listed in the budget, every family has a license row, body tokens sit inside the ranges, no text image appears outside the logo, and the text-spacing override test passes on each template at phone and desktop width. It must refuse to load a font with no license record, to bake headings or body copy into an image, to justify body text, or to preload every weight.

## Open questions
- Evidence: line-height advice differs between sources; Butterick gives 120-145 percent of the point size [source: https://practicaltypography.com/line-spacing.html, B, 2026, opened 2026-10-30], while USWDS asks for 1.5 or more on long text; this module follows the stricter value.
- Evidence: the pairing, H1-contrast and 16-18 px figures are practitioner material [source: DR:C4, C, 2026].
- Owner: whether third-party font services stay allowed for clients with EU or UK visitors; privacy effects of font services are a counsel question (see U20).
- Owner: a fixed font-byte budget per archetype (see U17).
- V101 (unverified, from tutorial 83geKREHQY0): fonts suggested in tutorials are candidates until license and WOFF2 size are checked.
- V102 (unverified, from tutorial 83geKREHQY0): choose pairings by site type and avoid overused default families.
- V103 (unverified, from tutorial 83geKREHQY0): the brief always names heading face, body face and hierarchy strength.
- V104 (unverified, from tutorial VMvZuhcDdnw): replace the default body sans after the build, keeping serif and sans contrast.
- Owner: fonts for non-Latin scripts (see U22).
