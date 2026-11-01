# Decision: short intro splash (2026-11-02)

Context: the boss asked for the nav and hero "same like sample"; the user then asked for a loader like the sample's (logo on a white screen). This reverses the 2026-10-31 owner decision "skip the base site's intro splash". The owner (client) has not yet been told: the boss/user must confirm with them, and the splash is removable by deleting `src/components/Splash.astro` and one line in `src/pages/index.astro`.

What was built (branch `feat/nav-hero-like-sample`):
- Home page only, once per browser session (sessionStorage), about 1.3 s, our arch mark draws in and the practice name rises, then it fades.
- A tap or key press skips it. Never shown with reduced motion, without JS, or when storage is blocked. A 2.5 s safety timer ends it even if animations are blocked.
- It covers only the first paint; the page loads underneath. It does NOT make images load faster. Hero images should still be preloaded (separate task).
- No third-party request, no extra image, no invented text (name from practice.ts).

Risks: costs about 1.3 s before first content on a first visit (LCP). Mitigated by once per session and instant skip. Measure with `benchmark` before launch; remove if LCP budget fails.
