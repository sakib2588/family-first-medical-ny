// Office map (R2), rendered once by render-3d.mjs. A calm, clearly stylised low-poly diorama: NOT a real map.
// No street data, no tiles, no real geometry: the "land" is a seeded random blob, the hills and trees are decoration,
// and the gold arc is only a gentle "two offices, one team" line. West marker = Elmhurst, east marker = Hicksville.
// The scene returns where each marker's ground point lands in the image (px); render-3d.mjs turns that into
// src/data/office-map.json + src/styles/office-map-pins.css so the HTML pins can never drift from the picture.
import * as THREE from 'three'

const C = { midnight: 0x2e2860, aqua: 0x5fc4c4, aquaDeep: 0x3b9a9c, gold: 0xd9a02c, ground: 0xdedaec, land: 0xf3f0fa, hill1: 0xd4cfea, hill2: 0xc4bde0 }

// Per-variant layout. Positions are world units on the island top (y = TOP). West/east keep the same order in both.
const VARIANTS = {
  desktop: {
    camera: { fov: 20.5, pos: [0, 15, 24], look: [0, 0.8, 0.4] },
    island: { rx: 10.2, rz: 4.8, seed: 11 },
    spots: { elmhurst: [-5.6, -0.2], hicksville: [5.8, -0.6] },
    arc: { lift: 5.2, bend: 0.6 }, arch: 0.8,
  },
  phone: {
    camera: { fov: 32, pos: [0, 16, 19], look: [0, 0.6, 0.6] },
    island: { rx: 7.6, rz: 5.4, seed: 5 },
    spots: { elmhurst: [-4.0, -2.4], hicksville: [4.0, 0.8] },
    arc: { lift: 5.0, bend: -0.8 }, arch: 0.95,
  },
}
const TOP = 0.55

class ArchCurve extends THREE.Curve {
  constructor(r, leg) { super(); this.r = r; this.leg = leg; this.total = 2 * leg + Math.PI * r }
  getPoint(t, out = new THREE.Vector3()) {
    const d = t * this.total, { r, leg } = this
    if (d < leg) return out.set(-r, d, 0)
    if (d < leg + Math.PI * r) { const a = Math.PI - (d - leg) / r; return out.set(Math.cos(a) * r, leg + Math.sin(a) * r, 0) }
    return out.set(r, leg - (d - leg - Math.PI * r), 0)
  }
}
function mulberry(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, metalness: 0, ...extra })

// A lumpy blob outline (seeded): same seed, same land on every re-render.
function blob(rx, rz, seed, n = 26) {
  const rnd = mulberry(seed), pts = []
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, k = 0.9 + rnd() * 0.16 + 0.04 * Math.sin(a * 3 + seed)
    pts.push(new THREE.Vector2(Math.cos(a) * rx * k, Math.sin(a) * rz * k))
  }
  return pts
}
function slab(points, depth, color, y0, grow = 1) {
  const shape = new THREE.Shape(points.map(p => p.clone().multiplyScalar(grow)))
  const m = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false }), mat(color))
  m.rotation.x = Math.PI / 2; m.position.y = y0 + depth   // shape (x,y) -> world (x,z); extrusion goes down from y0+depth
  m.castShadow = m.receiveShadow = true
  return m
}
const inside = (pts, x, z) => { let c = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const a = pts[i], b = pts[j]; if ((a.y > z) !== (b.y > z) && x < ((b.x - a.x) * (z - a.y)) / (b.y - a.y) + a.x) c = !c } return c }

function doubleArch(scale) {
  const g = new THREE.Group()
  const outer = new THREE.Mesh(new THREE.TubeGeometry(new ArchCurve(1.1, 1.5), 90, 0.17, 10), mat(C.midnight, { roughness: 0.45 }))
  const inner = new THREE.Mesh(new THREE.TubeGeometry(new ArchCurve(0.5, 1.4), 70, 0.17, 10), mat(C.gold, { roughness: 0.4, metalness: 0.2 }))
  for (const [m, r] of [[outer, 1.1], [inner, 0.5]]) {
    for (const x of [-r, r]) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), m.material); s.position.set(x, 0, 0); g.add(s) }
    g.add(m)
  }
  g.traverse(o => { if (o.isMesh) o.castShadow = true })
  g.scale.setScalar(scale)
  return g
}

function marker(x, z, archScale) {
  const g = new THREE.Group(); g.position.set(x, TOP, z)
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.45 * archScale * 1.15, 1.6 * archScale * 1.15, 0.22, 10), mat(C.midnight)); base.position.y = 0.11
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.25 * archScale * 1.15, 1.25 * archScale * 1.15, 0.05, 10), mat(C.aqua, { emissive: C.aqua, emissiveIntensity: 0.25 })); cap.position.y = 0.245
  base.castShadow = base.receiveShadow = cap.receiveShadow = true
  const arch = doubleArch(archScale); arch.position.y = 0.27; arch.rotation.y = 0.0
  g.add(base, cap, arch)
  return g
}

function scatter(scene, spec, outline, avoid, seed) {
  const rnd = mulberry(seed)
  const free = (x, z) => inside(outline.map(p => p.clone().multiplyScalar(0.9)), x, z) && avoid.every(([ax, az, r]) => Math.hypot(x - ax, z - az) > r)
  const hills = [C.hill1, C.hill2]
  for (let i = 0, n = 0; n < 5 && i < 400; i++) {
    const x = (rnd() - 0.5) * spec.rx * 1.8, z = (rnd() - 0.5) * spec.rz * 1.7
    const s = 0.5 + rnd() * 0.5
    if (!free(x, z) || !avoid.every(([ax, az]) => Math.hypot(x - ax, z - az) > 2.6 * s)) continue
    const h = new THREE.Mesh(new THREE.ConeGeometry(s * 1.5, s * 1.1, 6 + Math.floor(rnd() * 2)), mat(hills[n % 2]))
    h.position.set(x, TOP + s * 0.5, z); h.rotation.y = rnd() * 3; h.castShadow = h.receiveShadow = true; scene.add(h); n++
  }
  for (let i = 0, n = 0; n < 16 && i < 900; i++) {
    const x = (rnd() - 0.5) * spec.rx * 1.9, z = (rnd() - 0.5) * spec.rz * 1.8
    if (!free(x, z)) continue
    const s = 0.28 + rnd() * 0.2, t = new THREE.Group()
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.2, 5), mat(C.midnight)); trunk.position.y = 0.1
    const crown = new THREE.Mesh(new THREE.ConeGeometry(s, s * 2.1, 6), mat(n % 3 ? C.aquaDeep : C.aqua)); crown.position.y = 0.2 + s
    crown.castShadow = true
    t.add(trunk, crown); t.position.set(x, TOP, z); t.rotation.y = rnd() * 3; scene.add(t); n++
  }
}

// Gentle route: gold dots on a lifted arc, plus pale dashes on the ground beneath it.
function route(scene, a, b, { lift, bend }) {
  const mid = new THREE.Vector3((a.x + b.x) / 2, TOP + lift, (a.z + b.z) / 2 + bend)
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(a.x, TOP + 2.0, a.z), mid, new THREE.Vector3(b.x, TOP + 2.0, b.z))
  const gm = mat(C.gold, { emissive: C.gold, emissiveIntensity: 0.35, roughness: 0.4 })
  const N = 44
  for (let i = 3; i <= N - 3; i++) {
    const t = i / N, p = curve.getPoint(t)
    const r = 0.075 + 0.05 * Math.sin(t * Math.PI)
    const s = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), gm); s.position.copy(p); s.castShadow = true; scene.add(s)
    if (i % 2 === 0) {
      const d = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 8), mat(C.hill2)); d.position.set(p.x, TOP + 0.015, p.z); d.receiveShadow = true; scene.add(d)
    }
  }
}

export async function render(w, h, variant = 'desktop') {
  const V = VARIANTS[variant]
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(1); renderer.setSize(w, h)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap
  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  // Soft lavender ground with a lighter pool of light under the island.
  const bg = document.createElement('canvas'); bg.width = 512; bg.height = 256
  const x = bg.getContext('2d'), grad = x.createRadialGradient(256, 128, 20, 256, 128, 330)
  grad.addColorStop(0, '#ebe8f5'); grad.addColorStop(1, '#d6d1e8'); x.fillStyle = grad; x.fillRect(0, 0, 512, 256)
  const tex = new THREE.CanvasTexture(bg); tex.colorSpace = THREE.SRGBColorSpace; scene.background = tex

  const outline = blob(V.island.rx, V.island.rz, V.island.seed)
  scene.add(slab(outline, TOP - 0.05, C.midnight, 0, 1.0))
  scene.add(slab(outline, 0.12, C.land, TOP - 0.12, 0.985))
  // A pale aqua "water" inlet (decoration only), between the offices, well clear of both markers and their labels.
  const bay = new THREE.Mesh(new THREE.CircleGeometry(1, 7), mat(C.aqua, { transparent: true, opacity: 0.55 }))
  bay.rotation.x = -Math.PI / 2; bay.scale.set(V.island.rx * 0.2, V.island.rz * 0.32, 1)
  bay.position.set(variant === 'desktop' ? 0.2 : 0.1, TOP + 0.008, variant === 'desktop' ? 1.9 : 2.7); bay.receiveShadow = true; scene.add(bay)

  const spots = V.spots
  const avoid = [[spots.elmhurst[0], spots.elmhurst[1], 2.4], [spots.hicksville[0], spots.hicksville[1], 2.4], [bay.position.x, bay.position.z, V.island.rx * 0.24]]
  scatter(scene, V.island, outline, avoid, V.island.seed + 100)
  const wm = marker(spots.elmhurst[0], spots.elmhurst[1], V.arch), em = marker(spots.hicksville[0], spots.hicksville[1], V.arch)
  scene.add(wm, em)
  route(scene, wm.position, em.position, V.arc)

  scene.add(new THREE.HemisphereLight(0xfaf7ff, 0xb9b2d8, 1.5))
  const sun = new THREE.DirectionalLight(0xfff4e0, 2.1); sun.position.set(-8, 14, 9)
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.radius = 5; sun.shadow.bias = -0.0004
  Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 12, bottom: -12, near: 1, far: 50 })
  scene.add(sun)

  const camera = new THREE.PerspectiveCamera(V.camera.fov, w / h, 0.1, 100)
  camera.position.set(...V.camera.pos); camera.lookAt(...V.camera.look)
  camera.updateMatrixWorld()
  renderer.render(scene, camera)
  await new Promise(r => requestAnimationFrame(r))
  renderer.render(scene, camera)

  // Where each marker's ground point lands in the image, in pixels.
  const proj = m => { const v = new THREE.Vector3(m.position.x, TOP + 0.25, m.position.z).project(camera); return { x: (v.x + 1) / 2 * w, y: (1 - v.y) / 2 * h } }
  return { elmhurst: proj(wm), hicksville: proj(em) }
}
