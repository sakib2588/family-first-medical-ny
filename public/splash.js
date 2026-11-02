// Intro splash gate (see src/components/Splash.astro, workspace/03-decisions/2026-11-02-short-splash.md).
// A classic script loaded right after the overlay so it runs before first paint. CSP-safe: it is a file, not inline.
// Shows on a reload and on a visit that arrives from outside the site (typed address, search, link), like the base
// site. It does NOT show when the visitor clicks the logo or a link from another page of this site, and never with
// reduced motion. No storage is used.
try {
  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  var nav = performance.getEntriesByType('navigation')[0]
  var reloaded = !!nav && nav.type === 'reload'
  var fromInside = !!document.referrer && new URL(document.referrer).origin === location.origin
  if (!calm && (reloaded || !fromInside)) {
    var root = document.documentElement
    root.classList.add('splash-on')
    var skip = function () { root.classList.add('splash-skip') }
    addEventListener('pointerdown', skip, { once: true })
    addEventListener('keydown', skip, { once: true })
    setTimeout(function () { skip(); setTimeout(function () { root.classList.add('splash-gone') }, 400) }, 2200) // safety net if animations are blocked
  }
} catch (e) { /* the page works without it */ }
