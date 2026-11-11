import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on any host or sub-path (GitHub Pages, Netlify, Vercel...)
export default defineConfig({
  plugins: [react()],
  base: './',
})
