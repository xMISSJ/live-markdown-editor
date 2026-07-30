export default defineNuxtPlugin(() => {
  const { initTheme, theme } = useTheme()
  initTheme()

  // Keep DOM + browser color-scheme in sync across HMR / navigations
  if (import.meta.client) {
    watch(
      theme,
      (value) => {
        document.documentElement.dataset.theme = value
        document.documentElement.style.colorScheme = value
      },
      { immediate: true },
    )
  }
})
