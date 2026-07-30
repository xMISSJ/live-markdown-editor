import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Client-only app works well on static GitHub Pages hosting
  ssr: false,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  // Overridden in CI via NUXT_APP_BASE_URL=/live-markdown-editor/
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
})
