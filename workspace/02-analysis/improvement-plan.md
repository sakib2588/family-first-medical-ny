# Improvement plan: ranked, grouped by page (1-week first version)

Date: 2026-10-31. Inputs: flaw-register.md (F-xxx), strengths-register.md (S-xxx), 03-decisions/deferred-questions.md and 2026-10-31-constraints.md, _digests-site1 (medical overlay, red lines). Practice identity is unconfirmed (is the client Family First Medical or a practice modelled on it?), so no practice name is hard-coded: use [Practice name], [Office A], [Office B], [Doctor 1], [Doctor 2] tokens that come from one data file.

Scale: Impact H/M/L (effect on a new patient reaching a call or request, or on risk); Effort S (under half a day), M (about a day), L (more than a day). Tag: MUST (first version fails without it), SHOULD, NICE.
Blocker codes: Q4 approver, Q9 main goal, Q13 portal/forms link + vendor, Q14 client taste, Q19 counsel, Q20 page scope, Q22 budget (all in 03-decisions/deferred-questions.md); ID = client identity unconfirmed; DOM = domain not owned yet; CL = needs facts/photos from the client; CNS = counsel must approve wording/data handling before it leaves DRAFT.

v1 scope per constraints: Home, Doctors, Locations, Contact (request form lives here) + legal pages. Insurance and New patients follow right after (proposal, not yet approved; Q20). Items for those pages are tagged "post-v1 unless Q20 approves".

## Ranked list (rank = priority order within the build; grouped below by page)

| Rank | Item | Page | Tag | Impact | Effort | Answers | Blocked by |
|---|---|---|---|---|---|---|---|
| 1 | Header Call button + bottom bar (Call outlined, Request filled, appears after hero), tel:+1 E.164, office-choice dialog with Escape/focus | all (home first) | MUST | H | S | F-001, F-021, F-032, F-050, F-052; S-001, S-002 | none (numbers from client, CL) |
| 2 | First fold at 390x844 and 1280x800: plain H1 (max 3 lines), one filled "Request a visit", Call, "accepting new patients" line, trust strip with verified facts only | home | MUST | H | M | F-009, F-017, F-021, F-004; S-003 | CL (facts), Q9 (what home leads with; default new patients), Q14 (taste) |
| 3 | Two office cards on home: address, today's hours ("Open now" chip with static fallback), Call, Directions, getting-here line | home + locations | MUST | H | M | F-005, F-022, F-031, F-038, F-035; S-004, S-005 | CL (hours, parking, transit), ID |
| 4 | Zero third-party scripts; CI check that fails on any external host; self-hosted fonts; no chat, no replay | all | MUST | H | S | F-003, F-027, F-033, F-053; S-021 | none |
| 5 | Request page (on Contact): triage cards then contact-only fields; confirmation says what happens next and the call and 911 lines | contact / appointment request | MUST | H | M | F-007, F-010, F-021; S-006, S-007, S-012, S-026 | Q13 (form endpoint/vendor, BAA), Q4 (who calls back, how fast), CNS (what a form may collect), DOM (email sender domain) |
| 6 | Performance budget enforced: LCP <=2.5s, first load <=1 MB, hero <=120 KB, fonts <=100 KB, no splash; report real Lighthouse numbers | all | MUST | H | M | F-014, F-020, F-049; S-029 | none (needs real hero image; can use shape device) |
| 7 | Accessibility build rules: H1 + heading order, alt on every informative image, 44px targets, locked contrast tokens, focus ring, reduced motion, no-JS rendering, axe + keyboard pass per page | all | MUST | H | M | F-006, F-016, F-020, F-032; S-021 | none |
| 8 | Footer on every page: entity name, both NAP, hours, 911 line, "Last reviewed" date, legal row separate from nav, NPI/lookup links | footer | MUST | M | S | F-013, F-041, F-034; S-013 | ID (entity name), CL (NPI/license numbers), CNS (emergency wording) |
| 9 | Legal pages as HTML under /legal/: privacy, NPP, terms + medical disclaimer, accessibility, nondiscrimination/language help; each dated; stay DRAFT | footer/legal | MUST | H | M | F-011, F-012, F-028, F-029, F-042, F-043; S-013, S-031 | Q19 (counsel; default: stay DRAFT, launch blocked until counsel or recorded owner waiver), CNS |
| 10 | Doctor pages (two): photo with alt, credential, specialty, ages, languages, accepting-new (dated), Call + Request, offices/days, short bio, board named, care areas | doctors | MUST | H | M | F-024, F-004, F-034; S-009, S-022, S-030 | CL (photos, bios, languages), credential verification (OPMC/ABMS/NPPES), CNS (credential wording), ID |
| 11 | Location pages (two): neighborhood H1, hours table (all days), getting-here, entrance photo, accessibility facts, who you will see, static map image | locations | MUST | H | M | F-005, F-022, F-031, F-035; S-004, S-027 | CL (parking, transit, access), ID |
| 12 | Structured data per page: MedicalClinic per office with hours/phone (text equals visible), Person per doctor, FAQPage; no aggregateRating | home, locations, doctors | SHOULD | M | S | F-023, F-051; S-021, S-020 | ID (names/addresses) |
| 13 | Patient portal as a quiet separate link (utility row), never a filled button | header | SHOULD | M | S | F-037; S-024 | Q13 |
| 14 | Intent routing cards on home: New patient / Newborn / Existing (portal) / Sick today (call) | home | SHOULD | M | S | F-021, F-025; S-006, S-008 | Q9 (default new patients) |
| 15 | Insurance block on home and its own page: plain-text plan list by carrier, "Last verified [date]", verify line; Medicaid names only if confirmed; no logos | home + insurance | SHOULD | H | S | F-008, F-046; S-010 | CL (plan list, date), post-v1 page unless Q20 |
| 16 | Ownable shape device (arch frames + half-circle dividers) in 3 brand tints; replaces stock imagery | home, all | SHOULD | M | M | F-018, F-030; S-015, S-017 | Q14 (taste); real photos for best effect (CL) |
| 17 | Photography plan: shot list for doctors, entrances, rooms; consent and image log; consistent crop/grade | home, doctors, locations | SHOULD | H | M | F-018; S-017 | CL, scheduling a shoot inside the 1-week window (may slip; fallback is shape device + labelled empty slots) |
| 18 | FAQ of 7-8 short answers (new patients, insurance, same-day sick, after-hours, forms, vaccines, languages) | home | SHOULD | M | S | F-025; S-020 | CL (policies), clinician review of any medical wording |
| 19 | New-patients page: 3 steps, newborn variant, bring list, portal/forms link, visit-type glossary | new patients | SHOULD | M | M | F-025; S-008, S-025 | post-v1 unless Q20; Q13 |
| 20 | Reviews: link to Google reviews only (no stars/counts/schema) until live GBP data is verified | home | SHOULD | M | S | F-015, F-045; S-019 | CL (GBP link and name), CNS |
| 21 | Cloudflare/WAF rules: public pages never challenged for normal phones or search crawlers; challenge on form endpoint only; test on cellular | all | SHOULD | M | S | F-036 | DOM/hosting set-up |
| 22 | Dated tracker-status box on privacy page generated from the real script list | legal | NICE | L | S | F-054; S-031 | Q19 |
| 23 | "Open now / opens at ..." chip with holiday-hours line driven by one hours file | home, locations | NICE | M | S | F-031; S-005 | CL (holiday policy) |
| 24 | One signature scroll moment (8-16px fade on cards), reduced-motion safe; no scroll-jacking | home | NICE | L | S | F-020; S-032 | none |
| 25 | Symptom-language service pages and condition content for search (clinician reviewed) | services | NICE (post-v1) | M | L | S-028 | CL, CNS, clinician review time |
| 26 | Self-pay/sliding-fee and No Surprises/GFE notice pages | billing | NICE (post-v1) | M | M | F-008; S-011, S-013 | CL (policy), CNS |

## By page (what to build, in order)

### Home
Ranks 1, 2, 3, 14, 15 (block), 16, 17, 18, 20, 23, 24. Order of sections: header; first fold; two office cards; routing cards; doctors teaser (two portraits); insurance band; FAQ; reviews link; footer. Section rule: neighbouring sections must not share a layout (Site1 gate 6).

### Doctors
Rank 10. Two full pages (not a grid) plus a teaser on home. Do not publish "board-certified", "years of experience", "accepting new patients" or hospital names until verified (see F-004, F-034). Blocked: photos, bios, credential verification.

### Locations
Ranks 3, 11, 12, 21. One page per office; Hicksville-style closed days (from base site) must be verified, not assumed. Blocked: parking/transit/access facts, GBP names.

### Appointment request (Contact page)
Ranks 5, 13, 14. Fields allowed: parent/guardian name, phone, preferred office, best time window, preferred contact (call/text), language optional, neutral visit type. Not allowed: F-010 list. Blocked by Q13/Q4/counsel; until resolved the page ships as "call us" plus a form that is built and tested but disabled (DRAFT), or the form posts to the owner's own endpoint with no PHI fields (decision for the owner).

### Insurance
Rank 15, 26. Post-v1 unless Q20 approves; the home band can ship earlier if the plan list and date are confirmed.

### New patients
Rank 19. Post-v1 unless Q20 approves.

### Footer and legal
Ranks 8, 9, 22. All legal text is DRAFT until counsel reviews or the owner records a waiver (Q19 default); launch gate per Site1 U20.22.

## Blockers summary
- Waiting on owner decisions: Q9 (home emphasis; default new patients), Q14 (taste; default: show Direction A hybrid plus Direction C as alternative), Q20 (scope), Q4 (approver), Q22 (budget), ID (client identity), DOM (domain; build on a temporary address, client to own the domain).
- Waiting on client facts (CL): exact practice name/entity, phones, addresses, hours, closed days, parking/transit/accessibility, languages, insurance list + date, accepting-new status, credentials/NPI, photos, after-hours instructions, GBP link, callback SLA.
- Waiting on counsel (CNS): privacy policy, NPP, terms/disclaimer, nondiscrimination, accessibility statement wording; what the form may collect; credential and "accepting new" wording; whether any analytics may ever run; emergency wording.
- Can start today with no blocker: ranks 4, 6, 7, 24, the component library, the shape device, the data file schema.
