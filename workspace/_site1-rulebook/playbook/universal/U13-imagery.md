# U13. Imagery, photography, illustration, video

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers which images and video a site may use (real, stock, illustration or AI-generated), how they are art-directed, licensed and disclosed, how alt text is written, and how files are formatted and loaded. It takes assets collected at intake (see U02, U05), applies the locked direction (see U09), and hands the image pipeline and LCP rules to performance (see U17).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U13.1 | Prefer real photos of the real business, its people, place and work over generic stock people; real people and useful product views draw attention, decorative stock is ignored (old study, 2010: use the direction, not a figure). | universal | B | [source: DR:E1, B, 2026]; [source: https://www.nngroup.com/articles/photos-as-web-content/, B, 2010, opened 2026-10-30] | R |
| U13.2 | Drop an image that adds no information, or make it carry a real fact (what, where, when, who) (old study, 2010: use the direction, not a figure). | universal | B | [source: DR:E6, B, 2026]; [source: https://www.nngroup.com/articles/photos-as-web-content/, B, 2010, opened 2026-10-30] | R |
| U13.3 | Each image slot records its source type in this order of preference: real photo of the client, own illustration, licensed stock without people, AI image without people; the choice and reason sit in `brand.imagery_policy`. | universal | B | [source: playbook/kit/site.yaml, B, 2026]; [source: DR:E2, C, 2026] | G |
| U13.4 | Until real photos exist, use own illustration or licensed imagery under one color grade with third-party logos cropped, and never caption stock or generated images as the client's own work. | universal | C | [source: DR:E2, C, 2026] | R |
| U13.5 | Never show stock or AI-generated people as staff, customers or authors (see U20.17 for AI people; the stock ban is project policy), and never invent names; any AI-generated image appears only with a visible site credit and the IPTC `trainedAlgorithmicMedia` source type in its metadata; a vertical overlay may ban AI images of people outright (logged per U00.8). | universal | B | [source: DR:E3, C, 2026]; [source: https://cv.iptc.org/newscodes/digitalsourcetype/, A, 2024, opened 2026-10-30]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | G |
| U13.6 | Images edited with generative AI (inpainting, outpainting, generated backgrounds) carry the IPTC `compositeWithTrainedAlgorithmicMedia` type, and a provenance line (tool, model, date) is kept per generated asset. | universal | A | [source: https://cv.iptc.org/newscodes/digitalsourcetype/, A, 2024, opened 2026-10-30] | G |
| U13.7 | No asset enters the build without a rights-log row: creator, owner, license, permission scope, consent or release for any identifiable person or private property, where used and expiry; release wording comes from counsel. | universal | C | [source: playbook/kit/asset-and-proof-request.md, C, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U13.8 | Read each stock license per asset: a free license can allow commercial use yet say nothing about model releases or endorsement, so a stock person is never placed where they imply an endorsement; counsel decides doubtful cases. | universal | C | [source: https://unsplash.com/license, C, 2026, opened 2026-10-30]; [source: playbook/kit/asset-and-proof-request.md, C, 2026] | R |
| U13.9 | Art direction is written once per site (subject, framing, light, one white balance and grade, crop ratios per slot) and every image is checked against it. | universal | B | [source: DR:E4, B, 2026]; [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | R |
| U13.10 | Alt text follows the W3C decision tree: decorative or redundant images get `alt=""`; images in links or buttons describe the action or destination; informative images get a brief description; charts and diagrams get the information in page text; images of text carry that text. | universal | A | [source: https://www.w3.org/WAI/tutorials/images/decision-tree/, A, 2024, opened 2026-10-30] | G |
| U13.11 | Alt text is specific and written for people, never a keyword list; files have short descriptive names; images sit next to the text they support. | universal | A | [source: https://developers.google.com/search/docs/appearance/google-images, A, 2026, opened 2026-10-30] | R |
| U13.12 | Text in images follows U11.9 (see U11, which owns the rule): no headings or body baked into images. | universal | A | [source: DR:E5, B, 2026]; [source: https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html, A, 2024, opened 2026-10-30] | G |
| U13.13 | Image formats, sizes and reserved space follow U17.10 and U17.11 (see U17, which owns image delivery). | universal | A | [source: https://developers.google.com/search/docs/appearance/google-images, A, 2026, opened 2026-10-30]; [source: https://web.dev/articles/browser-level-image-lazy-loading, A, 2024, opened 2026-10-30] | G |
| U13.14 | The LCP image follows U17.9 (see U17, which owns it); this module only picks which image is the LCP image per template. | universal | A | [source: DR:E4, B, 2026]; [source: https://web.dev/articles/optimize-lcp, A, 2025, opened 2026-10-30] | G |
| U13.15 | Lazy and eager loading follow U17.10 (see U17). | universal | A | [source: https://web.dev/articles/browser-level-image-lazy-loading, A, 2024, opened 2026-10-30] | G |
| U13.16 | Video sound follows U14.16 (see U14, which owns audio): video never autoplays with sound. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html, A, 2024, opened 2026-10-30] | G |
| U13.17 | Moving video follows the pause rule in U14.8 (see U14, which owns it). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html, A, 2024, opened 2026-10-30] | G |
| U13.18 | Autoplaying background video is used only when it serves the brief, is muted with `playsinline`, has a poster image and `preload="none"` or `"metadata"` where it is not the LCP, and falls back to the poster under reduced motion (see U14); this module owns autoplay video, and U14.7 points here. | universal | A | [source: https://web.dev/learn/performance/video-performance, A, 2026, opened 2026-10-30] | G |
| U13.19 | Prerecorded video with speech or meaningful sound has captions. | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html, A, 2024, opened 2026-10-30] | G |
| U13.20 | Animated GIFs are replaced by short `video` files without an audio track. | universal | A | [source: https://web.dev/learn/performance/video-performance, A, 2026, opened 2026-10-30] | G |

## Anti-patterns
- Smiling stock "team" in the about section. It is a fabricated proof of people, and visitors ignore it anyway. Fix: real photos or no team block (U13.1, U13.5).
- A generated photo of a happy customer. It presents an invented person as real. Fix: never show AI people as customers or staff (U13.5).
- An image "found online" with no rights row. Fix: rights log before build (U13.7).
- Mixed white balance and crops from five sources. The page looks assembled. Fix: written art direction (U13.9).
- `alt="image"` on every picture, or a keyword list. Fix: the decision tree (U13.10, U13.11).
- Hero image set as a CSS background and lazy-loaded. The LCP is late. Fix: U17.9 (via U13.14).
- A full-screen autoplay video with sound and no pause button. Fix: U13.16, U13.17, U13.18.
- A promo video with no captions. Fix: U13.19.

## Checklist
- [ ] Every slot has a source type and reason in `brand.imagery_policy` (U13.3).
- [ ] No stock or AI people as staff, customers or authors; no invented names (U13.5).
- [ ] AI and AI-edited images carry the IPTC type, a visible credit and a provenance line (U13.5, U13.6).
- [ ] Rights-log row per asset with consent or release where needed; release forms from counsel (U13.7, U13.8).
- [ ] Art direction note exists and images match it (U13.9).
- [ ] Every `img` has an alt attribute chosen by the decision tree; complex images described in text (U13.10, U13.11).
- [ ] No text baked into images except logos (U13.12).
- [ ] Modern formats, `srcset` and `sizes`, width and height present (U13.13).
- [ ] LCP image eager, in HTML, high priority only where it is LCP; others lazy (U13.14, U13.15).
- [ ] Video: no autoplay sound, pause control, poster, preload set, captions, no GIFs (U13.16 to U13.20).

## How an AI builder uses this
The builder reads `assets.photos`, `assets.video`, `assets.illustrations`, `assets.rights_log`, `brand.imagery_policy` and `proof.team` from the record (see U05), and the locked direction (see U09). It writes the art direction note, places each asset in a slot with its source type, writes alt text by the decision tree, generates responsive formats with width and height, and marks the LCP image per template. Guards check that every asset has a rights row, every `img` has an alt attribute, no generated asset lacks IPTC metadata and credit, and no below-fold image is eager or LCP image lazy. It must refuse to generate or place images of people as staff, customers or reviewers, to caption stock as the client's work, to use an asset without a rights row, or to autoplay sound.

## Open questions
- Counsel: EU AI Act Article 50 requires deployers to disclose deep-fake images and providers to mark outputs, applying from 2026-08-02 per a secondary source; as of 2026-10-30, counsel review needed on whether site imagery is in scope [source: https://artificialintelligenceact.eu/article/50/, B, 2024, opened 2026-10-30].
- Counsel: whether a generated image of a realistic but fictional place or product misleads visitors; the model and property release forms; copyright ownership of AI images.
- Evidence: the NN/g eyetracking study is from 2010 [source: https://www.nngroup.com/articles/photos-as-web-content/, B, 2010, opened 2026-10-30]; newer evidence on stock versus real photos was not found.
- Owner: whether AI images without people are allowed at all for regulated archetypes.
- V115 (unverified, from tutorial 1dvdXWmQXM8): supply a real asset for the main object; generate only surroundings.
- V116 (unverified, from tutorial 1dvdXWmQXM8): 3D models from a library with a license note each.
- V118 (unverified, from tutorial VMvZuhcDdnw): custom photography is what the agent cannot make; drop it in with placement notes.
- V119 (unverified, from tutorial 83geKREHQY0): a named hero image slot instead of an invented stock picture.
- V120 (unverified, from tutorial dYUL9-m6U1o): a stock service for concept imagery; real staff photos from the client.
- V121 (unverified, from tutorial 1dvdXWmQXM8) and V122 (unverified, from tutorial gXz9FGK9Ivs): generate media in the page's own context and theme.
- V123 (unverified, from tutorial gXz9FGK9Ivs): a hand-kept provenance list per generated asset.
- V124 (unverified, from tutorial 5QM78yqpONI): test each generated visual in the built page at phone width.
- V126 (unverified, from tutorial 5QM78yqpONI): play the whole generated clip and check for warping before keeping it.
- V131 (unverified, from tutorial j3mWBCzzTsI): generation API keys stay outside the repo.
- V137 (unverified, from tutorial DCwh7SIfWL4): an in-page toggle that shows which parts were generated.
