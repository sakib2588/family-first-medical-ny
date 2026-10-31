# Legal / footer analysis: Mount Sinai Doctors-Concierge Care (conciergecareny.mountsinai.org)
Captured 2026-10-31. Not legal advice.

## Footer inventory
- Layout: three short link groups (Mount Sinai Doctors-Concierge Care; Membership Options; Resources incl. Member Portal, Blog), Facebook and Instagram icons, then one legal line: "(c)2026 Mount Sinai Doctors-Concierge. Privacy Policy | Terms and Conditions | HIPAA Privacy Practices".
- No NAP, hours, 911 line, accessibility, nondiscrimination, patient rights, price or SMS link in the footer. A contact form is present in the page (1 form).

## Policy pages
All three legal links point to the parent domain (mountsinai.org/privacy, /tou, and the HIPAA compliance program page) and return **blocked (HTTP 403 "Access Denied")** to a plain HTTP fetch; not retried and no evasion attempted. Date, words and coverage: unknown (blocked). Owner may capture manually.

## Observed from the site capture
- Page loads Google tag, LinkedIn Insight, OneTrust and Cookiebot (two consent managers) and Salesforce: the consent stack is visible, the policy text it should match is not.

## Flaws / risks
1. Legal pages live on another domain/brand (parent system); a visitor leaves the concierge site to read them.
2. Two consent-manager scripts (OneTrust and Cookiebot) detected: possible duplicate/conflicting banners (verify in browser).
3. HIPAA link goes to the system's compliance program page, not an NPP document (by link label only; unverified).
4. No accessibility or nondiscrimination link.

## What to borrow
- Single compact pipe-separated legal line is easy to scan; keep it but add the missing items.
