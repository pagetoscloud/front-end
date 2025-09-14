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
  },
  test: {
    globals: true,         // lets you use describe/it/expect without imports
    environment: 'jsdom',  // simulates browser for React components
    setupFiles: './src/setupTests.ts', // run before each test (optional)
    coverage: {
      provider: "v8", // or 'istanbul'
      reporter: ["text", "json", "html"], // choose your reports
      reportsDirectory: "./coverage",     // output folder
    },

  },
})