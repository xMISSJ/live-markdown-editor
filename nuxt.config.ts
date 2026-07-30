import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  // Client-only app works well on static GitHub Pages hosting
  ssr: false,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  // Overridden in CI via NUXT_APP_BASE_URL=/live-markdown-editor/
  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || '/',
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'i18n/locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.ts' },
      { code: 'zh', name: '中文', file: 'zh.ts' },
      { code: 'es', name: 'Español', file: 'es.ts' },
      { code: 'nl', name: 'Nederlands', file: 'nl.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'markdown-editor-locale',
      redirectOn: 'root',
    },
  },
})
