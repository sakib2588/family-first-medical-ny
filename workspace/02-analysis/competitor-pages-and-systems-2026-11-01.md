# Competitor page counts, page groups and systems (checked 2026-11-01)

Method: robots.txt, then sitemap(s), read-only curl, one request at a time with 1 s gaps. Homepages fetched once for the systems check. Groups are regex-classified from URL paths, so they are approximate. Sites returning 403 on robots.txt were recorded as blocked and not probed further.

## 1. Page counts

| Site | Total pages | Core (excl. blog) | Blog/articles | Doctors / Locations | Method |
|---|---|---|---|---|---|
| familyfirstmedicalny.com (base) | 1 in sitemap (home only) | 1 | 0 | 0 / 0 | sitemap (incomplete: lists only "/") |
| acpny.com | 666 | ~482 | 184 | 294 / 37 | sitemap |
| carbonhealth.com | blocked (403 robots.txt) | - | - | - | blocked |
| healthykidsqueens.com | blocked (403 robots.txt) | - | - | - | blocked |
| conciergecare.mountsinai.org | blocked (403 robots.txt) | - | - | - | blocked |
| naomedical.com | 2,241 | ~2,200 | 41 | 63 / 954 | sitemap |
| nationalpediatric.com | blocked (403 robots.txt) | - | - | - | blocked |
| northernvirginiapediatrics.com | 165 (65 pages + 20 posts + 80 testimonials) | ~145 | 20 | 10 / 0 | sitemap (testimonials counted as core) |
| nyp.org Queens pediatrics | 7 section pages (+2 news/program pages) | 7 | 0 | staff: 1 page | sitemap, path filter; /medicalgroups/queens/pediatrics not in sitemap |
| NYU Langone Pediatric Associates Garden City | 2 (practice page + /doctors) | 2 | 0 | 1 doctor page / 1 location page | sitemap, path filter |
| onemedical.com | blocked (403 robots.txt) | - | - | - | blocked |
| parsleyhealth.com | 608 unique (618 entries) | ~344 | 264 | 138 / 2 | sitemap (67 store product pages in Other) |
| pediatricassociates.com | 9,524 unique in EN sitemap (ES-MX sitemap mirrors it) | ~8,150 | 1,372 | 666 / 7,255 | sitemap (very large) |
| summithealth.com | 3,533 | ~3,463 | 70 | 1,480 / 297 | sitemap (not an index) |
| asktia.com | 513 (295 pages + 218 articles) | ~263 | 250 | 174 / 17 | sitemap |
| tribecapediatrics.com | 486 unique (11 child sitemaps) | ~343 | 143 posts | 140 / 5 | sitemap index |
| yanlunclinic.com | no sitemap (404) | ~6 sections (single page + index.cn.html) | 0 | booking/about/contact anchors | nav estimate |

## 2. Page groups (counts)

Abbreviations: Svc = services, Docs = doctors/providers, Loc = locations, Blog = blog/news/articles, Ins = insurance/billing, NP = new patients/forms/booking, Oth = other (testimonials, store, misc).

| Site | Page groups |
|---|---|
| familyfirst | Home 1 (single page; in-page anchors #services #doctors #locations #insurance #faq) |
| acpny | Svc 59 · Docs 294 · Loc 37 · Blog 184 · Ins 1 · NP 15 · Careers 6 · Legal 8 · Contact 2 · Oth 59 |
| naomedical | Svc 592 · Docs 63 · Loc 954 · Blog 41 · Ins 59 · NP 92 · Careers 44 · Legal 4 · FAQ 1 · Contact 1 · Oth 389 |
| northernvirginiapeds | Docs 10 · NP/forms 28 · Ins 7 · Svc 2 · Blog 20 · FAQ 1 · Contact 1 · Legal 4 · Testimonials 80 · Oth 12 |
| pediatricassociates | Loc 7,255 · Docs 666 · Blog 1,372 · NP 17 · Svc 12 · Ins 2 · Legal 3 · FAQ 1 · Contact 1 · Oth 194 |
| parsleyhealth | Svc 24 · Docs 138 · Loc 2 · Blog 264 · NP 28 · Ins 4 · Contact 4 · Careers 1 · FAQ 1 · Legal 58 · Oth 83 (store) |
| summithealth | Svc 189 · Docs 1,480 · Loc 297 · Blog 70 · NP 53 · Ins 6 · FAQ 18 · Legal 1 · Careers 1 · Oth 1,417 |
| asktia | Svc 47 · Docs 174 · Loc 17 · Blog 250 · Ins 2 · NP 2 · Careers 2 · Contact 1 · Oth 17 |
| tribecapediatrics | Docs 140 · Blog 179 (36 pages + 143 posts) · NP 36 · Loc 5 · FAQ 9 · Legal 4 · Svc 3 · Ins 1 · Contact 1 · Careers 1 · Oth ~249 |
| nyp Queens peds | Svc/service-line 5 (hub + cardiology, GI, neurology, ortho) · Docs/meet-the-team 1 · Other 1 (asthma center) · News/program 2 |
| NYU Garden City peds | Loc 1 · Docs 1 |
| yanlunclinic | About, Timeline, Testimonials, Booking, Contact (anchors on one page) + Chinese index |

## 3. Systems and portals (homepage evidence only)

| Site | Patient portal (vendor) | Online booking | Doctor/referral portal | Admin login | Mobile app | Telehealth | Bill pay | Live chat |
|---|---|---|---|---|---|---|---|---|
| familyfirst (base) | not found | not found | not found | not found | not found | not found | not found (billing mention only) | not verified (script matches only) |
| acpny | yes: myACPNY, my.acpny.com/mychart (Epic MyChart) | yes (schedule-appointment page) | not found | not found | not found | yes (schedule-appointment/video-visits in sitemap) | billing page (vendor not seen) | not found |
| carbonhealth | blocked | blocked | blocked | blocked | blocked | blocked | blocked | blocked |
| healthykidsqueens | blocked | blocked | blocked | blocked | blocked | blocked | blocked | blocked |
| conciergecare (Mount Sinai) | blocked | blocked | blocked | blocked | blocked | blocked | blocked | blocked |
| naomedical | yes: eclinicalweb login (eClinicalWorks) | yes: book.naomedical.com (own) | not found | not found | not found | yes (televisit) | billing page (vendor not seen) | not found |
| nationalpediatric | blocked | blocked | blocked | blocked | blocked | blocked | blocked | blocked |
| northernvirginiapeds | yes: "Follow My Health" portal (vendor not named) | appointments page (vendor not seen) | not found | not found | not found | yes (virtual visits) | yes: Pay My Doctor (paymydoctor.com) | not verified |
| nyp Queens peds (site: nyp.org) | yes: Patient Login /patientportal (vendor not visible) | not found | not found | not found | not found | yes (/telehealth/video-visit) | yes: /patients-visitors/paying-for-care | not found |
| NYU Garden City (nyulangone.org) | yes: MyChart | not verified | not found | not found | not found | yes (video doctor visits) | billing/financial page | yes (live chat widget config) |
| onemedical | blocked | blocked | blocked | blocked | blocked | blocked | blocked | blocked |
| parsleyhealth | yes: my.parsleyhealth.com/login (own) | join/care flow (not a standard booking page) | not found | not found | not found | yes (in page text, not confirmed) | not verified | not found |
| pediatricassociates | yes: Healow (eClinicalWorks) patient portal | yes (healow.com links) | not found | not found | not found | yes | yes: /bill-pay (own page) | not found |
| summithealth | yes: athenahealth portal (2983-1.portal.athenahealth.com) | not verified | not found | not found | yes: athenaPatient (App Store and Google Play) | not found | yes: /our-patients/pay-bills (vendor not visible) | not found |
| asktia | not found | not verified | not found | not found | not found | yes (tia virtual clinic) | billing/insurance info (no pay link seen) | not found |
| tribecapediatrics | yes: portal.tribecapediatrics.com (vendor not visible) | not verified | not found | not found | not found | not verified | not found | not found |
| yanlunclinic | not found | yes (#booking section, vendor not seen) | not found | not found | not found | not found | not found | not found |
| zocdoc | blocked | blocked | blocked | blocked | blocked | blocked | blocked | blocked |

## Blocked sites
Robots.txt returned HTTP 403 for: carbonhealth.com, healthykidsqueens.com, conciergecareny.mountsinai.org, nationalpediatric.com, onemedical.com, zocdoc.com. No further requests were made to these sites.

## Caveats
- Familyfirst sitemap lists only the home URL, although the site is described as having 17 pages. This suggests the sitemap is incomplete.
- Group counts are regex estimates. Summit's "Other" and Tribeca's "Other" are large because slug-only URLs were not classified.
- Pediatric Associates and Summit sitemaps are dominated by per-office and per-provider pages.
