# U24. Handoff, training and maintenance

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers how the client takes ownership of the site, how people get access, how the client edits and governs content, what a care plan covers, and what happens when something breaks. It runs after launch (see U23) and closes the engagement at handoff acceptance. The filled handoff pack lives at `playbook/kit/handoff-pack.md`.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U24.1 | The client's own accounts hold the domain registrar, DNS, hosting, code repository, analytics, Search Console and business profiles; the ownership matrix names each asset, its owner account and who has delegated access, and no asset is ever held back for payment. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | G |
| U24.2 | Access is granted by inviting a named person's own account at the lowest role that does the job (owner, full user, restricted user); passwords are never shared, sent or stored, and the access matrix records person, tool, role, date granted and date to remove. | universal | B | [source: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository, B, 2026, opened 2026-10-30]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U24.3 | When a person leaves, remove their user and their ownership verification tokens in the same session, and keep at least one client-side verified owner on every property before the agency steps back (Google: a property needs at least one verified owner; client-side is project policy). | universal | B | [source: https://support.google.com/webmasters/answer/7687615, B, 2026, opened 2026-10-30] | G |
| U24.4 | Transfer the code repository to the client's account (or add the client as an admin of it) before handoff acceptance, after checking which secrets, deploy keys and webhooks travel with it and settling any custom-domain DNS first. | universal | B | [source: https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository, B, 2026, opened 2026-10-30]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U24.5 | No secret (API key, token, password) appears in the repository, the handoff pack, the editing guide or any message; secrets live in the host's secret store, and a leaked one is rotated at once (see U21). | universal | B | [source: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning, B, 2026, opened 2026-10-30]; [source: playbook/_research/R13-parts/STANDING-RULES.md, C, 2026] | G |
| U24.6 | The editing guide covers each editable content type: where to edit, which fields, what not to touch, how to preview, publish and roll back; the client's named editor edits one real item during training and the guide is fixed where they got stuck. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U24.7 | A governance table names, for each content area (prices, hours, team, offers, reviews, legal pages), the owner, who may edit, the review step before publishing and the review interval; fact changes go through the record first. | universal | C | [source: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/manage-existing-govuk-content/, A, 2026, opened 2026-10-30] | R |
| U24.8 | Every page with time-sensitive facts carries a review date; a monthly job lists overdue pages, and outdated content is updated or retired (redirects per U06.12). | universal | C | [source: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/manage-existing-govuk-content/, A, 2026, opened 2026-10-30] | G |
| U24.9 | Legal pages have a named owner and a next review date in the handoff pack, and their review goes to counsel, never to the editor alone (see U20). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U24.10 | Care-plan options are written as tiers (for example none, hosting only, maintenance, maintenance plus content and reporting), each listing included tasks, incident response times, exclusions and how changes are requested; prices sit in the proposal (see U01), never in this module. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U24.11 | The incident runbook names contacts (client, agency, host, registrar), severity levels, first steps for site down, defacement, forms not delivering, domain or certificate expiry and leaked secrets, who tells customers, and a short post-incident note. | universal | A | [source: https://csrc.nist.gov/pubs/sp/800/61/r3/final, A, 2025, opened 2026-10-30] | R |
| U24.12 | Backups follow U21.13 (see U21), which owns the rule; the care plan names who runs the scheduled restore test and where its result is logged. | universal | A | [source: https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data, A, 2026, opened 2026-10-30] | G |
| U24.13 | Leads, form submissions and logs are kept only for the retention period stated in the privacy policy, which counsel sets per jurisdiction; the runbook includes the deletion step and who runs it. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U24.14 | Owner of the post-launch checks (U23.19 points here): they run at T+7, T+30 and T+90 from the item list in section 8 of `playbook/kit/handoff-pack.md`, each with an owner and a logged result; T+7 and T+30 results are added to the pack before S7, and T+90 is scheduled with an owner under the care plan or the project is closed out (see U23). | universal | C | [source: playbook/kit/handoff-pack.md, C, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U24.15 | Handoff acceptance happens only when every section of `playbook/kit/handoff-pack.md` is filled or marked not applicable with a reason, known issues are listed, and the client signs; the care plan starts after that signature. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U24.16 | The live site has an uptime check, a scheduled test submission on every conversion path that confirms both U08.12 destinations, and an automated alert on outages and errors, each routed to the U24.11 incident contact; the care plan names who watches them. | universal | B | [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30] (Play 12: monitor in real time, automated alerts) [source: playbook/kit/handoff-pack.md, C, 2026] | G |

## Anti-patterns
- The domain registered in the agency's account "for convenience". The client cannot leave without asking; register in the client's account and delegate access (U24.1).
- Admin passwords in a shared document or chat. Anyone with the file has every account, and leavers keep access; invite named accounts (U24.2, U24.5).
- A former contractor still verified in Search Console because only the user was removed. Remove the token too (U24.3).
- An editing guide no client ever opened. Test it with the real editor during training (U24.6).
- Backups that live on the same host as the site and were never restored. Keep one copy elsewhere and test restores (U24.12).
- A care plan that says "maintenance" with no task list. Disputes follow; list tasks, response times and exclusions (U24.10).
- Launch day as the last contact. Schedule the T+7, T+30 and T+90 checks before launch (U24.14).

## Checklist
- [ ] Ownership matrix complete; every asset in a client account (U24.1).
- [ ] Access matrix filled; no shared passwords (U24.2).
- [ ] Leaver procedure tested once; client-side verified owner on each property (U24.3).
- [ ] Repository transferred or client is admin; secrets and DNS checked first (U24.4).
- [ ] Secret scan clean on repo and handoff pack (U24.5).
- [ ] Editing guide tested by the client's editor (U24.6).
- [ ] Governance table agreed with the client (U24.7).
- [ ] Review dates set; overdue-page job running (U24.8).
- [ ] Legal pages have owner and next review date; counsel named (U24.9).
- [ ] Care-plan tier chosen and its task list signed (U24.10).
- [ ] Incident runbook filled with real contacts (U24.11).
- [ ] Backup schedule live; full and partial restore tested (U24.12).
- [ ] Retention periods set by counsel and deletion step written (U24.13).
- [ ] T+7, T+30 and T+90 checks scheduled with owners (U24.14).
- [ ] Handoff pack signed (U24.15).

## How an AI builder uses this
The builder reads `site.yaml` (owner accounts, editors, platforms, care-plan choice, jurisdictions), the repository, the launch card from U23, the event map from U19 and the legal page list from U20. It produces a filled draft of `playbook/kit/handoff-pack.md`: ownership and access matrices, editing guide, governance table, incident runbook, backup and restore steps, retention notes and the dated post-launch check schedule. It must refuse to write any password, key or token into a file or message, to register an asset in an agency account without the client's written choice, to mark handoff accepted without the client's signature, and to set retention periods without counsel. Overlays may add vertical tasks (for example menu or event updates) to the governance table.

## Open questions
- Owner: the care-plan model and tiers remain open; prices are set in U01.
- Evidence: the Search Console permissions page was re-opened 2026-10-30 and holds for token removal and "at least one verified owner"; U24.3 is B because the client-side part is project policy.
- U24.7/U24.8 cadence and governance table are project policy (grade C); GOV.UK only says to monitor content regularly (opened 2026-10-30).
- Owner: which CMS or editing path self-editing clients get; it changes the editing guide.
- counsel: retention periods for leads and form data per jurisdiction (see U20).
- V206 (unverified, from tutorial 1dvdXWmQXM8): before choosing a builder platform, check what it bundles, how the project exports and who owns it.
- V207 (unverified, from tutorial M5cJV3sF5rs): explain domain versus hosting to the client in plain words during training.
- V208 (unverified, from tutorial dYUL9-m6U1o): a retainer that bundles hosting with small updates and additions.
