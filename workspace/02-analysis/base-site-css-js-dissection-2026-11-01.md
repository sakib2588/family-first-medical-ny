# familyfirstmedicalny.com: CSS, JS and motion dissection (2026-11-01)

Source: the saved page `01-research/sites/familyfirstmedicalny/html/desktop.html` (captured 2026-10-30; the live site is blocked from the cloud).
One inline `<style>` (62 KB), 3 inline scripts (about 6 KB total), 4 JSON-LD blocks. No framework, no build step, no animation library.
Purpose: learn the style and motion grammar and re-express it in OUR tokens. We do not copy their code, copy or brand colours.

## 1. Design tokens (their `:root`)
| Group | Values | Notes |
|---|---|---|
| Ink | `--ink #07172d` (navy), `--ink-mid #4A5868`, `--ink-soft #8B97A6` | ink-soft fails AA on white (2.96:1) |
| Brand | `--red/--blue #e30620`, `--blue-deep #B30F20`, `--sky #FF6B76` | variable named "blue" holds red: re-skinned template |
| Grounds | `--bg #fff`, `--bg-soft #F8F7F7`, `--bg-tint #FAEEEE`, `--cream #fbfaf8` | white-first, tinted panels |
| Lines | `--line #E4E9F0`, `--border #edf0f4` | 1 px hairlines on every card |
| Gradients | `--grad-vivid` 100deg dark red to pink; `--grad-soft` pale pink | used on primary button, doctor panels, shimmer box |
| Radius | `--radius 22px`, `--radius-sm 14px`, pills 999px; plus 9,10,12,13,16,18,20,24,28 px ad hoc | about 18 distinct radii: inconsistent |
| Shadows | `--shadow-sm 0 2px 8px /.06`, `--shadow 0 18px 50px -18px /.22`, `--shadow-lg 0 48px 110px -34px /.42` | navy-tinted, large negative spread = soft "floating" look |
| Type | Display/body: Inter 400-800; H1/H2: Cormorant Garamond 600-700 italic; Noto Sans SC for zh | loaded from Google Fonts (external) |
| Width | `--maxw 1200px`, `.wrap` padding 0 24px | |

Type scale: H1 `clamp(42px,6vw,72px)`, line-height 1.0, letter-spacing -.03em (phone `clamp(30px,8.5vw,42px)`); H2 `clamp(27px,3.6vw,42px)` lh 1.16; lead 18px; body 14.5-16.5px; labels 10.5-13px uppercase with .1-.16em tracking. About 37 distinct font sizes: no real scale.

Breakpoints: 380, 600, 640, 760, 820, 980/981, 1000, 1361, 1681 px (9, ad hoc).

## 2. Components (what makes it look "premium")
- **Header**: sticky, `rgba(255,255,255,.88)` + `backdrop-filter: blur(14px)`, hairline bottom border. Logo lock-up: uppercase 800 wordmark + 10.5px tracked tagline.
- **Buttons**: pill, 46 px min, 700 weight. Primary = red gradient + coloured shadow `0 10px 24px -8px rgba(225,20,40,.55)`; hover lifts `translateY(-2px)` and deepens the shadow. Ghost = white, hairline, tints on hover.
- **Eyebrow pill**: white pill, hairline, small shadow, green status dot with a 4 px halo ring (`box-shadow: 0 0 0 4px`).
- **Hero**: two radial glows (red 5%, grey 7%) over a white-to-soft vertical gradient; desktop has a 3-photo strip behind a white wash (`.44 -> .965 -> .44` horizontal gradient) so photos only show at the edges. Hero card: white, 28 px radius, `--shadow-lg`, two portraits with navy caption bars (phone: captions move below, centred).
- **Chips**: white pills, hairline; JS "pulse" ripples them one by one (55 ms stagger).
- **Trust strip**: 4 glass cards on a dark photo, staggered reveal via `--rd` custom property (.05/.15/.25/.35 s).
- **Doctor card**: 300 px gradient side panel with two decorative translucent circles (`::before/::after`), round photo with a 5 px white-alpha ring, big stat number, "new patients" pill; hover lifts 3 px and grows the shadow.
- **Section head**: max 680 px, serif H2, centred variant.
- **Location card**: 16:10 photo, red pill tag top-left, icon rows, actions pinned to the bottom (`margin-top:auto`).
- **Hours**: rows with today highlighted (tint background, bold, deep red), set by JS from `getDay()`.
- **FAQ**: bordered cards, button rows 56 px, "+" rotates 45deg to "x", answer opens via `max-height` transition.
- **Mobile CTA bar**: fixed, white .96 + blur 12, safe-area padding, two buttons.
- **Call sheet**: bottom sheet over `rgba(15,27,45,.5)`, fades with opacity/visibility.
- **Back-to-top** button appears after 500 px scroll.

## 3. Motion system
One easing does almost everything: `cubic-bezier(.2,.7,.2,1)` (fast out, long soft settle).

| Name | What | Timing |
|---|---|---|
| `.reveal` / `.reveal.in` | fade + rise 22 px on scroll into view (IntersectionObserver, threshold .12, once) | .7 s, stagger via `--rd` |
| `heroIn` | hero copy fades up 16 px on load | .85 s |
| `heroDrift` | hero background slow pan/zoom (1.5%, 5%) | 24 s alternate, infinite |
| `welcomeDrift` | welcome photo Ken Burns | 26 s alternate, infinite |
| `wcFloat` | welcome cards bob 13 px | 9 s alternate, infinite |
| `boxShimmer` | gradient position loops | 9 s infinite |
| `ping` | status dot halo ripple | 1.8 s infinite |
| `pulse` | chip scale 1.08 + red glow | .6 s, JS-staggered |
| `introLogo` / `introOut` | splash logo then overlay fade | 1.15 s / 1.4 s, dismissed on any input or 1.3 s |
| `ivPop` | carousel card settle | .45 s |
| hovers | buttons -2 px, cards -3 px, shadow grows | .2-.35 s |

`prefers-reduced-motion` is respected for the trust shimmer, the intro and several loops (not every loop: (U) check drift and float).

## 4. JavaScript (all vanilla, about 6 KB)
1. Language toggle: swaps `innerHTML` from `data-en/data-zh` attributes, saves to localStorage.
2. Menu and call sheet: add/remove `.open` (no Escape, no focus trap: a11y gap).
3. Service filter tabs: toggle `.hide` by `data-cat`.
4. FAQ toggle: `.open` on parent.
5. Chip pulse ripple.
6. Today's hours row highlight.
7. Clicking a service card flashes the hours card.
8. Back-to-top visibility on scroll.
9. Scroll reveal (IntersectionObserver).
10. IV drips accordion and ingredient popovers (click outside / Escape closes).
11. Intro splash controller.
12. 3-card rotating carousel with swipe.

## 5. What we adopt (re-expressed in our tokens: indigo, teal-deep, gold, Fraunces + Figtree)
| Theirs | Ours |
|---|---|
| One easing `cubic-bezier(.2,.7,.2,1)` | `--ease-out-soft` token; used by every transition |
| Scroll reveal, fade + rise 22 px, staggered | `.reveal` + `data-reveal` on section heads, cards and list items; small module script (CSP-safe, bundled) |
| `heroIn` on load | Hero headline, lead and cards fade up in sequence |
| Coloured button shadow + 2 px hover lift | Teal-deep button with teal-tinted shadow; gold button with gold-tinted shadow |
| Card hover lift 3 px + shadow grow | Doctor, office and gallery cards |
| Three shadow tokens with negative spread | `--shadow-sm/md/lg`, indigo-tinted |
| Frosted sticky header (white .88 + blur 14) | Our desktop sticky header and the phone sticky bar |
| Status dot with halo ring + `ping` | Our open/closed dot (open state only) |
| FAQ "+" rotating 45deg | Our FAQ summary icon |
| Today row highlight | Already have it |
| Hero: radial glows + photo behind a white wash | Already have the wash; add one soft teal glow |

All motion off under `prefers-reduced-motion: reduce` (content visible, no transforms). No infinite loops except the open-dot ping.

## 6. What we do NOT copy
- Intro splash (owner decision; also hurts LCP).
- Google Fonts and any external request (red line; we self-host).
- Infinite Ken Burns, float and shimmer loops (distracting, battery, motion sickness; Gate 9 slop item).
- "Open 7 Days", "board-certified", "25+ years", star ratings, AggregateRating (claims; red lines).
- innerHTML language swap (we will use real per-language pages if ever needed).
- Their colours, copy, images, class names or code verbatim.
- 37 font sizes, 18 radii, 9 breakpoints: we keep our token scale.
- Menu and call sheet without Escape and focus handling (ours use native `<dialog>`).
