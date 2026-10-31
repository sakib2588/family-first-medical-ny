# Yanlun Li Family Medicine (Yanlun Li Medical Practice P.C.) - https://www.yanlunclinic.com
Captured 2026-10-30 (phone 390x844 @2x, desktop 1280x800) - tier: direct (local counterexample) - source of find: SERP, Flushing family medicine query (candidates.md #15)
Reviewed 2026-10-30 from phone/ and desktop/ captures (tiles sliced to phone/tiles, desktop/tiles) plus meta.json and html/. Multi-language out of scope (a Chinese version exists at /index.cn.html, a "中文版" toggle; the toggle label renders as tofu boxes in the capture, a font gap). (U) = unverified.

## Snapshot
Solo female family physician (osteopathic, DO) in Flushing, Queens. One-page Bootstrap template (anchors #hero #about #contact), 11 images, no CMS. Services: internal medicine, pediatrics (entrance physicals, vaccines), gynecology, minor surgery, DOT and immigration medicals, free COVID shots. Walk-ins accepted, phone/video visits for elderly. PRIMARY ACTION is unclear: hero button "CONTACT US" only scrolls to the contact block; the number is plain text. Taps to book on phone: 0 tel links on the page, so the user must read the number, copy or type it (3+ steps, error-prone); there is a text number (same as phone), email and a WeChat popup. No online booking, no form.

## Phone (390x844)
Fold (phone/1-fold.png, tile t00 identical): header with logo text and a hamburger; a tofu-box language pill (broken glyphs); exam-room photo; headline "Better [rotating word]" (word fades in/out; the capture caught it half-faded in t00 vs full in the fold); "Free COVID-19 vaccination and booster!" (dated promo); ghost "CONTACT US" button (low emphasis, pale outline); a floating green WeChat button bottom right. No phone number, no hours, no insurance on the first screen.
Sections in order: intro paragraph with "most highly Google rated family doctor in Flushing" claim (U) > Family Medical Services bullets (t01) > credentials paragraph in orange text (board-certified, NYIT-COM, Wyckoff residency, AAFP, North Shore and NYP Queens affiliation; orange on white is low contrast) > "20 Years of Experience" circle badge (t02; 2021 practice vs 20 years, plausible only as career length, U) > 2x2 office photo grid (hallway, reception with gold logo, waiting area) > Our Mission paragraph (t03) > Opening Hours table Tue-Sat 9-5 (Sun/Mon not listed, so "closed" is implied not stated) > embedded Google map (pin "Yanlun Li Clinic") > Patients Are Our Priority (appointment preferred, walk-in OK, phone and video consults) > Contact Clinic grey block (t04/t05) with email, address (136-30 Maple Ave, Ste 2H), phone, text, fax, "since 2021".
Nav: hamburger with Home / About / Contact only; fixed top bar. No sticky call or book bar.

## Desktop (1280x800)
Fold (desktop/1-fold.png): fixed header with logo, Home/About/Contact; hero photo with a translucent white card overlapping the right half, "Better Days", COVID line, ghost CONTACT US; WeChat float bottom right. IMPORTANT capture caveat: the full-page desktop PNG (2-full) is mostly blank white between hero and footer (tile t01) because AOS scroll-reveal animations never fired in the full-page capture, so I could not view desktop content sections from this capture; they match the phone order per html/desktop.html. Footer is two columns (email/address left, phone/text/fax right) on grey.

## Strengths
1. Honest, plain solo-practice voice and real photos of the actual rooms and reception (phone t02 photo grid). Authentic, no stock; patients can picture the office. Evidence: phone/tiles/t02.
2. Complete contact data on one page (address, phone, text, fax, email, hours, embedded map) in under 3 scrolls; text-message and WeChat options suit the community. Evidence: t03-t05, phone 1-fold WeChat button.
3. Clear service list in plain words including DOT and immigration exams (niche demand, good for local search) and a walk-in policy stated. Evidence: t01, t03/t04.
4. Very light: no huge hero, 11 images, system-like Open Sans; fast to read.

## Flaws
- H: no tap-to-call. Zero tel: links (meta telLinks = []), number only in footer text. Our fix: tel: on every number, sticky call bar on phone.
- H: no booking path; CONTACT US is a ghost button that just scrolls to the footer. Our fix: one solid primary CTA (Call / Request appointment) in the fold.
- H: no privacy policy, terms, NPP, accessibility or nondiscrimination links; footer has only the (c)-style line "since 2021". Google Analytics (G-HPKHG89Z5B) loads with no consent notice, on a medical site (see Tech). Our fix: legal pages, no analytics before counsel review.
- M: no insurance information anywhere (candidates.md also notes it); no new-patient steps, no forms, no "what to bring".
- M: unsupported claims: "most highly Google rated", "20 Years of Experience"; no reviews shown.
- M: credentials paragraph in orange on white (contrast, est. under 3:1, U not measured); hours missing Sun/Mon.
- M: first-screen content is a COVID promo that is likely stale (free COVID vaccination/booster).
- M: no JSON-LD, 3 of 11 images with no alt; headings misused (4 H1s on one page, one H2).
- L: tofu glyph on the language pill; rotating headline word means the fold screenshot shows "Better Health"/"Better Days" inconsistently; WeChat button overlaps content on phone; no logo shown on phone header.

## Conversion machinery inventory
- CTAs: CONTACT US (ghost, scroll to #contact), WeChat floating button (opens modal with QR image), email mailto, map link (goo.gl).
- Booking path: none online; phone/text/email/walk-in. Taps to book on phone: no one-tap; at best scroll + manual dial/copy (3+).
- Sticky: fixed top navbar only (NAV.navbar fixed-top), WeChat helper-icon float, a Bootstrap modal (WeChat QR).
- Forms: 0 forms/inputs.
- Trust/proof: board-certified and hospital affiliations (text, orange), 20 years badge, "Google rated" claim, photos. No reviews, no logos, no NPI.
- Insurance: none. New-patient flow: none (walk-in note only). Hours card: Tue-Sat 9-5 table + map; no live open/closed state.

## Design notes
Bootstrap 5 template (bootstrap.min, owl.carousel, AOS, scrollspy), Open Sans 300-700 from Google Fonts. Palette: white and light grey, bright blue (#2B7FFF-ish) accents, orange credentials text, green WeChat. Imagery: real, slightly dim phone-camera photos. Very low density, huge body text (about 26px equivalent on phone). Mobile nav: hamburger with 3 links. Looks like a template, not a brand.

## Footer / legal
Single grey "Contact Clinic" block: email, address, phone, text, fax, "Yanlun Li Medical Practice PC since 2021". Link groups: none. Legal links: privacy NO, terms NO, NPP NO, accessibility NO, nondiscrimination NO. (See ../../legal/yanlun-clinic/ if written; not created here.)

## Tech facts (meta.json, html/)
Forms 0. JSON-LD: none (no LocalBusiness/Physician/review markup). Console errors 0. viewport meta yes, lang en. Trackers: Google Analytics 4 gtag G-HPKHG89Z5B via googletagmanager.com, no consent banner; Google Fonts; unpkg.com AOS; embedded Google map image. No pixels or chat. Page load 12-13 s in capture (slow server or CDN scripts). imgNoAlt 3 of 11.

## Unverified claims
"Most highly Google rated family doctor in Flushing"; "board-certified family physician" (check ABMS/AOBFP); "20 years of experience"; hospital affiliations (North Shore University Hospital, NYP Queens); "Free COVID-19 vaccination and booster" currency; walk-ins accepted; DOT medical examiner status (needs FMCSA National Registry listing).
