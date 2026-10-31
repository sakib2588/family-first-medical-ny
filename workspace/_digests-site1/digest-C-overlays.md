# Digest C: overlays, design-craft, skill router (for a NY medical practice site)

Sources (all under /mnt/All/Sakib/Website creation/Site1/): playbook/overlays/{vertical,model,jurisdiction}/*, playbook/counsel_brief.md, playbook/design-craft/anti-slop-design-guide.md, playbook/design-craft/eval/RESULTS.md, .claude/skills/site1-design-craft/*, .claude/skills/site1-skill-router/SKILL.md, plus the universal rows (playbook/universal/U*.md) that the overlays cite. Dated 2026-10-30 in the source. Everything below is DRAFT playbook text; nothing is counsel-reviewed.

KEY CAVEAT: the whole playbook is written for NYC home-service TRADES leads. counsel_brief.md is about contractors only (DCWP, home improvement), so it contains NOTHING for medical. The medical overlay is a short draft with 4 compliance rows and 5 open counsel questions. Gaps for a real NY medical client are listed in section 9.

---
## 1. Which overlays apply (the stack)

site.yaml keys the playbook expects: `archetype`, `model` (list), `jurisdictions` (list), `counsel`, `languages`.

Proposed values for a NY medical practice:
- `archetype: medical-wellness` (vertical/medical-wellness.md; status draft). Covers medical and dental practices, clinics, therapists, PT, med spas.
- `model: [booking]` or `[lead-gen]` (the vertical says "usually booking or lead-gen"). Add `ecommerce` only if it sells products. Both `model/lead-gen.md` (draft) and `model/booking.md` (planned, mostly questions) apply if both are chosen.
- `jurisdictions: [us-federal, new-york]`, plus `nyc` if in a borough (nyc.md adds nothing medical; only trades/plumber questions). Dependency chain: nyc needs new-york and us-federal; new-york needs us-federal (U00.6).
- Multilingual: universal module U22 (optional; only when site.yaml lists more than one language). No separate overlay.
- `counsel` in the record is required for medical-wellness (cited as U01 in the overlay).
- Not applicable: california, eu-eea, uk (unless the practice serves those residents; U20.3/U20.23 routing check), donations, ecommerce, microsite, subscription, ticketing, local-trades and all other verticals.

Global status rule (U00.7) for "planned" overlays (booking, new-york, nyc, us-federal): the build proceeds with the universal modules and the vertical overlay; their questions go on the counsel list; LAUNCH (S6) WAITS for recorded counsel review or an owner waiver in the handoff pack.

Authority order when rules disagree (design-craft + router): 1 red lines (never fabricate anything) > 2 owner message, CLAUDE.md, vault/wiki/compliance/red-lines.md, router > 3 playbook modules + vertical overlay > 4 client goal > 5 design-craft skill > 6 any installed design skill. Brief wins over a taste rule and over an overlay UX pattern (write `ASSUMED: brief overrides <row>`), but the OVERLAY wins over the brief for safety/legal/license/disclosure rows.

---
## 2. vertical/medical-wellness.md (full rules, IDs preserved)

### Trigger
`archetype: medical-wellness`; `jurisdictions` adds state board and state health-privacy rows; `counsel` required.

### Primary conversion
- An appointment request or online booking; a CALL stays the fallback.
- Existing patients get a portal link KEPT APART from the new-patient path.
- Pattern block: book/request appointment + call fallback + separate portal login (U08).
- The request form collects SCHEDULING details ONLY, never symptoms or history, unless the form vendor signs a business associate agreement (BAA) AND counsel approves (U08, U21).

### Page-set delta (vs universal U06)
- ADD: Services/treatments (one page each); Providers (one bio each); Locations and hours; Insurance and pricing; New patients (forms, what to bring); Patient portal link; Telehealth if offered.
- ADD legal pages counsel confirms: notice of privacy practices; good-faith-estimate notice; nondiscrimination and language-assistance notices where they apply (U20).
- DROP: before-and-after galleries unless written patient consent is on file and counsel approves; a blog of health claims without clinical review.

### Trust signals (with verification)
1. Provider credentials (license, board certification), each checked against the issuing board's public lookup before launch (U05).
2. Current list of accepted insurance plans, dated, confirmed by the front desk at each content review (U05, U24).
3. Real patient reviews shown with a link to the source; replies never confirm that someone is a patient (U05).

### UX patterns
- medical-wellness.1: Find a provider by specialty, location and language (refines U15).
- medical-wellness.2: Booking works fully on phones; call button always one tap away (refines U08).
- medical-wellness.3: Plain-language copy and larger default text for older readers (refines U11, U07).
- medical-wellness.4: NO ad pixels or session replay on appointment, portal, condition or provider-search pages; analytics there are cookieless and counsel approves the setup (OVERRIDES U19.8 as to how strict).
- medical-wellness.5: Health claims on service pages are reviewed by the provider and backed by evidence before publishing (refines U07).

### Schema types (U18)
- `MedicalClinic`, `Dentist` or `Physician` (subtypes of `MedicalBusiness`): name, address, telephone, url, openingHoursSpecification from the business record; `medicalSpecialty` from the services list; `availableService` from treatments (on Physician).
- `Person` per provider bio with `hasCredential` ONLY for credentials checked against the board.
- Accepted insurance plans appear only from `overlay.medical-wellness.insurance_plans`, with its `as_of` date shown.
- (From lead-gen) `telephone` = real public phone, never a tracking number; no `aggregateRating`/`review` markup about the business itself (U18.11, U05.10).

### Compliance rows (all flagged counsel; checked 2026-10-30; all "When jurisdictions includes us-federal")
- medical-wellness.6: A HIPAA covered entity whose website describes its services must post its notice of privacy practices prominently on the site and make it available electronically. [45 CFR 164.520]
- medical-wellness.7: Providers must tell uninsured and self-pay patients about the right to a good-faith estimate; a notice prominently shown on the website and findable by search engines. [45 CFR 149.610]
- medical-wellness.8: Health apps/services outside HIPAA holding personal health records may fall under the FTC Health Breach Notification Rule. [16 CFR 318.1]
- medical-wellness.9: Recipients of HHS funding face web and mobile accessibility duty to WCAG 2.1 AA, dates in 2027 and 2028 set by employee count. [45 CFR 84.84 (Section 504)]
Status line: "as of 2026-10-30, counsel review needed".

### Common mistakes (checklist)
Ad/social pixels on appointment and portal pages; "top doctor"/"best clinic" with no documented basis; before-and-after photos without written consent; insurance lists years out of date; booking forms asking symptoms or history; review replies confirming the reviewer was treated.

### Reference sites (pattern study only, no endorsement; also the only allowed gate-3 sources besides awesome-design-md and owner-named)
- my.clevelandclinic.org: appointments, find a provider, locations, patient portal as four distinct top-level actions, phone beside booking.
- nyulangone.org: "find a doctor and schedule" as one combined path, search by location, portal login separate.

### Open counsel questions (medical)
1. Tracking: after the 2024 court ruling on the HHS online tracking bulletin (HHS page blocked), which pages may carry analytics/ad tags, and which vendors need a BAA?
2. Section 504 accessibility: which date applies by size/funding; does the client receive HHS funds at all?
3. State rules: which medical/dental/wellness BOARD ADVERTISING rules and STATE HEALTH-DATA laws apply in NY? NOT RESEARCHED.
4. Claims and testimonials: what evidence federal health-claim guidance expects (FTC guidance link failed this session); what consent and disclosure before any patient story or before/after image.
5. Nondiscrimination and language-assistance notices: needed on the site or not?

---
## 3. model/lead-gen.md (applies if the practice uses lead-gen; status draft)

### Primary conversion
A call or a server-accepted form routes to a named human and logs in the ledger; block from `goals.primary` (U08). A phone-link tap is intent, not a call (U19).

### Page-set delta
Adds a thank-you page per form (fires the conversion once) and a privacy page linked beside every form (U20). Location pages only with unique local proof (U06.3).

### Trust signals
1. Real contact route answered by a person (or disclosed assistant) in the hours shown; verified by a monthly test call/submission.
2. Real, dated reviews naming platform, linked; verified against platform listing (U05).
3. A credential the vertical requires, copied from the issuer's registry and linked (for medical: provider license/board certification); verified at intake and each renewal.

### UX patterns
- lead-gen.1: Fields = vertical overlay's minimum (medical: scheduling details only); failure shows another contact route and keeps input (refines U08.5).
- lead-gen.2: Forms FAIL CLOSED: success only after the row is stored; every lead reaches alert AND ledger (U08).
- lead-gen.3: Call block: real number stays in HTML source, schema, footer, listings; a tracking number swaps only into visible links for human sessions (U19.11).
- lead-gen.4: Count separately: phone-link taps; tracked calls over owner's minimum length; client-confirmed leads (U19.10).
- lead-gen.5: Response time is an operating target, not a promise: alert in 2 min, first human contact in 5 during business hours (owner target, unverified, never shown to clients). The "21 times" statistic is misquoted; do not use.
- lead-gen.6: One system of record per contact type; daily reconcile (U19.1). For medical, any CRM/ledger holding health info raises BAA questions.
- lead-gen.7: Spam control per U08.13/U21.6 (honeypot, server validation, rate limit; bot check only on evidence); NEVER delete a flagged lead, a person reviews the queue daily.
- lead-gen.8: Call recording OFF by default; caller notice and recording only after counsel approves, for every state callers come from (U19.11).
- lead-gen.9: Lead-facing texts only after consent boxes split by purpose, UNTICKED, with counsel sign-off on SMS terms (U20.20).
- lead-gen.10: Reports name what is unattributed and never promise rankings, leads or revenue (U03.7, U19.12).

### Compliance rows (counsel flag on all)
- lead-gen.11 (us-federal): calls to mobile numbers via autodialer or artificial/prerecorded voice need prior express consent; advertising/telemarketing calls need prior express WRITTEN consent naming the number. [47 CFR 64.1200]
- lead-gen.12 (us-federal): consent revocable by any reasonable means incl. STOP text; honor within 10 business days at most.
- lead-gen.13 (us-federal): AI-generated voices = artificial voice; an AI agent calling leads back needs prior express consent first. [FCC 24-17]
- lead-gen.14 (new-york): eavesdropping turns on consent of at least one party (Penal Law 250.00); design rule still treats every call as ALL-PARTY.
- lead-gen.15 (new-york): GBL 349 (deceptive acts) and 350 (false advertising); site claims and client reports must be accurate.
- lead-gen.16 (us-federal): commercial email opt-out: no fee, no data beyond address/preferences, no step beyond a reply or one web page. [16 CFR 316.5]
- lead-gen.17: Google listing phone number must be under the business's direct control.
Status: counsel review needed.

### Common mistakes
Form writing only to an inbox; spam filter that deletes; counting link taps as calls; "24/7" where nobody answers at night.
### Open counsel questions
Call recording consent by caller state (CT civil statute not opened); callback/text consent wording (can one box cover updates and marketing?); retention of recordings and caller numbers; pay-per-lead definitions (not relevant to a practice's own site).
Reference sites: rotorooter.com (tap-to-call + schedule on first screen); zendesk.com/demo.

---
## 4. model/booking.md (status PLANNED; defaults NOT set)

- Primary conversion proposed, not decided: a confirmed booking; call stays fallback. Paths per U08: one booking action repeated, cancellation fee shown BEFORE confirmation, phone fallback when the widget fails. Events booking-start and booking-confirmed (incl. across third-party widget): U19. Cancellation/no-show policy and privacy notice for widget-vendor data: U20.
- Embedded third-party scheduler or not = owner decision (R14 Part 6.2 item 3).
- Open counsel questions (launch waits): (1) third-party widget accessibility liability under DOJ view that ADA covers web services (ada.gov/resources/web-guidance, 2022); (2) cancellation/no-show fee disclosure rules by state; (3) reminder texts/emails consent captured by booking form; (4) HEALTH BOOKINGS: does the widget vendor need a BAA (see medical overlay)?; (5) who discloses the vendor's data collection in the privacy notice, client or vendor?

---
## 5. jurisdiction overlays

### us-federal (status PLANNED, applies to every US client)
Open counsel questions (launch waits):
- Reviews and testimonials: which collection, incentive and display practices FTC reviews rule (16 CFR 465) and Endorsement Guides (16 CFR 255) reach.
- Web accessibility: what conformance level counsel advises for a public-facing business given DOJ view that ADA covers web services.
- Children: is site directed to children / knowingly collects their data (COPPA 16 CFR 312)?
- Commercial email: CAN-SPAM sign-up form, sender details, unsubscribe path.
- Consent default is an OWNER DECISION (R14 6.2 item 5); U20.8 holds the proposed default for staging only.
- Conditional rows that bind when us-federal is selected: U05.7, U05.8, U05.9, U08.20, U08.21, U16.18, U20.8, U20.11, U20.12, U20.13, U20.14, U20.18; lead-gen.11-13, lead-gen.16; medical-wellness.6-9 (others for non-medical verticals omitted).
- Triggers of note: "Questions to settle: review and endorsement display (U05, U07), access for every conversion path (U16), email sign-up defaults (U19), base legal pages (U20)."

### new-york (status PLANNED)
No medical rows of its own. Open counsel questions:
- SHIELD Act (GBL 899-bb): what safeguards for a small client keeping leads in an inbox or CRM; may lead forms ask for card, SSN or driver's licence numbers? (For a practice: also the interplay with HIPAA.)
- Privacy page wording for New York residents; whether accessibility follows us-federal.
- Rows that bind only when new-york selected: U01.8 (depends on where the AGENCY contracts from; GBL Art. 44-A freelance), U20.16 (AI voice agent/avatar disclosed on call and page; counsel re-verifies against statute), lead-gen.14-15.
- Not medical but listed: attorney advertising Rules 7.1/7.3 (legal), real estate 19 NYCRR 175.29, ticket prices ACA 25.07(4).
- Counsel brief adds (contractor-framed but general): NY GBL 396-b (effective 2026-06-09) requires disclosure of a "synthetic performer" in an advertisement; GBL 399-z reported to cover texts with 8 a.m.-9 p.m. window (secondary, text not read); NY has no cookie-consent statute found (absence of evidence); SHIELD Act reportedly requires reasonable safeguards and breach notice within 30 days (law-firm summaries; statute not read).

### nyc (status PLANNED)
Only trades items (DCWP home-improvement license number in advertising 6 RCNY 2-222(a), financing ban, master plumber website display 28-408.6.2, DOB trades). Nothing for medical. Add only for NYC-borough clients; it still triggers a "no street address" conflict note in the trades overlay that does NOT apply to a physical-premises practice (practice shows address; locations page is in the page-set delta).

---
## 6. Universal rows the medical overlays point at (U-IDs; text abbreviated)

Accessibility (U16): U16.1 WCAG 2.2 AA minimum; U16.2 contrast 4.5:1 / 3:1 large; U16.3 controls/focus 3:1; U16.4 keyboard; U16.5 sticky bars never cover focus (scroll-padding-top); U16.6 tap 44x44 project rule (24 floor); U16.7 consistent help/contact order (3.2.6); U16.8 autocomplete tokens, phone = ONE input; U16.9 no re-asking in multi-step forms (3.3.7); U16.11 reduced motion; U16.13 alt text/captions; U16.14 three test layers (automated + keyboard + screen reader desktop AND phone); U16.15 WCAG-EM record; U16.16 accessibility statement in footer (commitment, standard, known limits, last test date, contact route); U16.17 never claim "fully conforms" or "meets a law"; U16.18 (us-federal) DOJ 2022 guidance; U16.20 record jurisdictions at intake; U16.21 NO accessibility overlay/widget as the fix.
Reviews/proof (U05): U05.1 proof records need source, permission, verified, expiry; U05.2 no section without proof; U05.3 trust markers only from verified data; U05.4 real dated reviews, platform named, linked, unedited except marked trims; U05.5 "Sample" label for demos, never published; U05.6 red line: never write/generate/buy/commission reviews; U05.7 (us-federal) disclose insider/incentivized reviews; U05.8 no review gating (16 CFR 465.7); U05.9 results testimonial needs written sign-off + source/period/baseline + "not typical" note; U05.10 no review-star structured data about self.
Copy (U07): U07.2 H1 names the need/offer, no slogan, business name in header; U07.5 plain language, split sentences >25 words, paragraphs <=5 sentences, explain specialist terms first use; U07.6 reading-level target per audience (owner's choice); U07.8 draft only from record facts; U07.9 human-edit rule: no raw model draft published, editor name/date logged.
Conversion (U08): U08.2 exactly one filled primary action per viewport; U08.3 sticky bar only when no other primary/form/footer visible; U08.5 minimum fields; U08.6 visible labels (not placeholder-only), validate on submit; U08.7 "(optional)" labels, no asterisks; U08.8 error summary "There is a problem", page title "Error:"; U08.10 confirmation page (what happened, reference, what next, contact); U08.11 fail closed with another contact route; U08.12 two independent destinations per submission (test at staging, launch, T+7); U08.13 spam per U21.6.
Analytics (U19): U19.2 conversion fires on success state; U19.5 no analytics/ad storage before consent known where required; U19.6 consent mode basic vs advanced (advanced needs counsel); U19.7 tag register; U19.8 ad pixels NEVER on pages an overlay flags sensitive (health conditions, appointments, patient portals), blocks launch until counsel approves exception in writing; U19.10/.11 call tracking.
Legal (U20): U20.1 record jurisdictions; block launch while a "must" row lacks counsel sign-off; U20.2 privacy policy in footer and next to every form (what, why, who receives, rights, contact), counsel approves; U20.8 consent default (cookieless analytics, pixels/replay opt-in only); U20.9 accessibility statement per U16.16-17; U20.11 FTC reviews rule; U20.12 disclose payment/free product/employment/family tie next to endorsement; U20.13 exceptional result needs typicality proof or disclosure; U20.14 every objective claim has a reasonable basis on file; U20.16 AI voice disclosure (NY); U20.17 never show AI people as real staff/authors/customers; U20.18 COPPA; U20.19 REGULATED SECTORS (medical listed): U20 adds no sector rows, vertical overlay and counsel add them, launch waits for counsel sign-off; U20.20 consent boxes unticked, split by purpose; U20.21 legal pages carry "as of" date, owner, next review date; U20.22 never say a site "meets a law": status words are "rows signed off by counsel on <date>" or "open, counsel".
Security (U21): U21.1 client owns domain/DNS/hosting/repo; U21.3 HTTPS only + HSTS >= 1 year; U21.4 security headers; U21.5 CSP report-only first; U21.6 server validation + rate-limit + honeypot; U21.7 no secrets in repo; U21.11 SRI on third-party scripts; U21.13 backups (3 copies/2 media/1 offsite, restore tested).
Handoff (U24): U24.7 governance table (owner, editors, review step, interval per content area: prices, hours, team, offers, reviews, legal); U24.8 review date on time-sensitive pages (insurance list, hours); U24.9 legal pages: named owner and next review date, reviewed by counsel; U24.13 retention period stated in privacy policy per counsel.

### Multilingual (U22; optional, applies only if site.yaml lists >1 language)
- U22.1 Add a language ONLY when the record names, for that language, a fluent human translator/reviewer AND a channel that answers customers in that language (staff on phone, form replies). Otherwise stay single-language.
- U22.2 Never publish raw machine translation; a named human translator edits every translated page (Google scaled-content-abuse policy).
- U22.3 Each language own URL (default subdirectory `/es/`); no cookie/IP/browser-setting switching; no auto-redirect.
- U22.4 hreflang on every version: self + all others, fully qualified, reciprocal, `x-default`.
- U22.5 hreflang = ISO 639-1 + optional ISO 3166-1 region (`en-GB`, not `en-UK`); a guard rejects unknown codes.
- U22.6 `lang` on `<html>` as BCP 47; mark inline passages with own `lang`; no Content-Language meta.
- U22.7 One language per page; translate the FULL main content; no side-by-side translations.
- U22.8 Switcher in header of every page, links to the EQUIVALENT page, each language labelled in its own name, NO flag icons.
- U22.9 Locale-aware formatting (Intl) for dates/times/numbers/currency from record values; month names in prose.
- U22.10 Each language version links to privacy policy, terms, accessibility statement and consent banner in that language, or states plainly which language version governs; counsel decides per jurisdiction.
- U22.11 Forms, errors, confirmations, autoreplies, emails exist in every site language; each lead is tagged with its language so the reply comes in that language.
- U22.12 Facts (prices, hours, phone, address, offers) come from the record into every language, never from translated copy; each translated page stores its source version and is flagged stale, then fixed or hidden, when the source changes.
- Medical overlay hooks: medical-wellness.1 (provider search by language) and the open question on language-assistance/nondiscrimination notices (section 1557-type; counsel). No medical-specific Spanish rule exists in the playbook.

---
## 7. Counsel brief (playbook/counsel_brief.md): relevance to medical

It is a brief for NYC home-service contractor leads (prepared 2026-10-24 by the operator, NOT a lawyer, nothing reviewed). Sections A (is the lead-sale model lawful), B (contractor advertising: license number, financing, referral rewards, insurance-claim wording, name rules, GBL Art. 36-A), E (client agreement, partner agreement, microsite contract, entity/E&O insurance) are trades-specific or business-structure items. Reusable themes for a medical client:
- C1 Call recording: NY/NJ one-party, CT reportedly all-party; assumption: recording OFF by default, where on play notice and treat every call as all-party.
- C2 SMS/TCPA: FCC one-to-one consent rule vacated 24 Jan 2025; revocation "by any reasonable means" stands and a Sept 2026 FCC order may narrow it (unconfirmed); NY GBL 399-z reported 8am-9pm window; assumption: texts only after A2P 10DLC registration + separate unchecked consent box, send 9am-8pm, honor STOP for all messages.
- C3 AI voice: FCC 24-17; inbound answering reading (answering a caller who dialed is not "initiating") needs confirmation; NY GBL 396-b synthetic-performer disclosure; disclose on every call; no AI callbacks without form consent.
- C5 CAN-SPAM opt-outs within 10 business days.
- D1 SHIELD Act: forms collect name, phone, optional email, ZIP, never SSN/card/license numbers (a medical form would need more: counsel, BAA).
- D2 Retention: assumption caller numbers truncated to area code after 90 days with salted hash; recordings per contract.
- D3 Cookies/tracking: no NY cookie-consent statute found; assumption cookieless analytics, no ad pixels before consent, all disclosed. (Medical overlay is STRICTER: medical-wellness.4.)
- D4 Accessibility: NY high-volume venue for website-accessibility suits; assumption WCAG 2.2 AA + statement with contact route; needs a demand-letter response protocol (Appendix H.12.6) and statement wording guidance.
- F1 FTC reviews rule 16 CFR 465: ask every customer identically, no incentives, no scripted wording, replies drafted by operator and posted by a person, no legal threats over reviews; sign-off needed. (Penalty ~$53,088 per knowing violation, found via snippet.)
- Operator rules: never claim to be the provider, never promise rankings, lead counts or AI citations; never write reviews or invent staff, addresses, licences (playbook 26.1).
- Priority list in the brief: A1-A3, B1/B2/B5, C1-C3, E1 (all trades-oriented). For a medical build you need a NEW counsel brief (section 9).

---
## 8. Design-craft process and rules

### 8.1 Skill: site1-design-craft v3 (installed .claude/skills/site1-design-craft; draft copy identical at playbook/design-craft/skill-draft/)
Evaluation verdict (playbook/design-craft/eval/RESULTS.md, 2026-10-30): "partly works, promising draft needing the owner's blind vote". Model judges only; beat the no-skill baseline on 5 client types (restaurant, immigration law, plumber, held-out nonprofit, b2b with v3); lost b2b with v1, narrowly lost restaurant v3 vs v1; slop-test 13-15/15 vs baseline 8-12; auto-trigger untested; images were CSS-only (no photos); self-graded; owner votes (eval/owner-votes.md) NOT yet filled. Recurring generic items judges named: definition-list blocks, two-column footers, hours-as-strip idea (v3 mitigates).

Use it for: any new page/site/redesign/restyle/single HTML, choosing layout/fonts/colors, "looks AI-made". Not for backend, copy-only edits, bug fixes without look change, legal-text-only pages, video packs.
Core principle: studio-made = idea, structure and details from THIS client's facts, decided before code and checked by looking at screenshots. Each gate leaves a file; scripts check files.
Rule for all gates: before gate N (from 2) run `python3 <skill dir>/tools/check-gates.py <gate dir> --upto <N-1>` -> must print `ok` (framework page: build first, add `--page dist/<route>/index.html`). No page markup/CSS before `05-tokens.css` passes. "Quick/simple/time pressure" shortens prose, NEVER removes a gate, slot or count. A gate that can't run says why in one line (e.g. `NOT VIEWED: no browser`) and the final report repeats it. Script exit non-zero or `FAILED` = failed gate; never delete a safety/legal/disclosure line to pass; record as `overlay-required` and pass `--facts`.
Gate files live in `design/<page-name>/` for framework projects.

### 8.2 The nine gates
| gate | file(s) | what |
|---|---|---|
| 1 Facts and answers | 00-brief.md, 01-facts.md | save brief verbatim; LOAD VERTICAL OVERLAY (read Primary conversion, Trust signals, UX patterns, Compliance rows, Common mistakes, Reference sites); record jurisdictions (from site.yaml, else from brief's place marked ASSUMED; a NYC borough gives nyc + new-york + us-federal); apply every row the vertical + jurisdictions trigger; list every required line with row id marked `overlay-required` (safety, legal, license, disclosure, contact, hours); list every counsel-flag row under "Counsel items" with what waits on it (publishing waits, page stays DRAFT); ask <=8 clarifying questions in ONE message (P1) or mark each `ASSUMED: <narrowest reading>` / `UNKNOWN: kept off the page`; write FACT LIST with sources; proof/claims ONLY from fact list (no testimonials, reviews, ratings, quotes, people, names, stats, counts, years, awards, logos, addresses, prices, phones, emails, areas, response times, licences, "insured", "family-owned", "free estimates", "24/7", guarantees, or hours the brief doesn't state); missing item = brief's own placeholder wording, else `[Placeholder: what is needed]` or leave off; microsite/referral rule (link to referral disclosure + "We connect you with a local licensed [trade]") |
| 2 Design brief | 02-design-brief.md (design-brief-template.md) | Subject inventory 8-12 items specific to client; Argument (page as claims with proof, one row per section; no claim = cut); Idea sentence "On this page, [inventory item] becomes [visual device or structure]"; Swap test (swap competitor values; if device still works, it belongs to the category, find another; "partly" counts as still works); hours/week/prices/phone/service list/map are facts every business has: designed as Parts but NOT the idea; Only here (one thing a competitor lacks, with F-id, visible on page); First-look order at 390x844 and 1440x900; PARTS table: one row for every part (header/nav, logo/wordmark, hero, each section, every form, every sample/illustrated component, placeholders, footer) naming how the idea shapes it and which default it replaces |
| 3 References | 03-references.md | max 3, only from: (a) site in brief/client record/overlay Reference sites; (b) one awesome-design-md write-up (tokens only: type ratio, spacing rhythm, density; never logo/name/imagery/copy); (c) site client/owner names. For each: what to take (1-2 properties), what not. `none available: <reason>` passes. NEVER web-search a page to imitate; never clone layout/wording/asset (originality/copyright = counsel question) |
| 4 Three concepts | 04-concepts.md (P3) | three directions differing on >=4 of 10 axes: layout density, typography treatment, weight play, visual metaphor, hero treatment, section rhythm, shape language, elevation, proof style, whitespace (color alone isn't a difference). Each starts from a DIFFERENT inventory item; has evocative name (not "Option 1"), idea sentence, hex palette roles, font pair with licence + loading, hero treatment, section order, 390px ASCII wireframe, trade-offs, nearest "Default to recognise" + two properties that differ. Three heroes differ, at most one split hero. Choose by brief (audience, moment of use, primary action), not taste. Chosen direction may NOT be a listed default unless brief earns it. Client project: gate 5 waits for client's written choice (S3), record date; draft: `draft: chosen by builder; client lock pending` |
| 5 Locked tokens | 05-tokens.css (token-lock-template.css) | type pair + contrast reason + licence/loading; base size + ratio; leading + measure; colour roles (accent's jobs written out); state colours; spacing, section gap, container; radius and shadow by role; tap minimum; motion budget. Ratio/base/gap/container each carry one-line reason from density+whitespace axes. Record contrast of every text/bg pair via `craft.py contrast '#fg' '#bg'` (text >=4.5, large >=3, controls/focus >=3). Body face not a default (Inter, Roboto, Open Sans, Arial, system) unless brief pins it. All colour tokens hex. Passes when `check-gates.py --upto 5` prints ok |
| 6 Build | the page | paste `:root` unchanged as first :root; components use var(--...) only (Tailwind: map theme colors to tokens, no palette classes). Hero first, shot alone with `--fold-only`; then sections in order of argument; neighbouring sections never share layout; phone-first CSS. Rules below. Run `craft.py raw-colors index.html` (exit 0) on built HTML + every emitted CSS + component files |
| 7 Screenshot review | 07-review.md, shots/ | `node <skill dir>/tools/shoot.mjs <page> <shots> <name> --full-slices` at 390x844 and 1440x900 (add `--viewport 358x667` for call-first trades pages); Playwright found via `site-template/`; open EVERY tile and slice with Read and list names; last slice shows footer; copy metrics; `WARN: font named but not loaded` = fix and reshoot; per screenshot list generic items with tell number, unfinished items, changes; Parts check (every Parts row -> screenshot; designed or default? clipped?); blur test; max 3 rounds; kept generic item needs a one-line reason |
| 8 Audit + fact audit | 08-audit.md, 08-fact-audit.md | `audit-prompt.md` -> 1-5 per principle, REFINE or REBUILD per section; give to a helper that did NOT build (self-audit is not the independent review required by U09.15); removal pass (remove one thing per section or justify); reshoot; go on when no principle <3. FACT AUDIT: run `craft.py claims <page>/shots/<name>-text.txt`, copy every printed line into table with source; also read whole text file for missed person/credential/review/guarantee/warranty/response-time/count/business-attribute; status one of ok (F-id) / overlay-required (row id) / sample-structure / placeholder / not-a-claim / removed; unsourced line removed from page; check-gates fails if claim line has no row, F-id missing, or audit older than last shot |
| 9 Slop test + release gates | 09-slop-test.md | run `auto_checks.py <page> --brief 00-brief.md --facts 01-facts.md 08-fact-audit.md --metrics shots/<name>-metrics.json`; fails on lorem, claim word/number not in brief, contrast fails at 390/1440 (body <4.5, text <24px <4.5, any <3:1), tap <44px, missing primary CTA or CTA below 390 fold, font error/fallback, HTML >150KB, missing `lang`, image without alt. Release table: one `data-cta="primary"` with working target (tel:/form/page); no video/canvas/animation library on a task page; <=2 font families; fact-audit result; NO-JS + reduced-motion screenshot (`shots/<name>-nojs-390.png`, javaScriptEnabled:false, reducedMotion:'reduce') showing every section and primary action. Answer the 15 slop-test items; PASS = >=12/15 AND items 1-4 all yes AND all release gates (our convention). `Graded by:` line. Status: `DRAFT: ...` when any placeholder/sample/open counsel item remains; `READY FOR REVIEW: self-graded`; `READY: graded by <non-builder helper or owner>` (ONLY READY may be published). On fail go back to gate 6; after two loops stop and report. Draft rule: any `[Placeholder: ...]`, `[Photo: ...]` or sample value visible = DRAFT |

Final report must contain: gate files + check-gates output; slop score + who graded; release-gate results; every ASSUMED / UNKNOWN / overlay line not checked; every counsel item and what waits on it; every placeholder client must fill; draft status.

### 8.3 Gate-6 build rules (HARD)
- `data-cta="primary"` on the primary action and nothing else.
- H1 names offer (+ place if given); business name in header. No eyebrow/kicker/tracked-caps above heading (router exception needs owner's written approval).
- Accent only on actions (+ brief-pinned uses; `--color-brand` may fill surfaces the Parts table names). Emphasis in headings = weight/size never colour.
- Exactly one filled primary action per screen; second route (request form) may have filled submit only where primary isn't visible, never in the pinned accent.
- Sticky action bar only while no other primary/form/footer in view; hidden in CSS, shown by JS (no JS = no bar) else no sticky bar.
- Every link/button outside running text >=44x44 CSS px (project rule; AA floor 24).
- Images: client's real images, an illustration from an inventory item, or a named empty slot. Never category mascots, stock people, generated people/premises/work. Other generated images labelled. Nothing captioned as the client's work unless it is. (Medical: no stock doctors, no AI "patients".)
- Motion only if token budget lists it; native scroll; reduced motion; content shows without JS.
- Theme focus ring, `::selection`, link underline offset from tokens.
- Navigation styled from tokens; one-page task site 2-3 links or none. Logo: wordmark in display face if no client logo; never a generic icon mark (house, leaf, gear, spark; medical analog: cross, heart, stethoscope) presented as logo.
- Forms designed like a section: labels, field heights, grouping, submit, helper/privacy line from tokens and shape language; native select/inputs themed; field order follows task; plain white box with 1px grey border = tell 23.
- Sample/illustrated components: labelled structural detail OK (axes, states, legend, headings, neutral labels); NO business facts; states/columns/integrations only for features the fact list names; grey-block wireframes read as placeholders.
- No clipped text; no fixed heights on text boxes; wide components get a designed phone version.
- Placeholders = one designed token-styled muted element, same everywhere, grouped; a section/footer mostly placeholders is cut/merged.
- Footer designed as last section with contact, hours/area if known, primary action as text link.
- Full-width bands only if the argument gives them a unique claim; never the default way to show three facts.
- <=2 font families.

### 8.4 Tells (24, with fix and slop-test item)
1 motion for its own sake (scroll video, cursor follower, typewriter, marquee) -> each motion has a job, one moment max [12]; 2 generic stock/generated imagery, category mascot -> real images / inventory illustration / named slot [2,14]; 3 text over busy media, decoration over headline -> measured scrim, nothing on headline [12]; 4 invented testimonials/quotes/bios -> real dated proof or no section [1]; 5 stock section order ending in centered "Ready to...?" band -> sections from argument [6]; 6 slogan H1, "Get started", two equal buttons -> H1 names offer, one filled action named for what it does [4,5]; 7 phone layout = squashed desktop -> phone first [4]; 8 invented facts, thin sections -> fact list only, visible placeholders, draft [1,3]; 9 gradient text, glow blobs, aurora -> flat colour [10]; 10 invented numbers/counters -> only fact list [1]; 11 eyebrows, tracked caps, "A . B" meta, 01/02/03 -> into heading or drop [11]; 12 AI people shown as real -> real with consent or none [2]; 13 dark by default -> light/dark from moment of use [10]; 14 equal card grids -> rank (one dominant, then list/split) [7]; 15 one radius, one grey shadow, one gap -> by role from tokens [13]; 16 default fonts -> licensed pair [8]; 17 flat type hierarchy -> few sizes, big steps [8]; 18 centered everything -> left-align, centre one moment [6]; 19 adjective-stacked copy -> plain specific sentences [5]; 20 accent on everything -> one accent, actions only [9]; 21 emoji/glyph icons -> one drawn set, one stroke [14]; 22 the friendly template (rounded pills, accent word in H1, mascot panel, dark closing band) -> idea sentence + swap test [15]; 23 hero-only design (bordered form box, link nav, dark stat band, term/definition list, generic logo mark, placeholder footer) -> Parts row for each [7,12]; 24 thin/clipped sample components -> labelled sample detail, no fixed heights, designed phone version [12].
Anti-slop guide has tells 1-21 (same as above, 22-24 are skill additions) plus a caution: banning first-wave tells just moves the model to the next default.

### 8.5 "Defaults to recognise" (cannot choose unless the brief earns it)
cream bg + serif display + terracotta accent; near-black + one acid accent; broadsheet hairlines + zero radius; identical rounded cards + soft grey shadows; template chrome (eyebrows, middle-dot meta, appended arrows, monospace labels); the friendly template (row 22); quiet light page with one serif, hairlines and one coloured button (unless a brief line names why the audience needs that restraint; note: a medical audience may be an arguable case but must be written into the brief); split hero (headline+lede left, form card right) unless action beside headline at 1440 is needed; client's hours/week drawn as a day or time strip as the IDEA; labelled sample diagram of the client's operation as the idea.
Medical watch-outs derived: stock-calm teal/blue "clinic" template, hands-holding/stethoscope imagery, cross/heart logo marks, "Compassionate care" slogan H1, hours strip.

### 8.6 The 15-point slop test (pass >=12 AND items 1-4 yes)
1 every review/quote/rating/number/name/date/opening time is in 01-facts.md (judged from 08-fact-audit + one full read of the text file); 2 no generated/stock person, no stand-in image presented as client's, generated images labelled; 3 no lorem/unlabelled placeholder/empty or dead section; samples carry required label; (any placeholder = draft, never published); 4 390 fold (and 358x667 trades screen) shows what, where/for whom, every overlay-required first-screen line, exactly one filled primary action, no second filled action or sticky bar on top; 5 H1 plain offer/need, no adjective stack; 6 section order follows the argument, mostly left-aligned, <=1 centered moment; 7 neighbouring sections differ, no row of equal icon-heading-text cards; nav, forms, footer styled not default; 8 two visibly different families, clear size steps, body not default; 9 accent only on actions; 10 no gradient text/glow/aurora; light/dark suits use; 11 no eyebrow/kicker/tracked-caps pill/"A . B"/unearned 01-02-03; 12 text over images readable, nothing covers headline, nothing clipped at 390, samples labelled detail, still screenshot looks complete without motion; 13 radius/shadow/spacing by role, tighter inside groups; 14 one drawn icon set, no emoji/mascot/clip-art; 15 cover business name on folds: could not be mistaken for a competitor; subject-inventory item visibly the idea.
Also WebGen-Bench flaws (a-i): fails to load, only background renders, missing UI components, image not displaying, stock template uncustomised, misplaced content, wrong background colour.

### 8.7 When taste yields to the client's goal
Primary action, accessibility (WCAG 2.2 AA, 44px, reduced motion, works without JS) and speed beat every taste rule. Task page: native scroll, no hero video/3D, nothing animates the H1 or primary action; showcase motion needs owner's written approval. The CALL-FIRST TRADES layout (first-screen priority list, gas smell/CO safety lines, 358x667) is ONLY for the local-trades overlay or emergency-call business; "other call-to-book clients get one filled `tel:` action in the 390 fold and their own overlay's rules". A medical practice therefore does NOT use the trades layout: it gets one filled primary action (book/request appointment per overlay; tel: as fallback) in the 390 fold. "Operate and Read pages": one-filled-primary applies per task screen; the idea may be structural.

### 8.8 Prompt skeletons in the skill
P1 clarifying questions (audience/moment of use, primary action + target, real proof + dates, real images, fixed brand values, what it must not look like, area served, out of scope; save to 01-facts.md with ASSUMED/UNKNOWN); P2 references; P3 concept directions; P4 token lock; P5 review loop (shoot, look at every slice to footer, list tells with numbers, batch fix, repeat max 3); P6 audit = audit-prompt.md. Stitch (if loaded): drafts for gate 4 only; rebuild with tokens; invented names/numbers = placeholders to delete; one draft source per page.

### 8.9 Anti-slop guide process (10 steps, looser than the skill)
1 intake + clarifying Qs (brainstorming); 2 real content/proof before layout; 3 three to five reference sites (the SKILL is stricter: max 3, no web search); 4 two-three concept directions; 5 lock tokens in one file; 6 build one section at a time; 7 screenshot-and-compare loop at phone and desktop; 8 creative-director audit with before/after, REFINE or REBUILD per section; 9 removal pass; 10 gates last (web-design-guidelines, accessibility, benchmark). Cloning out of bounds. Evidence honesty: taste claims are practitioner consensus, not measured; pass line (12/15) untested on conversion; guide not yet tried on a real site.
Guide's U-module map: U09 directions/token lock/no generated proof; U10 first-look + phone first screen; U11 fonts + budget; U12 colour roles + contrast guard; U13 real imagery + disclosure; U14 motion inventory, reduced motion, showcase-only gate; U15 components; U16 accessibility; U17 performance budgets.

---
## 9. Skill router (site1-skill-router) rules

Read at the start of ANY Site1 task and whenever >1 skill/MCP could apply. Also read `vault/wiki/index.md` first (vault may not exist in Site2; verify). Rules:
1. ONE skill or MCP per job; never two from the same family on the same page.
2. Authority: owner message > CLAUDE.md + vault/wiki/compliance/red-lines.md > router > skill text. ("Bold, cinematic, hero video" loses to "call button in first phone screen".)
3. Say which skill and why in one line before using it. If no row fits, say so and ask; do not guess.
4. Off-limits skills not used unless owner names them.
5. Choices from skill descriptions and vault, not tested pairings; fix the row if a pairing misbehaves.

### Skill per job
- Plan/decide what to build: `brainstorming` (not jump to code). Turn spec into steps: `writing-plans` (not plan-orchestrate / blueprint). Run plan inline: `executing-plans`. Parallel: `subagent-driven-development` (+ `dispatching-parallel-agents` for 2+ unrelated tasks). Isolated workspace: `using-git-worktrees`.
- DESIGN (entry for every design task, pick ONE per page): `site1-design-craft` (skip no gates "because quick"). Inside its gates may use: `brainstorming`, Stitch (concept drafts only), `impeccable` (critique), `landing-page-design` (structure only), `awesome-design-md` (tokens only), `web-design-guidelines` (final audit); AT MOST ONE design skill per page.
- Other design rows: Stitch MCP = UI ideation drafts (decides nothing; invented names/reviews/numbers/descriptive copy are placeholders to delete; pilot found invented service descriptions and app-style navigation); `impeccable` = shape/critique/audit/polish, DESIGN.md; `landing-page-design` = conversion page structure/copy; `ui-ux-pro-max` = palette/type lookup only; `awesome-design-md` = copy known brand design system as starting point; `design-taste-frontend` OR `high-end-visual-design` (one, not both) for generic-looking pages; `redesign-existing-projects` = improve built site (not with impeccable same page); `web-design-guidelines` = review finished UI code; `frontend-design` = general look guidance (not stacked with impeccable).
- Older valid path: brainstorming -> Stitch -> impeccable -> landing-page-design -> build in Astro + Tailwind -> web-design-guidelines.
- Components: `shadcn`; `migrate-radix-to-base` only if asked.
- Motion (never delays call/form, no scroll hijack, behind prefers-reduced-motion): plain CSS first; `motion-effects`/`animejs` only if CSS can't; scroll-linked: `gsap-scrolltrigger` + `gsap-core` (+`gsap-react`, `gsap-timeline`); `gsap-performance`; `react-spring-physics`; `lottie-animations`.
- 3D: only if owner asks; never on call-first pages (threejs-* set, one at a time).
- SEO: `seo-local-business` (head tags, LocalBusiness JSON-LD, robots, sitemap; NOTE for a medical site its schema must be overridden by the medical overlay types MedicalClinic/Dentist/Physician; its Australian-flavoured default needs checking); global `seo` for audits. Legal: `legal-policy-templates` first, `legal-docs` for jurisdiction details; `compliance-check` for features/claims. Always apply `vault/wiki/knowledge/content-and-ai-quality.md` (human-edit rule + banned phrases) and red-lines.md.
- Test/verify: logic code `test-driven-development`; browser clicks `playwright-cli`; bugs `systematic-debugging` first; speed global `benchmark`; accessibility global `accessibility` (or `frontend-a11y` for component fixes); before "done" `verification-before-completion`; before PR global `verification-loop`; forms/input/keys `security-review`.
- Review/ship: `requesting-code-review` (agent `code-reviewer`), `receiving-code-review`, `finishing-a-development-branch`, `writing-skills`.
- MCP: `stitch` (drafts), `Mobbin` (reference only; search needs paid plan), `Canva` (graphics/logo draft, never page layout), `n8n` (lead routing/automation; failed to connect this session), `Cloudflare Developer Platform` (sign in first; ask before touching live site), Notion/Google Docs/Sheets/Drive only when owner asks; NOT used: Supabase (stack uses D1), vidIQ, Google Calendar.

### Forbidden / do-not-combine pairs
- `site1-design-craft` with any other skill as the page's DESIGN OWNER (others are its tools, one at a time).
- `impeccable` + `redesign-existing-projects` + `frontend-design` + `design-taste-frontend` + `high-end-visual-design` on the same page: pick one.
- `motionsites-web-builder` with any call-first page (owner-approved showcase only).
- Any motion skill with the 3D set unless the page needs 3D.
- Stitch + a second ideation generator (Mobbin search is reference only); one draft source per page.
- `writing-plans` + `plan-orchestrate`; `test-driven-development` + global `tdd-workflow` (use first); `verification-before-completion` and `verification-loop` are used in that order, each once, not interchangeably.

### Off-limits for lead sites (video/social packs)
animated-chart, apple-launch-film, launch-video, loop-cover, milestone-reveal, model-showdown, motion-brief-writer, motion-prompt-writer, newsletter-promo, reel-export, reference-to-motion, title-sequence-3d, vox-explainer, brand-intake, particle-system, shader-glsl, webgl-threejs-animation.

### Known skill conflicts with red lines (ignore the conflicting part)
- `landing-page-design`: invents full named testimonials/team; gradient heading text -> use only record facts or labelled `Sample` placeholder (U05, U07); flat heading colour.
- `redesign-existing-projects`: "realistic-sounding names", invented brands, organic data like 47.2% or phone numbers, stock background imagery -> no invented names/stats/numbers; no stock people as the client's crew (U13).
- `high-end-visual-design`: eyebrow pill tags, scroll entry animation by default -> eyebrows only if design decision records them; motion only behind prefers-reduced-motion, not every element (U14).
- `design-taste-frontend`: floor of >=4 real pictures and one moving picture -> pictures only from real assets or labelled placeholders; moving picture only if U14 allows (never call-first).

### One-line inventory of other skills in .claude/skills/
animated-chart: looping animated chart for LinkedIn/newsletter. animejs: JS animation engine for DOM/CSS/SVG. apple-launch-film: code-built Mac-launch-style film. awesome-design-md: 84 brand design-system write-ups (DESIGN.md). blender-web-pipeline: Blender to glTF for web. brainstorming: required before creative work/features. brand-intake: brand interview producing brand files (off-limits for lead sites). compliance-check: regulatory/approval check on a proposed action or feature. design-taste-frontend: anti-generic frontend design with libraries/evals. dispatching-parallel-agents: 2+ independent tasks. executing-plans: run a plan inline. finishing-a-development-branch: merge/PR/cleanup choice. frontend-design: distinctive intentional visual design. gsap-core/-frameworks/-performance/-plugins/-react/-scrolltrigger/-timeline/-utils: official GSAP skills by area. high-end-visual-design: agency-style fonts/spacing/shadows/animations. impeccable: design/critique/audit/polish frontend. landing-page-design: high-converting landing page system. launch-video: 30-45 s product launch video. legal-docs: jurisdiction-aware Privacy/Terms for SaaS/apps. legal-policy-templates: starter ToS/Privacy for Site1 lead sites. loop-cover: looping GIF covers. lottie-animations: After Effects/Lottie playback. migrate-radix-to-base: Radix to Base UI. milestone-reveal: 12 s loop clip. model-showdown: 3-model comparison video. motion-brief-writer / motion-prompt-writer / reference-to-motion: prompts for Claude Motion clips. motion-effects: 16 premium looping HTML motion effects. motionsites-web-builder: cinematic award-level hero sites. newsletter-promo: promo clips. particle-system: confetti/smoke/particles. playwright-cli: browser automation/tests. react-spring-physics: spring animation. receiving-code-review / requesting-code-review: review flow. redesign-existing-projects: upgrade existing sites. reel-export: vertical Reels export. seo-local-business: head tags, LocalBusiness JSON-LD, robots, sitemap. shadcn: shadcn components. shader-glsl: GLSL shaders. site1-design-craft: the nine-gate design process. site1-skill-router: this router. subagent-driven-development: parallel implementation agents. systematic-debugging: debug before fix. test-driven-development: tests first. threejs-* (about 19 skills): Three.js/WebGL/WebGPU by area. title-sequence-3d: cinematic 3D title. ui-ux-pro-max: UI/UX lookups (palettes, fonts). using-git-worktrees: isolated workspace. using-superpowers: skill-usage discipline at conversation start. verification-before-completion: run verification before claiming done. vox-explainer: Vox-style explainer video. web3d-integration-patterns: combine Three/GSAP/R3F. web-design-guidelines: review UI vs Web Interface Guidelines. webgl-threejs-animation: 3D hero/WebGL. writing-plans: spec to steps. writing-skills: author/verify skills. Also README.md and THIRD-PARTY-SKILLS.md (install rules).

---
## 10. Gaps and decisions to settle before building (for a real NY medical client)

Not covered by any overlay (put on a NEW counsel brief; the existing brief is trades-only):
1. NY state board / Office of the Professions advertising rules for the practice's profession (medical, dental, PT, chiropractic...); "not researched" in the overlay.
2. HIPAA online-tracking question (HHS bulletin vs 2024 ruling): which analytics/ad tags on which pages; which vendors (forms, booking, call tracking, email, chat, CRM, hosting) need BAAs.
3. Section 504 date and whether the practice receives HHS funds (Medicare/Medicaid payments count as federal financial assistance in many readings; counsel to confirm).
4. Health-claims substantiation (FTC), patient testimonials and reviews (FTC 16 CFR 465, 255; NY GBL 349/350), before/after images consent.
5. Language assistance and nondiscrimination notices (ACA Section 1557-type); if Spanish or other languages are added: U22.1 needs a named human translator AND a Spanish-answering channel (staff/phone/form replies) first; U22.10 per-language legal pages; U22.11 lead tagged with language; U22.12 facts come from the record.
6. NY Public Health / SHIELD interplay; new-patient forms (do NOT build a forms-with-history page on the site without BAA + counsel; link to the portal instead); telehealth rules if offered.
7. Insurance list and "accepted plans" need an `as_of` date and front-desk confirmation process; provider credentials need board lookup; good-faith-estimate notice and notice of privacy practices need actual counsel-approved text (don't draft from memory).
8. Owner decisions pending in the playbook: consent default (U20.8, R14 6.2 item 5), third-party scheduler choice (booking, item 3), whether accessibility target is 2.2 AA (default) vs 2.1 AA (504 reference).
9. Launch gate: status words only "rows signed off by counsel on <date>" or "open, counsel" (U20.22); page stays DRAFT while any placeholder/sample/open counsel item remains.
10. Router/vault dependence: the router and skill cite vault/wiki/* (red-lines.md, content-and-ai-quality.md, design-rules) and site-template/ (Playwright for shoot.mjs) which live in Site1, not necessarily in Site2_real_customer. If absent, the skill says: use the overlay text in the brief (overlay: not available) and report lines unchecked; shoot with `playwright-cli` instead.

Practical per-page checklist for "one page at a time" (derived from the above, not a source rule): run gates 1-9 per page (Gate 1 once per client is fine but re-list `overlay-required` lines per page); every page: privacy link beside any form (U20.2), no pixels on appointment/portal/condition/provider-search pages (medical-wellness.4), call button one tap away (medical-wellness.2), plain language (medical-wellness.3), claims provider-reviewed (medical-wellness.5), no stock/AI doctors or patients (U13, U20.17, tell 12), accessibility statement in footer (U16.16), one filled primary per viewport (U08.2), no invented credentials/insurance/years/hours (gate 1.6), and status DRAFT until counsel signs.
