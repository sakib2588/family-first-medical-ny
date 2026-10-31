# U01. Engagement: qualify, scope, price, contract

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module decides whether a prospect is a fit, what the work includes and excludes, which pricing model the proposal uses, what the scope of work and agreement must contain, and who approves what. It runs after the pre-call screen and before kickoff gate K0; no design or build starts until it is done.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U01.1 | Before any proposal, the pre-call screen and the stop list in `playbook/kit/intake-questionnaire.md` are complete, and the prospect is declined when it wants fabricated proof, has no verifiable business behind it, or makes a guaranteed ranking, traffic, lead or revenue figure a condition. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U01.2 | No proposal, scope or sales message promises a search ranking, traffic level, lead count or revenue; targets are written as the client's goals with a measurement plan (see U03); Google says no one can guarantee a ranking (A), and the traffic, lead and revenue parts are owner policy (B). | universal | B | [source: https://developers.google.com/search/docs/fundamentals/do-i-need-seo, A, 2026, opened 2026-10-30] [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U01.3 | The client's appetite (the time and the budget it is willing to spend) is recorded before scoping, and scope is cut to fit the appetite rather than the appetite raised to fit a wish list. | universal | B | [source: https://basecamp.com/shapeup, B, 2019] | R |
| U01.4 | When the problem, users or constraints are unclear, the first offer is a separate discovery engagement with its own deliverable and stop point; ending after discovery is a valid result, not a failed sale. | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] | R |
| U01.5 | The scope of work lists the deliverables, the page set, the conversion paths, the integrations, the platform and CMS with the reason for the choice, and a written out-of-scope list; an item on neither list is out of scope until a change request adds it. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U01.6 | The scope of work states its assumptions and client dependencies, including content, proof and access due dates, and states that late content or late approvals pause the schedule and how a new date is set. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U01.7 | The agreement and scope of work contain at least: the parties, deliverables, milestones with dates, sign-off points, the number of review rounds per stage, payment terms and method, the change-request route, ownership of assets and deliverables, termination, warranty or defect period, and what support follows launch; the template is counsel-reviewed; the USDS playbook backs only the warranty, ownership and frequent-deliverable items, the rest is agency practice. | universal | B | [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30] (supports warranty, ownership and frequent deliverables only) [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U01.8 | When the agency or freelancer contracts from New York (this follows the agency's location, not the client's `jurisdictions`; no record key yet, owner decision): as of 2026-10-30, where New York General Business Law Article 44-A may apply (an individual or one-person business hired as an independent contractor for $800 or more, counting contracts with the same hiring party over the prior 120 days; sales representatives, lawyers, licensed medical professionals and construction contractors are excluded), the written contract includes both parties' names and mailing addresses, an itemized list of services, their value, the rate and method of pay, the payment date or how it is set, and the deadline to submit completed work; the hiring party keeps it for six years; counsel review needed. | universal | A | [source: https://www.nysenate.gov/legislation/laws/GBS/1410, A, 2024, opened 2026-10-30] [source: https://www.nysenate.gov/legislation/laws/GBS/1412, A, 2024, opened 2026-10-30] | R |
| U01.9 | No build starts without sign-off S0 (signed scope and agreement) and one named client approver recorded in `signoff-log.md`; a verbal yes does not pass (owner process; USDS not cited for this). | universal | C | [source: playbook/kit/signoff-log.md, C, 2026] | G |
| U01.10 | Each sign-off point S0 to S7 has one named approver with the authority to decide, plus a named tie-breaker for stakeholder disagreement; the builder never approves on the client's behalf (owner process; USDS not cited for this). | universal | C | [source: playbook/kit/signoff-log.md, C, 2026] | G |
| U01.11 | After a sign-off, any new page, feature, integration or change to a locked item is a written change request that states the time and cost effect and is approved by the named approver before work on it begins. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U01.12 | The agreement says the client owns its domain, listings, accounts, content and paid-for deliverables, and nothing is withheld as leverage for payment (USDS supports buyer control of software and data only; the payment clause is owner policy); ownership terms are counsel-reviewed. | universal | B | [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30] (Play 5: third-party software and data stay under the buyer's control) [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U01.13 | Access to client accounts is granted by invitation to named users and recorded in an access matrix; the engagement never asks for or stores client passwords. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U01.14 | The proposal names one pricing model (fixed package, fixed time with variable scope, or time and materials) and states its trade-off to the client in one sentence; prices and rates are an owner decision and never appear in the playbook. | universal | B | [source: https://basecamp.com/shapeup, B, 2019] [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30] (Play 5 allows varied pricing models) | R |
| U01.15 | For a regulated archetype (legal-accounting, medical-wellness, real-estate, regulated-finance, or any site aimed at children), the proposal lists counsel review of the compliance rows as a client dependency before content sign-off S4, and the builder gives no legal advice. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U01.16 | When the client cannot supply content or proof, the scope offers a smaller site built from what exists or a decline; extra model-written text to fill the gap is not an option. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] [source: vault/wiki/knowledge/content-and-ai-quality.md, C, 2026] | R |
| U01.17 | Post-launch care, hosting and maintenance are scoped as their own line with their own terms, not folded silently into the build price (see U24). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |

## Anti-patterns
- Quoting from a feature wish list before the appetite is known; the scope then grows and the schedule slips (U01.3).
- A scope with no out-of-scope list; every later request becomes an argument (U01.5).
- "Unlimited revisions"; review rounds without a number never close (U01.7).
- Several client stakeholders approving by email in turn, with no tie-breaker; the last one to reply wins (U01.10).
- Holding a domain or listing until an invoice is paid. This is a red line (U01.12).
- Promising first-page ranking or a lead count to win the sale (U01.2).
- Taking a regulated client and writing its legal pages from a generic template without counsel (U01.15).

## Checklist
- [ ] Pre-call screen and stop list done; decline reasons logged (U01.1).
- [ ] No guarantee language in proposal or messages (U01.2).
- [ ] Appetite recorded; discovery offered first where the problem is unclear (U01.3, U01.4).
- [ ] Scope lists in, out, assumptions and dependencies (U01.5, U01.6).
- [ ] Agreement contains every element in U01.7; counsel-reviewed template used (U01.7).
- [ ] New York freelance-contract terms checked where they may apply; counsel review needed (U01.8).
- [ ] S0 signed; approver and tie-breaker named in `signoff-log.md` (U01.9, U01.10).
- [ ] Change-request route written; ownership clause present; access by invitation (U01.11, U01.12, U01.13).
- [ ] One pricing model named with its trade-off; no prices in playbook files (U01.14).
- [ ] Regulated archetype: counsel listed as a dependency (U01.15).
- [ ] Care plan scoped separately (U01.17).

## How an AI builder uses this
Inputs: the pre-call screen and stop-list results from `playbook/kit/intake-questionnaire.md`, the draft `site.yaml` (archetype, model, jurisdictions, `project` and `contacts` blocks), and the selected overlays (see U00). The builder drafts the proposal and scope of work from the counsel-reviewed template, filling deliverables, page set and out-of-scope list from the record, and leaves every price field for the owner. It produces the S0 entry in `signoff-log.md` and the access matrix. It must refuse to start design or code without a signed S0 and a named approver, to enter or suggest any price, to promise outcomes, to accept passwords, and to describe the agreement as meeting any law; legal questions go to counsel. Pricing-model and pricing-display defaults per client type come from the vertical and model overlays.

## Open questions
- Which pricing model is the default, and whether it varies by archetype (owner).
- Platform and CMS choice (static, hosted builder, headless, WordPress or Shopify; who edits; lock-in and export path): no module owns it yet; a U25 platform module is an owner decision; until then U01.5 records the choice and reason in the scope.
- Whether regulated archetypes are taken only when the client's own counsel signs the compliance rows (owner, counsel).
- New York Article 44-A effective date: law-firm summaries give 2024-05-20 or 2024-08-28; also whether the builder or the client is the hiring party in a subcontracted job (counsel) [source: https://www.nysenate.gov/legislation/laws/GBS/1410, A, 2024, opened 2026-10-30].
- Whether a written-contract rule like the New York one exists in the other jurisdictions served (counsel, unverified).
- V1 (unverified, from tutorial G-F5Qvy-7KM): list usage-capped tools the build depends on and add their cost to the scope.
- V3 (unverified, from tutorial dYUL9-m6U1o): keep required pages and optional extras in two separate scope lists.
