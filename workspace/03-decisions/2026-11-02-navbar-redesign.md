# Decision: navbar redesign (2026-11-02)

Request: the owner wants the whole navbar (desktop header, phone header, phone menu drawer) to feel more professional and polished, with tasteful animation; calm, warm, credible, no "AI look". Branch `feat/navbar-redesign` (not merged; owner reviews first).
Skills: frontend-design-direction, design-system, make-interfaces-feel-better, motion-foundations (principles only, CSS + a small Astro script, no React).

Structure kept from `2026-11-02-nav-hero-like-sample.md`: Doctors, Services, All ages, Locations, Insurance, FAQ; filled "Make an appointment" opens the call dialog; ghost "Visit" from 1536 px; menu button below 1280 px.

## Desktop
- Utility row: smaller type (0.84 rem), hairline dividers between the two offices and before the Pause control, phones in white with a thin aqua underline. Language help + compact Pause stay on the right.
- Logo: a small uppercase descriptor "Family medicine & pediatrics" under the name from lg up (header only; the sample's lock-up has one). Honest, no claims.
- Sticky bar: once it actually sticks (a zero-height sentinel, not a guessed scroll offset) it compacts from 85 to 73 px visible by `transform` only (header up 12 px, content down 6 px, mark scales to 0.9), frosts (white 90 % + blur) and takes a soft shadow. No height animation, so nothing below reflows (measured CLS 0). Opaque under reduced transparency.
- Links: one 2 px teal indicator slides (transform only, 0.5 s ease-out) to the section you are reading (existing scroll-spy, `aria-current="location"`) and previews the link under the pointer or keyboard focus, returning to the current one after. Without JS the old underline still works; forced colours fall back to a system underline.
- Make an appointment: same filled teal, a calmer shadow (no glow), an inner highlight, the phone icon tilts on hover, scale 0.97 on press.

## Phone
- Header: logo + a Menu pill (1 px hairline border, no shadow) with a three-line icon whose short bottom line grows on hover. Logo text 0.95 rem under 360 px (fixes the 320 px case where the Menu pill crossed the 16 px gutter), label hidden under 380 px as before.
- Drawer: a plain, full-bleed table: two-column link grid, "Request a visit online" row with an outlined arrow circle, "Call an office" rows (place + number on one line, open status under it on one line), language help + "In an emergency, call 911." pinned at the bottom. No rounded boxes, no Pause control. Full width under 360 px so the logo and Close never touch.
- Motion (one-shot, transform/opacity only): panel slides in 420 ms on the sheet curve, leaves in 220 ms; rows arrive in reading order (25 ms apart, 420 ms each, all done by 760 ms); the Close icon starts as the menu lines, meets in the middle and turns into an X. Reduced motion: no animation at all, the X is the resting state. Nothing loops (phones keep the iteration-count-1 rule).
- Scroll-spy now also marks the current section in the drawer (teal words + a short rule; two cues, not colour alone). Background scroll is locked while the drawer is open on phones.

## Not done / later
- Header button and hero button are both filled on wide desktop (known exception from the sample decision); unchanged.
- Not tested on a real iPhone/Android (Playwright Chromium only); Safari's `@starting-style` and `overlay` support should be checked on a device.
