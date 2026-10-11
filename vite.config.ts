import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 0, // Let Vite choose an available port
    strictPort: true,
  },
  preview: {
    port: 0, // Let Vite choose an available port
    strictPort: true,
  }
})