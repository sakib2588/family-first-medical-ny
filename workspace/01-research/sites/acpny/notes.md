# AdvantageCare Physicians (ACPNY) — https://www.acpny.com/
Captured: 2026-10-30 (phone 390x844 @2x = 780px PNG, desktop 1280x800) · tier: adjacent (large NYC/LI multispecialty group, PCMH) · source of find: SERP (Astoria office page) · raw: phone/ desktop/ (1-fold, 2-full, tiles/), html/, meta.json

## CAPTURE QUALITY WARNING (read first)
**Every screenshot of this site is a blank white image.** I verified with ImageMagick: phone 1-fold.png, 2-full.png and all 6 phone tiles, and desktop 1-fold.png, 2-full.png and all 3 desktop tiles all have mean = 1.0 and standard deviation = 0 (a single flat white color). The page returned status 200 and the DOM is complete (233 KB html, 4,788 css px phone height), so the capture happened with CSS/JS content not painted (this capture was the domcontentloaded retry noted in the LOG; a CSP error for the Adobe RUM script is in consoleErrors; the page's own stylesheets are on /etc.clientlibs and may not have applied; exact cause unknown). It is NOT a cookie wall or an error page. Consequence: no visual review (layout, type, color, imagery, tap size, sticky position) is possible from these captures. Everything below is derived from html/phone.html and meta.json (text, links, forms, fixed elements, JSON-LD). Anything about appearance is marked "unseen". **Recommended: recapture acpny with waitUntil networkidle + fullPage screenshot before relying on this file for design decisions.** Multi-language out of scope (site has zh.acpny.com and espanol.acpny.com subdomains).

## Snapshot
AdvantageCare Physicians: a large NYC/Long Island medical group (Emblem Health-linked; the HTML references emblemhealth.scene7.com assets and "Emblemhealth Services Company" in the RUM config), offices in the Bronx, Brooklyn, Long Island, Manhattan, Queens, Staten Island. Primary care (internal, family, OB/GYN, pediatrics) plus 10 specialties, lab, radiology. NYS PCMH recognized. Home page title: "Primary and Specialty Care Providers in New York City"; H1: "Primary and Specialty Care, Right in Your Neighborhood". PRIMARY ACTION = Find a Provider (search by specialty / location / insurance) then Schedule Appointment via provider or location pages; secondary: myACPNY patient portal sign-in. No phone number appears anywhere on the home page (zero tel: links, zero phone-number patterns in the HTML).

## Phone (390x844) — from html only (screenshots blank)
Section order from the text: skip link > top bar (Switch to: myACPNY Patient Portal, language links 中文/Español, Contact Us, search) > header (Find a Provider, Patient Portal Sign In, nav) > "Popular tasks" shortcut row (Insurances We Accept, Find a Medical Office, Flu Vaccine Appointment) > hero/H1 > Find a Provider block with a search form + borough links > myACPNY sign-up promo > Why ACPNY (approach to care, care teams, NPs promo) > Care & Services (primary, specialty, lab, radiology) > Find a Pediatrician promo ("Let one of ACPNY's pediatricians help keep your kids happy and healthy") > For Your Visit (pre-visit, post-visit, digital patient experience, patient resource hub) > For Your Health (seasonal flu, back to school, diabetes, menopause, COVID, mpox, blog) > "Faces of Care" video tiles for 7 named doctors > footer. A **sticky global alert** exists (class `cmp-global-alerts is-sticky show`, id flu-alert-26, label "Book an appointment.") = a flu-vaccine banner pinned on screen with a "Book Appointment" link to /health/seasonal/flu. Appearance, size and position: unseen.
Tap path to book (from HTML structure, unverified in render): Find a Provider (1) > filter by specialty/location/insurance (2-3) > provider result > Schedule (4+). Flu: 1 tap on the sticky alert. Call: not possible from the home page (no number).

## Desktop (1280x800) — from html only
Same DOM; desktop fixed elements include mega-menu panels (`cmp-navigation__guided-navigation mega-menu`) in addition to the utility nav panel. A multi-column mega-menu with five top-level groups: Why ACPNY, Care & Services, For Your Visit, For Your Health, Schedule Appointment. Layout and look: unseen.

## STRENGTHS (all inferred from DOM/text; no screenshot evidence is available)
1. **Search-first "Find a Provider" with insurance as a field** (home form: specialty, location, latitude/longitude hidden, insurance plan, borough). Why: the patient's real question is "who near me takes my plan". Evidence: meta.json forms (two search forms with fap-insurance-plans), not visually verified.
2. **"Popular tasks" shortcuts including "Insurances We Accepted" and "Same-Day/Next-Day Appointment"** — admits urgency intent and the insurance question on the home page. Evidence: links list.
3. **Borough chooser links (Bronx/Brooklyn/Long Island/Manhattan/Queens/Staten Island) with ?borough= deep links** to the office list, repeated in the footer. Evidence: links.
4. **Full legal footer**: Legal, Nondiscrimination Policy, Privacy and Security Policy, Accessibility Statement, Language Assistance, Medical Records & Privacy. Best legal coverage of the four sites. Evidence: footer links.
5. **Pre-visit / post-visit structure** (Preparing for your appointment, Specialist referral, FAQ, Billing, Medical records, Patient Resource Hub) = a real new-patient information architecture. Evidence: links.
6. **Dedicated "Find a Pediatrician" promo** and pediatrics service page and footer link with pre-filtered pediatric search. Evidence: links; this is the only one of the four sites with pediatrics as its own entry.
7. **Named-doctor "Faces of Care" video tiles** (7 physicians) = human proof. Evidence: anchors #vm-*, videomodal.js; content unseen.

## FLAWS
1. **H: No phone number on the home page at all** (0 tel: links, no numeric pattern in 6.9k chars of visible text). Call-intent visitors must go to Contact Us. Fix: header number + sticky call bar.
2. **H: Primary conversion requires multi-step search** — there is no "Book now" for a ready patient; "Schedule Appointment" is the same link as "Find a Provider". Fix: one-tap Book / Call, search only as a secondary path.
3. **M: Corporate-system density**: 5-group mega-menu, 12+ shortcut links, 3 languages, utility bar, multiple modals (7 `modal__overlay` fixed divs) = heavy for a mobile first screen (unseen but implied). Fix: a short menu.
4. **M: Images missing alt text**: 22 of 24 images have no alt (meta.json imgNoAlt = 22/24). Accessibility and SEO miss.
5. **M: JSON-LD is thin**: WebPage, Website + SearchAction, Organization only; no MedicalOrganization/Physician/LocalBusiness, no review/rating, no FAQ. Fix: MedicalClinic + FAQPage + openingHours on ours.
6. **M: CSP error loading Adobe RUM script** (console, both views) = broken monitoring/resource. Not user-facing.
7. **L: Capture shows nothing; the page could appear blank to a user if CSS/JS fails** (cause unknown). Fix: ensure our CSS is inlined/critical so a failing script never gives a white page.

## Conversion machinery inventory
- CTAs (text only): Find a Provider, Schedule Appointment, Find an Office (6 boroughs), Sign Up for myACPNY, Book Appointment (flu), Get Started (locations), Find a Pediatrician, Learn More, Watch Video x7.
- Booking path: via provider search/office pages and the myACPNY portal ("Schedule appointments, request prescription refills, view lab results"); same-day/next-day page exists (/find-a-provider/same-day-next-day). Taps on phone: unverified; at least 3-4.
- Sticky: flu alert bar (`is-sticky`), nothing for call (no number).
- Forms and fields: (1) site search: query; (2) and (3) Find-a-Provider form x2 (desktop/phone variants): specialty (text/autocomplete), location, hidden latitude + longitude, insurance plans, borough, submit. No contact or appointment-request form on home.
- Trust/proof: "NYS PCMH Recognized" link, "Faces of Care" doctor videos, Care Teams, leadership page, commitment to care for all patients. No visible star ratings or review counts in the text.
- Insurance: "Insurances We Accept" page, home search filter by insurance plan.
- New-patient flow: Pre-Visit section (sign up for myACPNY, preparing for your appointment, specialist referral, FAQ, get the right care at the right time).
- Hours/location cards: none on home; offices only by borough list pages.
- Portal: myACPNY (my.acpny.com), a sign-in link in header and a sign-up promo.

## Design notes
All unseen (blank captures). From the DOM: Adobe Experience Manager (AEM) with core components, Scene7 dynamic media images, custom font loading unknown, icon-font css (clientlib-icons). No color/type conclusions are drawn.

## Footer / legal
Groups (from meta.json): About Us (Why ACPNY, Careers, Press Releases); Our Providers (Primary Care, Pediatrics, OB/GYN, Specialty Care, View All Providers); Locations (Bronx, Brooklyn, Long Island, Manhattan, Queens, Staten Island); For Patients (myACPNY Patient Portal, Medical Records & Privacy, Support/Contact, FAQs); Legal (Legal, Nondiscrimination Policy, Privacy and Security Policy, Accessibility Statement, Language Assistance); social: Facebook, Instagram, LinkedIn, Twitter, YouTube. Legal links present: privacy, nondiscrimination, accessibility statement, language assistance, medical records/privacy. Absent as footer links: Terms of use, HIPAA NPP as its own link (probably inside Medical Records & Privacy, unverified), price transparency, cookie preferences.

## Tech facts (meta.json + html)
- Platform: Adobe Experience Manager (clientlibs, Granite, `/etc.clientlibs/`), Adobe Dynamic Media (Scene7 / emblemhealth account), Adobe Launch (assets.adobedtm.com), Adobe Target/Experience Cloud ID (demdex 4x in html), Google Tag Manager (googletagmanager 2x), Google Analytics reference (google-analytics 2x), Facebook connect.facebook.net (2x), DoubleClick (12x mentions), Helix RUM (rum.hlx.page, blocked by CSP). So tracking is heavy (ad/marketing pixels on a patient site; check consent behavior, unverified). MyChart referenced (2x).
- Forms: 3 (search + 2 provider-search). Phone: 24 images, 22 without alt; load 5.4s phone / 3.1s desktop (headless).
- JSON-LD: WebPage, Website + SearchAction, Organization. No review/rating markup.
- Console: only the CSP block for the RUM script.
- Language: html lang en-US; separate zh and espanol subdomains (out of scope).

## Unverified claims on the site
NYS PCMH recognition; "NPs can deliver much of the same care" statement; flu-season messaging for 2026-2027; whether same-day/next-day is truly available at all offices; everything visual (blank captures).

## Steal / avoid for Family First
Steal: insurance field and "Insurances accepted" shortcut near the top; borough/location deep links; complete legal footer set; pre-visit info architecture; named-doctor intros. Avoid: no phone number on the home page; search-only booking; corporate mega-menu on mobile; pixel-heavy marketing tags on a patient-facing page.
