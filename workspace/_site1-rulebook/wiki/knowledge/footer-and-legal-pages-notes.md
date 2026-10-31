---
title: Footer and legal pages notes (competitors, our template, what to write)
type: knowledge
status: draft (home pages only; not reviewed by counsel; not legal advice)
updated: 2026-10-30
---

# Footer and legal pages notes

Why this page exists: the owner named footer and legal pages (privacy, terms, accessibility, disclosures) as the weak point of the current site. This note records what the Queens HVAC competitors do, what our template has, and what to write. Skills used, per `site1-skill-router`: `legal-policy-templates` first, `legal-docs` for jurisdiction detail, `compliance-check` for claims. Related: [[competitor-teardown-queens-hvac]], [[red-lines]], [[compliance-checklist]].

## Method and limits
- Footer links read from the rendered home page of each of the 8 competitors that loaded (one load each, 2026-10-30, same politeness rules as R9). Legal pages themselves were not opened or read. A link absent from the footer may exist elsewhere on the site.
- queenshvacny.com did not load, so it is not counted.

## What competitors do (home-page footers)
| Site | Privacy link | Terms link | Accessibility statement | Other |
|---|---|---|---|---|
| Petri | yes | yes | no | consent banner with a "Do Not Sell or Share" link |
| Hart Home Comfort | yes | no | no | cookie bar; an accessibility widget, no statement page linked |
| Weston Bros | yes | no | no | none |
| American HVAC | yes | no | no | cookie banner |
| Koka | no | no | no | 37 footer links, mostly service-by-borough pages; "Licensed & Insured" with no number |
| Hi-Tech | no | no | no | 7 links; PSEG and ConEd pages |
| Day & Night | no | no | no | the page never mentions privacy or terms |
| Michael's HVAC Pros | no | no | no | 2 footer links |

Reading: 4 of 8 have no privacy link, 7 of 8 no terms link, 8 of 8 no accessibility statement. None shows a license number in the footer, a fee or price statement, or a lookup link to the licensing authority. A complete, honest legal and trust footer is a gap in this market, not a cost of entry. Counsel item D4 notes New York is a high-volume venue for accessibility suits, so the missing statements are also a risk for those sites.

## What our template has (`site-template`)
- `Footer.astro` links Privacy, Terms, Accessibility, Services and Contact; shows phone, public email, hours, service areas, a license line only when a real license number exists, and a copyright line. No street address is shown, which matches the service-area rule (local-trades.15).
- `privacy`, `terms` and `accessibility` pages exist but each is a one-paragraph "SAMPLE TEXT" stub. The production check refuses placeholders, so they cannot ship as they are.

## Gaps in the template (what is missing)
1. Real privacy, terms and accessibility text (written by counsel; stubs today).
2. A license lookup link beside the license number (local-trades.22).
3. A fees statement (service-call or estimate fee) and the LSA fee disclosure where Local Services Ads are used (local-trades.21).
4. For referral and microsite builds: an advertising and referral disclosure page in the footer and the line "We connect you with a local licensed [trade]" (counsel A3; gate 1 item 9 of `site1-design-craft`).
5. A tracking and cookie notice that lists analytics and call tracking (counsel D3: all tracking disclosed, no ad pixels before consent).
6. Call-recording notice wording if recording is on (C1) and SMS consent text beside any text-message opt-in on forms (C2).
7. An accessibility statement with a contact route beyond a phone number, and a demand-letter response plan (D4; the plan is counsel's).
8. "Last updated" dates on each legal page, and a sitemap link.
9. A licenses and insurance page, only with real numbers and an insurance certificate on file (B1, B7); otherwise no page and no "licensed and insured" wording.

## The templates themselves (`legal-policy-templates`)
Starting text for the privacy policy and terms is CC0 but written for an app with user accounts: its privacy sections cover user content, third-party account identifiers and payments; its terms cover age limits, content policy, downtime and billing. Keep from the privacy template: scope, information collected, how used, how disclosed, cookies. Replace the data list with what a lead site collects (name, phone, service, ZIP, optional email and message, call-tracking data). Drop user-content, account, payment and tax sections. Terms for an information-only lead site should say: no contract is formed by the site, estimates are not quotes, links to other sites, and how referrals work. `legal-docs` is written for SaaS products and needs the same adaptation. Every page needs a licensed New York attorney's sign-off before launch; nothing here is legal advice.

## Suggested footer legal set (suggestions, not rules)
Privacy, Terms, Accessibility statement, Fees and how we are paid (advertising disclosure on referral sites), Licenses and insurance (only when real), Tracking notice (only if tracking is used), each with a last-updated date. No street address on service-area sites. 911 plain-text lines on gas and carbon-monoxide pages, not the footer (local-trades.16, .17, .27).

## What the competitors' legal pages contain (read 2026-10-30; structure and topics only, no text copied)
Pages fetched once each and kept in `/mnt/All/Sakib/competitor-shots/queens-hvac-2026-10-30/legal-pages/` (outside the repo). Topic coverage comes from a keyword search, so a "no" means the words were not found, not proof of absence.

| Page | Length | Structure | Date shown | Notable |
|---|---|---|---|---|
| American HVAC privacy | about 1,160 words | numbered sections, 33 headings | effective 2019, last updated 2026-10-18 | The most complete: covers texts, cookies, tracking, sell or share, California, New York, retention, children, security. No call-recording wording. |
| Petri privacy | about 2,880 words | 26 headings, generator-style (definitions, GDPR legal basis, transfer, law-enforcement disclosure) | none | Heavy GDPR wording for a New York business. The site banner offers "Do Not Sell or Share", but the policy page has no matching text. No texting wording. |
| Petri terms | about 1,340 words | 13 headings: intellectual property, links, indemnification, limitation of liability, disclaimer, exclusions, governing law (New York), changes, contact | none | The only terms page of the eight sites. Standard generator terms; the page ends with marketing copy. |
| Hart privacy | about 780 words | no headings, one block | last updated 2018 | Stale; no retention, children, tracking or New York wording. |
| Weston privacy | about 2,680 words | two headings, a wall of text | none | Mentions California, not New York; no retention date or texting wording. |

Across the five: none mentions call recording or call tracking, only one mentions texting, only two show any date (one of them from 2018), and none is written for a lead form with a phone number and ZIP code. Length and structure vary from a wall of text to a numbered policy.

## What this suggests for our pages (suggestions; counsel writes the wording)
- Short numbered sections with plain headings, a visible "last updated" date, and roughly 1,000 to 1,500 words, like the clearest competitor, not a wall of text or a GDPR template.
- Cover exactly what a trades lead site does: form fields (name, phone, service, ZIP, optional email and message), call tracking and any recording notice, texting consent, analytics and cookies, who receives the lead, how long it is kept, children, New York as the governing law, and a contact route that is not only a phone number.
- Keep a short terms page: informational site, estimates are not quotes, links to other sites, limitation of liability and disclaimer wording from counsel, governing law, changes, contact.
- Make the cookie banner and the policy say the same thing (Petri's banner and policy do not match).

## Open items
- All of the above waits on counsel for wording; pages stay DRAFT meanwhile ([[open-questions]]).
- Inner service pages and other legal pages (licenses, financing, accessibility) of the competitors were not opened.
