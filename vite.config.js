import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  appType: 'mpa',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        activities: resolve(import.meta.dirname, 'activities.html'),
        faq: resolve(import.meta.dirname, 'faq.html'),
        reserve: resolve(import.meta.dirname, 'reserve.html'),
      },
    },
  },
})