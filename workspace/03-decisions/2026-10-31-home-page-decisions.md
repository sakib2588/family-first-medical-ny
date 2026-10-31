# Home page decisions (owner, 2026-10-31)

Source: the Home question round in the cloud session, drawn from the Site1 rulebook (`workspace/_site1-rulebook/`: intake questionnaire, content request "Home", medical-wellness overlay, U05, U08). The owner answered "yes" to every suggested default. Approver for Home: the owner (client approver comes later).

Rule in force (U00.10): on the real site an unanswered fact is omitted, never shown as a placeholder. In this design demo the agreed placeholders stay, marked as demo, and every fact comes from `src/data/practice.ts`.

| # | Question (rulebook source) | Decision | What it changes on Home |
|---|---|---|---|
| 1 | One primary action (intake Q2.1, medical-wellness "Primary conversion") | "Request a visit" is the one filled action; Call is outlined or text | One filled button per screen (U08.2); sticky bar keeps Request filled, Call outlined |
| 2 | What happens after a request (Q2.3) | "We'll call you back during office hours." No time promise until the client confirms one | Remove "within one business day" |
| 3 | Name and ages (Q1.1, Q1.2) | Working name "AIMSS Family Health"; newborns through adults | Unchanged |
| 4 | Offices (Q1.5, Q1.6) | Elmhurst and Hicksville stay as demo placeholders | Unchanged, read from `practice.ts` |
| 5 | Proof (U05.2, U05.3) | Nothing verified yet: no proof strip, no "accepting new patients", no rating or review | Remove the hero proof strip, the sample star rating and quote, and the "accepting new patients" FAQ answer |
| 6 | Patient portal (medical-wellness; deferred Q13) | No portal link until confirmed | None added |
| 7 | Languages (Q1.12) | English only for now; language-help line in the footer | Unchanged |
| 8 | Insurance on Home (medical-wellness trust signal 2) | "Call to check your plan"; no plan list until the client sends one with a date | Remove "most plans accepted, including Medicaid and Medicare" and the plan pills |
| 9 | AIMSS or Donate link (nonprofit overlay) | Neither until the practice's link to AIMSS is confirmed | None added |
| 10 | Who approves Home (Q11.1; deferred Q4) | The owner, for now | Owner signs off on the PR |
| 11 | Photos (Q6.11) | Stand-in photos, labelled demo, one consistent treatment | One grade for every photo; no doctor photo repeated in the hero |
| 12 | Design direction (`home-demo-direction.md`) | Keep it (warm clinic + quiet editorial, arch device, AIMSS palette); fix the open critique points | Hero doctor-avatar repeat, dark About band, mixed photo treatment |

Also unverified and therefore removed with #5: "Same-day sick visits" (hero strip, Services note, FAQ) and the hard-coded "Open today until 6 PM · Elmhurst office" line (hours must come from `practice.ts`; red line in CLAUDE.md).

Counsel items unchanged: the legal pages stay DRAFT (deferred Q19).
