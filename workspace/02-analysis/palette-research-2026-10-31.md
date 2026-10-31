# Palette research and options (2026-10-31)

Owner asked: research better colour combinations; his reference demos all use one dark base, one bright accent and one strong action colour.

## What the research says (web search, 2026-10-31)
- No rigorous study tests navy, teal or coral on healthcare websites. Most advice comes from agency and tool blogs, so treat it as opinion.
- The consistent advice: a calm, cool base (blue, navy, teal) reads as trust; a warm accent used sparingly guides action; pediatric and family sites benefit from one warm colour. Mid teals often fail with white text (our brand teal does: 4.18:1).
- One narrow randomized trial (MDPI 2023) found that the colour and size of an online consultation dialog changed patients' sense of authority and booking intent. It is not about palettes.
- Sources: inspoai.io healthcare palette; o360 colour psychology; progress.com healthcare colour; mdpi.com/2076-328X/13/7/584.

## Options (preview: 04-logs/home-demo/palette-options.png)
| Option | Base | Accent (on dark only) | Action on dark | Action on light | Contrast notes |
|---|---|---|---|---|---|
| A, current | indigo #17123a | aqua #5fc4c4 (8.6:1) | gold #d9a02c, indigo text (7.61:1) | teal-deep #0b6f6f (5.97:1) | all pass AA |
| B | midnight #141c3f | aqua #7ce3d6 (10.9:1) | coral #ff8a73, midnight text (7.21:1) | teal #0e6b63 | all pass AA; warmest, closest to the owner's demos |
| C | deep teal #0f3b3f | mint #9fd9cf (7.74:1) | coral #e86a4f (4.47:1: fails for normal text; needs a darker coral) | deep teal | fix needed |

Note: the preview puts the accent on one headline word only to show the colour. On the site, the accent stays on actions only (Gate 9 item 9).

## Form and footer fixes (from the owner's phone screenshots)
- Form: selected office and time chips are filled teal, so they compete with the one filled "Send request". Fix: a selected chip becomes white with a 2 px action-colour border and a check mark. The field border becomes darker for 3:1 against the panel. Helper text uses the body colour. Touching the form goes through the HIPAA skills first; fields stay contact-only.
- Footer: long single column on phone, with Explore links as tall rows and the policy grid wrapping. Fix: the two offices side by side at 390 as compact blocks (name, number, status), Explore and Policies as two-column link lists at about 44 px rows, the 911 band kept, and the footer about 40% shorter.
