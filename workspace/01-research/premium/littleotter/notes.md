# Little Otter (family mental health)

- URL: https://www.littleotterhealth.com/
- Model: Venture-scale virtual family mental-health group (now 'a Hazel Health Company'). Not independent; pediatric-adjacent, strongest warmth/clarity example.
- Captured: 2026-10-31 with tools/capture.mjs (WAIT=domcontentloaded SETTLE=6000); screenshots in this folder (phone/, desktop/), meta.json, html/. Computed styles via tools/style-probe.mjs (desktop, 1280px).
- Limits: screenshots + computed CSS only; no real user data, no performance lab run; colors are approximate (read from screenshots/CSS); contrast ratios are estimates.

## Scores (1-5; 'n/c' = not captured)
| Dimension | Score |
|---|---|
| Positioning | 4 |
| Voice | 4 |
| Visual craft | 5 |
| Offer/booking | 4 |
| Evidence/trust | 4 |
| Accessibility | 4 |
| Pricing/insurance | 4 |
| Mobile | 3 |
| Tension (distinct/credible) | 4 / 4 |

Tension poles are reported separately (distinctiveness / credibility), never averaged.

## Evidence per dimension
- Position: 'Mental health care for your whole family' (whole-family framing is distinctive vs child-only).
- Voice: plain, warm, short sentences, italic emphasis on 'whole family'.
- Visual: highest craft in set - custom serif headline + geometric sans, arch-cropped photo, hand-drawn leaf motif.
- Offer: two CTAs (solid 'Get support now', outline 'Take our assessment'), nav has Pricing page; 'Accepted insurance plans' section, 'How it works', 'Our results'.
- Evidence: testimonials + 'Our results' section (not verified).
- A11y: dark navy on warm off-white = strong contrast (approx 15:1 est.); button radius ~7px with 14px label is smallish but OK; cookie bar covers a third of first fold on phone and desktop.
- Mobile: fold is clean (logo, 3-line H1, 1 line sub-copy) but the CTAs fall below the cookie banner on first load. Full-page phone screenshot shows large blank bands = scroll-reveal animations (capture artifact; also a real risk if JS fails).
- Capture: both views 200; 28 images, all 28 lacking alt in capture (maybe lazy/decorative).

## Visual craft analysis
H1 'lft-etica-sheriff' (soft slab/serif) 42.7px desktop, weight 400, tracking -1.28px, line-height 55px (1.3), with one italic phrase; body 'Larsseit' (geometric sans) 16px. Palette: deep navy #09273B, warm off-white #F8F7F3, cream #F3EEDB, butter yellow accent ~#FFD98A in leaf illustration, lilac in logo mark. Imagery: warm real-family photos cropped into arch/organic shapes (not rectangles); illustrated botanical accents. Spacing: big section gaps, ~85px left gutter at desktop, 2-col hero. Radius: buttons ~7px, photo arches large. Shadow: soft, large blur (35px offset, 20% alpha), 17 in DOM. Iconography: custom illustrations, not stock icons. Motion: scroll-reveal sections (evidenced by blank areas in full-page capture). Buttons: navy solid and navy outline, sentence case, no uppercase.

## What makes it feel premium
One distinctive shape (arch) + one illustration motif applied everywhere, warm off-white instead of clinical white, serif headline with italic emphasis, sentence-case buttons. Reads as a lifestyle brand with medical rigor.

## Risks for a medical practice
Content hidden until scroll animation fires (invisible if JS slow); privacy banner dominates the fold; funding-backed brand voice is not a local doctor's voice; all-image alt gaps; mental-health claims ('our results') need clinical substantiation.

## How a 2-doctor family practice could use it
Arch-cropped photo + one leaf/sprout illustration is cheap to build (CSS border-radius + one SVG) and instantly distinct. Copy the headline treatment (serif with one italic phrase) and the sentence-case button. Keep cookie banner as a small bottom bar not a half-screen block.
