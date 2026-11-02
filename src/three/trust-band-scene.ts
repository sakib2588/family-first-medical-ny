// Live trust-band scene (owner exception 2026-11-01, workspace/03-decisions/2026-11-01-live-motion-and-3d-exception.md).
// Round 13b (owner: "pro-level, not $1 animation"):
// - The AIMSS double arch as glass tubes at both ends; two coloured lights slowly orbit them, so the glass catches
//   moving highlights (no fake glow).
// - The heartbeat is a strand of soft additive light points; the pulse travels outward from the centre and leaves a
//   fading trail, the way an ECG trace persists.
// - A sparse field of drifting light motes gives depth. The centre stays clear: the service names sit there.
// Performance (threejs-performance skill): one renderer, DPR <= 2, Points (one draw call per layer), no shadows,
// no post-processing; started/stopped by src/scripts/live3d.ts; everything disposed on stop.
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import type { LiveScene } from './live-scene'

class ArchCurve extends THREE.Curve<THREE.Vector3> {
  constructor(private r: number, private leg: number) { super() }
  getPoint(t: number, out = new THREE.Vector3()) {
    const { r, leg } = this, d = t * (2 * leg + Math.PI * r)
    if (d < leg) return out.set(-r, d, 0)
    if (d < leg + Math.PI * r) { const a = Math.PI - (d - leg) / r; return out.set(Math.cos(a) * r, leg + Math.sin(a) * r, 0) }
    return out.set(r, leg - (d - leg - Math.PI * r), 0)
  }
}

// Soft round sprite for the light points (generated, no image request).
function dotTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64
  const x = c.getContext('2d')!
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32)
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,240,200,.85)'); g.addColorStop(1, 'rgba(255,220,140,0)')
  x.fillStyle = g; x.fillRect(0, 0, 64, 64)
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  return t
}

// One calm heartbeat shape: flat, small rise, sharp beat, dip, flat.
function beat(p: number) {
  if (Math.abs(p) > 1.4) return 0
  if (p < -0.6) return 0.18 * Math.sin((p + 1.4) * Math.PI / 0.8)
  if (p < 0) return -0.25 + (p + 0.6) * 3.4
  if (p < 0.35) return 1.8 - p * 7
  return -0.65 + (p - 0.35) * 0.62
}

export function createTrustBandScene(canvas: HTMLCanvasElement): LiveScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // glowing particles need no more pixels; fewer pixels keep scrolling smooth
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.25
  renderer.outputColorSpace = THREE.SRGBColorSpace
  const scene = new THREE.Scene()
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  pmrem.dispose()
  scene.environment = envTex
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0, 14)
  const disposables: { dispose(): void }[] = [envTex]

  // Arches.
  const teal = new THREE.MeshPhysicalMaterial({ color: 0x8ff3ea, emissive: 0x0b6f6f, emissiveIntensity: 0.55, roughness: 0.12, transmission: 0.45, thickness: 0.7, ior: 1.45, clearcoat: 1, clearcoatRoughness: 0.04, iridescence: 0.45, iridescenceIOR: 1.3, envMapIntensity: 1.8 })
  const gold = new THREE.MeshPhysicalMaterial({ color: 0xf0c25a, emissive: 0x7a5410, emissiveIntensity: 0.5, metalness: 0.65, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 2 })
  disposables.push(teal, gold)
  const tubes = ([[1.1, 1.5, teal], [0.5, 1.4, gold]] as const).map(([r, leg, mat]) => {
    const tube = new THREE.TubeGeometry(new ArchCurve(r, leg), 160, 0.16, 28), cap = new THREE.SphereGeometry(0.16, 24, 16)
    disposables.push(tube, cap)
    return { r, mat, tube, cap }
  })
  const makeArch = () => {
    const g = new THREE.Group()
    for (const t of tubes) {
      g.add(new THREE.Mesh(t.tube, t.mat))
      for (const x of [-t.r, t.r]) { const c = new THREE.Mesh(t.cap, t.mat); c.position.set(x, 0, 0); g.add(c) }
    }
    return g
  }
  const arches = Array.from({ length: 4 }, (_, i) => ({ g: makeArch(), base: new THREE.Vector3(), phase: i * 1.9, yaw: i < 2 ? 0.35 : -0.35 }))
  arches.forEach(a => scene.add(a.g))

  // Lights: two coloured lights orbit the arches so highlights travel across the glass.
  const lTeal = new THREE.PointLight(0x13a3a0, 140, 24), lGold = new THREE.PointLight(0xf0c25a, 120, 24)
  scene.add(lTeal, lGold, new THREE.AmbientLight(0xffffff, 0.2))

  // Heartbeat: two strands of light points (left and right), drawn with additive blending.
  const sprite = dotTexture(); disposables.push(sprite)
  const N = 700
  const beatGeo = new THREE.BufferGeometry()
  const beatPos = new Float32Array(N * 3), beatSeed = new Float32Array(N)
  for (let i = 0; i < N; i++) beatSeed[i] = Math.random()
  beatGeo.setAttribute('position', new THREE.BufferAttribute(beatPos, 3))
  const beatAlpha = new Float32Array(N); beatGeo.setAttribute('alpha', new THREE.BufferAttribute(beatAlpha, 1))
  const pointsMat = (size: number, color: number) => new THREE.ShaderMaterial({
    uniforms: { map: { value: sprite }, size: { value: size * renderer.getPixelRatio() }, color: { value: new THREE.Color(color) } },
    vertexShader: 'attribute float alpha; varying float vA; uniform float size; void main(){ vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = size * (14. / -mv.z); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform sampler2D map; uniform vec3 color; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(color * t.rgb, t.a * vA); }',
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  })
  const beatMat = pointsMat(9, 0xffd77a); disposables.push(beatGeo, beatMat)
  scene.add(new THREE.Points(beatGeo, beatMat))

  // Drifting motes for depth.
  const M = 140
  const moteGeo = new THREE.BufferGeometry(), motePos = new Float32Array(M * 3), moteA = new Float32Array(M), moteSeed = new Float32Array(M * 2)
  for (let i = 0; i < M; i++) { moteSeed[i * 2] = Math.random(); moteSeed[i * 2 + 1] = Math.random() }
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3)); moteGeo.setAttribute('alpha', new THREE.BufferAttribute(moteA, 1))
  const moteMat = pointsMat(5, 0xbff3ef); disposables.push(moteGeo, moteMat)
  scene.add(new THREE.Points(moteGeo, moteMat))

  let halfW = 12, span = 24
  const layout = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h; camera.updateProjectionMatrix()
    halfW = Math.tan(THREE.MathUtils.degToRad(15)) * 14 * (w / h)
    span = halfW * 2
    const spots: [number, number, number, number][] = [[-(halfW - 2.7), -1.6, 0, 0.86], [-(halfW - 1.5), 1.2, -2.7, 0.41], [halfW - 2.7, -1.6, 0, 0.86], [halfW - 1.5, 1.2, -2.8, 0.4]]
    spots.forEach(([x, y, z, s], i) => { arches[i].base.set(x, y, z); arches[i].g.scale.setScalar(s) })
  }
  layout()
  const ro = new ResizeObserver(layout); ro.observe(canvas)

  const render = (t: number) => {
    for (const a of arches) {
      a.g.position.set(a.base.x, a.base.y + Math.sin(t * 0.55 + a.phase) * 0.1, a.base.z)
      a.g.rotation.set(0.08 + Math.sin(t * 0.35 + a.phase) * 0.05, a.yaw + Math.sin(t * 0.25 + a.phase) * 0.22, Math.sin(t * 0.45 + a.phase) * 0.03)
    }
    lTeal.position.set(Math.cos(t * 0.4) * halfW * 0.9, 2.5 + Math.sin(t * 0.7) * 1.5, 4 + Math.sin(t * 0.4) * 2)
    lGold.position.set(-Math.cos(t * 0.33 + 1) * halfW * 0.9, 2 + Math.cos(t * 0.6) * 1.5, 4 + Math.cos(t * 0.33) * 2)

    // Heartbeat: points sit on the trace; brightness peaks at the travelling pulse and fades behind it (trail).
    const clear = span * 0.355, len = span / 2 - clear, head = (t * 0.32) % 1
    for (let i = 0; i < N; i++) {
      const side = i < N / 2 ? -1 : 1, u = (i % (N / 2)) / (N / 2)       // u: 0 at the centre edge -> 1 at the frame edge
      const x = side * (clear + u * len)
      const p = (u * len) % 9 - 4.5
      const behind = (head - u + 1) % 1                                    // 0 at the pulse head, grows behind it
      const glow = Math.exp(-behind * 7)                                    // fading trail
      beatPos[i * 3] = x
      beatPos[i * 3 + 1] = beat(p) * 0.55 * (0.35 + glow * 0.9) - 0.2 + (beatSeed[i] - 0.5) * 0.06
      beatPos[i * 3 + 2] = -1.5 + (beatSeed[i] - 0.5) * 0.4
      beatAlpha[i] = 0.18 + glow * 0.82
    }
    beatGeo.attributes.position.needsUpdate = true; beatGeo.attributes.alpha.needsUpdate = true

    for (let i = 0; i < M; i++) {
      const sx = moteSeed[i * 2], sy = moteSeed[i * 2 + 1]
      const side = sx < 0.5 ? -1 : 1, x = side * (span * 0.355 + ((sx * 2) % 1) * (span / 2 - span * 0.355))
      motePos[i * 3] = x + Math.sin(t * 0.2 + sy * 9) * 0.3
      motePos[i * 3 + 1] = ((sy * 4 + t * 0.08) % 4) - 2
      motePos[i * 3 + 2] = -4 + sy * 3.5
      moteA[i] = 0.25 + 0.35 * Math.sin(t * 0.8 + sx * 20) ** 2
    }
    moteGeo.attributes.position.needsUpdate = true; moteGeo.attributes.alpha.needsUpdate = true
    renderer.render(scene, camera)
  }

  return {
    renderer, render,
    dispose() { ro.disconnect(); disposables.forEach(d => d.dispose()); renderer.dispose() },
  }
}
