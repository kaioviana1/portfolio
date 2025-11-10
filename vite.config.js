import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Para Vercel/Netlify use '/' ao invés de '/portfolio/'
  plugins: [react()],
})


