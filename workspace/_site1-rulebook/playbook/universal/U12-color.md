# U12. Color

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers which colors a site uses, what job each one has, which pairs must pass contrast, and how dark mode and brand colors fit in. Color here is brand fit and legibility, not a proven conversion lever. It runs after the direction lock (see U09) and supplies the role tokens that hierarchy, type and components use (see U10, U11, U15); the contrast guard also feeds accessibility QA (see U16).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U12.1 | The palette names its roles (ground, ink, one action color (the accent), a muted neutral, plus any fixed brand colors from `brand.colors.fixed`, each with a stated job), with tints and shades of those; components use only role tokens, never raw hex values. | universal | B | [source: DR:D1, B, 2026]; [source: https://www.nngroup.com/articles/visual-hierarchy-ux-definition/, B, 2021, opened 2026-10-30] | G |
| U12.2 | Ink is a dark tone of the brand hue or a true neutral, and the accent has a darker token for hover and pressed states and a light tint for backgrounds, all derived from the role, not new hues. | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | G |
| U12.3 | State colors (error, warning, success, info, disabled, focus) are their own token families, separate from the accent and the brand palette. | universal | A | [source: https://designsystem.digital.gov/design-tokens/color/state-tokens/, A, 2025, opened 2026-10-30] | G |
| U12.4 | The action color marks actions only, and no other role may look like a button; brand colors may appear in headings and graphics when they pass U12.6 and cannot be mistaken for an action. | universal | C | [source: DR:D4, C, 2026] | G |
| U12.5 | The primary action color differs visibly from every other color on the page, including the error and success states, so the one primary action stands out; it also differs by shape or weight, not hue alone (see U08). | universal | B | [source: https://lawsofux.com/von-restorff-effect/, B, 2026, opened 2026-10-30]; [source: DR:D4, C, 2026] | R |
| U12.6 | Every text and background pair meets at least 4.5:1, and large text (at least 24 px, or about 18.66 px bold) at least 3:1; ratios are not rounded, so 4.499:1 fails. | universal | A | [source: DR:D3, B, 2026]; [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2024, opened 2026-10-30] | G |
| U12.7 | Control boundaries, focus indicators, selected and checked states, and the meaningful parts of icons and charts have at least 3:1 against adjacent colors. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html, A, 2024, opened 2026-10-30] | G |
| U12.8 | Text over photos or video sits on a scrim or panel computed per palette against the worst-case light patch (for video, the brightest frame), and the measured pair meets U12.6. | universal | B | [source: DR:D3, B, 2026]; [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2024, opened 2026-10-30] | G |
| U12.9 | Color is never the only cue: errors and required fields carry text or an icon, chart series carry labels or patterns, and links inside body text are underlined (or reach 3:1 against the body text plus a non-color cue on focus and hover). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html, A, 2024, opened 2026-10-30] | G |
| U12.10 | A brand color that fails contrast stays only on large, decorative or logo uses; a darker or lighter variant that passes U12.6 is derived for text and buttons, since low contrast chosen by the designer is not covered by the logotype exception. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2024, opened 2026-10-30] | G |
| U12.11 | If a dark theme exists, light and dark themes both meet U12.6 and U12.7, are built by remapping the same role tokens, follow `prefers-color-scheme`, and declare `color-scheme`. | universal | B | [source: DR:D6, B, 2026]; [source: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme, B, 2026, opened 2026-10-30] | G |
| U12.12 | Text-heavy sites default to the light theme unless the brief says otherwise; a dark theme is offered as a choice for long reading, and a dark-first look is a brand decision, not a readability one. | universal | B | [source: https://www.nngroup.com/articles/dark-mode/, B, 2020, opened 2026-10-30] | R |
| U12.13 | Each palette is justified in the directions file by brand fit, audience and legibility; no client material claims that a color raises conversions, while overall design quality is still treated as part of credibility. | universal | B | [source: DR:D2, B, 2026] | R |
| U12.14 | Avoid the AI-default look (reflex purple-to-blue gradients, stock warm palettes, glow everywhere); a gradient appears only when it signals something. | universal | C | [source: DR:D5, C, 2026] | R |
| U12.15 | Section tones (ground, tint, inverted) come from the same roles, and every text and control token is re-checked on each tone it appears on (see U10). | universal | B | [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2024, opened 2026-10-30]; [source: DR:F1, C, 2026] | G |
| U12.16 | The contrast guard runs at build time over all role pairs, every state and every theme, and fails the build on any pair below its threshold (see U09). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2024, opened 2026-10-30]; [source: https://designsystem.digital.gov/design-tokens/color/overview/, A, 2025, opened 2026-10-30] | G |

## Anti-patterns
- The action color (accent) used on headings, icons and dividers. The buttons stop standing out. Fix: action color for actions only; brand colors carry identity (U12.4).
- A red call-to-action button next to red error text. Visitors read the action as a warning. Fix: separate state tokens (U12.3, U12.5).
- Light gray body text chosen because it "looks premium". It fails contrast and is not covered by any exception (U12.6, U12.10).
- White headline on a photo checked by eye on one screenshot. Bright patches make it unreadable. Fix: a measured scrim (U12.8).
- Form errors shown only as a red border. Fix: text and icon as well (U12.9).
- A dark theme made by inverting colors. Accent and state colors fail on the new ground. Fix: remap tokens and re-check (U12.11).
- Pitching a color as a conversion booster. No source supports it. Fix: justify by brand fit and legibility (U12.13).
- A reflex gradient and glow on every card. The site reads as generated. Fix: U12.14.

## Checklist
- [ ] Role tokens exist for ground, ink, action color (accent), muted, any fixed brand colors and tints; no raw hex in components (U12.1, U12.2).
- [ ] State token families exist and differ from the accent (U12.3).
- [ ] Accent appears only on action elements (U12.4, U12.5).
- [ ] Contrast guard passes for text pairs, non-text pairs, states, tones and themes (U12.6, U12.7, U12.15, U12.16).
- [ ] Every text-over-image block has a measured scrim (U12.8).
- [ ] No meaning carried by color alone; body links underlined or otherwise marked (U12.9).
- [ ] Brand colors that fail contrast are limited to large, decorative or logo use (U12.10).
- [ ] Dark theme, if any, built from remapped tokens and checked (U12.11, U12.12).
- [ ] Palette rationale written in brand-fit terms; no conversion claim (U12.13).
- [ ] AI-default look reviewed and removed (U12.14).

## How an AI builder uses this
The builder reads `brand.colors.fixed` and `brand.colors.moving_away_from` from the record, the locked direction and token file (see U09), and the brief's audience and voice (see U04). It writes role and state tokens, derives hover, pressed and tint shades, maps section tones, builds the dark theme only if the brief asks for one, and runs the contrast guard over every pair, state, tone and theme. It computes each scrim against the worst light patch of the actual image. It must refuse to use the accent decoratively, to ship a pair below threshold, to carry meaning by color alone, or to tell a client that a color will raise conversions.

## Open questions
- Evidence: the named-role palette and the action-color-only rule are practitioner and project rules (fixed brand colors added in fix round 3, project policy) [source: DR:D1, B, 2026]; the AI-default list is from a secondary search [source: DR:D5, C, 2026].
- Evidence: the credibility link to design quality rests on an old study (see the split map note for DR:D2).
- Owner: whether every site gets a dark theme or only archetypes with long reading.
- Owner: whether WCAG 2.2 AA stays the universal target, or AAA for text in some archetypes (see U16).
- V105 (unverified, from tutorial 5QM78yqpONI): give exact hex values for ground, text and accent in the first prompt and treat the client's real colors as fixed.
- V106 (unverified, from tutorial 83geKREHQY0): list the accent's jobs in the brief and forbid it elsewhere.
- V107 (unverified, from tutorial 83geKREHQY0): a rough 60-30-10 balance of ground, surfaces and accent.
- V108 (unverified, from tutorial VMvZuhcDdnw): about five named roles in hex; restraint signals quality.
- V110 (unverified, from tutorial 83geKREHQY0): choose dark or light by client type.
- V111 (unverified, from tutorial drHar9V62LE): turn a reference image into a color-scheme file.
- V112 (unverified, from tutorial 5QM78yqpONI): media behind text needs slow movement and controlled light.
- V113 (unverified, from tutorial 5QM78yqpONI): size the scrim by measuring the brightest frame.
- V114 (unverified, from tutorial 83geKREHQY0): put the contrast thresholds in the brief; the check stays a guard.
