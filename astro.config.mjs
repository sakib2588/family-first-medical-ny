import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // public/_headers sends a strict CSP (script-src 'self', style-src 'self'), so nothing may be inlined:
  // scripts and styles are always emitted as files. `npm run check` fails if any inline code appears.
  build: { inlineStylesheets: 'never' },
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
})
