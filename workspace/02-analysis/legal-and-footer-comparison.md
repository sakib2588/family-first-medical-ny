# Legal pages and footer comparison (14 sites)
Date: 2026-10-31. Measured from raw captures in `01-research/legal/<slug>/raw/` (local analysis only; not redistributed). Per-site detail: `01-research/legal/<slug>/analysis.md`. Not legal advice; everything in "proposed set" is **verify with counsel**. Unknown = not captured or blocked. Word counts are approximate (script extraction; keyword coverage scan, not a read of every sentence).

Legend: **Y** = linked in footer, date in brackets; **y** = exists but not footer-linked or only inside another page; **-** = absent from footer (none found); **B** = blocked (HTTP 403, not evaded); **?** = unknown.

## 1. Matrix: sites x policy types
| Site | Website privacy | HIPAA NPP | Terms of use | Accessibility | Nondiscrim / 1557 / language | Patient rights | Billing / financial | Price / NSA / GFE | Cookie / consent | Telehealth consent | SMS terms | Medical disclaimer | Emergency notice (footer) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| familyfirstmedicalny (base) | - | - | - | - | - | - | - | - | - | - | - | - | - |
| nyu-peds-garden-city | Y [Feb 27 2026] | y (Public Notices, not fetched) | y (Policies hub) | Y [no date] + 24/7 phone | y (Public Notices) | ? | Y (Insurance & Billing) | Y (Price Transparency) | y (inside privacy) | - | - | y (hub) | link only |
| nyp-queens-peds | Y [no date] | Y "Privacy Notice" (~430 words, no date) | mislabeled (T&C link = privacy notice) | - | - | - | - | Y | y (inside privacy) | - | - | Y "Disclaimer" | - |
| tribeca-pediatrics | y orphan [Feb 18 2021] | - | - | - | conduct code only | - | Y sliding scale [no date] | - | - | - | - | - | - |
| nao-medical | Y [Jan 2026; tracking note Oct 28 2026] | - (referenced, no link) | - | y (footer sentence + named contact) | - | - | y (Insurance & Billing page, not in legal row) | y (No Surprises content, in billing page) | y (inside privacy) | - | - | y (booking disclaimer) | - |
| acpny | Y [Sept 4 2018, actually an NPP stub] | Y (EN/ES/ZH PDFs) | - | Y [no date; WCAG 2.0] | Y + language assistance | y (Medical Records & Privacy) | Y [Feb 1 2022] | - | - | - | - | - | - |
| summit-health | Y Digital Privacy (PDF) [Aug 2025] | Y NY+NJ (PDF) [Feb 2026] | - | - | Y (PDF, ~2024) | y (hub mention) | y (Pay bills, Insurance & pricing [Jun 2023]) | Y NSA [2022] + GFE [2022] (PDF) | y (Osano on page) | - | Y (PDF) | - | - |
| mount-sinai-concierge | B (parent site) | B (parent compliance page) | B | - | - | - | - | - | - (OneTrust + Cookiebot scripts detected) | - | - | - | - |
| parsley-health | Y [Aug 13 2024] | Y [Nov 10 2021] | Y [Nov 10 2021] +3 more terms docs | Y [no date] | - | - | - (pricing page elsewhere) | - | y (combined privacy+cookie) | y (clinical membership agreement) | - | y | - |
| tia | Y [10/23/23] | Y PDF [Jun 7 2022] | Y [10/30/23] + membership [May 2025] | - | - | - | Y Billing Policy [no date] | y cash price list (service list) | y (OneTrust on page) | - | y (in newsletter consent copy only) | ? | - |
| one-medical | Y -> Amazon page [Jun 30 2026] | Y (JS-loaded, text not captured) | Y + Medical Terms (JS-loaded) | - | Y [no date] | - | - | - | - | y (Medical Terms) | Y | y | - |
| pediatric-associates-fl | Y [Jan 2020; "updated May 28 2026"] | Y [Apr 14 2025] | - | - | - | Y (FL rights, no date) | - | - | y (TrustArc on page) | - | - | - | - |
| northern-virginia-peds | Y link (B) | - | - | Y link (B) | - | - | Y links (B) | - | - | y (Virtual Visits nav) | - | - | Urgent Line link + 24-hr phone |
| yanlun-clinic | - | - | - | - | - | - | - | - | - | - | - | - | - |
| Count Y/y of 14 | 11 present | 8 | 6 | 7 | 5 (+1 conduct-code only) | 3 | 7 | 6 | 8 on-page cookie handling | 3 | 4 | 6 | 2 (soft) |

(Blocked: mount-sinai-concierge policy pages, northern-virginia-peds policy pages, one-medical Terms/Medical Terms/NPP/data-rights text. Also noted earlier: carbon-health, healthy-kids-queens, zocdoc, national-pediatrics are not in this batch.)

## 2. Footer inventory (14 sites)
| Site | Layout | Policy group | NAP | Hours | Credential / license line | Emergency / 911 | Social | A11y link | Language | Copyright wording |
|---|---|---|---|---|---|---|---|---|---|---|
| familyfirst (base) | simple 1-col + anchors | none | 2 addresses + phones | no | "Board-Certified..." tagline | no | no | no | no | (c) line |
| nyu | mega, 5 groups | legal bar of 5 + help line | no | no | no | "Emergency Care" link | 5 | yes + 24/7 phone | no | "(c) 2026 NYU Langone Hospitals" |
| nyp | newsletter + 4 groups | bar of 5 | no | no | no | no | 4 | no | no | "(c) 2026 NewYork-Presbyterian Hospital" |
| tribeca | flat ~25 links | 2 policy-like | phone + email only | no | no | no | 2 | no | no | "(c) Tribeca Pediatrics 2026" |
| nao | custom section | privacy link only | help phone | no | no | no | 4 | sentence w/ named contact | no | none |
| acpny | 4 col + legal strip | 5 links | no | no | no | no | 5 | yes | EN/ES/ZH header | none captured |
| summit | 3 col + policy block | 7+ PDFs | no | no | no | no | 4 | no | no | "(c) 2026 - Summit Health" |
| mount sinai concierge | 3 short groups | one line, 3 links | no | no | no | no | 2 | no | no | "(c)2026 Mount Sinai Doctors-Concierge" |
| parsley | dense + newsletter | row of 6 | address only | no | no | no | 4 | yes | no | "(c) Parsley Health, all rights reserved" (no year) |
| tia | tagline + 4 groups | row of 5 | no | no | no | no | 2 | no | no | "(c) Tia 2026" |
| one-medical | locations + links | row of 8 | no | no | no | no | 5 | no | no | "(c)2026 1Life Healthcare, Inc." (legal entity) |
| pediatric-assoc FL | 118 office links | row of 5 | no | no | no | no | 2 | no | EN/ES toggle | "(c)2026 Pediatric Associates" |
| nvp | custom | quick links incl. Privacy, Accessibility, Policies | full + fax | full table | no | "Urgent Line" + 24-hr phone | 3 | yes | no | "(c) 2026 Northern Virginia Pediatrics" + vendor credit |
| yanlun | 1 contact block | none | full + text + fax | no (in body) | no | no | no | no | no | none; "Yanlun Li Medical Practice PC since 2021" |

Footer finding: nobody shows a license/NPI line, and only 2 of 14 give any emergency instruction in the footer.

## 3. Findings: ranked flaws seen (counts out of 14 sites unless noted)
1. **No accessibility statement in footer**: 7 of 14 lack it (nyp, tribeca, summit, mount sinai, tia, one-medical, pediatric-associates); base site and yanlun add 2 more (9 of 14 including them).
2. **No Section 1557 nondiscrimination / language-assistance notice**: 9 of 14 lack a proper one (base, nyp, nao, mount sinai, parsley, tia, pediatric-associates, nvp, yanlun); tribeca has only a conduct code.
3. **No cookie/tracking disclosure matching the page**: at least 4 sites load analytics/ad pixels with a thin or absent explanation: acpny (GTM, GA, Meta, DoubleClick, Criteo, Bing; policy is an NPP stub), tribeca (GA, Meta pixel; policy says nothing is collected unless volunteered), yanlun (GTM, no policy), base (none, no policy). Only nao states trackers are off and is consistent with its capture.
4. **Stale or undated documents**: 10 of 12 documented policy sets have an item older than 2 years or no date at all (acpny 2018; tribeca 2021; parsley 2021; tia 2022-2023; summit NSA/GFE 2022; nyp/nyu pages undated).
5. **Policy-text defects**: orphaned page (tribeca privacy not linked), mislabeled links (nyp Terms = privacy notice; acpny "Privacy Policy" = NPP; tia NPP file named privacy-policy), wrong-entity template text (tribeca names "The New Basics"; pediatric-associates is California-heavy and has a typo email domain; page repeats its content ~4x).
6. **PDF-only or JS-loaded policies**: summit (about 12 PDFs), tia NPP (1.7 MB PDF), one-medical (JS-injected "Loading..." shell). Three sites.
7. **Policies off-site or on parent domain**: mount sinai (parent), one-medical (Amazon), nyu price transparency (med.nyu.edu). Three sites.
8. **Overlong or fragmented terms**: parsley (4 terms docs, about 17k words), pediatric-associates (19.5k extracted), tia (about 12k across two terms). Readability is low across the board (rough Flesch under 35 for nearly every prose document; privacy policies at 11-25).
9. **No footer NAP/hours/emergency line**: 10+ of 14 (only nvp and yanlun, base have NAP; only nvp has hours).
10. **Bot-protection blocks or missing legal links**: 2 sites blocked at policy level (mount sinai, nvp); 3 more partially (one-medical, plus the earlier carbon-health / zocdoc / healthy-kids captures).
11. **Accessibility overlay**: nyu runs a UserWay widget (strings present in capture) next to its statement; verify with counsel.
12. **Marketing opt-in text beside SMS without a terms link**: tia (newsletter), yanlun ("Text:" number), nyp (newsletter checkbox). Three sites; only summit and one-medical publish SMS terms.

## 4. What the best examples do
- **nyu**: legal bar separate from nav; accessibility help line (24/7 phone) in the footer; a hub page for all policies; dated website privacy policy.
- **acpny**: `/legal/` section; plain-language "Medical Records & Privacy" page; multilingual NPP; nondiscrimination page with the OCR route.
- **summit**: separate NPP, digital privacy, SMS terms, NSA and GFE notices (do as HTML).
- **nao**: dated, falsifiable tracker-status box; named accessibility contact; "No Surprises" billing explainer.
- **pediatric-associates**: dated NPP in plain sections; patient rights + grievance page; vaccination policy statement.
- **tia**: public cash-price list + a short Patient Billing Policy.
- **nvp**: complete NAP, hours, 24-hour phone, legal entity in the footer.
- **tribeca**: sliding-scale policy page.

## 5. Proposed "our footer + policy set" (all items: verify with counsel)
Footer (all pages, readable at 390 px width, large tap targets):
1. Legal entity name, license/credential line, NPI (practice-level, only if confirmed) and "last reviewed" date; verify with counsel.
2. NAP for each location, hours per location, phone tap-to-call, and an emergency line ("In an emergency call 911"; after-hours instruction); verify with counsel.
3. Legal row (separate from nav): Privacy Policy | Notice of Privacy Practices | Terms of Use | Accessibility | Nondiscrimination and Language Help | Patient Rights | Billing and Prices | (SMS Terms only if texting is added) | Cookie settings (only if non-essential trackers added); verify with counsel.
4. Language access: visible "Language help / Ayuda con el idioma" link and tagline translations for the top local languages (Spanish, Chinese, Bengali, Korean, Hindi per the practice's panel); verify with counsel which notices must be translated.
5. Accessibility link plus a staffed phone/email route with named owner and response time; test with real keyboard/screen-reader review; avoid relying on an overlay widget; verify with counsel.
6. Careers link last; social icons labelled (not icon-only).

Policy set (HTML pages, not PDF, each dated, with a plain-language summary box and an anchored outline):
- **Website Privacy Policy**: only what the site truly does; tracker table matching real scripts and re-checked on every release (nao pattern); state that the website policy is distinct from HIPAA; children's section appropriate for a pediatric practice (parent/guardian use); contact route; verify with counsel.
- **HIPAA Notice of Privacy Practices**: practice-specific, effective date, English plus top languages, complaint route to the practice, HHS OCR and NY attorney general language as counsel advises; verify with counsel (watch for 2026 regulatory updates, unknown).
- **Terms of Use + Medical Disclaimer + Emergency notice** (one short page, not a four-document stack); verify with counsel.
- **Nondiscrimination (Section 1557) and Language Assistance**: include Civil Rights contact and OCR route (acpny/one-medical patterns); verify with counsel.
- **Accessibility statement** with an up-to-date WCAG target (not 2.0), known gaps, contact route and date; verify with counsel.
- **Patient rights and responsibilities + complaints route**; **Billing, financial assistance and self-pay price policy** including No Surprises / Good Faith Estimate notice for self-pay (summit and tia patterns); verify with counsel.
- **Telehealth consent** and **SMS terms** only when those features exist; **advertising/testimonial disclaimer** if reviews are shown; verify with counsel.
- Hub page `/legal/` listing everything, linked from footer and from the booking/contact form with consent wording at the point of collection.
- Process: owner list, review calendar (at least yearly), a "last reviewed" stamp, and a pre-launch checklist: every footer link returns 200, tracker scan equals disclosed trackers, no orphaned legal pages.

## 6. Unknowns and limits
- Blocked: mountsinai.org pages, northernvirginiapediatrics.com pages (HTTP 403); one-medical terms/NPP text is JS-loaded and 403 on browser render. Not retried or evaded; owner could capture manually.
- Keyword coverage is a scan, not a reading of all text; readability scores are approximate (Flesch on first 3,000 words).
- Static capture may miss tag-manager-loaded trackers (parsley, mount sinai).
- No legal conclusions drawn; compliance status of any site is unknown.
