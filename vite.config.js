import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // for local dev (LAN/mobile testing)
    port: 3000       // local dev port
  },
  preview: {
    allowedHosts: [
      'pagetos.com',
      'www.pagetos.com',
      'pagetos-front-end-500141028909.asia-southeast1.run.app'
    ]
  }
})