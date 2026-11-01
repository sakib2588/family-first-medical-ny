# Hero photo plan (2026-11-01)

Owner asked for a top section like the reference site (big serif headline, doctors over a clinic backdrop, name cards).
Built now with stand-in photos; the real photos below replace them before launch (with written consent).

| Slot | Where it goes | What to shoot | Size / crop | Stand-in now |
|---|---|---|---|---|
| PHOTO 1 | Hero backdrop (behind headline and doctors) | Reception desk with the practice sign on the wall, bright, no patients | 2400x1600, landscape; keep top-left calm for the headline | CSS "room" gradient in `Hero.astro` (`.hero-room`) |
| PHOTO 2 | Hero, left card | Doctor 1 (pediatrics), waist up, facing camera, plain clinic background | 1000x1250 (4:5), head in top third | `public/demo/doctor-male.webp` (Unsplash) |
| PHOTO 3 | Hero, right card | Doctor 2 (family medicine), same framing and light as Photo 2 | 1000x1250 (4:5) | `public/demo/doctor-female.webp` (Unsplash) |

Rules: no credentials or "board-certified" on the cards until checked (NYSED/ABMS, dated). Photos local only (no hotlinks).
To swap: put files in `public/photos/`, set `img`/`alt` in `src/data/practice.ts`, and replace `.hero-room` with an `<img>` backdrop.
