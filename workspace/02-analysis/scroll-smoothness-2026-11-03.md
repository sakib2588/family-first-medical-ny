# Scroll smoothness (2026-11-03, owner: "make the scroll smoother")

Native smooth scrolling was already on (`html { scroll-behavior: smooth }`, off under reduced motion). No scroll-jacking or smooth-scroll library (project red lines: no third-party scripts, no scroll-jacking), so "smoother" = fewer slow frames while scrolling.

Method (production build via `astro preview`, headless Chromium, scripted wheel scroll of the whole Home page, rAF frame times, CPU throttled 2x desktop / 4x phone; headless uses software GL, so absolute numbers are worse than a real GPU):
| Desktop 1440, 3 runs | avg ms | p95 ms | frames > 33 ms |
|---|---|---|---|
| Baseline | 19.2 | 44.4 | 27.7 |
| No WebGL (no 3D scenes) | 16.8 | 16.8 | 1.3 |
| No backdrop-filter | 18.0 | 22.3 | 17.0 |
| No scroll-driven photo zoom | 18.2 | 27.8 | 19.7 |
| AFTER: 3D scenes hold their last frame while scrolling | 17.4 | 16.8 | 7.3 |
Phone 390 at 4x CPU, baseline: avg 16.9, p95 16.8, 4 slow frames of 399 (already smooth; the 3D scenes do not load on phones).

Cause: the live three.js scenes (5 on wide desktop) keep drawing while the page scrolls. Fix (motion-foundations: responsiveness outranks smoothness): `src/scripts/live3d.ts` pauses the scenes while scrolling and resumes 140 ms after it stops (time and the slow-frame fallback timer pause too); pixel ratio cap of the particle and trust-band scenes 2 -> 1.5 (hero was already 1.5). Verified the scenes still run when idle and resume after a scroll burst.

Not changed (small effect, visible look): backdrop-filter on .frost/.glass (-10 slow frames when removed), the scroll-driven photo zoom (-8). Candidates if it still feels rough on the owner's machine: drop blur on the sticky header, lower the photo zoom, skip 3D on machines without hardware acceleration.
