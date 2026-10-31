# Inner pages: doctor, location, appointment request, insurance (reference sites)

Date: 2026-10-31. Source: 01-research/inner/ (captures + NOTES.md). Scope: 12 reference sites; phone view reviewed for every page, desktop folds for 8. Limits: blocked Tia desktop (403), Summit profile and PAFL result lists not rendered, NYP profile not captured, trackers = static DOM names only. Legal wording is not advice; verify with counsel. Our business assumption: NY primary care and pediatrics, two physicians, two offices (Elmhurst, Hicksville), phone-first today.

## 1. Doctor / provider profile

| Site | First screen | Order after | Facts shown | CTA / call | Trust cues | Problems |
|---|---|---|---|---|---|---|
| NYU (Mayoral) | photo, name, specialty, treats, languages | accordions: About, Credentials, Insurance, Locations/Appts | languages, insurance, address, phone, fax | full-width Schedule x2, video visit | institution badge | everything collapsed, cookie bar, fax |
| ACPNY (Chowdhury) | name, photo, big phone, accepting new, "available today 3:15" | map card, languages, residencies, in-network link | accepting new, next slot | orange Book + phone | residency named | flu banner covers screen |
| Nao (Jain) | photo, name, specialty, MD, Book | About, tabs (conditions, insurance, locations, FAQ) | conditions chips, insurance logos | Book ghost + header button | co-founder story | promotional bio, alt-less images |
| Tribeca team | grid of 100+ headshots | filters office/language | name, credential only | none per person | personality photos | no specialty/age, 143 alt-less images |
| TIA care team | pitch, comparison table | provider cards | roles | Book now always in header | "team" model | disparages other offices |
| Parsley clinicians | hero, credential claims | approach, team | board-certified, fellowship | Get started | fellowship | unprovable "only complete" claim |
| NVP providers | about/mission text | provider text | board + hospital affiliations | phone | since 1975 | no photos first, text wall |
| Summit | blocked by overlays | - | - | - | - | not assessed |
| Family First (base) | two cards in #doctors | - | credentials | sticky call | real faces | no own page, no languages/new-patient status |

Ranked flaws (worst first): 1) overlays or banners covering the first screen (Summit, ACPNY flu bar, NYU cookie bar); 2) key facts hidden in accordions (NYU); 3) names-only grids with no specialty, ages or languages (Tribeca); 4) superlatives and comparative claims (Nao "eliminating disparities", Parsley "only complete", NVP "highest quality", Tia vs "typical office"); 5) alt text missing on photos; 6) no accepting-new-patients or next-availability (most); 7) fax/internal details shown to patients (NYU).
Best examples: ACPNY (phone, accepting-new, next slot above the fold); NYU (facts line: specialty, treats, languages, then insurance inside the profile); Nao conditions as chips.

### Recommended spec: OUR doctor page (one page per physician)
1. Photo (real, with alt text containing the name and role) + name, credential, specialty line ("Pediatrics" / "Family medicine"), ages seen, languages spoken, "accepting new patients" only if true and kept current.
2. Two actions side by side: Call (which office, tap-to-dial) and Request an appointment. Same pair at the end of the page.
3. Short plain bio, 3 to 5 sentences, first person optional; what a family can expect.
4. Facts block: board certification (name the board), medical school, residency, hospital affiliation, years in practice. Use only what the doctor can document; no "best", "leading", "top".
5. Care areas as chips (well visits, newborn care, vaccines, school physicals, chronic disease...). No outcome promises.
6. Offices where this doctor sees patients: days and hours, address, call, directions.
7. Insurance: short list plus "confirm your exact plan with us before the visit".
8. Languages and interpreter note; short FAQ (first visit, bring-list).
9. Closing CTA. Accessibility: headings in order, alt text, 44px targets, real text not images of text.
Do not: patient testimonials about outcomes, ratings stars, comparisons with other practices, fax numbers, stock photos presented as staff.

## 2. Location / office page

| Site | H1 | Hours | Phone | Directions/map | Parking/transit | Booking link | Notes |
|---|---|---|---|---|---|---|---|
| NYP Fresh Meadows | street address | collapsed, 9-5 M-F | per-service numbers | map "Getting Here" | not seen | none | cookie banner covers CTA |
| ACPNY list | "Find a Medical Office" | per office, 3 lines | one shared number | map toggle | not seen | View Profile | 35 cards, same phone |
| Nao Astoria | name + "walk-in clinic" | today's hours, week | tap-to-call | Get Directions, map blank | no | Book + Reserve spot | stat claims, fee $175 shown |
| Tribeca | "Find Your Office" | weekend filter | per office | list/map | not seen | JOIN TODAY | borough accordion first |
| TIA NYC | "Women's Health Clinic in NYC" | not on index | one | cards | no | Book now | cards with address early |
| PAFL Miami-Dade | region name | not loaded | not loaded | not loaded | - | sticky Book | generic photo |
| NVP contact | Contact/Directions | full week + walk-in + weekend notes | yes | address link | detailed parking text | via phone | best arrival info |
| Summit Livingston | coming soon | none | none | none | - | - | overlay |
| Family First (base) | section #locations | per office | per office Call | Directions per office | transit text | phone only | already good |

Ranked flaws: 1) no parking or transit (almost all except NVP); 2) hours hidden behind "view more" or accordions (NYP, Tribeca); 3) one phone number for every office (ACPNY); 4) map that fails to load and leaves a blank block (Nao, PAFL); 5) cookie banners covering the CTA (NYP, Summit); 6) address as H1 with no service context (NYP); 7) claims blocks (Nao 2 million patients, "short wait times").
Best: NVP for arrival text (parking, building, walk-in rules); ACPNY for consistent cards; Family First per-office Call + Directions.

### Recommended spec: OUR location page (one per office: Elmhurst, Hicksville)
1. H1: "[Neighborhood] pediatrics and family medicine" + address line; open-now status text computed from hours (static fallback: weekly hours table).
2. Actions: Call this office, Get directions (maps deep link), Request appointment.
3. Hours as a plain table, all days visible; closed days stated (Hicksville closed Wed/Thu per base notes, verify); holiday note; after-hours instruction (what to do if closed, when to go to ER/911).
4. Getting here: subway/bus lines, parking (lot, street, garage, cost if known), entrance and floor, accessibility (step-free, stroller). Photo of the entrance with alt text.
5. Who you will see here: doctors with photo link to their page.
6. What this office offers (short list) and walk-in/same-day rules (who, when, call first).
7. Insurance one-liner + link. Languages spoken at the front desk.
8. Map embed only as a click-to-load placeholder (avoids third-party calls before consent); static image fallback so it never shows a blank box.
9. Local business structured data matching visible text. No stat blocks, no star ratings.

## 3. New patient / appointment request flow

| Site | Type | Screens before submit | Personal data asked on first form screen | Symptoms/history asked | DOB / insurance ID | Slots shown before data | Trackers (static) |
|---|---|---|---|---|---|---|---|
| Tribeca Register | intent triage then portal | 1 (3 radio cards) | none | none | later in portal | no | GTM, GA, Meta, Pinterest |
| Nao booking | slot booking 4 steps | pick slot, details, SMS verify, consent | email, first, last, DOB, phone, sex | optional free-text reason | DOB at step 2; insurance not asked here | yes | none seen |
| PAFL (healow) | visit reason first | reason dropdown | none yet | visit reason list including symptoms words | later | after search | OneTrust, Mixpanel, GTM |
| TIA signup | membership signup | 1 form then more | legal name, email, mobile, ZIP, DOB | not yet | DOB first screen; insurance next | no | GTM, Amplitude, Intercom (+TikTok, Meta, Bing, Drift on site) |
| Parsley join | 3 steps Location / Condition / Insurance | 3 | email, ZIP | "Condition" step | insurance step | no | reCAPTCHA |
| ACPNY | search + provider slot | search form | none (specialty, ZIP, insurance as filters) | condition field in search | insurance filter | yes on profile | GTM, DoubleClick, Adobe, Meta, Taboola, Bing, Criteo |
| NYU | search by location, date stepper | 2 | none (MyChart elsewhere) | none | insurance box filter | yes | hotjar, hubspot, intercom, pinterest |
| NVP | phone/register form | link out | n/a | n/a | n/a | no | GA, chat |
| Summit | athena portal | spinner only | unseen | unseen | unseen | unseen | GTM/gtag, Osano "Targeted Advertising" |
| Family First (base) | call only | 3 taps to dial | none | none | none | no | none |

Ranked flaws: 1) tracking pixels and ad tags (Meta, TikTok, Bing, DoubleClick, Taboola, Criteo, Pinterest, Hotjar) on pages where people look up doctors and appointments (Tia, ACPNY, Tribeca, NYU): health-privacy and FTC/state enforcement risk, not just a style issue; 2) DOB, phone, sex asked before the visit is confirmed (Nao, Tia); 3) health condition collected after only an email (Parsley); 4) free-text reason box invites symptom detail into a web form (Nao); 5) card photos and records sent by email (Tribeca); 6) forms with SMS marketing consent bundled with the verification code (Tia); 7) booking handled on a third-party domain with its own trackers (healow) and no notice; 8) cookie banners covering the form (PAFL, Summit); 9) desktop 403 / bot walls (Tia).
Best: Tribeca (3 plain intent cards, no data); Nao (slots visible first, 4-step bar, "free", states time slot counts); PAFL visit-type taxonomy with "call the office" for complex cases; ACPNY same-day page that says what same-day is for and sends routine visits elsewhere.

### Recommended spec: OUR appointment-request page
Principle: it is a request, not a booking; we call back; collect the least data to call back; no clinical details on the web.
1. H1 plain: "Request an appointment". One sentence: what happens next (we call or text within one business day; hours; for urgent problems call the office or 911).
2. Prominent "Prefer to call?" with both office numbers, tap-to-dial, hours.
3. Step 1 (single screen choices, radio cards): Who is the visit for (child / adult); New or existing patient; Which office; Visit type from a neutral list (well visit/physical, vaccines, school or camp form, newborn first visit, follow-up, other). Neutral labels only; no symptom words.
4. Step 2 contact: parent/guardian name, preferred phone, preferred contact (call/text), best time window, language. Email optional.
5. Optional: preferred days/times, preferred doctor.
6. Submit. Confirmation: what happens next, the office number, urgent-care/911 line.
Fields NOT to ask online: symptoms, diagnoses, medications, medical history, date of birth (ask on the call), insurance member ID or card photo (ask at confirmation by phone or secure portal), SSN, free-text "reason for visit" (if kept, label "Do not include medical details" and cap length), sex, photos. Child name: first name only, or "age range" if needed.
Consent and tech: one plain sentence about how we use the information; SMS opt-in as a separate unchecked box, never required; no ad or analytics pixels, no session replay, no chat widget on this page; spam protection that does not load third-party trackers where possible; form posts to our own endpoint or a HIPAA-eligible vendor with a signed agreement (decision for counsel and owner); labels visible not placeholder-only; errors inline in text; 44px targets; no cookie banner that covers the form; works with phone dial as equal alternative. Say clearly this form is not for emergencies or medical questions.
Microcopy principles: say what happens next and when; reassure that nothing sensitive is needed yet; avoid urgency tricks and "guaranteed"/"same-day" promises; describe cost only with a verified statement.

## 4. Insurance / coverage and services pages

| Site | Format | Date/verify wording | Strength | Weakness |
|---|---|---|---|---|
| Tribeca | state + plan dropdowns, Medicaid/Marketplace lists, FAQ | "Questions about coverage? call" | sliding fee, plain FAQ | dropdown-only (hidden list); card-photo upload; "no patient is denied" absolute |
| NVP | text list of companies | accepted list | simple | no verify advice seen |
| Summit | accordion of plans | "Last Updated: April 20, 2026", legal disclosure modal | dated, honest disclaimer | accordion per plan, overlay |
| PAFL | "most major insurance providers", FAQ, sliding fee schedule | - | sliding fee published | "most" without date |
| Parsley | marketing + steps to use benefits | - | how-to for benefits | star rating, sales tone |
| TIA | very long explainer (copay, deductible) | "Accepts most PPO" | educational | 22,000px, claim generality |
| ACPNY | links to "Insurances We Accept", search by plan | - | filter by plan | plans mostly behind search |
| NYU | per-doctor insurance accordion | - | on the profile | collapsed |
| Family First (base) | plan chips + verify link | disclaimer low contrast (base notes) | names plans | not dated |

Ranked flaws: no "last verified" date (most); plan lists hidden in dropdowns or accordions; absolute or vague wording ("most", "never", "no patient denied"); contrast of disclaimers; Medicaid managed-care plan detail missing.
Best: Summit (dated list + clear "verify with your carrier" disclosure); Tribeca (sliding fee, FAQs); NYU (insurance on provider page).

### Recommended insurance/services content (for our site)
- Visible list of plan names as text (searchable, expandable by carrier), "Last verified [date]" under it, one sentence "Plans change; call to confirm your exact plan and your child's coverage before the visit". Medicaid managed care and Child Health Plus names only if confirmed by the owner. Self-pay and sliding-fee statement only if policy exists.
- Services: grouped by age (children, adults, all ages) with one plain line each; what to bring; no efficacy claims; IV/elective services separated, labeled "elective, not billed to insurance", with risks/consent note or removed (see base notes).

## Trackers, accessibility and wording: cross-cutting
- Pixels on appointment/portal/provider pages: TIA (Meta, TikTok, Bing, Amplitude, Drift, Intercom), ACPNY (Meta, DoubleClick, Taboola, Criteo, Bing, Adobe), Tribeca (Meta, Pinterest, GA, GTM), NYU (Hotjar, HubSpot, Intercom, Pinterest), PAFL (Mixpanel, GTM). Cleaner: Nao (none in DOM), NYP (Piwik PRO with consent), Parsley (reCAPTCHA only), NVP (GA + chat). Our rule: none on provider, appointment, portal pages.
- Overlays: Summit and NYP cookie banners cover 45-50% of phone screens; ACPNY sticky flu bar ~160px; NVP chat bubble overlaps text. Keep one slim banner only if trackers exist; with no trackers, no banner.
- Accessibility red flags: images without alt (Tribeca 143/145, Nao 33/47 on location, Tia 8, Parsley 35/52), H1 missing (NVP, Summit /doctors), maps that fail to load, low-contrast small text in footers, tiny footer links on Tribeca phone.
- Risky wording found: "the best pediatricians" (Tribeca), "the most experienced" (Tribeca), "highest quality of medicine" (NVP), "only complete... protocols" and star rating (Parsley), "2 Million+ patients / 200,000+ 5-star reviews / short wait times" (Nao), "no patient is denied", "never charge membership" (Tribeca), "Tia accepts most PPO", comparison table vs other doctors (Tia). We avoid: superlatives, ratings, guarantees, comparisons, unverified counts.

## Page-type priorities for build
1. Appointment request (highest risk, highest value): own form, minimal fields, no trackers.
2. Location pages x2 with arrival/parking and full hours.
3. Doctor pages x2.
4. Insurance page with verified date.
Open questions for owner: are both doctors accepting new patients; hours and closed days per office; parking details; plan list and verification date; who will call back requests and by when; form handling vendor (HIPAA agreement).
