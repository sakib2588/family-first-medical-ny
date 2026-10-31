# Overlay: model/lead-gen

Status: draft | Owner task: T8 | Updated: 2026-10-30

## Trigger
`site.yaml` `model` includes `lead-gen`: the site produces calls and form requests for a real business that answers them, any `archetype`. It adds capture, routing, ledger, tracking and legal rows; the vertical overlay sets fields, trust signals and page set (U00 step 4). With `microsite`, its Trust signals and "Never" list win over Trust signals 2 and 3 here (U00 step 4(g)).

## Primary conversion
A call or a server-accepted form routes to a named human and logs in the ledger; the block comes from `goals.primary` (see U08). Success-only events and call counts: see U19. A phone-link tap is intent, not a call.

## Page-set delta
- Adds a thank-you page per form (fires the conversion once) and a privacy page linked beside every form (see U20).
- Drops nothing from U06. Location pages follow U06.3: only with unique local proof.

## Trust signals
1. A real contact route answered by a person or a disclosed assistant in the hours shown. Verified by a monthly test call or submission.
2. Real, dated reviews naming their platform, linked. Verified against the platform listing (U05).
3. A credential the vertical overlay requires, copied from the issuer's registry and linked; none when the vertical names none. Verified at intake and each renewal.

## UX patterns
- lead-gen.1: Form fields: the vertical overlay's field minimum; where none is set, the U08 Quote form block (name, one contact route, what is needed). Failure shows another contact route and keeps input (refines U08.5).
- lead-gen.2: Forms fail closed: success only after the row is stored; every lead reaches alert and ledger (refines U08).
- lead-gen.3: Where the Call block is used: the real number stays in HTML source, schema, footer and listings; a tracking number (`analytics.tracking_numbers`) swaps only into visible links for human sessions (refines U19.11).
- lead-gen.4: Where the Call block is used: count separately phone-link taps, tracked calls over the owner's minimum length, client-confirmed leads (refines U19.10).
- lead-gen.5: Response time is an operating target, not a promise: alert in two minutes, first human contact in five during business hours (owner target, unverified, never shown to clients); the "21 times" statistic is misquoted from a B2B rep study [source: vault/wiki/compliance/unverified-claims.md, C, 2026] (refines U03.6).
- lead-gen.6: One system of record per contact type; the ledger syncs from each with a daily reconcile (refines U19.1).
- lead-gen.7: Spam control follows U08.13 (bot check: see U21); never delete a flagged lead, a person reviews the queue daily (refines U08.13).
- lead-gen.8: Call recording off by default; caller notice and recording only after counsel approves, for every state callers come from (refines U19.11).
- lead-gen.9: Lead-facing texts only after consent boxes split by purpose, unticked, and counsel sign-off on the SMS terms (refines U20.20).
- lead-gen.10: Reports name what is unattributed and never promise rankings, leads or revenue (refines U03.7; U19.12).

## Schema types
- No type of its own: the vertical overlay sets the business type from the record (U18).
- `telephone` carries `contacts.public.phone` (or the location's `business.locations[].phone`), never a tracking number.
- No `aggregateRating` or `review` markup about the business itself.

## Compliance rows
| rule | source | date checked | counsel flag |
|---|---|---|---|
| lead-gen.11: When jurisdictions includes us-federal: calls to mobile numbers using an autodialer or an artificial or prerecorded voice need the called party's prior express consent; such calls that advertise or telemarket need prior express written consent naming the number | [source: https://www.law.cornell.edu/cfr/text/47/64.1200, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| lead-gen.12: When jurisdictions includes us-federal: consent may be revoked by any reasonable means, including a STOP-type text reply; honor revocation within ten business days at most | [source: https://www.law.cornell.edu/cfr/text/47/64.1200, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| lead-gen.13: When jurisdictions includes us-federal: AI-generated voices count as artificial voice, so an AI agent that calls leads back needs prior express consent first | [source: https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf, A, 2024, opened 2026-10-30] | 2026-10-30 | counsel |
| lead-gen.14: When jurisdictions includes new-york: the eavesdropping definition turns on the consent of at least one party; our design rule still treats every call as all-party | [source: https://www.nysenate.gov/legislation/laws/PEN/250.00, A, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| lead-gen.15: When jurisdictions includes new-york: unfair, deceptive or abusive acts or practices (GBS 349 as shown 2026-10-30) and false advertising (GBS 350) are unlawful; site claims and client reports must be accurate | [source: https://www.nysenate.gov/legislation/laws/GBS/349, A, 2026, opened 2026-10-30]; [source: https://www.nysenate.gov/legislation/laws/GBS/350, A, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| lead-gen.16: When jurisdictions includes us-federal: commercial email opt-out: no fee, no data beyond the address and preferences, no step beyond a reply or one web page | [source: https://www.law.cornell.edu/cfr/text/16/316.5, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| lead-gen.17: Google listing: the phone number must be under the direct control of the business | [source: https://support.google.com/business/answer/3038177, A, 2026, opened 2026-10-30] | 2026-10-30 | counsel |

As of 2026-10-30, counsel review needed.

## Common mistakes
- A form that writes only to an inbox, so spam filtering loses leads.
- A spam filter that deletes what it flags instead of queueing it.
- Counting link taps as calls.
- "24/7" where nobody answers at night.

## Reference sites
- https://www.rotorooter.com/ (opened 2026-10-30): tap-to-call and a schedule action share the first screen.
- https://www.zendesk.com/demo/ (opened 2026-10-30): a demo path plus a free-trial path; no location step.

## Open counsel questions
- Call recording and transcription: which consent rule governs calls from each state served (the Connecticut civil statute was not opened).
- Callback and text consent wording: what makes it prior express written consent; can one box cover updates and marketing?
- Retention of recordings and caller numbers after the contract ends.
- Pay-per-lead: what a qualified-lead definition must say for a dispute to hold.
