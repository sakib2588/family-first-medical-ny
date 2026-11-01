# Decision: nav and hero follow the sample's structure (2026-11-02)

Source: the boss asked for "nav and hero same like sample" (familyfirstmedicalny.com); user answered the four plan questions with the defaults. Plan: `02-analysis/plan-nav-hero-like-sample-2026-11-02.md`.

- Nav (from 1280 px): Doctors, Services, All ages, Locations, Insurance, FAQ; filled "Make an appointment" opens the call dialog; ghost "Visit" only from 1536 px. Below 1280 px the menu button replaces the links.
- Hero: pill, 3-line headline, filled call + ghost visit, "Or request a visit online", both doctors + benefit lines in one card. Phone bottom bar: "Make an appointment" + "Visit".
- Left out on purpose: "board-certified", "accepting new patients", "Open 7 Days", "most insurance" (red lines until the client confirms and dates them). Portal, video visits, booking and bill pay wait for the client's answer.
- Known exception: on wide desktop the header button and the hero button are both filled and both open the same dialog (the sample does this). The "one filled action per screen" rule is bent here; if the owner objects, make the header button ghost.
- Band colours: Insurance periwinkle `#e6e9f7 -> #dde2f3`, Reviews aqua `#dcf1ee -> #cdeae6`, chosen by hue because pale tints are only 1.05-1.25:1 apart in luminance.
