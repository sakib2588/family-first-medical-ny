# Legal / footer analysis: Northern Virginia Pediatrics (northernvirginiapediatrics.com)
Captured 2026-10-31. Not legal advice. Out of state; independent-practice footer pattern only.

## Footer inventory
- Layout: custom footer-outer block: Hours table (Mon-Thu 8-6, Fri 8-5, Sat/Sun reserved for sick visits, holidays, with a surcharge footnote), Walk-In Hours, "Quick Links" (Appointments, Accessibility, Contact, Urgent Line, Policies, Privacy, School Forms), full NAP (Northern Virginia Pediatric Associates, P.C., address, **24 Hour Phone**, fax), social (Facebook, Instagram, Google), "(c) 2026 Northern Virginia Pediatrics. Powered by WebSubstance".
- Legal entity name appears ("P.C."). No HIPAA NPP link, no nondiscrimination, no price notice, no terms of use. 911/urgent: "Urgent Line" link plus 24-hour phone.

## Policy pages
Footer links: /accessibility/, /privacy-policy/, /insurance-billing-101/, /billing-inquiries/, /forms-insurance-billing/, /walk-in-hours-2025/ (Policies hub: Types of Visits, Billing, etc.).
A plain HTTP fetch of all four tested URLs returned **403 Forbidden** (WAF). Recorded as **blocked**; not retried, no evasion. Date, words, coverage: unknown. Owner may capture manually.

## Flaws / risks
1. Site also loads Google Analytics (static scan) but policy contents could not be checked against it.
2. Weekend/holiday surcharge disclosed in hours footnote only: a good transparency habit but not tied to a billing policy link in the footer (verify).
3. No NPP / nondiscrimination link visible in footer.
4. Vendor credit "Powered by WebSubstance" adds an outbound link in the footer.

## What to borrow
- Hours + 24-hour line + legal entity + fax in one footer block; billing and "Policies" section as visible hubs; footnoted surcharges.
