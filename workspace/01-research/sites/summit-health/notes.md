# Summit Health — https://www.summithealth.com/
Captured: 2026-10-30 (phone 390x844 @2x = 780px PNG, desktop 1280x800) · tier: adjacent (large NJ/NY/CT multispecialty system; NYC offices Manhattan/Queens/Brooklyn/Long Island/Westchester) · source of find: ORG estimate · raw: phone/ desktop/ (1-fold, 2-full, tiles/), html/, meta.json
Method: phone fold + all 5 tiles, desktop fold + 3 tiles viewed. Status 200 both, no console errors. Interactive states (menus, search, consent preferences) not captured.

## CAPTURE QUALITY NOTES
- **Cookie consent dialog (Osano) covers the lower ~55% of the phone first screen and the bottom ~25% of the desktop first screen** (phone 1-fold.png: a full-width blue panel with a long wall of text and a single "Manage Preferences" button; there is also an X to close at top-right). It is `fixed`, so it only appears over the first viewport in the full-page PNGs. The text under the dialog on phone (the hero sub-line, the search box and likely the CTAs) is hidden, so the phone hero was NOT fully seen.
- Scroll-reveal/fade-in: in desktop t00 the "Patient portal" card is washed out/near-invisible and the hero H1/sub-line are absent in the full-page PNG while present in desktop 1-fold.png (the animations had not fired in the stitched capture). So some sections look empty in 2-full.png purely as a capture artefact. Desktop 1-fold.png shows the real hero.
- Phone page height 4,196 css px (8,392 PNG px), desktop 3,505.
Multi-language: not offered on the home page.

## Snapshot
Summit Health: multispecialty outpatient system (formerly Summit Medical Group, merged with CityMD and VillageMD; the footer links a VillageMD code of conduct and the screenshot shows "Summit Health | CityMD" branding in the portal image). Offices in NJ, Westchester, Long Island, Manhattan, Queens, Brooklyn, CT. Page title "Summit Health | New Jersey's Top Ranked Multispecialty Care", H1 "A lifetime of care", sub-line "Find primary and specialty care near you". PRIMARY ACTION = provider/location search (Specialty or provider name + City/state/zip) and "Schedule an appointment" (goes to /doctors?searching=1); secondary: Patient Portal, Pay bills, Urgent Care (walk-in). A banner at the very top: "Notice of Aesto Data Incident, here." (link to a data-security-incident notice, dismissible).

## Phone (390x844) section by section
| # | Section | Evidence | Notes |
|---|---|---|---|
| top | Alert bar | 1-fold | Light blue bar, "Notice of Aesto Data Incident, here." and a round blue close X. Third-party data incident notice sits above the logo, so the first thing a visitor reads is a breach notice. |
| 1 | Header | 1-fold | White header 75 css px: logo left, search icon, hamburger. No phone number, no Book button in the header. |
| 2 | Hero | 1-fold, t01 | Pale blue background, large rounded geometric sans (Cera-like, (U)) H1 "A lifetime of care" in navy at about 56 css px, wraps to 2 lines; a big red brand glyph (arrow shape) follows and is cut by the cookie panel. Search form and CTA row are hidden behind the dialog in the capture. |
| 3 | Hero photo | t01 | Full-bleed stock photo of a smiling female doctor with a patient (back of head), real-looking, warm. |
| 4 | Three link cards | t01, t02 | Grey cards with navy title, arrow, 2-3 line description: Patient portal, Urgent care ("no appointment needed"), For our patients (messages, bills, records). Each is one tap target but the arrow is small. |
| 5 | Award-winning care | t02, t03 | Centered intro text and a one-at-a-time carousel (arrows left/right) of award badges (Newsweek America's Best Ambulatory Surgery Centers 2027 on first slide), "Learn more" ghost button and a filled "View all awards" pill. 10 award slides in the HTML. |
| 6 | App/portal promo | t03 | Laptop+phone mockup of the portal and "athenaPatient" app, headline "Stay connected to your care anytime, anywhere", filled blue "Learn more" pill, Google Play and App Store badges. |
| 7 | Footer | t04 | Dark navy: logo, 4 social circle icons, 2 accordion groups (ABOUT US, PATIENT TOOLS & RESOURCES; both closed, + icons), then a darker legal strip of 7 stacked links and "(c) 2026 - Summit Health". |
Not visible in the captured phone view but present in the HTML (text order): "Find care" block with shortcuts (primary care, orthopedic, GI, women's health, urgent care doctors) and "New to primary care? Browse primary care doctors that are accepting new patients" -> Find primary care (filter isAcceptingNewPatients=true); Services list; Locations by region (NJ, Westchester, Long Island, Manhattan, Queens, Brooklyn, CT) with a featured location "Learn more"; patient resources list (accepted insurances, request medical records, referral, webinars, patient relations, health & wellness). The screenshot does not show these as separate sections on the home page; they are likely mega-menu panels (unseen).

## Desktop (1280x800)
Fold: alert bar, then a header with a two-tier nav: small utility links (Schedule an appointment in blue, Pay bills, Urgent Care, Patient Portal) over a main nav (Find care, Services, Locations, Patient resources) with dropdown chevrons, and a round blue search button. Hero: left column with H1 "A lifetime of care", "Find primary and specialty care near you" and a rounded white search pill with two fields (search icon "Specialty, provider name" and pin icon "City, state, or zip code") and a blue "Search" button; the cookie panel clips its lower edge. Right: a large red brand glyph. Below (t00-t01): 2-column photo + three link cards (portal, urgent care, for our patients; faded in capture), awards carousel with 3 badges visible + arrows, "View all awards" pill, portal/app promo with store badges, then a navy footer with logo, social icons and two link groups in 4 columns (About Us, Patient Tools & Resources). The whole footer legal strip renders as seven narrow wrapped columns (t02) so the legal strip looks cramped, but readable.

## STRENGTHS
1. **Hero = a real search box, two fields, big button** ("Specialty, provider name" + "City, state, or zip code" + Search). Why: the system is big, so "find" is the honest first action; it is obvious and well-contrasted. Evidence: desktop 1-fold.png.
2. **"New to primary care? ... accepting new patients" shortcut** that pre-filters the doctor search (`isAcceptingNewPatients=true`). Directly answers the new-patient question. Evidence: html text + links (not visible in screenshots).
3. **Region-level location links with geolocation params** (NJ, Westchester, Long Island, Manhattan, Queens, Brooklyn, CT). Evidence: links.
4. **Walk-in urgent care as a separate top-level utility link** ("Urgent Care" in utility nav and a card "no appointment needed"). Evidence: desktop 1-fold, phone t01.
5. **Utility nav on desktop keeps "Schedule an appointment" in accent blue next to Pay bills / Patient Portal**: the most common tasks one click away. Evidence: desktop 1-fold.png.
6. **Credibility via third-party awards** carousel with named sources (Newsweek, U.S. News, Castle Connolly, NJ Monthly Top Docs) and each "Learn more" to a dedicated page. Evidence: phone t02-t03, desktop t01.
7. **Most complete legal/compliance footer in the set**: NPP for NJ and NY (separate PDFs), digital privacy policy, SMS terms of use, No Surprises Act, good-faith estimate notice, non-discrimination (NY & NJ), "Insurance & pricing", anonymous hotline. Evidence: phone t04, desktop t01/t02.
8. **Clean brand/type system**: one saturated navy, bright blue buttons, red glyph; large rounded-sans headings; pill buttons; real photography. Evidence: all.

## FLAWS
1. **H: Consent dialog is a large blocking panel** (about 55% of the phone screen) with a legalistic paragraph and only "Manage Preferences" visible (no "Accept all"/"Reject" visible in the captured state; an X in the corner may mean reject/close, unverified). On a phone the visitor cannot see the hero or search until they deal with it. Fix: small bottom banner with 2 equal buttons, or load no non-essential trackers so no banner is needed.
2. **H: Data-incident alert as first text on the page** (above the logo). Third-party (Aesto) data incident link as the first impression erodes trust. Not ours to copy; lesson: keep a place for a dismissible notice but not above the logo for routine messages.
3. **H: No phone number on the home page and no tel: link** (meta tel = 0; the only number is in the JSON-LD, the NJ HQ +1-908-273-4300). Call intent is unserved. Fix: header call link + sticky bar.
4. **M: Mobile header has only logo + search + hamburger** (no Book/Call) while desktop has "Schedule an appointment". Mobile loses the primary utility actions. Fix: mobile header with Call and Book.
5. **M: Phone home page content is thin and generic** (3 text cards, awards, app promo): mostly portal/billing tasks, not "become a patient". Insurance is only in the footer/resources. Fix: new-patient and insurance on the first scroll.
6. **M: Fade-in animations leave blank areas in the full-page capture** (desktop t00). If JS is late or reduced motion is set, the hero text may not appear. Fix: no content hidden until JS.
7. **M: Slow load**: 21.0 s (phone) / 16.4 s (desktop) in headless capture (loadMs in meta.json), probably heavy Osano/GTM/Drupal; not a user-measured figure.
8. **L: Awards carousel shows one badge at a time on phone** (needs arrows), 10 slides. Low-value interaction. Fix: static row of 3 badges max.
9. **L: Footer legal strip on desktop wraps into narrow word-by-word columns** (t02).

## Conversion machinery inventory
- CTAs: header "Schedule an appointment" (desktop utility nav), search form "Search", "Find primary care", "Find an urgent care", "Request a screening" (colonoscopy form), "Learn more" x many, "View all awards", portal "Login", app badges. Footer "Request an appointment" goes to an athenahealth patient portal (2983-1.portal.athenahealth.com).
- Booking path (desktop): 1) click Schedule an appointment or search; 2) search results (/doctors/results) filtered by accepting-new-patients; 3) provider page; 4) request/appointment in athena. Phone count not verifiable (dialog covers the form). Call: not available.
- Sticky: no sticky header evidence in screenshots; fixed elements = Osano consent dialog and its widget button only.
- Forms: search keywords; home search with specialty/provider + address (two buttons, hidden "homepage" field); no contact form on home. athena portal collects patient details elsewhere (not captured).
- Trust: awards carousel (named sources), portal/app promo (athenaPatient), named brand; no patient reviews or star ratings on the home page.
- Insurance: "Accepted insurances" and "Insurance & pricing" pages in resources/footer; no plan list on home.
- New-patient flow: "accepting new patients" filter, "Patient resources", referral and medical-record request pages.
- Hours/location: region links with geocoordinates; one featured location card "Learn more" (Livingston Hub, NJ). No hours on home.
- Portal: Patient Portal (header utility, card, footer) and athenaPatient apps.

## Design notes
- Type: rounded geometric sans for headings (heavy navy), humanist sans (Noto Sans-like) for body; large, confident; line-length comfortable.
- Color: navy (#1b2a8a-ish) + bright blue (#2257ea-ish) buttons, pale-blue hero bg, brand red glyph, light grey cards. Pill-shaped buttons.
- Imagery: one natural stock doctor-patient photograph; app mockup; award badges. No clinic exteriors.
- Density: low-moderate; short page (phone 4,196 css px).
- Mobile nav: hamburger + search icon.

## Footer / legal
Groups: social (Facebook, Instagram, YouTube, LinkedIn); ABOUT US (About Summit Health, Leadership team, Careers, Summit Health news, Summit Health cares, Health & wellness, Code of conduct (PDF, VillageMD), Compliance manual (PDF), Privacy & Nondiscrimination, Summit Health Management); PATIENT TOOLS & RESOURCES (Request an appointment, Insurance & pricing, Pay bills, Events & lectures, Patient relations, Educational webinars, Anonymous hotline, Patient portal, Request medical records, Urgent Care); legal strip (Notice of Privacy Practices NJ, Notice of Privacy Practices NY, Digital Privacy Policy, SMS Terms of Use, No Surprises Act, Notice of right to good faith estimate, Non-discrimination Statement NY & NJ); "(c) 2026 - Summit Health". Legal links present: NPP (HIPAA), privacy, SMS terms, No Surprises Act, GFE, non-discrimination. Absent: website Terms of Use/Terms & Conditions (only SMS terms), accessibility statement (not found in footer).

## Tech facts (meta.json + html)
- Platform: Drupal (136 mentions), athenahealth integration (portal + athenaPatient app), Osano consent management (consent dialog, 2,000+ class mentions), Google Tag Manager GTM-TDGS7B8, gtag() calls, Font Awesome. 
- Forms: 2 search forms (see above). Images: 18, all with alt (imgNoAlt = 0, best of the four). Load: 21.0 s phone / 16.4 s desktop (headless).
- JSON-LD: one MedicalOrganization (alternateName Summit Medical Group; address 1 Diamond Hill Road, Berkeley Heights NJ; telephone +1-908-273-4300; areaServed NJ, NY, CT) with PostalAddress and State. No AggregateRating, Review, FAQ, or per-location LocalBusiness markup on the home page.
- Console errors: none.
- Fixed elements: Osano dialog + widget + info dialog.

## Unverified claims on the site
"New Jersey's Top Ranked Multispecialty Care" (title); awards (Newsweek America's Best Ambulatory Surgery Centers 2027, U.S. News 2026, Castle Connolly #1 Physician Practice NJ, NJ Monthly Top Docs 2025, eHealthcare, Target BP Gold, urgent care excellence); portal app rating shown in the mockup (4.9) is a third-party store listing image; urgent care "no appointment needed".

## Steal / avoid for Family First
Steal: pre-filtered "accepting new patients" entry point; separate walk-in/urgent utility link (we can mirror with "Same-day sick visits"); compliance footer breadth (NPP, non-discrimination, good-faith estimate/No Surprises, SMS terms if we text); awards-style proof only if real. Avoid: blocking multi-paragraph consent panel; incident banner above the logo; mobile header without Call/Book; carousels for proof; tracker-heavy stack on a patient site.
