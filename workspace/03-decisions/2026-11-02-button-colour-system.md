# Decision: one button colour system (2026-11-02, owner request)

Problem: "Request a visit" in the "What brings you in?" band was a gold button with a gold glow. Gold also meant emphasis (the word "you") and emergency ("911", the sick-today icon), while every other primary action on the site is teal with white text. The urgent call pills in the same band were the weakest controls on screen. The header Menu pill had a 1.3:1 edge.

System now (src/styles/global.css, after .btn-ghost):
| Ground | Primary | Second action |
|---|---|---|
| Light | .btn-primary: teal-deep #0b6f6f + white (5.97:1) | .btn-ghost: white + teal-deep, 1.5 px muted edge (6.7:1) |
| Dark band #2e2860 | .btn-on-dark: aqua #5fc4c4 + midnight #17123a (8.6:1; fill 6.4:1 vs band), no glow | .btn-ghost-dark: transparent + white, 1.5 px white 72% edge |
Gold is never a button fill: emphasis words, 911, the sick-today icon only. Changes: Visits "Request a visit" and the inner-page footer "Request a visit" now use .btn-on-dark; Menu pill edge now the muted edge (6.75:1).
Audit tool: workspace/tools/button-audit.mjs (known false positives: buttons inside translucent glass cards are measured against the wrong background).
