import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/",
  server: {
    host: '0.0.0.0', // 👈 this is required for Vagrant access
    port: 5173,      // optional: ensures consistent port
  },
})
