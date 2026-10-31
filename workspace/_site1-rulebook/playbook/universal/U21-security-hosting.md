# U21. Security and hosting

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers where the site lives, who controls the domain, hosting and email, and what protects the site and its visitors: HTTPS and headers, form anti-spam and rate limits, secrets, dependencies, payment-page scripts, backups and email delivery. It runs from the first deploy through launch (see U23) and hands the account map to the client at handoff (see U24). Cookie and consent posture is in U20 (see U20).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U21.1 | The domain is registered in the client's own registrar account with the client's accurate contact data, and DNS, hosting, repository and sending-email accounts are the client's too, as recorded in `hosting`; nothing is held back for payment (see U01, U24); ICANN supports the accurate-contact-data part only, account ownership is owner policy. | universal | B | [source: https://www.icann.org/resources/pages/benefits-2013-09-16-en, B, 2026, opened 2026-10-30]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U21.2 | The builder gets access by invitation to a named personal account at the lowest role and narrowest scope that does the job (for example staging only), never by a shared or sent password; the access matrix lists person, tool, role, scope, date granted and date to remove. | universal | B | [source: https://developers.cloudflare.com/fundamentals/manage-members/, C, 2026, opened 2026-10-30]; [source: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U21.3 | Every page and asset is served over HTTPS only, HTTP redirects to HTTPS, and HTTPS responses send `Strict-Transport-Security` with a max-age of at least one year (31536000); `includeSubDomains` and `preload` are added only after every subdomain is confirmed to serve HTTPS. | universal | B | [source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security, B, 2026, opened 2026-10-30]; [source: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U21.4 | Every response carries the header set: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a `Permissions-Policy` that disables features the site does not use (camera, microphone, geolocation), CSP `frame-ancestors 'self'` (or `X-Frame-Options: DENY`), and no `X-Powered-By` header. | universal | B | [source: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U21.5 | A Content-Security-Policy that blocks inline script (nonce- or hash-based) is rolled out in `Content-Security-Policy-Report-Only` first, violations are fixed, then it is enforced on all responses; the site passes an MDN HTTP Observatory scan before launch. | universal | B | [source: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html, B, 2026, opened 2026-10-30]; [source: https://developer.mozilla.org/en-US/observatory, B, 2026, opened 2026-10-30] | G |
| U21.6 | Owner of the spam and bot rule (U08.13 points here): every form validates input on the server and its endpoint is rate-limited per IP; spam control starts non-interactive (honeypot field, server-side validation, rate limits); a bot check or interactive challenge is added only on evidence of bot attacks, its token is verified server-side (for example Turnstile's siteverify call, single-use and valid 300 seconds), it offers more than one mode, and no step needs a puzzle or memory test without an alternative; a failed check returns a clear message, never a silent drop of a real lead. | universal | B | [source: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/, C, 2026, opened 2026-10-30]; [source: https://cheatsheetseries.owasp.org/cheatsheets/Denial_of_Service_Cheat_Sheet.html, B, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/turingtest/, B, 2021, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U21.7 | No secret (API key, token, password, webhook URL with a key) is in the repository, a project config file, a chat message or a document; secrets live in the host's secret store or environment, `.gitignore` excludes env files, and `checks.py secrets` plus the host's secret scanning run before every push. | universal | B | [source: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html, B, 2026, opened 2026-10-30]; [source: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning, B, 2026, opened 2026-10-30] | G |
| U21.8 | A secret that was exposed anywhere is rotated at once and the exposure logged in the incident runbook (see U24); deleting the commit is not enough, because scanning covers the full Git history. | universal | B | [source: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning, B, 2026, opened 2026-10-30]; [source: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U21.9 | Every pull request runs `npm audit --audit-level=high` (or the stack's equivalent), which exits non-zero on a high or critical advisory and blocks merge; the lockfile is committed and dependencies are updated on the care-plan schedule. | universal | A | [source: https://docs.npmjs.com/cli/v10/commands/npm-audit, B, 2026, opened 2026-10-30]; [source: https://top10.owasp.org/2025, A, 2025, opened 2026-10-30] | G |
| U21.10 | Agent skills, plugins, connectors and packages from outside sources are installed only after a scan, a license check and a record in the manifest, and agent tools never run with permission prompts bypassed. | universal | A | [source: https://top10.owasp.org/2025, A, 2025, opened 2026-10-30]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U21.11 | Third-party scripts loaded from another origin carry a Subresource Integrity hash where the vendor supports it, and tag-manager publishing rights are limited to named people who review changes like code (see U17). | universal | B | [source: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U21.12 | A site that takes card payments in an embedded processor iframe or form records, before launch, how it meets the PCI SSC point that the merchant confirm the site "is not susceptible to attacks from scripts": its own script controls like requirements 6.4.3 and 11.6.1, or written confirmation from the processor; as of 2026-10-30, counsel review needed and a QSA confirms scope. | universal | A | [source: https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/how-does-an-e-commerce-merchant-meet-the-saq-a-eligibility-criteria-for-scripts, A, 2025, opened 2026-10-30] | R |
| U21.13 | Owner of the backup rule (U24.12 points here): source, CMS content, form submissions and configuration are backed up on a schedule, encrypted, in three copies on two media with one off the host; a full and a partial restore are tested before launch and on the care-plan schedule, and the restore steps are written down (see U24). | universal | A | [source: https://www.cisa.gov/stopransomware/ransomware-guide, A, 2026, opened 2026-10-30]; [source: https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data, A, 2026, opened 2026-10-30] | R |
| U21.14 | The domain that sends form notifications has SPF and DKIM set, a DMARC record starting at `p=none` with aggregate reports to a shared mailbox and moving to `quarantine` then `reject` as reports allow, and the From domain aligns with the SPF or DKIM domain. | universal | A | [source: https://support.google.com/a/answer/81126, A, 2026, opened 2026-10-30]; [source: https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure, A, 2026, opened 2026-10-30] | G |
| U21.15 | Form notifications are sent over TLS through an authenticated sending service on the client's domain (never a spoofed Gmail From address), and before launch a test submission is confirmed in the inbox, not in spam, at each recipient's mail provider. | universal | A | [source: https://support.google.com/a/answer/81126, A, 2026, opened 2026-10-30] | G |
| U21.16 | A domain the client owns but does not use for email publishes a DMARC record with `p=reject` so it cannot be spoofed. | universal | A | [source: https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure, A, 2026, opened 2026-10-30] | G |
| U21.17 | Error pages and form errors show a plain message and never a stack trace, framework version or server detail; the `Server` header is removed or set to a non-informative value. | universal | B | [source: https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html, B, 2026, opened 2026-10-30]; [source: https://top10.owasp.org/2025, A, 2025, opened 2026-10-30] | G |

## Anti-patterns
- The domain registered in the agency's account "for convenience". Fix: the client's account, delegated access (U21.1).
- Admin passwords in a shared document or chat. Fix: named invitations, access matrix (U21.2).
- An API token pasted into a config file inside the project folder or into an agent chat. It leaks through version control and sharing. Fix: host secret store, scan before push (U21.7).
- HSTS preload switched on before every subdomain serves HTTPS, locking visitors out. Fix: preload last (U21.3).
- A contact form with only client-side checks. Bots post straight to the endpoint. Fix: server validation, verified bot token, rate limit (U21.6).
- Lead emails sent from an unauthenticated address and landing in spam. Fix: SPF, DKIM, DMARC and an inbox test (U21.14, U21.15).
- Backups on the same host as the site and never restored. Fix: off-host copy and a tested restore (U21.13).
- Running an agent with permission prompts bypassed, or installing a skill from a video link unread. Fix: scan, license check, prompts on (U21.10).

## Checklist
- [ ] Domain, DNS, host, repo and email accounts owned by the client and listed in `hosting` (U21.1).
- [ ] Access matrix filled; invitations only; removal dates set (U21.2).
- [ ] HTTPS only; HSTS at one year or more; preload decision recorded (U21.3).
- [ ] Header set present on all responses; Observatory scan passed (U21.4, U21.5).
- [ ] CSP enforced after report-only phase (U21.5).
- [ ] Forms: server validation, verified bot token, rate limit, clear error message (U21.6).
- [ ] `checks.py secrets` and secret scanning pass; no secret in any file (U21.7).
- [ ] Any exposed secret rotated and logged (U21.8).
- [ ] Dependency audit in the pull-request gate (U21.9).
- [ ] Outside skills and packages scanned, licensed, recorded; no bypassed permissions (U21.10).
- [ ] SRI on third-party scripts where supported (U21.11).
- [ ] Payment-page script decision recorded with counsel and QSA (U21.12).
- [ ] Backups encrypted, off-host copy, restore tested (U21.13).
- [ ] SPF, DKIM, DMARC set; test lead lands in the inbox; parked domains locked (U21.14, U21.15, U21.16).
- [ ] Error pages leak no server detail (U21.17).

## How an AI builder uses this
The builder reads `site.yaml` (`hosting`, `features`, `legal.triggers`, `analytics.tools`), the tag register from U17 and U19 and the access matrix from U01. It produces the header configuration, the CSP in report-only then enforced form, form validation with bot check and rate limit, the dependency-audit and secrets steps in the pull-request gate, DNS records for SPF, DKIM and DMARC as instructions for the client's account owner, and the backup and restore note for the handoff pack. It must refuse to accept or store a password, to write a secret into any file or message, to register any account in its own name, to run tools with permissions bypassed, to install an unscanned skill, and to say a payment page meets PCI DSS; that question goes to counsel and a QSA. The ecommerce, donations and booking model overlays add their payment and data rows.

## Open questions
- Owner: staging access control (password or IP gate, not only `noindex`) is not yet a rule; source to open before it becomes one.
- `counsel`: how far an embedded payment iframe moves the script duty off the merchant; vendor interpretations disagree (R14 Part 6). A QSA should confirm per integration.
- `counsel`: the effective dates of PCI DSS 4.0.1 requirements 6.4.3 and 11.6.1 were not opened tonight; do not state them until checked.
- V170 (unverified, from tutorial 86HM0RUWhCk): deploy through a connected repository with auto-deploy; fits the branch-preview-merge method but needs a primary source.
- V171 (unverified, from tutorial 86HM0RUWhCk): check for keys before pushing; already required by U21.7.
- V172 (unverified, from tutorial 86HM0RUWhCk): go live on the host's temporary subdomain first, then attach the real domain.
- V173 (unverified, from tutorial UQ9PbbPNvnc): read what an agent created in a backend dashboard, including access rules.
- V174 (unverified, from tutorial VMvZuhcDdnw): pick the hosting plan by site type (static versus accounts, payments or database).
- Owner decision: default bot-check vendor and form back end per stack, and whether its free plan fits every client.
- Rate-limit numbers per form are not set by any opened source; set per stack and record them.
