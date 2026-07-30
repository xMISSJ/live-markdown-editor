export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'markdown-editor-theme'

function readStoredTheme(): Theme {
  if (!import.meta.client) return 'dark'
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  }
  catch {
    // ignore storage errors
  }
  return 'dark'
}

function syncDocumentTheme(value: Theme) {
  if (!import.meta.client) return
  const root = document.documentElement
  root.dataset.theme = value
  root.style.colorScheme = value
}

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')

  function applyTheme(value: Theme) {
    theme.value = value
    syncDocumentTheme(value)
    if (import.meta.client) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, value)
      }
      catch {
        // ignore storage errors
      }
    }
  }

  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  function initTheme() {
    if (!import.meta.client) return
    applyTheme(readStoredTheme())
  }

  return {
    theme,
    applyTheme,
    toggleTheme,
    initTheme,
    readStoredTheme,
  }
}
