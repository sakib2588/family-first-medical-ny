# Tribeca Pediatrics - https://www.tribecapediatrics.com
Captured 2026-10-30 (phone 390x844 @2x, desktop 1280x800) - tier: adjacent (large pediatric group, 50+ offices NYC/NJ/Westchester/LI) - source of find: candidates.md #3
Reviewed from phone/ and desktop/ captures (tiles) plus meta.json, html/. Multi-language out of scope. (U) = unverified. Note: only the homepage was captured; booking, new-patient, insurance and location pages were NOT viewed, so their content is known only from link labels.

## Snapshot
WordPress marketing site for a big multi-office pediatric group founded 1994 in Lower Manhattan. Homepage is a stack of colour-blocked sections each with one text link. Header has only two actions: PORTAL and JOIN TODAY (register). Primary action: "Register today!" (new-patient registration at /register-now/). Taps to book on phone: no booking button on the homepage; "convenient online scheduling" is promised in copy but the actual scheduling sits behind PORTAL or registration (U). Phone number appears only in the footer (tel link, 212-226-7666). No sticky bar.

## Phone (390x844)
Fold (phone/1-fold.png, t00 same): white header with logo, PORTAL | JOIN TODAY text links, hamburger; hero photo (toddler on a purple sofa) with H-like text "Caring For Kids For Over 30 Years" and a pale-blue pill "Register today!". reCAPTCHA badge overlaps bottom right (covers text on phone). Hero text is grey on a light photo (low contrast), the button is light blue with white text (about 3:1, U).
Scroll (t00-t03), one colour block per section, each with a curved image and an underlined text link:
1. Pink "Care in Your Neighborhood": 50+ offices, map of pins across NYC/NJ/Westchester/LI; link "Explore Our Locations". (white on pink contrast weak)
2. Green "Resources & Support": 24/7 medical guidance, online scheduling, complimentary forms and records, weekend/evening hours, same-day sick and virtual visits until 10PM; link to FAQ. Best content block, but styled as a small list squeezed by the image on phone, and the reCAPTCHA badge covers it.
3. Yellow "The Team": claim of most skilled pediatricians and NPs; link Meet Our Team. White text on yellow (low contrast).
4. Brown "About Us": since 1994, personalised attention; link Our Story. Real storefront photo.
5. Blue "Insurance": most major plans and managed Medicaid, zero concierge or membership fees; link View Our Accepted Insurance Plans.
6. White "Info Sessions": free sessions virtual and in person; link Register for an Info Session.
7. Grey footer (t03): 4 link columns collapsed into a 2-col wrap; tiny phone/email.
Nav: hamburger (menu content not captured; link list in meta.json shows Home, Patient Portal, New Patients, About (Our Story, Team, FAQs, Locations, Info Sessions, Insurance), Health info (Visit Schedule, Vaccine Schedule, Adolescent Resources, Mental Health Support, A-Z Guide, Medication Dosage, Breastfeeding, Classes), Newsletter).

## Desktop (1280x800)
Fold (desktop/1-fold.png): white header logo left, PORTAL | JOIN TODAY | hamburger right (no inline nav even on desktop); wide hero photo of laughing kids with H "Caring For Kids For Over 30 Years" and the Register pill, then the pink block starts at the fold. Blocks alternate image left/right with curved crops, text links tiny (about 13px) and underlined. Footer 4 columns on mid-grey. I viewed desktop tiles t01 and t02 and the fold; t00 (map and resources sections) was not opened separately, but the same sections appear on phone. No cookie wall, no error.

## Strengths
1. One clear primary action for new families (Register today!) in the hero and header "JOIN TODAY", repeated. Evidence: both 1-fold shots.
2. Strong conversion-relevant claims in plain words: same-day sick visits and virtual until 10PM, weekend/evening hours, 24/7 guidance, complimentary forms/records, zero membership fees, accepts managed Medicaid. Evidence: phone t01, t02. Directly reusable idea set (verify per practice).
3. Real new-patient funnel infrastructure: Portal, New Patients page, Info Sessions (free meet-the-doctor), sliding scale policy, Medical Release Form PDF. Evidence: footer links, meta.json.
4. Distinct brand: colour-blocked sections and warm kid photography, large friendly type (Nunito-like); memorable and fun. Evidence: all phone tiles.
5. Substantial footer with legal-ish pages: Non-Discrimination and Code of Conduct, Sliding Scale Policy, Medical Release form; health education library.

## Flaws
- H: no phone number or call button anywhere above the footer; no sticky bar; no way to call in two taps (confirmed: only footer tel link). Our fix: sticky Call bar.
- H: no Privacy Policy, Terms, NPP or accessibility link in the footer despite Meta Pixel + GA + GTM + reCAPTCHA firing (see Tech); this is a HIPAA/FTC tracking exposure on a medical site (counsel). Our fix: no ad pixels; privacy and NPP pages.
- H: no hours, no address and no per-office info on the homepage; everything sits one click deep under Locations. Our fix: hours/location card on the homepage.
- M: low text contrast: white on pink, yellow, light blue, and grey hero text; text links about 13px on desktop and under 44px targets.
- M: reCAPTCHA v3 badge (fixed) covers copy on phone; on a page with 0 forms it should not be loaded.
- M: no H1 or H2 found in the DOM (headings are likely styled divs): SEO/a11y problem; imgNoAlt 10 of 18 on phone.
- M: no testimonials or review proof (candidates.md note), no doctor names or credentials on the homepage, and "most skilled and experienced" is an unsupported superlative.
- M: no booking widget visible; "online scheduling" is a promise only.
- L: hamburger-only nav on desktop hides every destination; two top-right items only.
- L: first-load 20 s in capture with 401 and storage-access console errors (third party).

## Conversion machinery inventory
- CTAs: Register today! (hero, /register-now/), JOIN TODAY (header), PORTAL (header), 5 section text links (Locations, FAQ, Team, Story, Insurance, Info Session). No phone CTA, no book-now.
- Booking path: Register (new) or Portal (existing) then scheduling (U, not captured). Taps to book on phone: 1 tap to Register, then a form of unknown length (U).
- Sticky: none visible except the reCAPTCHA badge; header is not described as sticky.
- Forms on this page: 0 (meta forms []). reCAPTCHA v3 key loaded anyway. Contact Form 7 plugins (drag-drop file upload, email verification) are loaded site-wide, implying forms elsewhere (U). No fields observed.
- Trust/proof: "30 years", 1994, 50+ offices, 24/7 guidance, Affiliated Hospitals page, no reviews/ratings/logos.
- Insurance: dedicated page (plugin "tribeca-pediatrics-insu") and homepage block with managed Medicaid, sliding scale policy. New-patient flow: Register, New Patients, Info Sessions, Medical Release Form, Vaccine and Visit schedules. Hours/location: Locations index only (not captured).

## Design notes
Type: rounded sans (Nunito-like) in light and bold, large headings. Colour: six saturated blocks (pink, green, mustard, brown, sky-blue, white) with curved image masks; logo blue/orange. Imagery: professional stock-style kid and clinician photos plus one real storefront. Density low and playful; very long scroll for little information (about 2,900 css px on phone). Mobile nav: hamburger plus two text links in the header.

## Footer / legal
Groups (phone view 4 columns, wrapped): (1) Our Story, The Team, FAQs, Locations, Info Sessions, Affiliated Hospitals, Insurance; (2) Pediatric Visit Schedule, Vaccine Schedule, Adolescent Resources, Mental Health Support, A-Z Health Guide (external thenewbasics.com), Medication Dosage (external wizardofdose.com), Breastfeeding Support, Classes; (3) Medical Release Form (PDF), Non-Discrimination and Code of Conduct, Sliding Scale Policy, Newsletter, Podcast, Community Giving, Media Inquiries, Careers; (4) Contact Us, tel 212-226-7666, info@, logo, Facebook, Instagram, (c) Tribeca Pediatrics 2026. Legal present: nondiscrimination/code of conduct YES, sliding scale policy YES. Absent: privacy policy NO, NPP NO, terms NO, accessibility statement NO, cookie banner NO.

## Tech facts
WordPress with many plugins (Contact Form 7 6.2.3 plus reCAPTCHA, MonsterInsights, WP Popups, Easy Fancybox, Tooltips Pro, content-protector "passster", wp-autosearch, custom tribeca-pediatrics-insu plugin). JSON-LD (Yoast style @graph): WebPage, BreadcrumbList, WebSite with SearchAction, Organization, ImageObject. No Review/AggregateRating/LocalBusiness/Physician markup. Trackers found in the html: Google Tag Manager GTM-5G7HKKV, multiple GA IDs (G-Z56ZRFLZ5H, G-HBPKS413HV, G-JJW6RGDMS8, G-96C1R568TX, G-E94VKBJ9GB, UA-130195265-33, UA-61420807-1), MonsterInsights, Facebook Pixel (fbevents.js, config 257844082486746) and Facebook SDK, reCAPTCHA v3. Console: requestStorageAccess denied, one 401. No consent banner.

## Unverified claims
"Over 30 years" / founded 1994; "over 50 offices" (map pins plausible); "24/7 medical guidance"; same-day sick and virtual visits until 10PM and weekend hours (office-dependent, U); "zero concierge or membership fees"; "accepts most major insurance plans and managed Medicaid"; "most skilled and experienced pediatricians in the tri-state area".
