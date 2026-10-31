# NewYork-Presbyterian Queens - Pediatrics - https://nyp.org/medicalgroups/queens/pediatrics (final URL /locations/queens/services/pediatrics)
Captured 2026-10-30 (phone 390x844 @2x, desktop 1280x800) - tier: adjacent/aspirational (hospital-system service page, not a single practice) - source of find: candidates.md. Phone tiles t00-t11 and desktop fold/t02 viewed; phone t09-t11 and desktop t00/t01/t03 seen only partially (phone tiles t04-t11 were viewed as 3-up montages at about 66 percent scale). Multi-language out of scope. (U) = unverified.

## Snapshot
Service-line landing page "Pediatric Care in Queens" for NewYork-Presbyterian Queens (Flushing hospital) and the Children's Hospital of New York network. It sells tertiary/specialty care (cardiology, neuro, GI, ortho, surgery, urology, allergy/asthma, NICU Level III, ER) plus a Patient-Centered Medical Home ambulatory center (Theresa Lang, same-day sick care, well-child). Three locations with phones: hospital Flushing 718-670-1800, Medical Group Queens Fresh Meadows 718-670-2468 (listed twice), Allergy/Asthma Center 718-670-1920. PRIMARY ACTION: "Find a doctor" (red, to doctors.nyp.org with Queens/Pediatrics prefilter), secondary "Find a location" (black). Taps to book on phone: no book button; Find a doctor = 1 tap to a search with prefilter, then the doctor profile (U). Calling = scroll to the locations section (about 5 screens down) then tap.

## Phone (390x844)
Fold (phone/1-fold.png): red NYP logo tile, search/account/menu icons, 3-level breadcrumb (clipped, with a chevron), grey "NewYork-Presbyterian Locations" dropdown bar, back link "Services in Queens", H1 "Pediatric Care in Queens", full-width red pill "Find a doctor" and black pill "Find a location" both above the fold (good), hero photo (father and daughter) begins. A bottom cookie sheet is shown: "Accept all" and "Reject optional cookies" with equal prominence (red filled vs outlined) and Learn More / Privacy Policy. It covers about a fifth of the fold. Not a hard wall; page is visible behind.
Scroll: t01 intro "Superior pediatric care, right here in Queens" (long grey paragraph, footnote "Based on registered physicians on Doximity", a claim of most pediatric specialists, U) > t02 "Our approach to care" (multidisciplinary, Child Life) > Featured specialties list (t02-t03): 9 grey cards, each a link with a red corner arrow (Cardiology, Emergency Care, GI, NICU, Neurology, Ortho, Surgery, Urology, Allergy and Asthma) > Theresa Lang Children's Ambulatory Center feature (kite photo; PCMH, same-day sick care, lab and imaging, well-child; red pill link) > Our locations: 3 cards with photo, address (Maps link), phone tel link > Pediatric news (2 Health Matters articles; thumbnails blank in the capture, lazy images not loaded) > red box "Find Pediatric Care in Queens" + Find a doctor > footer (t11): newsletter signup (email + checkbox ALREADY ticked), About NYP / The Latest / Ways to Help / Professionals / Job Seekers / vendors link groups, 4 socials, legal row, NYP and Columbia/Weill Cornell logos.

## Desktop (1280x800)
Fold (desktop/1-fold.png): utility row (About, Careers, Give, News, Contact, Research, Patient Login), main nav with 4 mega menus (Services, Locations, Patients & Visitors, Medical Professionals), Search, outlined Find a Doctor button; breadcrumb; sub-bar with Manhattan/Brooklyn/Queens/Westchester dropdowns and black "Map of Locations"; hero split: H1 and two pills left, photo right; the cookie bar overlays the bottom of the fold with Accept all and Reject. Content below is single-column with generous space. Locations are listed as horizontal rows (image, type tag, name, area, address, tel; t02). News thumbnails blank in the capture (lazy-load) and the two cards sit at left leaving empty space. Red end-cap CTA. No error or wall.

## Strengths
1. Both primary actions sit above the fold on phone as large, full-width pills with icons and clear verbs (Find a doctor / Find a location). Evidence: phone 1-fold.
2. Cookie choice done fairly: Accept all and Reject optional cookies equal weight, with privacy link. Evidence: phone 1-fold, desktop fold.
3. Location cards have type labels (Medical Group vs Ambulatory Care Network), neighbourhood, address and tel link (tappable) on each; the PCMH, same-day sick and well-child services are stated for the ambulatory center. Evidence: phone t05-t07, desktop t02.
4. Page-scoped URL-prefilters: "Find a doctor" link passes Queens + Pediatrics + radius (see meta.json), saving the user a step.
5. Strong, scannable specialty list and consistent, restrained red/black/grey system with a single accent; accessible headings (14 images all with alt; H1 + 6 H2).
6. Full legal footer: Disclaimer, Privacy Notice, Price Transparency, Website Privacy Policy, Employees.

## Flaws
- H: tel links are malformed: href "tel:+718-670-1800" (the "+718" reads as a country code, not US +1). Many phones will fail to dial or dial the wrong country. Evidence: meta.json telLinks. Our fix: tel:+17187701800 format with +1.
- H: no booking, no hours, no insurance, no new-patient steps, no reviews on the page; it is a brand/specialty page that pushes everything to doctors.nyp.org. For a primary-care visitor the path is long (candidates.md note).
- M: duplicate listing: the Theresa Lang center and Medical Group Queens show the same address (198-15 Horace Harding) and phone (718-670-2468), once as "Flushing" and once as "Fresh Meadows"; confusing NAP. Our fix: one location, one name, one phone.
- M: newsletter signup has the consent checkbox pre-ticked ("I accept ... and confirm I would like to receive more information"); pre-ticked consent is weak practice. Our fix: unticked, separate.
- M: calling requires scrolling about 5 screens (phone numbers only in the locations block and the footer is absent of phone); no sticky call bar.
- M: long grey body text (about 18-20px, mid-grey on white, contrast risk, U), with a heavy "world-class" claim and small footnote.
- M: huge enterprise nav/footer around the content; 9 cards for specialties that a primary-care visitor does not need.
- L: breadcrumb is clipped on phone; news thumbnails blank (lazy); Learn More link on the cookie banner; page height about 9,400 css px for little actionable information.
- L: no LocalBusiness/Physician markup; MedicalWebPage JSON-LD present but no phone/hours.

## Conversion machinery inventory
- CTAs: Find a doctor (hero red, header outlined, end-cap), Find a location (hero black), Theresa Lang red pill, 9 specialty cards, location tel links (3), Get map links (Maps search), Patient Login (header), Subscribe form.
- Booking path: Find a doctor > doctors.nyp.org (prefiltered Queens/Pediatrics 25 mi) > doctor profile > schedule (U, not captured). Taps to book on phone: 1 to the finder, then at least 2 more (U).
- Sticky: none for conversion; header/mobile-nav fixed elements (side sheets) only.
- Forms: 2: site search (text) and newsletter (email + Mailchimp-style hidden field b_... and a bot-check field + pre-ticked checkbox). Fields asked: email only plus consent.
- Trust/proof: hospital brand, Level III NICU, Doximity-based "most specialists" claim, Columbia/Weill Cornell logos; no reviews or ratings.
- Insurance: none. New-patient flow: none. Hours: none. Location cards: address, phone, photo.

## Design notes
Type: tight grotesque (Mark Pro-like) headings in large sizes (about 44-52px on phone), grey body. Colour: NYP red (#E2231A), near-black, light grey (#F5F5F5); white space heavy. Imagery: professional lifestyle and building photography. Density low per screen but very long. Mobile nav: hamburger with side sheets, plus search and login icons.

## Footer / legal
Newsletter block; About NYP (About Us, Community, Contact Us); The Latest (Health Matters, Newsroom, Events & Classes); Ways to Help (Give to NYP, Volunteer, Donate Blood); Professionals & Students (For Professionals, Graduate Medical Education, Nursing); Job Seekers (Careers, Nursing Jobs); For vendors; socials Instagram, Facebook, LinkedIn, YouTube; legal row: Disclaimer, Privacy Notice, Price Transparency, Website Privacy Policy, Employees; (c) 2026; Columbia and Weill Cornell affiliation logos. Legal: privacy YES (Notice and Website Policy), terms (newsletter "Terms and Conditions" link goes to privacy-notice, U), disclaimer YES, price transparency YES. Accessibility statement and nondiscrimination: NOT in the footer (U, may sit elsewhere). No phone in the footer.

## Tech facts
Drupal (Cohesion/coh- classes). Forms: search, newsletter. JSON-LD: BreadcrumbList and MedicalWebPage (Service/MedicalSpecialty Pediatrics, provider MedicalOrganization NYP Queens with parentOrganization); no Review/AggregateRating. Third parties in html: Piwik PRO analytics (nyp.piwik.pro; blocked until consent per banner, U), Cloudflare Insights beacon, Google Maps API (maps.googleapis.com), YouTube embed, Widen DAM images (nyp.widen.net), Mailchimp-style form field. Console errors 0. Load 23 s in capture. imgNoAlt 0 of 14.

## Unverified claims
"The children's hospital in New York with the most pediatric specialists" (Doximity-based footnote); "world-class"; Level III NICU designation; Patient-Centered Medical Home recognition (check NCQA); same-day sick care and lab/imaging at Theresa Lang; the two listings of the same address/phone (possible data error).
