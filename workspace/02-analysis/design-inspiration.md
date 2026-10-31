# Design inspiration: premium, trustworthy NY primary care / pediatrics site

Date: 2026-10-31. Brief: new agency, must impress client, 1-week build, phone first. Structure-only adaptation; counsel has not cleared lookalikes, so no layout, wording or image copying.

## 0. What I could and could not access (read first)

- Mobbin MCP: both calls (search_sections, search_flows) returned "Mobbin MCP requires a paid plan". No Mobbin ids or links exist in this doc. Nothing was saved or changed in the account.
- Fallback used: WebSearch + WebFetch. WebFetch returns TEXT summaries only. I could not see screenshots, so colours, type and spacing for specific sites are NOT verified by eye. Where a row says "not covered" the source did not say.
- Awwwards, Godly, Land-book, Behance: no results surfaced (search returned Lapa, Dribbble, vendor blogs). Lapa category page exists (https://www.lapa.ninja/category/health-fitness/) but I did not open individual screenshots.
- onemedical.com returned 403. summerhealth.com redirected to an unrelated AI site (not used).
- Craft observations in section 3 are my design judgement informed by the sourced structure, labelled as such. Someone should eyeball the linked sites before the client meeting.
- Sources are mostly vendor blogs with commercial bias; treat as opinion.

Sources: Freshysites 31 pediatrician sites (https://freshysites.com/web-design-development/best-pediatrician-websites/), Framer healthcare templates roundup (https://www.framer.com/blog/healthcare-website-design-examples/), Parsley Health homepage text (https://www.parsleyhealth.com/), CyberOptik, Officite, O360 galleries (listed in search, not opened), Spreadsimple healthcare guide.

## 1. Patterns (examples = what the source says; adaptation = ours)

### 1.1 Hero (first screen)
Examples:
1. Lake Country Pediatrics (lakecountrypediatrics.com): emotional line "Before birth, and every day after", real child outdoors, doctor photos linking to profiles. Does well: warmth plus people. Fit: shows continuity of care.
2. Panda Pediatrics (pandapediatricscare.com): headline overlay plus four large buttons. Does well: instant task routing. Fit: parents arrive with one job.
3. Pediatrics Costa Mesa (pediatricscostamesa.com): phone number in header, five rounded buttons, bottom nav bar. Does well: call is always reachable. Dated otherwise (black hero).
4. Parsley Health (parsleyhealth.com): one strong human headline, one CTA, two entry cards under it, rating right below. Does well: clarity, one primary action.
5. Agave Pediatrics (agavepediatrics.com): award line in hero. Does well: credential as proof, but "Top Doc" style claims need substantiation.
6. Pediatrics East (pedseast.com): flat colour field, one child image, big policy button. Does well: bold colour, non-clinical.
Adapt: structure = one sentence promise, one primary action (request visit), one secondary (call), one reassurance line (accepting new patients / hours today). Our own copy, our own photography brief.

### 1.2 Appointment request / booking
Examples: Curely, Medical, WeCare (Framer templates) all include booking as a first-class page; Almouie Pediatrics uses a white "Book an Appointment" button on orange; Dangond Pediatrics "Make an Appointment" button with rotating reviews; Laurelwood CTA bubbles for appointments and portal; Nash Pediatrics has a dedicated new-patient registration section.
Does well: booking is one tap from anywhere and separate from portal login.
Adapt: a short request form (name, child DOB-free, preferred time, phone, reason category) with NO clinical detail fields and a "do not enter medical information; call for urgent matters" line. Confirm with counsel what a form may collect; plain request, not diagnosis. Keep portal link as a separate quiet button.

### 1.3 Doctor / provider cards and pages
Examples: Lake Country (nine doctor photos each to a profile); Panda Pediatrics; Doctr X, VitalCare, Curely, WeCare templates (distinct provider places); Parsley states board certification as a trust point.
Adapt: for a 2-doctor practice do two LARGE profile blocks, not a grid: portrait, name, credentials as stated by the client, languages, a one-line approach in their voice, "request a visit with Dr X". Verify credentials and licence with client; no unverified "top doctor" claims.

### 1.4 Location and hours
Examples: Northern Virginia Pediatric Associates (panels for hours, registration, portal, holiday hours); Healthy Children Florida (guide to two offices); Spreadsimple advice (map, click-to-call, address).
Adapt: card with address, tap-to-call, tap-for-directions, today's hours highlighted ("Open now / opens 9am" from a small script), holiday hours line, parking/transit note (NY: subway/bus lines). Static map image, no heavy embed, to keep phone speed.

### 1.5 Insurance / coverage
Examples: Parsley (insurance acceptance in FAQ), Pediatrix and Pediatric Associates (bill pay and scheduling at top level).
Adapt: list plans as plain text chips by carrier, with "call to confirm your specific plan" and a "last verified" date. Do not use carrier logos without permission. Self-pay line only if client confirms.

### 1.6 Trust / credential row
Examples: Parsley (rating + board certification + prescribing), Agave (award banner), Memphis Pediatrics and Nash Pediatrics (real staff/office photos).
Adapt: row of 3 to 4 verifiable facts only (board certification, years in practice, languages spoken, hospital affiliation if real). No star ratings or testimonials unless client supplies real ones with consent.

### 1.7 FAQ
Examples: Parsley accordion FAQ with inline links (insurance, switching doctors).
Adapt: 6 to 8 questions answered in two lines (new patients, insurance, sick visits same day, after-hours, forms, vaccines, language). Accordion native details/summary; also useful for SEO schema.

### 1.8 New-patient steps
Examples: Nash Pediatrics registration section; Northern Virginia registration panel; Peek-A-Boo virtual office tour and vaccine info.
Adapt: 3 numbered steps (request, we call you, first visit: what to bring) with a downloadable forms link. Optional short "what the first visit looks like" photo strip of the real office.

### 1.9 Mobile sticky call/book bar
Examples: Pediatrics Costa Mesa (bottom nav bar, phone in header, only one noted; not described as mobile-specific); Laurelwood (24/7 on-call shown on scroll). Everything else: industry convention, my judgement.
Adapt: two-button bottom bar (Call, Request visit), appears after the hero, 48px+ targets, respects iOS safe area, hides on the form itself.

### 1.10 Footer with legal links
Examples: not described by the sources I could read. See 02-analysis/legal-and-footer-comparison.md (already in workspace) for the footer inventory.
Adapt: use that file; keep NPP / privacy / accessibility / terms links; confirm all with counsel.

### 1.11 Emergency notice
Examples: Laurelwood (24/7 on-call), Lakeview; no strong visual example found.
Adapt: a quiet but visible strip near the form and footer: "For emergencies call 911. This site is not for urgent medical advice." After-hours instructions per client.

## 2. Gaps
No verified screenshots for: type pairings, exact palettes, motion, spacing. Section 3 therefore states recommendations, not observations of those sites.

## 3. Design-craft notes (judgement; verify visually)
- Type pairings that read premium and human: (a) soft serif display (Fraunces, Newsreader) + clean sans (Inter, Figtree); (b) rounded geometric sans (Plus Jakarta Sans) alone with weight contrast; (c) humanist sans (Source Sans / Nunito Sans) + one display serif for headings only. Avoid Comic-like rounded fonts and mascot type, which the pediatric roundups lean on and which read generic.
- Palettes avoiding clinical blue: sage + cream + terracotta; deep forest + warm sand + apricot; plum/aubergine + blush + cream; warm yellow (Pediatrics East style) used as an accent, not a field. Keep body text near-black on cream for contrast.
- Imagery: real office and real staff, natural light, candid; consistent crop and colour grade. Stock "doctor with stethoscope and baby" is the genre cliché in 6+ of the 31 reviewed.
- Spacing/density: generous vertical rhythm, 1 idea per screen on phone, max ~3 cards per row; roundups show cluttered 4-button/dual-menu patterns that we should avoid.
- Motion: low. Fade/translate on scroll, hover states only; respect prefers-reduced-motion. No rotating carousels (common in the reviewed sites).
- Buttons: one solid primary colour for "Request a visit", outlined secondary for "Call", full-pill or 10-12px radius consistently; never more than 2 button styles on screen.

## 4. Premium vs generic checklist
1. One primary action per screen, repeated consistently. (Generic: 4 to 5 equal buttons.)
2. Real people and place; no stock stethoscope shots.
3. A single considered palette of 3 colours + neutrals; not default blue/green.
4. Two typefaces max; heading font has character.
5. Generous whitespace, 16px+ body, 1.5+ line height.
6. No auto-rotating carousels or autoplay video.
7. Tap-to-call and directions work in one tap; sticky bar on phone.
8. Hours show "open now" state and holiday exceptions.
9. Credentials verifiable and specific; no vague "best care" claims.
10. Copy sounds like the doctors (plain, warm, short), not a template.
11. Consistent photo crop, grade, and radius.
12. Fast: images under ~150 KB each, sub-2.5s LCP on mid phone.
13. Accessible: 4.5:1 contrast, visible focus, 44px+ targets, alt text.
14. Footer is complete and tidy (legal, emergency, language, accessibility).
15. Forms ask the minimum and say plainly what happens next.

## 5. Three visual directions

### A. "Warm Clinic" (calm, modern, human)
Mood: unhurried, lived-in, neighbourhood doctor. Type: Fraunces (headings) + Figtree (body). Palette: cream #FAF6EF, sage #7C9A82, deep forest #1F3B34, terracotta accent #C8654B. Imagery: natural-light candid photos of real staff and rooms; no illustration. Suits: warm for parents, premium without cold luxury. Risks: needs good real photos; terracotta CTA must meet contrast (check).

### B. "Soft Playful" (friendly pediatrics, modern)
Mood: cheerful but adult-credible. Type: Plus Jakarta Sans (bold headings) + same family body. Palette: butter yellow #F6D56A as accent, ink navy #1B2A41, off-white, soft coral #F2907A. Imagery: cropped real kids/parents plus simple abstract shapes (blobs, arcs) drawn by us. Suits: strong pediatric identity, memorable. Risks: can slip into childish; weaker for the adult/family-medicine half; yellow text contrast.

### C. "Quiet Editorial" (premium private-practice)
Mood: restrained, confident, magazine-like. Type: Newsreader (large serif headlines) + Inter. Palette: warm white, charcoal #222, plum #5B3A5A, blush #EBD5D0. Imagery: fewer, larger portraits of the two doctors; lots of whitespace; thin rules. Suits: best "impress the client" and trust for adults; differentiates from typical peds sites. Risks: may feel formal for kids; depends on excellent doctor portraits; least playful.

Recommendation: A as default (best fit both pediatrics and family care, lowest risk in one week); show C as the bolder alternative.
