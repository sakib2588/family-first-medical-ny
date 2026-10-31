# U14. Motion and interaction

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers what motion is for on a site, how much is allowed, how it behaves for people who ask for less, and which scroll and 3D effects are off limits. It runs after the design direction is locked (see U09) and the page plan is set (see U06), and its limits are measured against the performance budget (see U17) and the accessibility target (see U16). Many tutorials sell scroll-scrubbed video, 3D scenes and smooth-scroll libraries as the premium default; this module bounds them with rules.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U14.1 | Every animation has a stated job (feedback on an action, a change of state, orientation after navigation, or showing how parts relate) recorded in a motion inventory; an animation with no job is removed. | universal | B | [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024, opened 2026-10-30]; [source: DR:B4, B, 2026] | R |
| U14.2 | The motion inventory is the motion budget: for each page it lists every animation with trigger, animated property, duration token and reduced-motion behavior, and the page ships only what the inventory lists. | universal | B | [source: DR:B4, B, 2026]; [source: DR:B5, C, 2026] | G |
| U14.3 | Decorative motion is written inside `@media (prefers-reduced-motion: no-preference)`; with the preference set to `reduce`, movement is removed or replaced by an instant or opacity-only change, never only slowed. | universal | A | [source: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html, A, 2024, opened 2026-10-30] | G |
| U14.4 | Script-driven animation (including any library) reads the same preference with `matchMedia` before it starts and does not start under `reduce`; this adopts WCAG 2.3.3, a Level AAA criterion, above the AA target. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html, A, 2024, opened 2026-10-30] | G |
| U14.5 | Native scroll is never hijacked, slowed or redirected on a task page (any page whose job is to inform, sell or collect a form). | universal | B | [source: DR:B1, B, 2026]; [source: https://www.nngroup.com/articles/scrolljacking-101/, B, 2023, opened 2026-10-30] | G |
| U14.6 | A scroll-driven effect never takes over native scroll, holds no essential text, sits between normally scrolling sections and keeps the primary action reachable; tighter limits for trades sites are in U14.20. | universal | B | [source: DR:B2, C, 2026]; [source: https://www.nngroup.com/articles/scrolljacking-101/, B, 2023, opened 2026-10-30] | R |
| U14.7 | Motion never delays the primary action or a form: no preloader or intro sequence before content on task pages; autoplay video follows U13.18 (U13 owns it), and carousels, marquees and other auto-advancing content follow U14.8; tighter trades limits are in U14.21. | universal | B | [source: DR:B3, B, 2026] | G |
| U14.8 | Where moving or auto-advancing content is allowed (a showcase page), anything that starts by itself and runs more than 5 seconds has a visible pause or stop control, ideally one control for all motion on the page. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html, A, 2024, opened 2026-10-30] | G |
| U14.9 | Use small fades and reveals, `@supports`-guarded scroll timelines and non-linear easing on hover; never animate the H1, the primary action or the LCP element, and keep every reveal target visible when JavaScript does not run. | universal | B | [source: DR:B4, B, 2026] | G |
| U14.10 | One signature motion moment per page at most, and it is never the hero headline or the primary action. | universal | C | [source: DR:B5, C, 2026] | R |
| U14.11 | WebGL, canvas scenes and smooth-scroll libraries stay off task pages and appear only on a showcase page the owner approved in writing. | universal | B | [source: DR:B6, B, 2026] | G |
| U14.12 | CSS first: transitions, keyframes and CSS scroll timelines are the default, and a JavaScript animation library is added only when CSS cannot express the effect (sequenced timelines, physics, 3D), with the reason written in the inventory. | universal | B | [source: https://web.dev/articles/animations-guide, B, 2020, opened 2026-10-30]; [source: DR:B4, B, 2026] | R |
| U14.13 | Animate only `transform` and `opacity`; never animate layout properties such as `top`, `left`, `width` or `height`, and add `will-change` only to fix a measured problem. | universal | B | [source: https://web.dev/articles/animations-guide, B, 2020, opened 2026-10-30] | G |
| U14.14 | An approved 3D or heavy-animation showcase still meets the performance budget measured on a phone profile (see U17), loads the scene only after the main content, and shows a static image when WebGL is unavailable or reduced motion is set. | universal | B | [source: DR:B6, B, 2026]; [source: https://web.dev/articles/animations-guide, B, 2020, opened 2026-10-30] | G |
| U14.15 | Smooth scrolling is limited to in-page anchor jumps, set inside the `no-preference` query; wheel and touch scrolling stay native, and anchor targets land below any sticky header (see U16). | universal | B | [source: DR:B1, B, 2026]; [source: https://www.nngroup.com/articles/scrolljacking-101/, B, 2023, opened 2026-10-30] | G |
| U14.16 | No sound plays automatically; any audio that does play for more than 3 seconds has a control to stop it or set its volume. | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U14.17 | Information or actions shown on hover are also reachable by keyboard focus and by tap, and pointer-only decoration (custom cursors, cursor followers) is not used on task pages. | universal | B | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30]; [source: DR:B3, B, 2026] | R |
| U14.18 | An animated number (a counter or count-up) is shown only when the figure is a sourced fact in the client record; animation never adds a claim. | universal | C | [source: vault/wiki/compliance/red-lines.md, C, 2026] | G |
| U14.19 | Before sign-off each page is rendered three ways: normal, with reduced motion emulated, and with JavaScript disabled; content, the primary action and forms must work in all three. | universal | B | [source: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion, A, 2026, opened 2026-10-30]; [source: DR:B4, B, 2026] | G |
| U14.20 | When archetype includes local-trades: a scroll-driven effect is also short, below the fold, desktop only and vertical (trades taste rule, not a usability finding). | universal | C | [source: DR:B2, C, 2026] | R |
| U14.21 | When archetype includes local-trades: no typewriter text, autoplay video, carousel or marquee on task pages (trades rule set, not a usability finding). | universal | B | [source: DR:B3, B, 2026] | G |

## Anti-patterns
- A full-screen video hero that plays forward as the visitor scrolls. Visitors think the page is broken or finished, and phones carry the weight. Fix: a still hero and native scroll (U14.5, U14.6).
- A reduced-motion setting that only slows the animation. Movement still triggers discomfort. Fix: remove or replace motion (U14.3).
- A preloader counting to 100 before the page appears. It delays every visitor for decoration. Fix: no preloader on task pages (U14.7).
- A logo marquee and an auto-advancing carousel with no pause control. Fix: static content, or a pause control (U14.8; trades sites: none on task pages, U14.21).
- Reveal-on-scroll sections that stay invisible when the script fails. Fix: content visible by default, motion added on top (U14.9).
- An animation library and a 3D engine loaded because they "feel premium". Fix: CSS first, showcase only (U14.11, U14.12).
- Animating `top` or `width` for a slide-in. It causes layout work on every frame. Fix: `transform` (U14.13).
- A count-up "years of experience" figure nobody can source. Fix: record facts only (U14.18).

## Checklist
- [ ] Motion inventory exists with a job for every animation (U14.1, U14.2).
- [ ] Decorative CSS motion sits inside the `no-preference` query; scripts check the preference (U14.3, U14.4).
- [ ] No scroll-hijack or smooth-scroll library on task pages; any scroll effect meets all conditions (U14.5, U14.6, U14.11, U14.15).
- [ ] No preloader or intro on task pages; autoplay video per U13.18; auto-advancing content has a pause control; trades sites add U14.21 (U14.7, U14.8, U14.21).
- [ ] Moving content beyond the WCAG 2.2.2 time limit has a pause control (U14.8).
- [ ] H1, primary action and LCP element are not animated; reveals visible without JavaScript (U14.9).
- [ ] At most one signature moment per page (U14.10).
- [ ] Each JavaScript motion library has a written reason (U14.12).
- [ ] Only `transform` and `opacity` animate (U14.13).
- [ ] Showcase page meets the budget and has a static fallback (U14.14).
- [ ] No autoplaying sound; hover content works by focus and tap (U14.16, U14.17).
- [ ] Every animated number traces to the record (U14.18).
- [ ] Three-way render check passed (U14.19).

## How an AI builder uses this
The builder reads the locked direction and duration tokens (U09), the page plan with each page's job (U06), the record's archetype and any owner approval for a showcase page, and the performance budget (U17). It writes the motion inventory first, then implements CSS motion behind the reduced-motion query, and adds a library only with a written reason. It runs the three-way render check with screenshots and records the result. It must refuse to add scroll hijacking, a preloader, autoplay video, a carousel or marquee to a task page, to load WebGL or a smooth-scroll library without written owner approval, to ship reduced-motion behavior that only slows motion, and to animate any figure not in the record. Vertical overlays may tighten these limits but not loosen them.

## Open questions
- Owner: which archetypes (portfolio, events, product launch) may have a showcase page, and who approves it.
- Evidence: the motion budget as an inventory is a project method (grade B or C); no study sets a count of animations per page.
- Evidence: NN/g's scrolljacking study is from 2023 and desktop-heavy; re-check if a newer study appears.
- V140 (unverified, from tutorial 1dvdXWmQXM8): a visible motion switch beside the system setting, provided reduced motion removes movement.
- V141 (unverified, from tutorial 5QM78yqpONI): smooth scrolling only for anchor jumps (now backed by U14.15).
- V144 (unverified, from tutorial gXz9FGK9Ivs): a pointer effect that runs on its own without a pointer needs reduced-motion gating and a pause control.
- V145 (unverified, from tutorial dYUL9-m6U1o): decline 3D and image-sequence builds for client work because they stall on old phones.
- V146 (unverified, from tutorial Ysr7oNDajJI): build the design first, then refine motion on the finished site in a separate pass.
- V148 (unverified, from tutorial v1Gwa1KyUaI): an exported motion clip is video and falls under the video and weight rules.
- V152 (unverified, from tutorial v1Gwa1KyUaI): describe motion with feeling words in prompts, keep numbers for review.
