# Decision: live looping motion and live three.js on Home (desktop) — owner exception (2026-11-01)

**Status:** accepted by the owner ("1 and 2", in answer to the live-motion question, 2026-11-01).

**Context:**
- The rulebook keeps WebGL off task pages (U14.11, design-rules B6) and requires a pause control for any motion that starts by itself and runs more than 5 s (U14.8, WCAG 2.2.2).
- The council (design plan 4.7) chose no live 3D on Home and said to revisit it later.
- The owner now wants the site to look better than the competitors, with live looping motion and live three.js.

**Decision:**
1. **Gentle CSS loops** are allowed in key places, with ONE site-wide "Pause motion" control. The visitor's choice is remembered (localStorage). Loops also stop under `prefers-reduced-motion`.
2. **One live three.js scene on Home: the trust-band backdrop, wide desktop only (>= 80rem).** This is a deliberate exception to U14.11 / B6 for this site. Guardrails:
   - The still render (`/art/trust-band.webp`) shows first and stays for:
     - phones and screens under 80rem;
     - `prefers-reduced-motion`;
     - Save-Data;
     - fewer than 4 CPU cores or under 4 GB memory;
     - no WebGL.
   - `three` loads lazily, only after the page `load` event and only when the band is near the viewport. It is never in the first load or on phones.
   - The scene pauses when it is off screen, when the tab is hidden, or when Pause motion is on.
   - If the frame rate stays under 30 fps for 2 s, the scene stops and the still image returns.
   - The canvas is `aria-hidden`; all text stays HTML.
   - Pixel ratio is capped at 2.
3. **Premium scrolling without scroll-jacking:**
   - a top scroll-progress line;
   - gentle photo depth;
   - smooth anchor jumps.

   All of this is CSS scroll timelines inside `@supports`, desktop only, off under reduced motion. Native scroll is never hijacked (U14.5 stays).

**Consequences:**
- Home's desktop page can download about 140 KB gzip more JS, after load. The phone budget is unchanged.
- The live scene must be re-measured in every PR: desktop LCP stays under 2.5 s and CLS under 0.1.
- The owner can revert this with the tag `v-pre-design-tier-2026-11-01`, or by setting `LIVE_3D = false` in `src/scripts/trust-band-live.ts`.
