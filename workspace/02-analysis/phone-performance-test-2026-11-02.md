# Phone performance test (2026-11-02)
Method: production build (`npm run build`, `astro preview`), Playwright/Chromium emulating a 390x844 phone (DPR 2.75, touch), network Slow 4G (1.6 Mbps down, 150 ms RTT), CPU throttle 4x (mid-range) and 6x (low-end), median of 3 runs, first visit. Emulation, not a real device; the preview server sends no compression, so real transfer should be smaller.

| Profile | Splash | FCP | LCP | CLS | Long-task time over 50 ms | Transfer | three.js loaded |
|---|---|---|---|---|---|---|---|
| mid-range (CPU 4x) | on | 604 ms | 1988 ms | 0.002 | 0 ms | 460 KB | no |
| mid-range (CPU 4x) | off | 612 ms | 2004 ms | 0.001 | 0 ms | 460 KB | no |
| low-end (CPU 6x) | on | 632 ms | 2020 ms | 0.002 | 0 ms | 460 KB | no |
| low-end (CPU 6x) | off | 628 ms | 2016 ms | 0.001 | 0 ms | 460 KB | no |

Reading: LCP about 2.0 s on Slow 4G (Google's "good" line is 2.5 s), no layout shift, no long tasks, three.js never downloads on phones. The splash does not change measured LCP (the page paints underneath it); it does hold the first view back by about 1.3 s on the first visit only.
Caveat: the splash cost is perceived, not measured by LCP. Re-check on a real mid-range Android before launch.
