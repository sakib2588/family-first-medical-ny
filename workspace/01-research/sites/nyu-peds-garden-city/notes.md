# NYU Langone Pediatric Associates - Garden City - https://nyulangone.org/locations/nyu-langone-pediatric-associates-garden-city
Captured 2026-10-30 (phone 390x844 @2x, desktop 1280x800) - tier: direct (health-system-owned pediatric practice, 6 clinicians, 1 office) - source of find: SERP (candidates.md #1). Only this single location page was captured, not the doctors/schedule flow behind "Find a Doctor & Schedule". Multi-language out of scope. (U) = unverified.

## Snapshot
One location page on the NYU Langone enterprise site (Nassau County). Pediatricians for birth through age 20, same-day sick appointments, doctors reachable by phone day or night, English/Spanish and on-site interpreters, prenatal consultation visits, chronic care (asthma, ADHD, obesity). PRIMARY ACTION: purple button "Find a Doctor & Schedule" (goes to /doctors list, then provider scheduling, not captured). Secondary: phone 516-248-8334. Taps to book on phone: 1 tap to the doctor list, then per-doctor scheduling (U, not captured); call = 1 tap (tel link) but the number is in the hero, not sticky.

## Phone (390x844)
Fold (phone/1-fold.png, t00 same): dark cookie banner at the top (text "By using our site, you accept", Close only; no reject or choice) takes about 110 css px; purple header with hamburger, logo, search icon, AI sparkle icon; "Back to Locations"; H1 "NYU Langone Pediatric Associates -Garden City"; address with View Location Details; phone 516-248-8334 as plain text line with phone icon; full-width purple "Find a Doctor & Schedule". A round purple accessibility (UserWay) button floats bottom right and overlaps the body text.
Scroll: intro copy (birth to 20, same-day sick, 24h phone, English/Spanish, interpreters, t00-t01; serif body, readable) > "Our Team of Doctors" carousel (t01): board-certified statement, large headshots with name, degree, "Pediatrician", arrows and 5 dots, a View All 6 Doctors & Schedule button (t02) > "Our Location" card (t02): address, a hours/phone area that shows 3 loading dots (hours widget never finished loading in the capture, so hours are NOT visible: either a failed script (console shows PulseInsights and one name-resolution error) or lazy render), Phone, Get Directions (Google Maps), outlined Find a Doctor & Schedule > "For Our Patients" accordions: Doctor's Office Visit info, Wi-Fi (t02-t03) > repeated sub-nav "Find a Doctor & Schedule" > purple band "We can help you find a doctor. Call 646-929-7800 or browse our specialists" (t03) > dark footer with 5 collapsed accordions (Patient Care, About Us, How to Help, Stay Connected, Education & Research), social icons, legal row (t03-t04).
Not seen: no reviews, no insurance list, no new-patient steps on this page, no JSON-LD.

## Desktop (1280x800)
Fold (desktop/1-fold.png): cookie bar, purple top bar (Patient Care / Education & Research tabs, centred logo, utility links MyChart Patient Login, Patient Forms, Contact, Give), breadcrumb row with Menu, Search, Ask AI button, then H1 left, purple Find a Doctor & Schedule button centre, address and phone right in a bordered card. Body is a 3-column layout (left jump-nav of 2 items, text column, empty right gutter that stays empty: unused space). Doctor carousel shows 4 cards at a time with arrows (tile t00), location card with the same loading-dots placeholder (t01), two For Our Patients tiles, purple call band, 5-column footer with a legal row. No cookie-wall blocking; page fully visible.

## Strengths
1. One dominant, repeated primary CTA "Find a Doctor & Schedule" (hero, doctor section, location card, sub-nav; 4 placements), always the same wording and colour. Evidence: phone 1-fold, t02; desktop fold.
2. Phone number plus address in the hero block above the fold on both devices (phone 1-fold). Plus a fallback call band for people who cannot find a doctor (t03).
3. Doctor headshot carousel with degree and role, and a "board-certified" statement, with deep links to individual provider pages (NPI-style IDs in the URLs). Evidence: t01, desktop t00.
4. Copy answers the new-parent questions in one paragraph: age range, same-day sick, 24-hour phone access, bilingual staff and interpreters, prenatal visit. Evidence: t00-t01.
5. Mature legal and accessibility footer: Websites Privacy Practices, Policies & Disclaimers, Public Notices, Price Transparency, Accessibility plus dedicated Accessibility Help Line, and a UserWay accessibility widget. Evidence: phone t04, desktop t01.

## Flaws
- H: hours of operation do not render (loading dots) in the location card on both devices; for a practice page this is the most-needed fact. Our fix: static server-rendered hours in HTML and schema.
- M: booking is not on the page; the primary button leads to another page, and the real schedule flow is a vendor tool (MyChart, U). Our fix: put request-callback or booking in the first two taps.
- M: cookie banner has Close only (consent by use), occupies about 14 percent of the phone fold, and no reject. Compare NYP which offers Reject. Our fix: no tracking until consent, or none at all.
- M: phone number is not a tappable styled button (plain row, though a tel link exists, 516-248-8334); no sticky call/book bar on phone. Our fix: sticky bar.
- M: UserWay floating button overlaps text on phone; Salesforce chat helpButton also present (fixed elements) but not visible in capture.
- M: no reviews, insurance list, new-patient steps or forms link on the page (candidates.md); no per-practice differentiation beyond text.
- L: huge enterprise chrome (mega menus, AI assistant) around a one-practice page; footer about 1,400 css px of enterprise links.
- L: 17 of 22 images lack alt in meta (headshots likely decorative or have alt in names, U); desktop right gutter empty.
- L: JSON-LD absent (no MedicalClinic/Physician schema) despite the enterprise scale.

## Conversion machinery inventory
- CTAs: Find a Doctor & Schedule x4 (solid purple hero, solid under carousel is View All 6 Doctors & Schedule, outlined in location card, text in sub-nav); Get Directions; tel 516-248-8334; call band 646-929-7800 (central physician referral line); MyChart Patient Login and Patient Forms in the header (desktop top bar; hamburger on phone); Ask AI.
- Booking path: Find a Doctor & Schedule > doctor list > provider schedule (not captured). Taps on phone: 1 to the list, plus choose doctor and slot (U).
- Sticky: none for conversion; header is not sticky in the captures (U); fixed elements are UserWay accessibility button and Salesforce chat helper.
- Forms: site search (q) and a file input form (hidden, likely tooling). No contact or booking form on the page.
- Trust/proof: NYU Langone brand, board-certified statement, headshots; no reviews, no ratings.
- Insurance: none on page (link under Insurance & Billing in footer). New-patient flow: none on page; prenatal visit mention, Patient Forms link, MyChart. Hours/location: card with address, phone, directions; hours broken.

## Design notes
Type: bold grotesque sans headings (Benton Sans-like) with a serif body at about 18px. Colour: NYU purple (#57068C-ish) on neutral grey and white, teal accent bar on the location card. Imagery: consistent studio headshots on grey; no hero photo. Density medium-low on this page. Mobile nav: hamburger left, logo, search and AI icons; footer accordions.

## Footer / legal
Phone accordions: Patient Care, About Us, How to Help, Stay Connected, Education & Research (expanded on desktop). Desktop links: Patient Care (Conditions We Treat, Locations, Emergency Care, Virtual Urgent Care, Insurance & Billing); About Us (Our Story, Jobs, Vendor & Supplier Information, Contact Us); How to Help (Give, Volunteer, Blood Donation, Organ & Tissue Donation); Stay Connected (NYU Langone Health App, NewsHub, Press Releases, Media Resources); Education & Research (Grossman School of Medicine, Grossman Long Island School of Medicine, Health Sciences Library, New York University). Social: Facebook, X, Instagram, YouTube, LinkedIn. Bottom row: (c) 2026 NYU Langone Hospitals, Price Transparency, Policies & Disclaimers, Public Notices, Websites Privacy Practices, Accessibility, Accessibility Help Line 855-698-9991. Legal: privacy YES (website only), accessibility YES, price transparency YES, terms/disclaimers YES (Policies & Disclaimers), public notices (nondiscrimination, U) YES. NPP not in the footer (U, may sit under Public Notices).

## Tech facts
Forms: search; hidden file form. JSON-LD: none found in the page. Console errors: PulseInsights object failed to initialise, one ERR_NAME_NOT_RESOLVED. Third-party clues in html: UserWay accessibility widget (cdn.userway.org), Salesforce Embedded Service live chat (service.force.com, salesforceliveagent.com), Pulse Insights survey, MyChart integration (patient login, recaptcha), cdn.jsdelivr.net. No obvious GA/GTM/Facebook strings found by grep in the phone html, but a cookie banner exists, so analytics likely load via a tag manager/other (U). Load 36.8 s in capture (heavy). Page height about 3,590 css px.

## Unverified claims
"Doctors available by phone anytime, day or night"; "short wait times"; "same-day appointments for sick children"; "all doctors board-certified pediatricians" (note the roster includes an NP, Arianna Lanzetta, while the page says "board-certified pediatricians", a mismatch worth noting); "6 doctors"; "birth through age 20"; English/Spanish plus on-site interpreters.
