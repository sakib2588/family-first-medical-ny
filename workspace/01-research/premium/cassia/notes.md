# Cassia Optimal Health (Atlanta)

- URL: https://cassiaoptimalhealth.com/
- Model: Solo physician, membership/direct primary care, weight+menopause focus. Independent.
- Captured: 2026-10-31 with tools/capture.mjs (WAIT=domcontentloaded SETTLE=6000); screenshots in this folder (phone/, desktop/), meta.json, html/. Computed styles via tools/style-probe.mjs (desktop, 1280px).
- Limits: screenshots + computed CSS only; no real user data, no performance lab run; colors are approximate (read from screenshots/CSS); contrast ratios are estimates.

## Scores (1-5; 'n/c' = not captured)
| Dimension | Score |
|---|---|
| Positioning | 5 |
| Voice | 4 |
| Visual craft | 4 |
| Offer/booking | 4 |
| Evidence/trust | 4 |
| Accessibility | 2 |
| Pricing/insurance | 3 |
| Mobile | n/c |
| Tension (distinct/credible) | 4 / 4 |

Tension poles are reported separately (distinctiveness / credibility), never averaged.

## Evidence per dimension
- Position: 'Physician-led primary care in Atlanta' + 'Better health begins with a better relationship' - one idea (continuity), one doctor, ownable.
- Voice: calm, first-person-plural, relationship language; cites a BMJ Open 2018 review with a footnote under a big '81.8%' stat (proven-ish, footnoted).
- Visual: see craft. Dark forest-green bands alternate with cream; tier cards sit on a dark photo.
- Offer: two-question tier picker (health state x access level) -> Foundational / Enhanced / Pinnacle; 'Schedule your discovery call' primary, phone secondary. Prices NOT shown in captured homepage.
- Evidence: Atlanta Magazine Top Doctor, AAFP, board logos (asserted via logos, not verified by me).
- A11y: small gold/tan text on cream (approx #B8A06A on #FAF7F1, est. ~2.3:1) fails AA; thin display serif. Not measured with a tool.
- Mobile: PHONE CAPTURE BLOCKED - bot challenge returned 403 'Confirm you are human'. Skipped, not evaded. Desktop only reviewed.
- Capture: desktop 200; 27 images, 12 without alt.

## Visual craft analysis
H1 'Antic Didone' (high-contrast display serif, light) ~60-70px desktop on hero; body 'Albert Sans' 16px; eyebrow labels uppercase, letter-spacing ~5px, gold #C8B07D. Palette: forest green #133820, cream #FAF7F1, white, gold accent #C8B07D, slate body text #3A4F66. Imagery: single cinematic dark-overlay hero photo of the doctor entering the office door (real, in-context), bronze sculpture/marble in tier section; tree-canopy photo footer band. Spacing: very generous vertical padding (~120px+ between bands), centered 1-column text at ~640px measure. Grid: 3-up cards, accordion list with numbered rows (01-04) and hairline dividers. Radius 0px on buttons (square), cards ~4-8px. Shadow: almost none (1 shadow in DOM). Icons: small flat gold line icons in cream cards. Motion: unknown (static capture); accordion + choice-pill interactions seen. Buttons: square uppercase 12px tracked 1.2px; green solid primary, white solid in nav.

## What makes it feel premium
Restraint plus one serif/sans pairing, a limited green/cream/gold palette, hairlines, uppercase tracked micro-labels, a real photo of a real doctor, and a quantified-but-footnoted claim. Feels like a boutique hotel/wellness brand.

## Risks for a medical practice
'Optimal', weight-management and hormone positioning leans wellness/medspa; 'Top Doctor' logos are claims needing substantiation; low-contrast gold small type; dark overlay hero text over photo; bot-wall can block real patients/crawlers on mobile (observed 403) - a conversion and SEO risk if the CDN rule is too strict; tier cards hide price.

## How a 2-doctor family practice could use it
Steal the discovery-call CTA + two-question 'which plan fits' picker idea as 'new patient: which visit do you need' (well visit / sick visit / new adult patient). Steal doctor-led hero (real photo of the real doctors) and the numbered accordion for services. Do NOT copy low-contrast gold; do not use 'optimal' superlatives.
