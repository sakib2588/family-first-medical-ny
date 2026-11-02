// Runner for the live three.js scenes on Home (owner exception 2026-11-01:
// workspace/03-decisions/2026-11-01-live-motion-and-3d-exception.md). Hosts: [data-live="hero" | "band" | "visits" |
// "care" | "request"] with a canvas. Only the scenes on screen run; the rest stay paused.
// three.js is imported dynamically ONLY when every gate passes, after the page load event, when a host is near the
// viewport. Otherwise the still image / CSS ground stays. Each scene:
// - runs only while on screen, the tab is visible and Pause motion is off;
// - falls back to the still if it stays under ~30 fps for 2 s;
// - is disposed on fallback.
export const LIVE_3D = true
const SLOW_FRAME_MS = 34, SLOW_FOR_MS = 2000
// Test only: ?live3d=force skips the frame-rate fallback (headless software GL is slow). Never linked from the site.
const FORCE = new URLSearchParams(location.search).get('live3d') === 'force'

// Responsiveness outranks smoothness (motion-foundations): while the page is being scrolled, the scenes keep their last
// frame instead of drawing new ones, and resume 140 ms after scrolling stops. This is what keeps scrolling smooth on
// modest GPUs. One shared passive listener; it only flips a flag.
let scrolling = false
let scrollTimer = 0
addEventListener('scroll', () => { scrolling = true; clearTimeout(scrollTimer); scrollTimer = window.setTimeout(() => { scrolling = false }, 140) }, { passive: true })

const wide = matchMedia('(min-width: 80rem)')
const reduced = matchMedia('(prefers-reduced-motion: reduce)')
const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number }
const capable = () =>
  LIVE_3D && wide.matches && !reduced.matches && !nav.connection?.saveData &&
  (navigator.hardwareConcurrency ?? 8) >= 4 && (nav.deviceMemory ?? 8) >= 4 &&
  !!document.createElement('canvas').getContext('webgl2')

const loaders = {
  hero: () => import('../three/hero-scene').then(m => m.createHeroScene),
  band: () => import('../three/trust-band-scene').then(m => m.createTrustBandScene),
  visits: () => import('../three/arch-particles-scene').then(m => (c: HTMLCanvasElement) => m.createArchParticlesScene(c, 'visits')),
  care: () => import('../three/arch-particles-scene').then(m => (c: HTMLCanvasElement) => m.createArchParticlesScene(c, 'care')),
  request: () => import('../three/arch-particles-scene').then(m => (c: HTMLCanvasElement) => m.createArchParticlesScene(c, 'request')),
} as const

function run(host: HTMLElement) {
  const kind = host.dataset.live as keyof typeof loaders
  const canvas = host.querySelector('canvas')
  if (!canvas || !(kind in loaders)) return
  const near = new IntersectionObserver(async entries => {
    if (!entries.some(e => e.isIntersecting)) return
    near.disconnect()
    let scene: import('../three/live-scene').LiveScene
    try { scene = (await loaders[kind]())(canvas) } catch (err) { console.warn(`live3d: ${kind} scene not started`, err); return }
    let raf = 0, last = 0, slowFor = 0, visible = true, dead = false, elapsed = 0
    const paused = () => document.documentElement.hasAttribute('data-motion-paused')
    const frame = (now: number) => {
      if (scrolling) { last = now; raf = requestAnimationFrame(frame); return } // hold the last frame; time and the slow-frame timer pause too
      if (last) elapsed += Math.min(now - last, 100) / 1000 // pauses and long frames do not jump the scene
      scene.render(elapsed)
      if (!host.hasAttribute('data-live-on')) host.setAttribute('data-live-on', '') // reveal after the first frame
      if (last) { slowFor = now - last > SLOW_FRAME_MS ? slowFor + (now - last) : 0 }
      last = now
      if (!FORCE && slowFor > SLOW_FOR_MS) { dead = true; stop(); host.removeAttribute('data-live-on'); scene.dispose(); return }
      raf = requestAnimationFrame(frame)
    }
    const start = () => { if (raf || dead) return; last = 0; slowFor = 0; raf = requestAnimationFrame(frame) }
    const stop = () => { cancelAnimationFrame(raf); raf = 0 }
    const sync = () => (visible && !document.hidden && !paused() ? start() : stop())
    new IntersectionObserver(es => { visible = es.some(e => e.isIntersecting); sync() }).observe(host)
    document.addEventListener('visibilitychange', sync)
    window.addEventListener('motionchange', sync)
    sync()
  }, { rootMargin: '200px 0px' })
  near.observe(host)
}

function boot() { if (capable()) document.querySelectorAll<HTMLElement>('[data-live]').forEach(run) }
if (document.readyState === 'complete') boot()
else window.addEventListener('load', boot, { once: true })
