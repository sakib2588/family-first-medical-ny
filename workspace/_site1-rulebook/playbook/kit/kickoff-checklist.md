# Kickoff checklist: gate K0

Status: draft | Owner task: T9 | Updated: 2026-10-30 | Scope: universal | Serves: U00, U01, U02, U03, U20, U21

Gate K0 sits between the intake and design. Design work (U09) does not start until every **blocking** item below is ticked. A non-blocking item may stay open only if it is written on the risk register with an owner and a date. Record the result at the end of this file and in the sign-off log (`signoff-log.md`). Nothing in this gate states that a site or an agreement meets a legal requirement; where an item touches law, it says counsel review needed.

## K0.1 Scope and agreement (blocking)

- [ ] A signed scope (statement of work) and agreement exist, built from a template counsel has reviewed; counsel review needed for each new client type (U01).
- [ ] The scope lists what is in, what is out, the deliverables and the page set (U01, U06).
- [ ] Assumptions and dependencies are written down, including "the client supplies content and proof by the dates in the content request" (U01, U07).
- [ ] The agreement says late content or late approvals pause the schedule, and how a new date is set (U01, U07).
- [ ] A change-request route is agreed: what counts as a change, who asks, who approves, how time and cost are re-agreed (U01).
- [ ] The number of review rounds per stage is written in the agreement (U01, U07).
- [ ] Payment terms are in the agreement; this kit holds no figures (U01).
- [ ] Where the work happens in a place with a written-contract rule for freelance work, the agreement was checked against it; see U01.8 (conditional on where the agency contracts from) where relevant; counsel review needed (U01).
- [ ] Ownership is stated: the client owns its domain, listings, accounts, content and paid-for deliverables; nothing is held back as leverage (U24).
- [ ] Sign-off S0 (scope) is recorded in `signoff-log.md` with name, role and date (U01).

## K0.2 People and decisions (blocking)

- [ ] One named approver for each sign-off point S0 to S7, written in `signoff-log.md` (the default approver in `contacts.approver`) (U01).
- [ ] A named tie-breaker for disagreements between client stakeholders (U01).
- [ ] A day-to-day contact and a backup are named (U01).
- [ ] The communication channel and the expected response times on both sides are agreed (U01).
- [ ] The person who signs the agreement can commit the business; counsel review needed if unclear (U01).
- [ ] For a regulated archetype, a named counsel will review the legal items before content sign-off; counsel review needed (U20).
- [ ] The builder never approves on the client's behalf, and this is stated in the kickoff notes (U01).
- [ ] The staging tester for S5 is a person other than the builder, and is named (U23).

## K0.3 Record completeness (`site.yaml`) (blocking)

- [ ] `archetype`, `model` and `jurisdictions` are filled; none is `<fill in>` (U00).
- [ ] The overlays they select are listed, and any conflict with a universal module is logged in the decisions log (U00).
- [ ] `goals.primary` names one action, not several (U03).
- [ ] Each KPI has a baseline, a target, a date and a data source; a guessed baseline is labeled as a guess (U03).
- [ ] `audience.top_tasks` and `audience.questions` are filled from the client's answers, not invented (U04).
- [ ] Every item in `offer.items` has `offered_confirmed: true` from the client (U02).
- [ ] `contacts` holds the approver, tie-breaker, day-to-day contact and, where needed, counsel (U01).
- [ ] Every filled fact has a `provenance` entry: source, who said or showed it, who verified it, date (U02).
- [ ] Unknown facts are `null`, not guessed; null means the site omits them (U02).
- [ ] `status` is `draft`; it moves to `locked` only at content sign-off S4 (U02, U07).
- [ ] `legal.triggers` lists every "yes" from intake section Q9 (U20).
- [ ] `legal.data_collected`, `legal.audience_min_age` and `analytics.tools` (with `sets_cookies` and `loads_on`) are filled or `null` from intake Q9 (U19, U20).

## K0.4 Access by invitation (blocking)

- [ ] The access matrix lists every account the work needs: domain registrar, DNS, hosting, repository, analytics, search console, tag manager, maps listing, review platforms, social accounts, email sending, booking, payments, store, CRM (U21).
- [ ] Each account was verified by logging in with our own invited user; "I'll send it later" fails this item (U21).
- [ ] The minimum role for each account is recorded, and no account gives us more than the work needs (U21).
- [ ] No password, recovery code, API key or token was received by email, chat or document; if one was, the client changed it and the event is logged (U21).
- [ ] AI build tools never receive an owner credential for a registrar, listing, analytics or payment account (U21).
- [ ] Two-factor recovery for each client account sits with the client, not with us (U21, U24).
- [ ] Any asset held by a third party (domain, listing, phone number, hosting, old site) has an open transfer request, recorded on the risk register (U21, U24).
- [ ] The access matrix itself contains roles and owners only, never secrets (U21).

## K0.5 Overlays and legal items

- [ ] `archetype` holds exactly one vertical slug; a hybrid or unknown client stops here and goes to the owner (U00).
- [ ] `model` overlays chosen (for example `overlay:lead-gen`, `overlay:booking`, `overlay:model/ecommerce`) (U00, U08).
- [ ] `jurisdictions` chosen from where the business operates and where visitors are (U00, U20).
- [ ] Every selected overlay file exists; a missing file stops here for the owner. A `planned` jurisdiction or model overlay does not stop the build: its open counsel questions go to `legal.counsel_items`, and launch (S6) waits until counsel review is recorded or the owner records a waiver (`legal.counsel_waivers`, handoff pack section 4) (U00.7).
- [ ] A record that selects both `local-trades` and `microsite` is a trades referral microsite: the microsite drops win (no license, insured or contractor-looking pages), the local-trades license and address display rows become counsel items that block S6, and the owner decision on referral licensing, fees, review reuse and markup is logged before build (U00 step 4(f)).
- [ ] Compliance rows from those overlays copied into the client's legal checklist, each with its counsel flag; counsel review needed (U20).
- [ ] Consent posture for analytics and ads set per jurisdiction; counsel review needed (U19, U20).
- [ ] Accessibility target recorded in `legal.accessibility_target`; any contract or legal duty noted for counsel; counsel review needed (U16).
- [ ] AI use on the site (chatbot, generated images, drafted copy) recorded with its disclosure plan; counsel review needed (U13, U20).

## K0.6 Requests sent

- [ ] `asset-and-proof-request.md` sent with a due date and a shared folder the client owns (U05).
- [ ] `content-request.md` sent, with the content matrix showing an owner and a due date per page (U07).
- [ ] Due dates are in both calendars, with a reminder before each (U01, U07).
- [ ] The client knows that an empty proof field means the matching section is not shown (U05).

## K0.7 Risks, logs and baseline

- [ ] Risk register created in the client repo: risk, likelihood, impact, owner, mitigation, status (U01).
- [ ] Decisions log created in the client repo, with the overlay choices as its first entries (U00, U01).
- [ ] Open-questions list created, holding every unanswered intake question (U02).
- [ ] Known risks logged: missing proof, regulated claims, third-party control, late content, legacy URLs, integrations, fixed dates (U01).
- [ ] For a redesign, the current URL list and content inventory are saved for the redirect map (U06, U23).
- [ ] For a redesign, a backup of the current site and its settings is taken before any change (U21, U23).
- [ ] Baseline numbers are exported before anything changes: current analytics, conversion counts, form and call volumes where they exist (U03, U19).
- [ ] A first draft of the event map names the event for the primary conversion (U19).
- [ ] The current site's performance and accessibility are measured once, for comparison at launch (U16, U17).

## K0 result

| Field | Value |
|---|---|
| Client | `<fill in>` |
| Date of gate review | `<YYYY-MM-DD>` |
| Reviewed by (builder side) | `<fill in>` |
| Confirmed by (client approver) | `<fill in>` |
| Blocking items open | `<none, or list>` |
| Non-blocking items on the risk register | `<list with owner and date>` |
| Result | `pass` or `fail` |

- [ ] Result recorded here and in `signoff-log.md`; if the result is `fail`, design does not start and the open items get owners and dates (U01, U09).
