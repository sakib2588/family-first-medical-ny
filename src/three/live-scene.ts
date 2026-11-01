import type { WebGLRenderer } from 'three'
/** A live scene the runner in src/scripts/live3d.ts drives: render(t) with t = seconds of running time (pauses excluded). */
export interface LiveScene { renderer: WebGLRenderer; render(t: number): void; dispose(): void }
