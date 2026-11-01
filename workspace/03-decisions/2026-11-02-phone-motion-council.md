# Decision: minimum motion on phones (council, 2026-11-02)

Question: how much live motion on phones? Owner suggestion: some, because US phones are "99% decent". Options A status quo, B CSS-only minimum, C one three.js scene, D full parity.

Voices: Architect B. Skeptic: A plus at most one or two compositor-only touches, no loops. Pragmatist: B but drop the gradient drift, test on a throttled mid-range Android. Critic: trimmed B, fix the 2 px overflow first, Pause motion must be reachable on phones.
Consensus: no three.js on phones (C, D out); no looping gradient. Strongest dissent: Skeptic's A (add nothing). Premise check: the "99% decent phone" figure is about hardware; the audience includes Medicaid families on older phones, data caps and Save-Data, and the existing gates were built to keep phones out.

Done (branch fix/mobile-menu-compact):
- Phones keep CSS reveals, hero entrance, press feedback, splash, drawer slide; ADDED one-shot, scroll-driven, transform-only: scroll-progress line, card rise + scale, photo soft zoom. No loops added, no three.js, no gradient drift.
- FOUND by the Critic: the Pause motion control only existed in the desktop top bar, so phones (where the care-by-age light loops forever) had no way to pause (WCAG 2.2.2). Now in the phone menu drawer and the footer (below lg).
- 2 px sideways overflow on phones was entrance animations pushing the page wide for a moment; `html, body { overflow-x: clip }` fixes it (measured 390 at 300 ms).
Not done / later: measure LCP on a throttled mid-range Android profile before any further phone motion; revisit one phone scene only if those numbers hold.
