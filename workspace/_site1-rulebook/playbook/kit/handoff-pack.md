# Handoff pack

Status: draft | Owner task: T9 | Updated: 2026-10-30 | Scope: universal | Serves: U19, U21, U23, U24

Build this pack at the end of the project from the repo and the locked record (`site.yaml`), and hand it to the client at sign-off S7. The client keeps it. The pack holds no secret of any kind: no password, recovery code, API key, token or security answer. The client keeps those in its own password manager.

## 1. Ownership transfer

The client owns its domain, listings, accounts, content and paid-for deliverables. Nothing is held back as leverage for payment or renewal (red lines, `vault/wiki/compliance/red-lines.md`).

- [ ] Domain registered in the client's own registrar account, with the client's contact details and auto-renew on (U21, U24).
- [ ] DNS in the client's account; we hold at most a delegated role (U21).
- [ ] Hosting account owned by the client; if we host under a care plan, the agreement names an exit path and the client can move at any time (U21, U24).
- [ ] Code repository owned by the client or transferred to it; we keep access only if the care plan needs it (U24).
- [ ] Analytics, search console and tag manager: the client holds the owner role (U19, U24).
- [ ] Maps listing, review profiles and social accounts: the client is the owner; we hold a manager role only if the care plan needs it (U18, U24).
- [ ] Booking, store, payment, CRM and email platforms are in the client's name and on the client's billing (U08, U24).
- [ ] Font, image and plugin licenses are in the client's name where the license allows; otherwise the transfer terms are written down (U11, U13).
- [ ] Source files delivered: design files, tokens, original photos, the rights log and the consent forms (U05, U09).
- [ ] Our access after handoff is cut to what the care plan needs, or removed, and the change is logged (U21).

## 2. Accounts and access matrix

This table holds names, owners and roles only. It never holds a password, recovery code, API key, token or security answer.

| System | Account owner (legal entity) | Admin contact | Our role now | Our role after handoff | Two-factor recovery held by | Renewal date | Verified | Module |
|---|---|---|---|---|---|---|---|---|
| Domain registrar | `<client>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U21 |
| DNS | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U21 |
| Hosting | `<client>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U21 |
| Code repository | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U24 |
| Analytics | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U19 |
| Search console | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U18 |
| Tag manager | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U19 |
| Maps listing | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U18 |
| Review platforms | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U05 |
| Social accounts | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U24 |
| Email on the domain | `<client>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U21 |
| Form and alert sending | `<client or us>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U08 |
| Booking, store or payments | `<client>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U08 |
| CRM and email marketing | `<client>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U08 |
| Spam and bot protection | `<client>` | `<name>` | `<role>` | `<none or role>` | client | n/a | [ ] | U21 |
| Uptime monitoring and backups | `<client or us>` | `<name>` | `<role>` | `<none or role>` | client | `<YYYY-MM-DD>` | [ ] | U21 |

## 3. Editing guide (outline)

- [ ] How to sign in: by invitation to the client's own account, never through a shared login (U21, U24).
- [ ] How to change the facts that change most (hours, prices, menus, team, events, offers): change the record first, then publish (U02, U24).
- [ ] How to add a page or post from the existing templates (U06, U24).
- [ ] How to add or replace an image: rights line first, then alt text, then the upload (U13, U16).
- [ ] How to preview a change before it goes live, and how to undo it (U23, U24).
- [ ] What not to touch without help: tokens, structured data, scripts, redirects, tracking, and legal pages without counsel (U18, U20).
- [ ] Content style guide: voice (we are, we are not), banned phrases, claims rules and the human-edit rule (U07).
- [ ] Design system notes: tokens, components, usage do's and don'ts, font and image licenses (U09).
- [ ] Who to contact, for what, and through which channel (U24).

## 4. Records handed over

- [ ] Accessibility statement and conformance notes: target, test method, known issues, contact route (U16).
- [ ] Performance baseline at launch, and the budgets (U17).
- [ ] Analytics: event map, dashboard link, monthly report template (U19).
- [ ] Legal pages list with owner and next review date, and the compliance rows that need periodic checks; counsel review needed (U20).
- [ ] For each `planned` overlay selected: counsel review recorded, or the owner's waiver (overlay, questions waived, owner, date, reason) as entered in `legal.counsel_waivers` before S6 (U00.7); counsel review needed.
- [ ] Security: header settings, dependency update rhythm, backup and restore steps, incident contacts (U21).
- [ ] Redirect map and search console verification (U18, U23).
- [ ] Sign-off log, decisions log, risk register and rights log (U01, U05).
- [ ] The locked record (`site.yaml`) and its version (U02).
- [ ] Known issues and deferred items, each with an owner (U24).

## 5. Care-plan options

Described here without prices. Prices, response times and terms live in the agreement (U01). The client can leave any plan and keep every asset.

| Option | What it covers | Who edits content | Exit |
|---|---|---|---|
| Self-managed | We hand over and step back; help only on request, quoted each time | Client | Nothing to end; our access is removed at handoff |
| On-call fixes | We fix defects and outages when asked | Client | Notice as the agreement says; access removed |
| Maintenance | Updates and security patches, backups with restore tests, uptime and form monitoring, the post-launch checks, a monthly report | Client, with our help on request | Notice as the agreement says; full export and access removal |
| Maintenance and growth | Everything in maintenance, plus content updates, proof refresh, valid small experiments (U19) and a quarterly review | Shared | Notice as the agreement says; full export and access removal |

- [ ] The chosen option is recorded in `maintenance.care_plan` and in the agreement (U24).
- [ ] What the plan does not cover is written down (U24).
- [ ] The exit path is written: how the client takes everything back, and how our access ends (U24).

## 6. Incident runbook (outline)

- [ ] Detect: who notices (monitoring, the client, a visitor) and the first contact route (U24).
- [ ] Triage by severity: site down or payments broken; forms or bookings failing; a visual or content defect. The response for each level comes from the agreement (U24).
- [ ] Contain: take the broken part offline, switch forms to the backup destination, or roll back to the last good release (U21, U23).
- [ ] Communicate: who tells the client, what the site shows visitors, who answers customers meanwhile (U24).
- [ ] Fix and verify: fix on staging, test, release, then check the live site (U23).
- [ ] Review: a short write-up of cause, impact, fix and prevention, added to the known-issues list (U24).

| Scenario | First action | Owner | Module |
|---|---|---|---|
| Site down | Check hosting status and DNS; roll back the last release if it caused the outage | `<name>` | U21, U23 |
| Form or booking not delivering | Test both destinations; switch to the backup destination; tell the client which enquiries may be missing | `<name>` | U08 |
| Domain or certificate about to expire | Renew in the client's account; confirm auto-renew | `<name>` | U21 |
| Site hacked or defaced | Take the site offline or restore a clean backup; change affected access; review how it happened | `<name>` | U21 |
| Maps listing suspended | Tell the client; follow the platform's appeal route from the client's own account | `<name>` | U18 |
| Spam flood on forms | Tighten spam protection; keep the real enquiries | `<name>` | U21 |
| Payment failure | Check the payment platform status; show visitors another way to pay or order | `<name>` | U08 |
| Accessibility complaint or legal letter | Log it, tell the client, pass it to counsel; counsel review needed | `<name>` | U16, U20 |
| Suspected exposure of personal data | Contain it, tell the client, pass it to counsel at once; notice duties vary by place; counsel review needed | `<name>` | U20, U21 |

## 7. Retention

- [ ] How long we keep project files, form-data copies and backups after handoff is written in the agreement; counsel review needed (U20, U24).
- [ ] Form submissions are stored only in the client's systems; our copies are deleted at handoff unless the care plan needs them (U20, U21).
- [ ] Consent forms and the rights log go to the client, who keeps them for as long as the material is in use (U05, U24).
- [ ] Sign-off evidence and the decisions log go to the client; we keep a copy only as the agreement allows (U01, U24).
- [ ] Access we no longer need is removed, and the removal date is logged (U21).
- [ ] For a redesign: who keeps the old site's backup, and until when (U21, U24).

## 8. Post-launch checks

### T+7

- [ ] Every form, booking, checkout or donation path tested end to end on the live site; each test reached both destinations (U08, U23).
- [ ] The primary conversion event fires once per action in analytics (U19).
- [ ] Redirects from old addresses land on the right pages, and no unexpected not-found errors show in the logs (U06, U23).
- [ ] Search console shows no new crawl or indexing errors, and the sitemap is submitted (U18).
- [ ] Contact details on every page match the record and the listings (U02, U18).
- [ ] Performance and accessibility spot checks on the main templates, on a real phone (U16, U17).
- [ ] Spam and bot protection is working (U21).

### T+30

- [ ] Conversions compared with the baseline in the record, with the data source named (U03, U19).
- [ ] Key pages indexed, and search queries reviewed against the query map (U18).
- [ ] Defects from T+7 fixed, or on the known-issues list (U23).
- [ ] The client's first edits checked, and their questions answered (U24).
- [ ] New reviews or results worth adding collected and verified (U05).
- [ ] T+7 and T+30 results added to this pack before sign-off S7 (U23, U24).

### T+90

- [ ] KPIs compared with target and date, and a decision on what to change next (U03, U19).
- [ ] Proof and expiry dates checked again: licenses, memberships, permissions, team changes (U05).
- [ ] Legal pages and compliance rows due for review flagged to the client; counsel review needed (U20).
- [ ] Dependencies and platform updates applied, and one backup restored as a test (U21).
- [ ] Performance and accessibility measured again against the launch baseline (U16, U17).
- [ ] Access review: every account in section 2 checked against `docs/access-matrix.md`; anyone who no longer needs access is removed and the change logged (U21, U24).
- [ ] Next review date set under the care plan, or the project closed (U24).

## 9. Final checklist

- [ ] Ownership transfer complete, account by account (U24).
- [ ] Access matrix filled, verified and free of secrets (U21).
- [ ] Editing guide delivered, and a training session held with its date recorded (U24).
- [ ] Records from section 4 delivered (U24).
- [ ] Care-plan option chosen and recorded, or self-management confirmed (U24).
- [ ] Incident runbook delivered with names and contact routes filled in (U24).
- [ ] Retention steps done and logged (U24).
- [ ] T+7 and T+30 checks done, and the T+90 check scheduled with an owner (U23).
- [ ] Known issues and deferred items listed with owners (U24).
- [ ] Sign-off S7 recorded in `signoff-log.md` (U24).
