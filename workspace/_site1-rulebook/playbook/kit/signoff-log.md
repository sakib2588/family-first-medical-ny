# Sign-off log

Status: draft | Owner task: T9 | Updated: 2026-10-30 | Scope: universal | Serves: U01, U07, U09, U23, U24

Copy this file into the client repo at kickoff (`records.signoffs` in `site.yaml` points to it). It records eight sign-off points, S0 to S7. For each one it records who signed, what they saw, the date, and what changed since the previous sign-off. A sign-off is written: an email, an e-signature or a comment in the shared document. A spoken "yes" is confirmed in writing the same day, and the log records the written confirmation.

## Rules

- [ ] Each point has one named approver, set at kickoff gate K0 (U01).
- [ ] The approver sees the artifact itself, through a link to the exact version, not a summary of it (U01).
- [ ] A spoken approval is confirmed in writing, and only the written confirmation counts (U01).
- [ ] A change after a sign-off goes through a change request, is logged in the change log below, and is signed again if it alters what was approved (U01).
- [ ] The builder never signs for the client, and the staging tester at S5 is not the builder (U01, U23).
- [ ] Where a regulated row is flagged, counsel signs it at S4; counsel review needed (U20).
- [ ] Dates are written as `YYYY-MM-DD`; the decision is one of `approved`, `approved with changes` or `rejected` (U01).
- [ ] No point is skipped; a point that does not apply is marked `not applicable` with the reason and the approver's initials (U01).

## Summary

| Point | Sign-off | Approver role | Name | Date | Version or link | Decision | Signed |
|---|---|---|---|---|---|---|---|
| S0 | Scope and agreement | Client decision-maker and signatory (U01) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S1 | Brief | Client approver (U03, U04) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S2 | Site plan | Client approver (U06, U08) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S3 | Design direction | Client approver (U09) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S4 | Content and facts | Client approver; counsel for flagged rows (U05, U07, U20) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S5 | Staging QA | Our tester (not the builder), then the client approver (U23) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S6 | Launch | Client approver (U23) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |
| S7 | Handoff acceptance | Client approver and, for ownership transfer, the signatory (U24) | `<name>` | `<YYYY-MM-DD>` | `<link>` | `<decision>` | [ ] |

## S0. Scope and agreement

What they see: the scope (in and out), deliverables, page set, timeline, assumptions, review rounds, the change-request route and the agreement. Prices sit in the agreement and are not repeated in this log. After S0, every change goes through a change request.

- [ ] Signed by (name and role): `<fill in>` (U01)
- [ ] Date: `<YYYY-MM-DD>` (U01)
- [ ] What they saw (link to the exact version): `<link>` (U01)
- [ ] Changes since the last sign-off: `none, first sign-off` (U01)
- [ ] Evidence stored (signed file or email): `<path>` (U01)

## S1. Brief

What they see: positioning, audience and top tasks, voice (we are, we are not), the one primary conversion and the KPIs with baseline, target, date and source (for larger projects, the brand-discovery synthesis). After S1, copy and design must cite the brief.

- [ ] Signed by (name and role): `<fill in>` (U03, U04)
- [ ] Date: `<YYYY-MM-DD>` (U04)
- [ ] What they saw (link to the brief): `<link>` (U04)
- [ ] Changes since S0 (change-request ids): `<none or list>` (U01)
- [ ] The primary conversion is one action, with its KPIs (U03)

## S2. Site plan

What they see: the sitemap, page specs, content matrix, conversion paths and the event map. After S2, a new page is a change request.

- [ ] Signed by (name and role): `<fill in>` (U06)
- [ ] Date: `<YYYY-MM-DD>` (U06)
- [ ] What they saw (links to the sitemap, content matrix and event map): `<link>` (U06, U08)
- [ ] Changes since S1: `<none or list>` (U01)
- [ ] Event map attached, naming the event for the primary conversion (U19)

## S3. Design direction

What they see: two or three concept directions that differ in clear ways, then one locked direction with its tokens (color, type, spacing) and the key templates at phone and desktop widths. After S3, palette and type changes cost time and go through a change request.

- [ ] Signed by (name and role): `<fill in>` (U09)
- [ ] Date: `<YYYY-MM-DD>` (U09)
- [ ] What they saw (links to the directions and the locked one): `<link>` (U09, U10)
- [ ] Changes since S2: `<none or list>` (U01)
- [ ] Contrast pairs and font licenses checked before the lock (U11, U12)

## S4. Content and facts

What they see: every page's final copy, the record (`site.yaml`) with provenance on every fact, the proof library and the rights log. Counsel sees the flagged legal and regulated rows. After S4 the record is `locked`; a fact changes in the record first, never only inside a page.

- [ ] Signed by (name and role): `<fill in>` (U07)
- [ ] Counsel sign-off on flagged rows (name, date, rows): `<fill in or not applicable>`; counsel review needed (U20)
- [ ] Date: `<YYYY-MM-DD>` (U07)
- [ ] What they saw (content matrix link and record version): `<link>` (U02, U07)
- [ ] Changes since S3: `<none or list>` (U01)
- [ ] Every proof item shown has a `verified` entry and a rights line (U05)

## S5. Staging QA

What they see: the staging link and the QA matrix results (content, functions and forms, accessibility, performance, search basics, legal pages present, devices), with the known defects. Our tester signs first, then the client approver. After S5, only defects are fixed before launch.

- [ ] Tester sign-off (name, not the builder): `<fill in>` (U23)
- [ ] Client sign-off (name and role): `<fill in>` (U23)
- [ ] Date: `<YYYY-MM-DD>` (U23)
- [ ] What they saw (staging link and QA results): `<link>` (U16, U17, U23)
- [ ] Changes since S4: `<none or list>` (U01)
- [ ] Open defects with owners and dates: `<list>` (U23)

## S6. Launch

What they see: the launch card (date, steps, owners), the redirect map, the DNS change plan, the rollback plan, and the analytics and form checks to run at go-live. After S6, the T+7, T+30 and T+90 checks are scheduled, each with an owner.

- [ ] Signed by (name and role): `<fill in>` (U23)
- [ ] Date and planned launch time window: `<YYYY-MM-DD>` (U23)
- [ ] What they saw (launch card and redirect map): `<link>` (U06, U23)
- [ ] Changes since S5: `<none or list>` (U01)
- [ ] Every `planned` overlay selected has counsel review recorded or an owner waiver in `legal.counsel_waivers`; otherwise no launch (U00.7); counsel review needed
- [ ] Every "must" row in the client's compliance checklist carries a counsel sign-off (U23.13), and every `unverified` legal row and every other item on `legal.counsel_items` (including local-trades items under U00 step 4(f) and a missing emergency number under local-trades.16) has a recorded counsel decision (U00.3); otherwise no launch; counsel review needed
- [ ] Rollback owner named, and owners and dates set for the T+7, T+30 and T+90 checks (U23, U24)

## S7. Handoff acceptance

What they see: the handoff pack (`handoff-pack.md`), including the T+7 and T+30 check results (U24.14), confirmation that the client owns every account, the access matrix after handoff, the editing guide and the training session record. After S7, the care plan or the support terms start, and our access drops to what that plan needs.

- [ ] Signed by (name and role): `<fill in>` (U24)
- [ ] Date: `<YYYY-MM-DD>` (U24)
- [ ] What they saw (handoff pack link): `<link>` (U24)
- [ ] Changes since S6: `<none or list>` (U01)
- [ ] Ownership transfer confirmed account by account (U21, U24)

## Change log (between sign-offs)

| Change id | Date | Requested by | What changed | Affects point | Re-signed | Module |
|---|---|---|---|---|---|---|
| `CR-<n>` | `<YYYY-MM-DD>` | `<name>` | `<short description>` | `<S0 to S7>` | [ ] | U01 |
