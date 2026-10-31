# U17. Performance

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers how fast every page must be, how we keep it that way, and how we prove it. It sets the budgets, the third-party script policy, the image and font pipeline, caching basics and the measurement method, and it defines the budget gate that runs on every pull request. It applies to the design direction (see U09) and the motion choices (see U14), and its results feed the launch checks (see U23).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U17.1 | Every page template meets the Core Web Vitals "good" thresholds at the 75th percentile, assessed separately for mobile and desktop: LCP 2.5 s or less, INP 200 ms or less, CLS 0.1 or less. | universal | A | [source: https://web.dev/articles/vitals, A, 2024, opened 2026-10-30]; [source: DR:I1, B, 2026] | G |
| U17.2 | Before launch, use lab data as the proxy (Lighthouse reports LCP and CLS and uses Total Blocking Time in place of INP); after launch, judge the site on field data (CrUX, Search Console, or a web-vitals real-user script) and fix what field data shows first. | universal | A | [source: https://web.dev/articles/lab-and-field-data-differences, A, 2022, opened 2026-10-30]; [source: https://web.dev/articles/vitals, A, 2024, opened 2026-10-30] | R |
| U17.3 | A new or low-traffic site is not assumed to have CrUX data, because CrUX includes only pages and origins that are indexable and sufficiently popular; until it appears, the site runs its own real-user measurement or reports lab figures labeled as lab. | universal | A | [source: https://developer.chrome.com/docs/crux/methodology, A, 2024, opened 2026-10-30] | R |
| U17.4 | The first small-screen load of any page stays within 1 MB transferred, with at most 200 KB of JavaScript including third parties and about 100 KB of web fonts, and loads no video when the visitor asks for reduced data or reduced motion; these numbers are the playbook's own budget, not a standard. | universal | B | [source: DR:I2, B, 2026]; [source: https://web.dev/articles/performance-budgets-101, A, 2018, opened 2026-10-30] | G |
| U17.5 | Every pull request runs a budget gate (for example Lighthouse CI with assertions on the U17.1 and U17.4 numbers, or a `checks.py perf` command if one is written) on the home page and each template, and a failed budget blocks merge until the asset is optimized, removed or the owner records an exception. | universal | A | [source: https://web.dev/articles/performance-budgets-101, A, 2018, opened 2026-10-30]; [source: https://github.com/GoogleChrome/lighthouse-ci, B, 2026, opened 2026-10-30] | G |
| U17.6 | Every third-party script is in the U19.7 tag register (see U19, which owns the register and its fields); this module adds only its budget cost (U17.7). | universal | A | [source: https://almanac.httparchive.org/en/2025/third-parties, A, 2025, opened 2026-10-30]; [source: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U17.7 | Third-party scripts count against the JavaScript budget in U17.4 and load only on the pages listed for them, never site-wide by default. | universal | B | [source: DR:I2, B, 2026]; [source: https://web.dev/articles/performance-budgets-101, A, 2018, opened 2026-10-30] | G |
| U17.8 | Slowness is fixed, never masked: no preloader or full-screen loading animation hides the page while assets load. | universal | C | [source: DR:I3, C, 2026] | G |
| U17.9 | The LCP image is in the initial HTML as an `<img>` (not injected by JavaScript and not only a CSS background), carries `fetchpriority="high"` only at viewports where it is the LCP element, is never lazy-loaded, and no more than one or two images per page get high priority. | universal | A | [source: https://web.dev/articles/optimize-lcp, A, 2025, opened 2026-10-30]; [source: https://web.dev/articles/fetch-priority, A, 2023, opened 2026-10-30] | G |
| U17.10 | Images visible in the first viewport load eagerly; images below it use `loading="lazy"`; every `<img>` has `width` and `height` attributes so the browser reserves space and layout does not shift. | universal | A | [source: https://web.dev/articles/browser-level-image-lazy-loading, A, 2024, opened 2026-10-30] | G |
| U17.11 | Photos are served as AVIF or WebP with a JPEG fallback through `<picture>`, in three to five widths through `srcset` and `sizes`, and no image is sent much larger than its displayed size (Lighthouse "Properly size images" passes). | universal | A | [source: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types, B, 2026, opened 2026-10-30]; [source: https://web.dev/articles/serve-responsive-images, A, 2018, opened 2026-10-30] | G |
| U17.12 | Images are processed at build time by default, so the live site never depends on paid or capped runtime image transformations; before choosing a runtime service, check the host's plan limits and what happens when they are exceeded. | universal | C | [source: DR:I4, C, 2026]; [source: https://developers.cloudflare.com/images/pricing/, C, 2026, opened 2026-10-30] | R |
| U17.13 | When hosting.host.provider includes cloudflare: Polish is not assumed, since it is on Pro, Business and Enterprise plans only; Cloudflare Images free transformations are capped at 5,000 unique per month, and new ones past the cap return error 9422 unless an `onerror` fallback to the original is set. | universal | C | [source: https://developers.cloudflare.com/images/polish/, C, 2026, opened 2026-10-30]; [source: https://developers.cloudflare.com/images/pricing/, C, 2026, opened 2026-10-30] | R |
| U17.14 | Font files follow U11.12 to U11.15 (see U11, which owns font delivery, including one preload for the first-view face) and their sizes count against the U17.4 budget. | universal | A | [source: https://web.dev/articles/font-best-practices, A, 2022, opened 2026-10-30] | G |
| U17.15 | Files with a content hash in their name are served with `Cache-Control: max-age=31536000` (one year) and may add `immutable`; HTML and other unversioned URLs are revalidated (`no-cache` with an ETag) so a deploy shows at once. | universal | A | [source: https://web.dev/articles/http-cache, A, 2018, opened 2026-10-30] | G |
| U17.16 | Pages and assets are served from a CDN on the same origin as the HTML where possible, with no redirect chain before the first HTML byte and no cache-busting query strings that stop edge caching. | universal | A | [source: https://web.dev/articles/optimize-lcp, A, 2025, opened 2026-10-30] | G |
| U17.17 | Performance claims in reviews, reports or client messages cite a measured figure (tool, device profile, page and date); "it feels fast" is not evidence. | universal | A | [source: https://web.dev/articles/lab-and-field-data-differences, A, 2022, opened 2026-10-30] | R |

## Anti-patterns
- A full-screen loading animation before the page appears. It hides weight instead of removing it. Fix: cut the weight (U17.8).
- An autoplay hero video on phones. It blows the first-load budget. Fix: a still poster image on small screens and under reduced data or reduced motion (U17.4).
- The hero image set as a CSS background or lazy-loaded. The browser finds it late and LCP slips. Fix: an `<img>` in the HTML with high fetch priority (U17.9).
- Original camera files uploaded straight to the page. Fix: build-time resizing and modern formats (U17.11, U17.12).
- Tags added by whoever had access, loading on every page. Fix: tag register with owner and reason (U17.6, U17.7).
- Judging speed by eye on a fast laptop. Fix: Lighthouse on a throttled mobile profile before launch and field data after (U17.2, U17.17).
- Asking an AI agent to "make it fast" with no baseline or check afterwards. Fix: measure, change, measure again through the gate (U17.5).

## Checklist
- [ ] Budget gate configured and run on this pull request; all templates pass or the exception is logged (U17.1, U17.4, U17.5).
- [ ] Field data source named for after launch; lab figures labeled as lab until then (U17.2, U17.3).
- [ ] Tag register complete; no script without owner and reason; scripts scoped to pages (U17.6, U17.7).
- [ ] No preloader (U17.8).
- [ ] LCP image in HTML, `fetchpriority="high"`, not lazy (U17.9).
- [ ] All images have width and height; below-fold images lazy (U17.10).
- [ ] AVIF or WebP with fallback, responsive widths, sizing audit passes (U17.11).
- [ ] Image processing at build time, or host limits and failure behavior recorded (U17.12, U17.13).
- [ ] Fonts WOFF2, subset, limited weights, display strategy set (U17.14).
- [ ] Cache headers set for hashed files and HTML (U17.15).
- [ ] CDN, no redirect chain, no cache-busting parameters (U17.16).
- [ ] Every performance claim cites a measured figure (U17.17).

## How an AI builder uses this
The builder reads the template list and page set (see U06), the design and motion choices (see U09, U14), the type and image systems (see U11, U13), `site.yaml` fields `features`, `analytics.tools` and `hosting.host`, and the tag register from U19. It produces the budget configuration for the gate, the tag register entries for performance, image and font build settings, cache headers, and a performance note on each pull request with the measured figures. It must refuse to add a third-party script that has no owner and reason, to add a preloader, to lazy-load the LCP image, to rely on a paid or capped image service without the owner's written choice, and to state any speed result that was not measured. Overlays may tighten budgets (for example galleries in a portfolio overlay) but never loosen U17.1.

## Open questions
- Owner decision: confirm the U17.4 budget numbers and whether the budget gate blocks merge for every client or only warns (R14 Part 6 decision 8).
- Whether a `checks.py perf` command should be written or Lighthouse CI adopted as the gate; neither is set up yet.
- V164 (unverified, from tutorial UQ9PbbPNvnc): galleries that people upload to after launch may need a runtime image CDN; decide in the portfolios overlay and record plan limits (U17.12).
- V165 (unverified, from tutorial UQ9PbbPNvnc): adaptive-bitrate streaming for gallery video.
- V162 (unverified, from tutorial 5QM78yqpONI): a still poster instead of autoplay footage on small screens; already covered by DR:I2 in U17.4, needs a phone-width check in U23.
- V163 (unverified, from tutorial AiewbroXV8c): a first version as three plain files with no build step; conflicts with build-time image processing (U17.12), owner to decide.
- Tutorials claim 3D scenes load under a megabyte with no measurement shown (unverified, from tutorial G-F5Qvy-7KM); treat as a claim to test, not a budget.
- Which real-user monitoring tool to use on new sites, and its consent category (see U19, U20).
