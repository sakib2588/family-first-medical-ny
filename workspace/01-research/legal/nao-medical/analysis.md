# Legal / footer analysis: Nao Medical (naomedical.com)
Captured 2026-10-31. Not legal advice.

## Footer inventory
- Layout: no `<footer>` tag; a `section.footer` with social (LinkedIn, Facebook, Twitter, Instagram), a link row (Privacy policy, Urgent Care, Primary Care, Nutrition Counseling, Locations, Insurance & Billing, About Us), then two notes.
- Footer notes: an ADA/accessibility accommodation sentence naming a person, email and phone with extension; a sentence that a large language model assists with answers and errors may be reported by email. Also "More care information / Care directory" duplicated block and a booking disclaimer ("A booking request does not confirm availability, insurance coverage or treatment eligibility").
- NAP: help phone (917) 310-3371 inside the booking block; no address, hours, copyright line, license, 911 line, language selector, NPP link or nondiscrimination link in the footer.

## Policy pages fetched
| Page | URL | Date | Words | Notes |
|---|---|---|---|---|
| Privacy Policy | /privacy-policy.html | "Effective Date: January 2026"; also "Updated October 28, 2026" in a tracking notice | ~1,950 | Sections: how collected, categories (contact, health, demographic, account, device), sensitive info, sharing, retention, security, rights, children, cookies, HIPAA split. |
| Billing & Insurance | /services/bills/billing.html | none | ~540 | "Transparent Pricing, No Surprises" content: self-pay vs insured, how to avoid unexpected bills. |

## Topic coverage
Best keyword coverage among small sites: purposes, sharing, third parties, retention, security, rights, children, cookies, pixel, HIPAA vs non-HIPAA distinction, opt-out. Not found: HHS OCR / NY AG complaint route, language access.

## Standout practice
A dated "Website tracking update" box states advertising pixels, third-party analytics and session replay are disabled, and that browsing/booking does not require accepting marketing tracking. The captured HTML shows no GTM/GA/Meta tags: policy and page agree at capture time.

## Flaws / risks
1. Two dates (Jan 2026 effective vs Oct 28, 2026 note): header was not updated; the tracking claim is 3 days old and could drift if scripts return (needs a recurring check).
2. Footer lacks copyright, NPP link, nondiscrimination/language-assistance link; accessibility is a sentence, not a page.
3. Privacy page still lists marketing/ad, TikTok, Facebook, session-replay vocabulary generically while saying they are disabled (reads like a large template; verify with counsel).
4. The LLM-assistance disclosure is unusual and unverified as to legal effect; no cross-link to a medical-advice disclaimer.
5. Policy is a single long page; Flesch about -6 (very dense).

## What to borrow
- The tracker-status box (dated, plain, falsifiable), the named accessibility contact, and the "booking request does not confirm" disclaimer next to the booking CTA.
