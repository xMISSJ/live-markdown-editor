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
    locales: [
      { code: 'en', name: 'English' },
      { code: 'zh', name: '中文' },
      { code: 'es', name: 'Español' },
      { code: 'nl', name: 'Nederlands' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'markdown-editor-locale',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
  },
})
