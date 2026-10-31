# Slop test (gate 9)

Answer each item yes or no, naming the screenshot it was judged on (`shots/<name>-390-fold.png`, `-1440-fold.png`, and the slices down to the footer), with one line of reason. "Yes" means the statement is true. Write the answers in the table of `templates/09-slop-test.md`, as yes or no.

**Pass: at least 12 of 15 yes, and items 1 to 4 all yes.** This is our convention, not a measured threshold. The anti-slop guide uses the same line. The items are adapted from the guide's test.

| # | statement (yes = pass) | tells (SKILL.md table) |
|---|---|---|
| 1 | Every review, quote, rating, number, name, date and opening time on the page is in `01-facts.md`. Judge it from `08-fact-audit.md` (built from `<name>-text.txt`) and one full read of that text file, not from screenshots. | 4, 10 |
| 2 | No person shown is generated or stock. No stand-in image is presented as the client's own work, place or product. Any generated image is labelled as generated. | 2, 12 |
| 3 | No lorem, unlabelled placeholder, empty section or dead section is visible. Sample values carry the label the brief requires, and empty image slots say what is needed. This is the draft rule: a page that shows any placeholder or sample value is a draft and is never published. | 8 |
| 4 | The 390 fold (on a call-first trades page, also the 358 x 667 first screen) shows what is offered, where or for whom (when known), every overlay-required first-screen line, and exactly one filled primary action. No second filled action or sticky bar sits on top of it. | 6, 7 |
| 5 | The H1 names the offer or the visitor's need in plain words, not a slogan. There is no adjective stack ("seamless", "world-class"). | 6, 19 |
| 6 | The section order follows the page's own argument, not hero, logos, features, testimonials, pricing, then a centered "Ready to…?" band. Most text is left-aligned, with at most one centered moment. | 5, 18 |
| 7 | Neighbouring sections use different compositions. No section is a row of equal icon-heading-text cards. The navigation, forms and footer are styled from the direction, not left as browser or template defaults (a bordered form box, default links, a footer of placeholders). | 14, 23 |
| 8 | The two type families are visibly different, and heading and body sizes differ by clear steps. The body face is not a default (Inter, Roboto, Open Sans, Arial, system) unless the brief pins it. | 16, 17 |
| 9 | The accent color appears only on actions: not on heading words, dividers, icons, bullets or background panels. A use the brief pins (for example a logo mark in the brand color) does not count against this. | 20 |
| 10 | There is no gradient text, glow blob or aurora wash. Light or dark suits where and how the page is used. | 9, 13 |
| 11 | There is no eyebrow or kicker label above headings, no tracked-caps tag pill, no "A · B" meta string, and no 01/02/03 marker without a real sequence. | 11 |
| 12 | All text over images or color fields is readable. Nothing covers the headline. No text is clipped and no component is cut off at the 390 edge. Sample components carry labelled detail, not bare blocks. The still screenshot looks complete without motion. | 3, 1, 24 |
| 13 | Radius, shadow and spacing differ by role (controls, panels, media), and groups are tighter inside than between. It is not one radius and one grey shadow everywhere. | 15 |
| 14 | Icons and illustrations are one drawn set with one stroke. There is no emoji, category mascot or clip-art stand-in. | 21, 2 |
| 15 | Cover the business name on the 1440 and 390 folds: the page could not be mistaken for a typical competitor's. Something from the subject inventory is visibly the design idea. | 22, 5 |
