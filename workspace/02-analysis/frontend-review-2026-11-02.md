# Full front-end review of main @ 4320559 (Opus, 2026-11-02) and what was done

Verdict: technically clean (no overflow at 360-1920, no console errors, no third-party requests, dialogs and form work, contrast passes). Problems are credibility and the "AI look" in older sections.

## Fixed in branch feat/navbar-redesign
- Insurance heading no longer names Medicaid / Child Health Plus (red line: no plan named until confirmed): now "Public insurance plans". (#3)
- Reviews section retitled "Reviews on Google" with a plain line (no implied quotes; the link was a search sample). (#4)
- Stale nav highlight: the current link now clears at the top and over sections not in the nav. (#14)
- Stray eyebrow rules inside doctor cards hidden on every page. (#10)
- "Led by ... or" gap on phones (flex-wrap). (#11)
- Tap targets: Inside office heading links and footer office heading links now 44 px. (#13)
- Hero H1 smaller under 380 px so it does not break to 4 lines. (#15)
- FAQ H2 "Common questions"; Care by age line reworded. (#17, #30)
- Hero doctor images alt="" (name already in the link text). (#23)
- Pause button keeps one fixed label; aria-pressed carries the state. (#22)

## NOT fixed - needs the owner, the client or real assets
- P1 stand-in photos show readable hospital names, ER signs, a Spanish hospital sign (hero backdrop at 1920, Elmhurst entrance) and a badge reading "UROLOGIC ONCOLOGY": replace with real or neutral photos (blocked by client photos). (#1, #2, #9)
- Services cards use five rainbow gradient discs and a bobbing loop (owner asked for colourful Services in round 18; reviewer calls it the "AI look"): owner decision. (#5)
- Doctor-panel "TEST" sparkle particles: owner decision to keep or remove. (#6)
- Glass cards with glowing icons in Visits and Contact, rose gradient tile in Inside: owner decision. (#7, #8)
- Header filled button plus other filled buttons on one screen: owner decision (ghost after the hero?). (#16)
- Unconfirmed sample() facts read as fact (English and Spanish, answering service, parking, LIRR, schedules): add to the client checklist. (#18)
- Privacy draft should mention localStorage (aimss-motion) and sessionStorage (splash-seen): needs counsel/legal review. (#19)
- Home phone hours shown as a run-on line, not the table (#12); particles show through Care by age cards (#20); drawer focus starts on the logo (#26); open-status CLS 0.043 (#27); today row looks like a button (#28); Insurance 01-03 numbering (#29); phone number wraps on the privacy page (#21); focus ring clipped in the top bar (#32): polish backlog.
