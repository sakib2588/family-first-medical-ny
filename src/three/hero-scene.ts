// Live hero colour field (owner round 13b: "pro-level live motion with three.js"). One full-screen plane with a
// fragment shader: a slow, flowing mesh gradient in the brand's light tones (mint, cream, warm gold). Every colour is
// light, so the headline and body text keep their AA contrast (indigo 15:1+, text 10:1+ on these grounds).
// One draw call; started/stopped by src/scripts/live3d.ts.
import * as THREE from 'three'
import type { LiveScene } from './live-scene'

const frag = /* glsl */ `
precision highp float;
uniform float t; uniform vec2 res;
// Smooth value noise (no textures).
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(h(i), h(i + vec2(1, 0)), u.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p){ float v = 0., a = .5; for (int k = 0; k < 4; k++){ v += a * n(p); p *= 2.02; a *= .5; } return v; }
void main(){
  vec2 uv = gl_FragCoord.xy / res; vec2 p = uv * vec2(res.x / res.y, 1.) * 1.6;
  float w1 = fbm(p + vec2(t * .035, -t * .02));
  float w2 = fbm(p * 1.3 + vec2(-t * .025, t * .03) + w1 * 1.6);
  vec3 cream = vec3(.980, .969, .937), mint = vec3(.882, .949, .941), gold = vec3(.973, .902, .760), lilac = vec3(.949, .933, .988);
  vec3 col = mix(cream, mint, smoothstep(.25, .75, w2));
  col = mix(col, gold, smoothstep(.55, .9, fbm(p * .8 - vec2(t * .02, 0.)) ) * .55);
  col = mix(col, lilac, smoothstep(.6, .95, w1) * .35);
  // Soft vignette toward the text column (left) keeps it calmest where people read.
  col = mix(col, cream, smoothstep(.55, 0., uv.x) * .35);
  gl_FragColor = vec4(col, 1.);
}`

export function createHeroScene(canvas: HTMLCanvasElement): LiveScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // a soft gradient needs no more pixels
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const uniforms = { t: { value: 0 }, res: { value: new THREE.Vector2(1, 1) } }
  const geo = new THREE.PlaneGeometry(2, 2)
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: 'void main(){ gl_Position = vec4(position, 1.); }', fragmentShader: frag })
  scene.add(new THREE.Mesh(geo, mat))
  const layout = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    renderer.getDrawingBufferSize(uniforms.res.value)
  }
  layout()
  const ro = new ResizeObserver(layout); ro.observe(canvas)
  return {
    renderer,
    render(t: number) { uniforms.t.value = t; renderer.render(scene, camera) },
    dispose() { ro.disconnect(); geo.dispose(); mat.dispose(); renderer.dispose() },
  }
}
