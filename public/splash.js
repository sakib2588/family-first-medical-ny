// Intro splash gate (see src/components/Splash.astro, workspace/03-decisions/2026-11-02-short-splash.md).
// A classic script loaded right after the overlay so it runs before first paint. CSP-safe: it is a file, not inline.
try {
  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!calm && !sessionStorage.getItem('splash-seen')) {
    sessionStorage.setItem('splash-seen', '1')
    var root = document.documentElement
    root.classList.add('splash-on')
    var skip = function () { root.classList.add('splash-skip') }
    addEventListener('pointerdown', skip, { once: true })
    addEventListener('keydown', skip, { once: true })
    setTimeout(skip, 2500) // safety net if animations are blocked
  }
} catch (e) { /* storage blocked: no splash, the page works */ }
