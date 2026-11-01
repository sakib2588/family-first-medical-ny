# Plan: tighter footer, like the base site's (2026-11-02)

Owner complaint (raised before, shown with a reference now): our footer link lists are far too loose and the footer is tall; the base site's (familyfirstmedicalny.com) is compact.

## Measured
| | Base site (phone, from the owner's screenshot, scaled to 390 px) | Ours now (390 px) |
|---|---|---|
| Link-to-link pitch in Explore | about 33 px | 47 px (`min-h-11` = 2.75 rem x 17 px root) |
| Footer height | about 760 px | 981 px |
| Space under the last row | small | about 120 px (`pb-28`, reserved for the sticky bar) |
| Lists | 4 links | Explore 7 links + Policies 5 links, so they run long |

## Causes in `src/components/home/Footer.astro`
1. Every link is `min-h-11` (47 px) with no way to be tighter.
2. `pb-28` bottom padding on phone, but the sticky bar already hides over `#site-footer` (StickyBar.astro hides it), so the reserve is empty space.
3. `gap-y-8` between blocks, `mt-3` under headings, `mt-8` before the bottom row.

## Fix
1. List links (Explore, Policies): `min-h-9` (about 38 px pitch is still >= 36). Target pitch 36 px, which is above the WCAG 2.2 AA minimum (2.5.8: 24 px) and close to the base site's 33 px. Phone numbers stay 44 px (they are the main action).
2. Phone bottom padding `pb-28` -> `pb-[calc(1.5rem+env(safe-area-inset-bottom))]`.
3. `gap-y-8` -> `gap-y-6`, heading to list `mt-2` -> `mt-1`, `mt-8` -> `mt-6`.
4. Record the exception: the project rule is 44 px targets; footer text links in dense lists get 36 px. QA script threshold: allow footer list links >= 36 px, flag anything else under 44 px.
5. Desktop: same link pitch change (desktop footer is 567 px; keep layout).

## Targets / checks
Footer height at 390 px <= 780 px; Explore pitch 36 px; no overflow; no tap target under 44 px outside the footer lists; phone numbers still 44 px; screenshot before/after at 390 and 1440.

## Risk
Touch accuracy on a 36 px pitch: mitigated by horizontal spacing (two columns apart), still above WCAG AA. If the owner wants 44 px back it is one class.

## Review result and what was done (2026-11-02)
Reviewer: APPROVE WITH CHANGES. Blocking point: StickyBar only hid over the footer on Home (observers lived inside the `hero` branch), so removing `pb-28` would have hidden the copyright row under the bar on inner pages. Fixed in `StickyBar.astro` (observers now run on every page) before trimming the padding. Also: list links use a separate `listLink` (flex, `min-h-9`, 38 px), "Language help" and phone numbers stay 44 px, address/tagline/gap spacing trimmed, QA script exempts footer list links >= 38 px, comments and CLAUDE.md updated.
Result at 390 px: footer 981 -> 773 px, Explore pitch 47 -> 38 px. Desktop footer 567 -> 499 px. Bar never overlaps the last footer row on Home, /doctors, /locations, /legal.
