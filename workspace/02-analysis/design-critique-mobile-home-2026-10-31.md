---
target: critique mobile version of home page demo vs familyfirstmedicalny.com
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 3
target_identity: "file:/home/zeno/uni/Paided site !/src/pages/index.astro"
target_fingerprint: "sha256:5b2020425f74853aa9385f70432eabd5bf8464d7b9afd13d2dc6d5dda647c39c"
target_path: /home/zeno/uni/Paided site !/src/pages/index.astro
timestamp: 2026-10-31T04-54-12Z
slug: src-pages-index-astro
---
# Critique: src/pages/index.astro (mobile, 390 px)

Method: DEGRADED single-context (both assessments run in-thread; browser overlay injection skipped).
Reference limits: headless capture of familyfirstmedicalny.com returned only its loading splash; comparison is on structure and trust elements, not visual polish.

## Design Health Score (Persuade surface, heuristic 10 n/a)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Hours line under hero; form status message; sticky bar on scroll |
| 2 | Match system / real world | 3 | Plain copy |
| 3 | User control and freedom | 3 | Menu closes on Esc |
| 4 | Consistency and standards | 3 | Directions button style and native select break the system |
| 5 | Error prevention | 3 | Tel inputs, autocomplete, required fields |
| 6 | Recognition over recall | 3 | Labeled nav, visible office choice |
| 7 | Flexibility and efficiency | 2 | Tap-to-call and sticky bar are the only accelerators |
| 8 | Aesthetic and minimalist | 3 | Same section pattern repeats |
| 9 | Error recovery | 2 | Native validation and one status line |
| 10 | Help and documentation | n/a | Landing page |
Total: 25/36 (69%), Acceptable band.

## Design specificity
Partly authored: arch motif from logo, palette and type pairing are specific; content layer (stand-in photos, no proof, standard card/accordion/form structure) is generic.
Deterministic scan (impeccable detect --json src): no findings.

## Priority issues
- [P1] Photo system mixed and stand-in: green outdoor portraits, grey studio portrait, dark blue hands close-up. Fix: one photo treatment, then real photos. Command: polish.
- [P1] No trust layer under hero: no reviews, stats, insurance marks, office photos. Fix: proof strip under CTA using confirmed facts; review block before form. Command: layout, clarify.
- [P1] Same two doctor portraits appear in hero and again in "Two doctors" section. Fix: keep one portrait pair or swap hero image. Command: layout.
- [P2] Hands photo about 380 px tall on 390 px screen, dark, low information. Fix: 4:3 or 16:10 crop on mobile, lift exposure and warmth. Command: adapt.
- [P2] Locations: equal outlined buttons; Directions links to #locations (same section). Fix: Call filled; real maps link or remove. Command: polish.

## Persona red flags
- Casey (distracted phone user): Locations below about 2,600 px of portraits, hands photo and Services.
- Jordan (first-timer): Coverage section is a chip list with sample note; no "check your plan" action.
- Riley (stress tester): Directions buttons do nothing; native select unlike other form controls.

## Minor observations
- Services is text-only lists, flattest section.
- Dark floating icon bar in screenshots looks like Astro dev toolbar (dev-only); unconfirmed against a production build.
- Hero gold arch frame is an open bracket; check at 390 px with real photos.

## Questions to consider
- One team or office photo instead of two separate portraits?
- Proof layer with real review counts and insurance marks?
- Does the hands photo need to stay, or can a tighter crop carry it?
