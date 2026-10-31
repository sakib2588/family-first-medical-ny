# U08. Conversion paths: CTAs, forms, booking, checkout, donation

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers which conversion pattern a site needs, how its actions are labeled and placed, which fields a form may ask for, and how errors, confirmation, failure, spam and delivery work. It runs after goals (see U03) and the site plan (see U06); events are wired in U19 and transaction terms in U20. Legal points are pointers for counsel, written as of 2026-10-30, counsel review needed.

Pattern blocks (`goals.primary` picks the primary block through the mapping below; overlays constrain the block and the vertical overlay sets its fields, per U00 step 4; field lists are the minimum, and each extra field needs a stated use in the record):
- **Call:** a `tel:` link with hours and a fallback form; no fields. Used by `local-trades`, `legal-accounting`, `medical-wellness`, `restaurants`, and `lead-gen` when `goals.primary` is call.
- **Quote form:** name, one contact route, what is needed, and location only where service area matters. Used by `local-trades`, `lead-gen`, `manufacturers-industrial`.
- **Booking embed:** a third-party scheduler with a fallback link or phone. Used by `booking`, `medical-wellness`, `local-retail-salons-fitness`, `coaches-personal-brands`, `restaurants`.
- **Checkout:** cart, guest checkout, total price, payment, review step. Used by `vertical:ecommerce`, `model:ecommerce`, `subscription`, `ticketing`.
- **Donation:** amount, frequency (one-time unless chosen), payer details, receipt. Used by `donations`, `nonprofits`.
- **Demo request:** name, work email, company, one need question. Used by `saas-b2b`, `manufacturers-industrial`.
- **Application:** a multi-step form with save and check-answers. Used by `education-courses`.
- **RSVP:** name, contact, attendance, party size where needed. Used by `events-venues`, `ticketing`.
- **Signup:** email only, the purpose stated, an unticked consent box (see U20). Used for newsletters.

Mapping (`goals.primary` to block): call to Call; quote to Quote form; book to Booking embed; buy to Checkout, or, when ordering runs on a third-party platform, to a hand-off button with a call fallback (the conversion is the platform-reported order, see U19.2); donate to Donation; demo to Demo request; apply to Application; register to RSVP, or Checkout when paid; subscribe to Checkout (paid plan) or Signup (newsletter); visit to Call with directions and hours; save to Signup with the saved item.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U08.1 | The primary pattern block comes from `goals.primary` (see U03) and the overlays in the record; every page spec names its block, and a block not in the list above is logged in the decisions file with its reason. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U08.2 | On marketing and landing pages, and on every page when the vertical overlay says so (local-trades.3), each viewport shows exactly one filled primary-action control; every other action in view is outline or text, and a sticky action yields while another primary action is visible; repeated per-item actions in a list of items (product grid, menu, slot list) are exempt and repeat in one style never more prominent than the page's primary action. | universal | C | [source: DR:A2, C, 2026] | G |
| U08.3 | On small screens a sticky primary-action bar shows only when no other primary action, form or footer is visible, with scroll padding reserved so it never covers a focused control. | universal | C | [source: DR:G1, C, 2026]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U08.4 | Each action keeps one verb and one label everywhere it appears, the label names the specific action rather than a generic word, and the page's audience decides which action leads. | universal | C | [source: DR:H4, C, 2026] | G |
| U08.5 | Forms ask for the minimum fields the conversion needs (the block lists above), never the same information twice in one journey, and the site tracks qualified leads, not only submissions; a vendor benchmark (Baymard, sample not stated) reports checkouts averaging 11.3 fields in 2024 against about 8 needed, so use the direction only. | universal | B | [source: DR:G2, C, 2026]; [source: https://baymard.com/blog/checkout-flow-average-form-fields, B, 2024, opened 2026-10-30]; [source: https://design-system.service.gov.uk/patterns/question-pages/, A, 2026, opened 2026-10-30] | G |
| U08.6 | Forms use visible labels (never placeholder-only) and a clear success message; validation waits until the visitor tries to submit or continue, never when they move away from a field and not while they are still typing (GOV.UK: "Do not validate when the user moves away from a field"), and a failed submit shows the error summary at the top of the page with keyboard focus moved to it (U08.8); left alignment and wide submit buttons are project defaults. | universal | B | [source: https://design-system.service.gov.uk/patterns/validation/, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U08.7 | Optional fields say "(optional)" in the label and required fields carry no asterisk; information entered earlier in the same process is filled in or offered for selection. | universal | A | [source: https://design-system.service.gov.uk/patterns/question-pages/, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U08.8 | On a failed submit, each error is described in text beside its field with a fix where one is known, an error summary headed "There is a problem" sits above the H1 and links to each field, focus moves to it, and the page title starts with "Error:". | universal | A | [source: https://design-system.service.gov.uk/components/error-summary/, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U08.9 | Long forms ask one thing per page with a working back link; any submission that creates a financial or legal commitment, or changes user data, is reversible, checked, or shown for review and correction before it is final. | universal | A | [source: https://design-system.service.gov.uk/patterns/question-pages/, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U08.10 | Every pattern ends on a confirmation page that says what happened, gives a reference number where one exists, says what happens next and when, and gives a contact route; the conversion event fires there (see U19). | universal | A | [source: https://design-system.service.gov.uk/patterns/confirmation-pages/, A, 2026, opened 2026-10-30] | G |
| U08.11 | Failure states fail closed: a server error, timeout or embed that does not load shows a message with another contact route, keeps the entered data, and never shows success unless delivery succeeded. | universal | C | [source: vault/wiki/knowledge/lead-site-playbook.md, C, 2026]; [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026] | G |
| U08.12 | Every submission reaches two independent destinations (for example the client inbox and a stored log or CRM), and a test submission per form proves both on staging, at launch and at T+7 (see U23). | universal | C | [source: vault/wiki/knowledge/lead-site-playbook.md, C, 2026] | G |
| U08.13 | Spam and bot control on every form follow U21.6 (see U21), which owns the rule, including when a challenge is allowed and its accessible alternative. | universal | B | [source: https://www.w3.org/TR/turingtest/, B, 2021, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U08.14 | Every call to action has a working target (page, `tel:` link, form or embed) checked by an automated link test; missing or dead controls are a known failure of generated sites. | universal | B | [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | G |
| U08.15 | No pre-checked boxes: consent, marketing opt-in and add-on boxes start unticked, and nothing is added to a cart or order without an action by the buyer; this is project policy for every client (ICO guidance says pre-ticked boxes are not valid consent in the UK; see U20.20, and U20.4 for cookies, for uk clients); counsel reviews consent text. | universal | B | [source: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/consent/what-is-valid-consent/, A, 2026, opened 2026-10-30]; [source: https://web.archive.org/web/20251210005255/https://www.ftc.gov/reports/bringing-dark-patterns-light, A, 2022, opened 2026-10-30] | G |
| U08.16 | No hidden costs or drip pricing (owner policy for every client): the total price, including every mandatory fee, is shown with the first price and is the most prominent price; the legal row for US ticket and lodging sellers is U08.20; as of 2026-10-30, counsel review needed. | universal | C | [source: https://www.law.cornell.edu/cfr/text/16/464.2, B, 2025, opened 2026-10-30]; [source: https://assets.publishing.service.gov.uk/media/624c27c68fa8f527710aaf58/Online_choice_architecture_discussion_paper.pdf, A, 2022, opened 2026-10-30] | G |
| U08.17 | Subscriptions and recurring donations disclose all material terms before billing details are taken, get express consent to the charge, and offer cancellation online by the same route and at least as easily as sign-up (owner policy for every client); the US federal row is U08.21, and state auto-renewal laws may add terms (see the jurisdiction overlays); as of 2026-10-30, counsel review needed. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U08.18 | No false hierarchy or forced steps: a decline or cancel option is as legible as the accept option, and checkout offers a guest path unless an account is needed for the service; counsel reviews where an overlay names a rule. | universal | A | [source: https://web.archive.org/web/20251210005255/https://www.ftc.gov/reports/bringing-dark-patterns-light, A, 2022, opened 2026-10-30] | R |
| U08.19 | Third-party booking, checkout and donation embeds are tested by keyboard and on a phone, show a fallback link or phone when they fail to load, and send their tags through the consent setup (see U19, see U20). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U08.20 | When jurisdictions includes us-federal: where the client sells live-event tickets or short-term lodging (the only covered goods or services in 16 CFR 464.1), 16 CFR 464.2 bars showing any price without clearly and conspicuously disclosing the total price, and requires the total price to be more prominent than other pricing information; as of 2026-10-30, counsel review needed. | universal | B | [source: https://www.law.cornell.edu/cfr/text/16/464.1, B, 2025, opened 2026-10-30]; [source: https://www.law.cornell.edu/cfr/text/16/464.2, B, 2025, opened 2026-10-30] | G |
| U08.21 | When jurisdictions includes us-federal: for a consumer sale with a negative option feature online, 15 U.S.C. 8403 requires disclosure of all material terms before billing information is taken, express informed consent before the charge, and simple mechanisms to stop recurring charges; as of 2026-10-30, counsel review needed (including whether a B2B or donation flow is covered). | universal | B | [source: https://www.law.cornell.edu/uscode/text/15/8403, B, 2010, opened 2026-10-30] | G |

## Anti-patterns
- A hero with two equal filled buttons ("explore" and "inquire"). The visitor has no single next step; fill one and outline the other (U08.2).
- An inquiry form with custom dropdowns and a budget picker praised for looks, never tested by keyboard. Use native controls and only needed fields (U08.5, U08.6).
- A generated "buy" or "sign up" button with no link. Link-test every action (U08.14).
- A contact form assumed to work because the generator drew one. Delivery is a separate setup; test both destinations (U08.12).
- A form that says "Thanks!" while the webhook failed. Fail closed and show another route (U08.11).
- A puzzle challenge on a quote form with no alternative. Start with a honeypot (U21.6).
- A "keep my plan" orange button over a pale grey "cancel" link. Give both equal legibility (U08.18).

## Checklist
- [ ] Pattern block named per page (U08.1).
- [ ] One filled primary per viewport; sticky bar rules pass at phone width (U08.2, U08.3).
- [ ] Action labels consistent and specific (U08.4).
- [ ] Field list matches the block minimum; extras justified (U08.5).
- [ ] Labels visible, "(optional)" marked, no repeated entry (U08.6, U08.7).
- [ ] Error summary, inline errors, focus and title prefix tested (U08.8).
- [ ] Review step on financial or legal submissions (U08.9).
- [ ] Confirmation page complete; event fires there (U08.10).
- [ ] Forced failure shows a fallback route and keeps data (U08.11).
- [ ] Two destinations proved by test submissions (U08.12).
- [ ] Spam and bot control set as U21.6 requires (U08.13).
- [ ] Link test passes on every action (U08.14).
- [ ] No pre-checked boxes; consent text reviewed by counsel (U08.15).
- [ ] Total price shown with first price; US ticket and lodging rows checked; counsel review needed (U08.16, U08.20).
- [ ] Subscription terms, consent and cancellation path checked; counsel review needed (U08.17, U08.21).
- [ ] Decline options legible; guest checkout offered (U08.18).
- [ ] Embeds tested with fallbacks (U08.19).

## How an AI builder uses this
The builder reads `goals.primary` and `goals.secondary` (see U03), the archetype and model overlays in `site.yaml`, the U06 page specs and the U19 event map. It picks one pattern block per conversion, builds the fields from the block minimum, applies the label, error, confirmation and failure rules, wires two delivery destinations and the spam layer, and writes one test case per path for U23. It must refuse to add fields with no stated use, pre-checked boxes, hidden or late fees, a cancellation path harder than sign-up, shaming or low-contrast decline options, and a success message that does not depend on confirmed delivery. It merges the model overlay's transaction rows (`ecommerce`, `subscription`, `donations`, `ticketing`, `booking`) and the jurisdiction overlays, flagging each for counsel.

## Open questions
- counsel: current status of the FTC negative-option (click-to-cancel) rule; R14 reports a court decision on 2025-07-08, source [S] (secondary, unread at source); which federal and state cancellation and auto-renewal rules bind this client is a counsel question.
- counsel: 16 CFR 464.1, opened 2026-10-30, defines covered goods or services as live-event tickets or short-term lodging (U08.20); whether this client's prices fall under it, and which state fee rules apply, is open [source: https://www.law.cornell.edu/cfr/text/16/part-464, B, 2025, opened 2026-10-30].
- counsel: PCI scope for embedded payment fields per integration (see U21).
- V28 (unverified, from tutorial 83geKREHQY0): button copy names the specific offer instead of a generic label.
- V29 (unverified, from tutorial 86HM0RUWhCk): after generation, tell the agent where each button links.
- V30 (unverified, from tutorial M5cJV3sF5rs): decide from the goal whether a form is needed at all.
- V31 (unverified, from tutorial Ysr7oNDajJI): a landing page is built around one action.
