# Hero section: research, decisions and Google Stitch prompt (2026-11-03)

Status: research done and owner decisions taken (grill session, 2026-11-03). Next: owner runs the prompt in Google Stitch as the design reference. The result is then ported to `src/components/home/Hero.astro` (Astro + Tailwind, no React). Nothing is deployed or merged by this document.

---

## Part 0. Owner decisions (2026-11-03)

| Question | Decision |
|---|---|
| Client | **Family First Medical**. This is a demo for them. Goal: trust, not a copy of their base site. |
| Doctor names and photos | Use the ones we already have in the project (`src/data/practice.ts`: stand-in photos, placeholder names). Not the names from the screenshot. Confirm before launch. |
| Primary action | **"Call to make an appointment"** is the one filled button. |
| Trust proof | Credentials, ages, languages, insurance, hours and reviews all wanted, but **shown as "[to confirm]" placeholders** until the client confirms each one in writing (red lines). |
| Offices | Demo data. Addresses are not a concern for this demo. |
| Palette | **Our palette**: indigo, teal-deep, gold, cream. Not their brand colours. |
| Layout reference | **Structure only** (headline, one filled button, doctor cards, chips). Not the screenshot's look. |
| Languages and insurance | Not confirmed. Show "[to confirm]". |
| Motion | Owner unsure. Decision: **phone first**; calm entrance only, no loops, no live colour field in this version. |
| Hero backdrop | **Stock image of a similar idea** (bright clinic reception, no signage, no people). Licence must allow demo use. Replaces the CSS stand-in. |
| Doctor cards | **Role only** under each name. No "Board-Certified" until checked and dated. |
| Priority | **Phone 390 px first**, desktop after. A patient will most likely arrive on a phone. |

**Assumptions to confirm:**
1. "Use the one we have" means the names and stand-in photos in `practice.ts`. If the owner meant the Yao doctors from the screenshot, that needs written consent from those doctors and a source for their photos.
2. CLAUDE.md and the repo name still say AIMSS. Both need updating to Family First Medical (separate task, owner to confirm wording).

---

## Part 1. Research

### 1.1 Google Stitch: how to prompt it well

Sources are third-party guides and community skill files. Google's own Stitch docs were not reachable, so treat the specifics as practitioner guidance (U).

- **Zoom out, then zoom in.** Give product, audience and platform first, then the one screen, its goal, its layout hierarchy, components and constraints. Vague one-line prompts give generic layouts. ([OpenReplay](https://blog.openreplay.com/prompt-ui-google-stitch/))
- **Name the layout, the vibe and the stack** (breakpoints, Tailwind). ([Stitch UI design skill, community](https://www.skills.lc/sickn33/antigravity-awesome-skills/stitch-ui-design); [how to use google stitch](https://dhaval-prajapati.onrender.com/blog/how-to-use-google-stitch))
- **Keep design rules in one place.** Stitch has a DESIGN.md concept: colour tokens, typography, spacing, shadows and component rules, read with each generation. Early and not officially documented (U). ([MindStudio](https://www.mindstudio.ai/blog/what-is-design-md-google-stitch); [design-md skill listing](https://skills.lc/google-labs-code/stitch-skills/design-md))
- **Iterate surgically.** Box one element and describe the change. ([Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/))
- **Check the output.** Stitch is best for early iterations. Check breakpoints, contrast and tap targets before export. ([Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/); [index.dev](https://index.dev/blog/google-stitch-ai-review-for-ui-designers))

### 1.2 Family-practice hero: what builds trust

Vendor blogs and agency pages, consistent with each other but not independently benchmarked (U). Vendor conversion figures are not used.

- **Specific promise above the fold**: who it is for and what they can do now. Avoid "world-class care". ([Unicorn Platform](https://unicornplatform.com/blog/healthcare-web-design-in-2026/))
- **Family practices are judged on continuity, access and communication style.** Say whole-family care, first-visit expectations and how to reach the office. ([Unicorn Platform](https://unicornplatform.com/blog/medical-website-designer/))
- **One filled primary action, plus phone**, repeated in the hero. ([DDS Web Solutions](https://2026-dds-websolutions.pages.dev/guides/design-homepage-that-converts-visitors-into-patients); [Sequence Health](https://www.sequencehealth.com/?p=8943))
- **Trust, but only true trust.** Credentials, reviews and stats are common advice; here they stay "[to confirm]" until checked.
- **Real people beat generic imagery**, but stock imagery is fine for a demo backdrop as long as it is labelled. ([Unicorn Platform](https://unicornplatform.com/blog/healthcare-web-design-in-2026/))
- **Test one element at a time.** ([Unicorn Platform](https://www.unicornplatform.com/blog/medical-landing-page-templates-free-to-convert-visitors))

### 1.3 Reference screenshot (the base site)

Use it for structure only. Do not copy its claims, names, red brand or look.

| Line in the base site | Status for this demo |
|---|---|
| "Board-Certified Physicians", "Board-Certified Pediatrician" | "[to confirm]" until checked (red line) |
| "Accepting new patients" | "[to confirm]" (red line) |
| "Open 7 Days a Week" | "[to confirm]", hours only from `practice.ts` (red line) |
| "Most Insurance Plans Accepted" | "[to confirm]" (red line) |
| "Serving in 3 Languages" | "[to confirm]" (red line) |

### 1.4 Site facts the prompt depends on

- **Palette** (`src/styles/global.css`): indigo `#17123a`; teal `#0e8a8a` (decoration only); **teal-deep `#0b6f6f`, the one filled action (white text 5.97:1)**; gold `#d9a02c` (accent line and glow; never text on cream); cream `#faf7ef`; lavender `#f2eefc`; mist `#e6f2f1`; body `#3d3a58`; muted `#5b5878`; line `#e3ddf0`.
- **Type:** Fraunces (display) and Figtree (body), self-hosted. No external fonts.
- **Shape:** the arch frames photos.
- **Motion rules:** CSS first; transform and opacity only; reduced motion respected; no scroll-jacking. A site-wide Pause control is needed for any loop over 5 s. This version has no loops.
- **Red lines:** no third-party scripts or fonts; no invented reviews, ratings, stats or credentials; no symptom, DOB or insurance fields; keep the DEMO banner and `noindex`.
- **Accessibility:** WCAG 2.2 AA; 44 px tap targets; visible focus ring.

---

## Part 2. Production prompt for Google Stitch

Paste the block below as one prompt. Keep every `[to confirm]` tag visible; do not replace it with a guess.

````text
PROJECT
Family medicine and pediatrics practice website for Family First Medical. This is a DEMO for the client: a design proposal, not the live site. Two offices in Queens and Long Island, NY (demo locations). Audience: parents and adults, most of them on a PHONE, often in a hurry, some with accessibility needs. Goal of this screen: a visitor calls the practice (or requests a visit) in one tap and trusts it within seconds.

PRIORITY
Phone first. Design the 390 px phone layout completely and well first. Then adapt to a 1280 px desktop. The phone layout decides the structure.

SCREEN
Homepage HERO section only: a single full-width section, not the whole page.
1. Phone, 390 px, one column: badge, headline, intro, primary button, secondary button, doctor cards, chips.
2. Desktop, 1280 px: two columns on a 12-column grid. Text left (6 columns), doctor cards right (6 columns). Content vertically centred.

STRUCTURE REFERENCE (structure only, not the look)
Use the common family-practice hero structure: a clear headline, one filled action with a phone option, the doctors shown up front, and a row of short benefit chips. Do NOT copy any other practice's arrangement, wording, photos, names or brand colours.

DESIGN SYSTEM (these are the only colours and fonts allowed)
- Page ground: cream #faf7ef. Alternate ground: lavender #f2eefc.
- Headings: indigo #17123a. Body text: #3d3a58. Secondary text: #5b5878. Hairlines: #e3ddf0.
- The ONE filled action: teal-deep #0b6f6f background, white text (5.97:1). Hover: #0a5656. Never bright teal #0e8a8a as a button fill or as small text.
- Accent: gold #d9a02c as a 3 px underline under one headline phrase, and as a soft decorative glow. Never gold text on cream.
- Pale tint for icon tiles and chips: mist #e6f2f1. Badge: white with a thin #e3ddf0 ring.
- Headline font: Fraunces (serif), weight 560. Body and UI font: Figtree (sans-serif). No other fonts. No external font links.
- Shape: the ARCH. Doctor photos sit in arch frames (fully rounded top, 20 px radius at the bottom).
- Shadows: soft and warm only, e.g. 0 28px 70px -30px rgb(23 18 58 / 0.4). No heavy black shadows.
- Corners: 28 px for cards, 999 px for pills and buttons.
- Feel: calm, warm, credible, editorial. Quiet and spacious. Not a cinematic dark hero. Not generic AI-SaaS: no gradient blobs, no neon, no glassmorphism, no emoji.

BACKGROUND
A bright, calm clinic reception as a faded backdrop, about 85% cream overlay so text always reads. Use a stock-style photo area labelled "Stock photo: clinic reception". No practice signage, no visible names, no people. Mark it decorative (aria-hidden). On phone, the backdrop is lighter so it does not compete with text.

HERO CONTENT (top to bottom, copy exactly as written)
1. Pill badge, white with a thin ring, teal-deep heart icon: "Care for every age"
2. H1, Fraunces 560, indigo, 42 px phone / 54 px desktop, line height 1.04. Three lines:
   "Family medicine & pediatrics," then, in italic teal-deep with a 3 px gold underline: "all in one place."
3. Intro, Figtree 17 px phone / 19 px desktop, body colour, max 42 characters per line:
   "One practice for your whole family, from the first checkup on. In [OFFICE 1] and [OFFICE 2]."
4. Two buttons, in this order, on phone stacked full width:
   a. PRIMARY (filled teal-deep, white text, phone icon, 52 px high): "Call to make an appointment"
   b. SECONDARY (ghost: white, indigo text, 1 px #e3ddf0 border, map-pin icon): "Visit our offices"
5. Text link below, 44 px tap height, teal-deep underlined: "Or request a visit online"
6. Doctor cards: ONE white rounded card (28 px radius, 1 px #e3ddf0 border, soft shadow) holding two doctors side by side on phone too. Each doctor:
   - Photo in an arch frame, 4:5, head in top third. Use a labelled stand-in portrait: "Photo placeholder".
   - Name in Fraunces 20 px indigo: "[DOCTOR 1 NAME]" and "[DOCTOR 2 NAME]"
   - Under the name, role only, Figtree 12 px, uppercase, letter-spaced, teal-deep: "[ROLE 1]" and "[ROLE 2]"
   - Do NOT show any credential line such as "Board-Certified".
7. Benefit chips, a 2 x 2 grid on both phone and desktop. Each chip: white tile, mist circle with a teal-deep outline icon, bold 14 px indigo text. Use these texts:
   - "Kids and adults, one team" (users icon)
   - "Care for every age" (heart icon)
   - "[Offices: to confirm]" (map-pin icon)
   - "[Languages: to confirm]" (globe icon)
   Chips with "[to confirm]" are visibly tagged with a small amber "to confirm" label (#9a5b00 text on #fff4dc, 4.97:1).

TRUST PLACEHOLDERS (show these as visible tags, never as facts)
- Credentials under each doctor: "[Credentials: to confirm]" as a small grey tag, only if the design needs a credentials slot.
- Insurance: "[Insurance: to confirm]" in the chips or footer of the card.
- Hours: "[Hours: to confirm]" where hours would appear.
- Reviews or ratings: none in this version.

DO NOT INCLUDE (hard rules)
- No "Board-Certified", "accepting new patients", "open 7 days", "most insurance plans accepted", "N languages", "years of experience", star ratings, review counts or any statistic, unless shown as a "[to confirm]" tag.
- No real phone number, street address or hours. Use the placeholders above.
- No symptom, diagnosis, date-of-birth or insurance form fields anywhere.
- No third-party scripts, trackers, chat widgets, embedded maps, external images or external fonts.
- No cookie banner. No video. No emoji. Use the exact copy above.

MOTION (phone first; keep it simple)
- Calm entrance once on load: badge fades in (260 ms); then the H1 lines rise 16 px and fade in, 90 ms apart; then the intro, buttons, and cards. Total under 1.4 s.
- The gold underline draws left to right once under "all in one place." (480 ms, scaleX 0 to 1).
- Button press: scale 0.97 (150 ms). No hover movement on phone.
- No loops. No live or animated background. No parallax. No scroll-jacking.
- Reduced motion: no movement; everything visible at once.
- Animate only transform and opacity.

ACCESSIBILITY (WCAG 2.2 AA)
- Text contrast: indigo on cream 16.6:1; body on cream 10.1:1; white on teal-deep 5.97:1.
- Every interactive element 44 px or more tall. Visible focus ring: 3 px indigo, 3 px offset.
- Doctor photos: empty alt text (name is real text beside them).
- One H1 in the hero. Chips are a list.
- Colour is never the only cue: "[to confirm]" tags use a word, not only colour.

OUTPUT
- Phone frame first (390 px), then desktop (1280 px), both labelled.
- Export as HTML and CSS only, with semantic elements (section, h1, p, ul/li, a). No inline JavaScript, no external resources.
- Simple enough to port by hand to Astro and Tailwind CSS v4.

ITERATION (one change at a time, using the selection tool)
- Phone first: fix any wrap or crowding on the 390 px frame before touching desktop.
- Keep the 2 x 2 chip grid. Do not add a fifth chip.
- Keep exactly one filled button in the hero.
````

---

## Part 3. After Stitch

1. Owner exports Stitch's HTML/CSS or shares the screen images. Stitch output is the design reference.
2. Port by hand into `src/components/home/Hero.astro`, using the tokens in `src/styles/global.css`. No React, no external fonts, no CDN.
3. Wire facts from `src/data/practice.ts`, not hard-coded. Unconfirmed items stay as "[to confirm]".
4. Replace the CSS backdrop with a licensed stock image (check the licence allows demo use, and record its source in `public/demo/CREDITS.txt`).
5. Update CLAUDE.md and the repo references from AIMSS to Family First Medical (owner to confirm the wording first).
6. Checks before any PR: `npm run check`; `workspace/tools` `node qa-pages.mjs` on phone then desktop (no horizontal overflow, 44 px targets); `code-reviewer`; red lines re-read against the diff.
7. Log in `workspace/04-logs/LOG.md`. No merge without the owner saying so.

## Open items

- Confirm the "use the one we have" doctors (names and stand-in photos from `practice.ts`).
- Client to confirm, in writing: credentials, ages seen, languages, insurance, hours, office addresses and phone numbers, reviews source.
- Choose the stock backdrop photo and its licence.
- Rename AIMSS to Family First Medical in CLAUDE.md and related docs.

## Sources

- [OpenReplay: prompt UI with Google Stitch](https://blog.openreplay.com/prompt-ui-google-stitch/)
- [Redwerk: Google Stitch, prototype or production?](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/)
- [index.dev: Google Stitch review for UI designers](https://index.dev/blog/google-stitch-ai-review-for-ui-designers)
- [how to use google stitch](https://dhaval-prajapati.onrender.com/blog/how-to-use-google-stitch)
- [MindStudio: what is DESIGN.md (Google Stitch)](https://www.mindstudio.ai/blog/what-is-design-md-google-stitch)
- [Google Labs design-md skill listing](https://skills.lc/google-labs-code/stitch-skills/design-md)
- [Stitch UI design prompting skill (community)](https://www.skills.lc/sickn33/antigravity-awesome-skills/stitch-ui-design)
- [Unicorn Platform: healthcare web design 2026](https://unicornplatform.com/blog/healthcare-web-design-in-2026/)
- [Unicorn Platform: medical website design 2026](https://unicornplatform.com/blog/medical-website-designer/)
- [DDS Web Solutions: homepage that converts](https://2026-dds-websolutions.pages.dev/guides/design-homepage-that-converts-visitors-into-patients)
- [Sequence Health: high-converting medical landing page](https://www.sequencehealth.com/?p=8943)
- [Unicorn Platform: medical landing pages that convert](https://www.unicornplatform.com/blog/medical-landing-page-templates-free-to-convert-visitors)

Not verified: Google's official Stitch documentation and the DESIGN.md schema. Vendor conversion statistics were not used.
