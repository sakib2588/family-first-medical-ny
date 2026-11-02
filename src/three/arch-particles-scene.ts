// Live "constellation arch" for the dark bands (owner round 16: more live three.js in the right places).
// Soft light points flow slowly along the AIMSS arch (left leg up, over the top, right leg down) in concentric
// rings, twinkling and fading at the ends. All motion is computed in the vertex shader (one draw call, no CPU work
// per frame). Variants place the arches where the band has empty space, never under body text.
import * as THREE from 'three'
import type { LiveScene } from './live-scene'

type Variant = 'visits' | 'care' | 'request'
interface ArchSpot { x: (halfW: number) => number; y: number; r: number; leg: number; gold: boolean }
const H = Math.tan(THREE.MathUtils.degToRad(15)) * 14 // half view height at z = 0
const SPOTS: Record<Variant, ArchSpot[]> = {
  visits: [
    { x: hw => -hw + 1.4, y: -H, r: 1.9, leg: 2.4, gold: false },
    { x: hw => hw - 1.4, y: -H, r: 1.6, leg: 2.0, gold: true },
  ],
  care: [
    { x: hw => hw - 2.2, y: -H, r: 2.3, leg: 1.6, gold: false },
    { x: hw => -hw + 1.1, y: -H, r: 1.1, leg: 1.2, gold: false },
  ],
  request: [
    { x: hw => -hw + 4.2, y: -H, r: 3.4, leg: 1.4, gold: true },
  ],
}
const RINGS = [1, 0.74, 0.5]
const PER_RING = 330
const ALPHA: Record<Variant, number> = { visits: 0.7, care: 0.75, request: 0.8 }

const vert = /* glsl */ `
attribute float u0; attribute float rad; attribute float leg; attribute float seed; attribute vec2 center; attribute float gold;
uniform float t; uniform float size; uniform float px;
varying float vA; varying float vGold;
vec2 arch(float r, float l, float u) {
  float L = 2. * l + 3.14159 * r, d = u * L;
  if (d < l) return vec2(-r, d);
  if (d < l + 3.14159 * r) { float a = 3.14159 - (d - l) / r; return vec2(cos(a) * r, l + sin(a) * r); }
  return vec2(r, l - (d - l - 3.14159 * r));
}
void main() {
  float u = fract(u0 + t * 0.018 * (0.55 + seed * 0.9));
  vec2 p = arch(rad, leg, u) + center;
  p += vec2(sin(t * .6 + seed * 31.), cos(t * .5 + seed * 17.)) * .045;
  float ends = smoothstep(0., .07, u) * smoothstep(1., .93, u);
  float tw = pow(.5 + .5 * sin(t * 1.4 + seed * 47.), 3.);
  vA = ends * (.28 + .72 * tw);
  vGold = gold;
  vec4 mv = modelViewMatrix * vec4(p, (seed - .5) * 1.4, 1.);
  gl_PointSize = size * px * (.55 + seed * .9) * (14. / -mv.z);
  gl_Position = projectionMatrix * mv;
}`
const frag = /* glsl */ `
uniform float alpha; varying float vA; varying float vGold;
void main() {
  float d = length(gl_PointCoord - .5);
  float a = smoothstep(.5, 0., d); a *= a;
  vec3 aqua = vec3(.37, .77, .77), gold = vec3(.94, .76, .35);
  vec3 c = mix(aqua, gold, vGold) + vec3(.35) * smoothstep(.18, 0., d);
  gl_FragColor = vec4(c, a * vA * alpha);
}`

export function createArchParticlesScene(canvas: HTMLCanvasElement, variant: Variant): LiveScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // glowing particles need no more pixels; fewer pixels keep scrolling smooth
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0, 14)
  const spots = SPOTS[variant]
  const n = spots.length * RINGS.length * PER_RING
  const geo = new THREE.BufferGeometry()
  const a = (k: number) => new Float32Array(n * k)
  const u0 = a(1), rad = a(1), leg = a(1), seed = a(1), center = a(2), gold = a(1), pos = a(3)
  let i = 0
  spots.forEach((s, si) => RINGS.forEach((ring, ri) => {
    for (let j = 0; j < PER_RING; j++, i++) {
      u0[i] = Math.random(); seed[i] = Math.random()
      rad[i] = s.r * ring; leg[i] = s.leg + (1 - ring) * s.r * 0.6
      gold[i] = s.gold ? (ri === 1 ? 1 : 0) : 0 // gold arches: the middle ring is gold, like the logo
      center[i * 2] = si; center[i * 2 + 1] = s.y // x is filled on layout
    }
  }))
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)) // unused, required by three
  for (const [name, arr, size] of [['u0', u0, 1], ['rad', rad, 1], ['leg', leg, 1], ['seed', seed, 1], ['center', center, 2], ['gold', gold, 1]] as const) geo.setAttribute(name, new THREE.BufferAttribute(arr, size))
  const spotIndex = Float32Array.from({ length: n }, (_, k) => center[k * 2])
  const uniforms = { t: { value: 0 }, size: { value: 7 }, px: { value: renderer.getPixelRatio() }, alpha: { value: ALPHA[variant] } }
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  scene.add(points)

  const layout = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h; camera.updateProjectionMatrix()
    const halfW = H * (w / h)
    const centerAttr = geo.getAttribute('center') as THREE.BufferAttribute
    for (let k = 0; k < n; k++) centerAttr.setX(k, spots[spotIndex[k]].x(halfW))
    centerAttr.needsUpdate = true
  }
  layout()
  const ro = new ResizeObserver(layout); ro.observe(canvas)
  return {
    renderer,
    render(t: number) { uniforms.t.value = t; renderer.render(scene, camera) },
    dispose() { ro.disconnect(); geo.dispose(); mat.dispose(); renderer.dispose() },
  }
}
