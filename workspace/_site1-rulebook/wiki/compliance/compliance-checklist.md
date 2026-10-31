---
title: Client-site legal and compliance checklist
type: compliance
status: draft
updated: 2026-10-24
---

# Client-site legal and compliance checklist

From MASTER_REPORT §2.5 and kit file 04 §6. **Not legal advice.** Clause wording must be reviewed by an attorney (B10 F06). Items marked *verify* were not checked against primary sources.

## Always

- [ ] Privacy policy, Terms, Accessibility statement, Disclaimer, Complaints policy, Referral/advertising disclosure (microsites). Termageddon-style auto-updating policies were the course's tool (about $30/mo).
- [ ] **Tracking consent:** no New York statute requires a cookie banner (none found; R5 7.4). The "no pixels before consent" rule is a California CIPA precaution and a prudence rule here. Keep it cheap: cookieless analytics, call tracking by number swap, ad pixels only after consent. Disclose all tracking in the privacy policy.
- [ ] **Accessibility:** WCAG 2.2 AA (contrast 4.5:1, keyboard use, focus, labels, alt text, targets >= 24 px). Overlay auto-fixers are partial only. Liability-limit clauses: send the question to counsel; do not paste clause text from a course call (V6 10.4). New York is the highest-volume venue for website-accessibility suits (R5 7.5, vendor counts).
- [ ] **Forms:** two separate consent checkboxes if SMS follow-up is planned (marketing, project updates).
- [ ] **SMS:** A2P 10DLC registration before any text messaging; unregistered traffic is silently dropped. Needs live privacy and terms pages.
- [ ] **AI voice agent or avatar:** disclose per New York GBL 396-b (in effect 2026-06-09; $1,000 first / $5,000 repeat; AG enforcement). Disclose on call and on page.
- [ ] Secrets in a gitignored env file, debug off in production.

## Home-improvement trades in New York (verified 2026-10-24, W:R5; not legal advice)

- [ ] **NYC advertising must include the contractor's DCWP Home Improvement Contractor license number** (6 RCNY 2-222(a)). Show the real number in header or footer and in any ad. Never show a number the client does not hold. Benefit claims (for example "cut your bill 30%") must rest on provable facts (2-222(r)). Source: DCWP inspection checklist, updated 06/2026.
- [ ] **No financing widgets, lender logos or "apply for financing" buttons** on an NYC HIC client's site without counsel. DCWP: a licensee "cannot arrange for financing or help a consumer obtain financing" (Admin Code 20-393(4), (17)).
- [ ] **No referral-reward promotions** ("refer a neighbor, get $100") without counsel (20-393(10), (16)).
- [ ] The business must operate under its licensed name (20-393(8)). Contracts must show the license number; these are the client's, not ours, but our copy must not contradict them.
- [ ] Nassau, Suffolk, Westchester, Putnam and Rockland also license home-improvement contractors (NY AG). Nassau reportedly requires the number in display advertising (2014 regulation, not re-verified); Suffolk: no advertising rule found. Show the county license number anyway.
- [ ] Trade licenses: plumbing needs a NYC Master Plumber (DOB); HVAC and roofing have no standalone NYC license found, residential work falls under the HIC license; oil-burner work needs a DOB license. Confirm per client.
- [ ] NY home-improvement contract law (GBL Article 36-A): no site copy promising "no deposit", "pay later" or price locks that conflict with it.
- [ ] A lead-gen site must not present itself as the licensed contractor. **Unresolved, counsel:** whether a pass-through lead site needs a license or may take per-job referral fees. See [[red-lines]].
- [ ] Insurance and warranty claims only if supplied and provable. NY GBL 349/350 make deceptive or false advertising unlawful.

## Reviews and messaging (verified 2026-10-24, W:R5)

- [ ] **Reviews:** Google bans incentives and selective solicitation, which is stricter than the FTC rule (16 CFR Part 465, effective 2024-10-21; fake or AI-generated reviews, review suppression and sentiment-conditioned incentives banned; up to $53,088 per violation). Follow Google's rule: ask every customer the same way, no incentives, no scripted wording.
- [ ] **SMS:** the FCC one-to-one consent rule was vacated (2025-01-24) and is not in force; revocation "by any reasonable means" stands. Honor STOP and any plain "don't text me" reply for all messages until counsel confirms category-scoped revocation. Send marketing and follow-up texts 9 a.m. to 8 p.m. recipient time (planning rule). Build SMS follow-up only after the client has an EIN, live privacy and SMS terms pages, and A2P 10DLC registration.
- [ ] **Email:** CAN-SPAM, opt-outs honored within 10 business days, up to $53,088 per violating email.
- [ ] **Data:** NY SHIELD Act safeguards; breach notice to NY residents within 30 days. Do not collect SSN, card or driver's-licence numbers on a lead form.

## Outreach (partner's side)

- [ ] Cold email: CAN-SPAM (identity, physical address, unsubscribe).
- [ ] Calls and texts: TCPA and consent rules, do-not-call lists.
- [ ] Upwork: follow platform terms; no contact info in proposals.

## Process

Kit file 04 §6 lists required pages per regulated industry; fill it per client. Re-run the NAP tests whenever the business record changes.

Related: [[pre-launch-checklist]]
