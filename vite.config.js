import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nxt-portfolio/',
  plugins: [react()],
})
