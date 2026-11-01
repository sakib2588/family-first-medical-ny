# Photo map: every image on the site and the real photo that replaces it (2026-11-01)

The owner decided the demo must read as the client's own site, so the screen no longer says "(stand-in photo)".
This file is where we keep track of which photo goes where. **Every file in `public/demo/` is a stand-in** (Unsplash,
demo use only; see `public/demo/CREDITS.txt`) and must be replaced with a real, consented photo of the practice
before launch. The shooting brief is in `2026-11-01-hero-photo-plan.md`.

How to replace a photo:
- Save the real photo under the same file name, or a new name in `public/photos/`.
- Update the path where the table says.
- Keep the shape and the minimum size, so the layout does not move.

## Home page
| # | Where on the page | Current stand-in | Real photo needed | Shape / min size | Set in |
|---|---|---|---|---|---|
| 1 | Hero background (behind the headline, faded) | `/demo/reception.webp` | Reception desk of the main office, bright, no people's faces | wide, 1600x1000 | `Hero.astro` line ~21 |
| 2 | Hero doctor card, left | `/demo/doctor-male.webp` | **Dr. Mehta portrait** (real doctor, consent) | portrait 4:5, 800x1000 | `practice.ts` doctor `img` |
| 3 | Hero doctor card, right | `/demo/doctor-female.webp` | **Dr. Park portrait** (real doctor, consent) | portrait 4:5, 800x1000 | `practice.ts` doctor `img` |
| 4 | Trust band background, **phone and small desktop** | `/demo/child-play.webp` | Calm, warm photo (waiting room or a child with a parent, consent) | wide, 1200x800 | `FactRow.astro` `<img>` |
| 5 | Trust band background, **wide desktop (1280+)** | `/art/trust-band.webp` | Nothing: our own 3D art (rendered by `workspace/tools/render-3d.mjs`). Re-render only if brand colours change. | 2560x680 | `FactRow.astro` `<source>` |
| 6 | Welcome mosaic, tall left | `/demo/child-joy.webp` | A happy child patient (parent consent) | tall 2:3, 760x1140 | `Welcome.astro` `mosaic` |
| 7 | Welcome mosaic, top right | `/demo/exam-room.webp` | A doctor talking with a patient, either office | square, 800x800 | `Welcome.astro` `mosaic` |
| 8 | Welcome mosaic, middle right | `/demo/entrance-hicksville.webp` | A building outside (either office) | square, 800x800 | `Welcome.astro` `mosaic` |
| 9 | Welcome mosaic, wide bottom | `/demo/adult-care.webp` | Adult care moment (blood pressure check etc.) | wide 2:1, 1200x600 | `Welcome.astro` `mosaic` |
| 10 | Office card: Elmhurst (arch) | `/demo/entrance-elmhurst.webp` | **Elmhurst entrance from the street** | wide arch, 1200x600 | `practice.ts` office `photo` |
| 11 | Office card: Hicksville (arch) | `/demo/entrance-hicksville.webp` | **Hicksville entrance from the street** | wide arch, 1200x600 | `practice.ts` office `photo` |
| 12 | Care by age: Newborns and babies | `/demo/child-joy.webp` | A baby at a checkup (consent) | arch 4:3, 480x360 | `practice.ts` `ageBands` |
| 13 | Care by age: Children | `/demo/child-play.webp` | A child at a visit | arch 4:3, 480x360 | `practice.ts` `ageBands` |
| 14 | Care by age: Teens | `/demo/hands.webp` | A teen at a sports physical (consent) | arch 4:3, 480x360 | `practice.ts` `ageBands` |
| 15 | Care by age: Adults and seniors | `/demo/adult-care.webp` | An adult or senior patient | arch 4:3, 480x360 | `practice.ts` `ageBands` |
| 16 | Care by age: "Led by" chips | doctor portraits (#2, #3) | Same as #2 and #3, cropped round | round, 112x112 | automatic from `img` |
| 17 | Doctor cards (Our doctors) | doctor portraits (#2, #3) | Same as #2 and #3 | | automatic from `img` |
| 18 | Inside each office: Elmhurst, 3 photos | `/demo/reception.webp`, `/demo/waiting-area.webp`, `/demo/exam-room.webp` | **Elmhurst** reception, waiting area, exam room | 1st tall, others 4:3; 1200 wide | `practice.ts` office `gallery` |
| 19 | Inside each office: Hicksville, 3 photos | `/demo/exam-room.webp`, `/demo/waiting-area.webp`, `/demo/reception.webp` | **Hicksville** exam room, waiting area, reception | same | `practice.ts` office `gallery` |

## Other pages
| Page | Images | Real photo needed |
|---|---|---|
| `/doctors`, `/doctors/[slug]` | doctor portraits (#2, #3) | Same portraits |
| `/locations`, `/locations/[slug]` | office `photo` + `gallery` (#10, #11, #18, #19) | Same office photos |

## Rules for the real photos
- **Consent:** written consent from every person shown; no patients' faces without it; no screens with health information.
- **Format:** WebP, under 120 KB each (hero under 120 KB in total); keep the file's width and height in the `<img>`.
- **Alt text:** describes the photo, e.g. "Reception desk at the Elmhurst office". Never "stand-in".
- **One source of truth:** each photo is set once in `practice.ts` (or the component named above) and reused everywhere.
