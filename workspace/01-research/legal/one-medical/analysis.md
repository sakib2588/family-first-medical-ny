# Legal / footer analysis: One Medical (onemedical.com)
Captured 2026-10-31. Not legal advice. Desktop homepage returned 403 earlier; phone capture and plain HTTP gave partial results.

## Footer inventory
- Layout: Locations list (about 30 metro links incl. New York), then Blog / Media center / About / Sponsored membership / Careers / Contact us / FAQ / Give a membership; social (5); legal row: One Medical Terms of Use | Medical Terms of Service | Privacy Notice | SMS Short Code Terms of Service | Notice of Privacy Practices | Notice of Non-Discrimination | Employee Privacy Notice | Medical Records Privacy and Deletion Requests.
- Entity line: "(c)2026 1Life Healthcare, Inc." plus "services are only available in the U.S." No NAP, hours or 911 line; no accessibility statement link.
- A site-wide "Security Event Notification" banner link exists.

## Policy pages
| Page | Result | Notes |
|---|---|---|
| Privacy Notice | 200 but redirects to amazon.com customer-service privacy page | Last updated June 30, 2026 (Amazon's date); ~4,370 words; the site's privacy notice is Amazon's, not One Medical-specific. |
| Notice of Non-Discrimination | 200 | ~465 words; includes Civil Rights Coordinator email and HHS OCR portal/phone; one page also bundles a "Service Animal Policy". |
| SMS Terms | 200 | ~205 words; routes to per-short-code terms. |
| Terms of Use, Medical Terms of Service, NPP, Data rights form | page loads a shell that says "Loading ... " | Text is injected by JavaScript; static fetch has no policy text; browser render attempt got HTTP 403 (CloudFront). Recorded as **blocked / not captured**. |

## Flaws / risks
1. Policy text delivered via JavaScript (static HTML shows only "Loading HIPAA Notice..."): fails no-JS users and some assistive tech/crawlers.
2. Footer "Privacy Notice" leaves the brand and lands on a parent-company (Amazon) page: expectation break (verify with counsel that entity naming is right).
3. Eight legal links is a long list; no accessibility statement.
4. Combining a service-animal policy inside the nondiscrimination page buries it.
5. Dates visible only on the Amazon page.

## What to borrow
- Separate links for SMS terms, medical terms vs website terms, records deletion requests, and a Civil Rights Coordinator email on the nondiscrimination page.
