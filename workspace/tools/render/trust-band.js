// Trust band backdrop (desktop), rendered once by render-3d.mjs. Brand only: the AIMSS double arch (outer teal, inner gold,
// same proportions as src/components/Logo.astro) as glass tubes, and gold light points tracing a calm heartbeat line.
// Heavy shapes sit at the two ends; the middle stays quiet because the fact cards sit there.
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

const C = { indigo: 0x17123a, heroTeal: 0x0c4a50, teal: 0x13a3a0, tealDeep: 0x0b6f6f, gold: 0xf0c25a, goldDeep: 0xc2861a }

// The logo arch as a 3D path: left leg up, half circle over the top, right leg down (Logo.astro: M4 31V16a11 11 0 0 1 22 0v15).
class ArchCurve extends THREE.Curve {
  constructor(r, leg) { super(); this.r = r; this.leg = leg; this.total = 2 * leg + Math.PI * r }
  getPoint(t, out = new THREE.Vector3()) {
    const d = t * this.total, { r, leg } = this
    if (d < leg) return out.set(-r, d, 0)
    if (d < leg + Math.PI * r) { const a = Math.PI - (d - leg) / r; return out.set(Math.cos(a) * r, leg + Math.sin(a) * r, 0) }
    return out.set(r, leg - (d - leg - Math.PI * r), 0)
  }
}

// Satin glass that reads in a software renderer: a little transmission, a coloured glow and a clear coat for the highlights.
const tealGlass = () => new THREE.MeshPhysicalMaterial({
  color: 0x7ff0e6, emissive: C.tealDeep, emissiveIntensity: 0.9, metalness: 0.05, roughness: 0.16,
  transmission: 0.35, thickness: 0.6, ior: 1.45, clearcoat: 1, clearcoatRoughness: 0.05, iridescence: 0.35, envMapIntensity: 1.6,
})
const goldGlass = () => new THREE.MeshPhysicalMaterial({
  color: C.gold, emissive: 0x9a6a12, emissiveIntensity: 0.75, metalness: 0.55, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.8,
})

function doubleArch(scale) {
  const g = new THREE.Group()
  const outer = new THREE.Mesh(new THREE.TubeGeometry(new ArchCurve(1.1, 1.5), 220, 0.16, 32), tealGlass())
  const inner = new THREE.Mesh(new THREE.TubeGeometry(new ArchCurve(0.5, 1.4), 180, 0.16, 32), goldGlass())
  for (const m of [outer, inner]) {
    const cap = new THREE.SphereGeometry(0.16, 24, 16)
    const r = m === outer ? 1.1 : 0.5
    for (const x of [-r, r]) { const s = new THREE.Mesh(cap, m.material); s.position.set(x, 0, 0); g.add(s) }
    g.add(m)
  }
  g.scale.setScalar(scale)
  return g
}

function backdrop(scene, w, h) {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 256
  const x = c.getContext('2d')
  const lin = x.createLinearGradient(0, 0, 1024, 0)
  lin.addColorStop(0, '#17123a'); lin.addColorStop(0.55, '#1d1850'); lin.addColorStop(1, '#0c4a50')
  x.fillStyle = lin; x.fillRect(0, 0, 1024, 256)
  const glow = (cx, col) => { const r = x.createRadialGradient(cx, 128, 0, cx, 128, 300); r.addColorStop(0, col); r.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = r; x.fillRect(0, 0, 1024, 256) }
  glow(90, 'rgba(19,163,160,0.55)'); glow(940, 'rgba(240,194,90,0.38)'); glow(512, 'rgba(95,196,196,0.12)')
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex }))
  plane.position.z = -6
  scene.add(plane)
}

// A calm heartbeat: flat, one small rise, a sharp beat, a dip, flat again; repeated across the band.
function pulseY(x) {
  const p = ((x % 9) + 9) % 9 - 4.5
  if (Math.abs(p) > 1.4) return 0
  if (p < -0.6) return 0.18 * Math.sin((p + 1.4) * Math.PI / 0.8)
  if (p < 0) return -0.25 + (p + 0.6) * 3.4
  if (p < 0.35) return 1.8 - p * 7
  return -0.65 + (p - 0.35) * 0.62
}

function heartbeat(scene, span) {
  const count = 900, geo = new THREE.SphereGeometry(1, 10, 8)
  const mat = new THREE.MeshBasicMaterial({ color: 0xffdc80 })
  const mesh = new THREE.InstancedMesh(geo, mat, count)
  const m = new THREE.Matrix4(), rnd = mulberry(7)
  // Round 12: the centre holds the service names (no cards behind them), so the heartbeat runs only at the sides.
  const clear = span * 0.33
  for (let i = 0; i < count; i++) {
    const x = -span / 2 + (i / count) * span
    if (Math.abs(x) < clear) { m.makeScale(0, 0, 0); mesh.setMatrixAt(i, m); continue }
    const y = pulseY(x) * 0.55 - 0.2 + (rnd() - 0.5) * 0.12
    const z = -1.5 + (rnd() - 0.5) * 0.6
    const s = 0.03 + rnd() * 0.04
    m.makeScale(s, s, s).setPosition(x, y, z)
    mesh.setMatrixAt(i, m)
  }
  scene.add(mesh)
  // Loose dust in depth for parallax-like depth in the still.
  const dust = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: 0xffe9b8, transparent: true, opacity: 0.55 }), 160)
  for (let i = 0; i < 160; i++) {
    const s = 0.012 + rnd() * 0.035
    const dx = (rnd() - 0.5) * span
    m.makeScale(Math.abs(dx) < clear ? 0 : s, Math.abs(dx) < clear ? 0 : s, Math.abs(dx) < clear ? 0 : s).setPosition(dx, (rnd() - 0.5) * 3.2, -4 + rnd() * 4)
    dust.setMatrixAt(i, m)
  }
  scene.add(dust)
}

// Seeded random, so every re-render gives the same image.
function mulberry(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }

export async function render(w, h) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(1); renderer.setSize(w, h)
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.3
  renderer.outputColorSpace = THREE.SRGBColorSpace
  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const pmrem = new THREE.PMREMGenerator(renderer)
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture

  const camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 100)
  camera.position.set(0, 0, 14)
  const viewH = 2 * Math.tan(THREE.MathUtils.degToRad(15)) * 20, viewW = viewH * (w / h)
  backdrop(scene, viewW, viewH)
  heartbeat(scene, viewW * 0.94)

  // Arches live in the open margins either side of the centred cards (cards span about 62rem of 80rem at 1280 px, so
  // each margin is about 1/9 of the width). edge0 is the frame's half width at z = 0, where the big arches stand.
  const edge0 = Math.tan(THREE.MathUtils.degToRad(15)) * 14 * (w / h)
  const spots = [
    { x: -(edge0 - 2.7), y: -1.55, z: 0, s: 0.84, ry: 0.3, rz: 0.04 },
    { x: -(edge0 - 1.5), y: 1.15, z: -2.6, s: 0.42, ry: -0.3, rz: -0.14 },
    { x: edge0 - 2.7, y: -1.6, z: 0, s: 0.86, ry: -0.32, rz: -0.04 },
    { x: edge0 - 1.5, y: 1.2, z: -2.8, s: 0.4, ry: 0.4, rz: 0.15 },
  ]
  for (const p of spots) {
    const a = doubleArch(p.s); a.position.set(p.x, p.y, p.z); a.rotation.set(0.08, p.ry, p.rz); scene.add(a)
  }

  const teal = new THREE.PointLight(C.teal, 110, 30); teal.position.set(-9, 3, 5); scene.add(teal)
  const gold = new THREE.PointLight(C.gold, 100, 30); gold.position.set(9, 2.5, 5); scene.add(gold)
  scene.add(new THREE.AmbientLight(0xffffff, 0.25))

  renderer.render(scene, camera)
  await new Promise(r => requestAnimationFrame(r))
  renderer.render(scene, camera)
  pmrem.dispose()
}
