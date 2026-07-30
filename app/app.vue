<script setup lang="ts">
const { theme, toggleTheme, initTheme } = useTheme()
const { t, locale } = useI18n()
type Locale = 'en' | 'zh' | 'es' | 'nl'

// Restore saved theme before paint when possible; keep html attrs reactive
if (import.meta.client) {
  initTheme()
}

useHead(() => ({
  title: 'Live Markdown Editor',
  htmlAttrs: {
    'data-theme': theme.value,
    style: `color-scheme: ${theme.value}`,
  },
  script: [
    {
      key: 'theme-boot',
      // Runs early so HMR/reloads don't flash the wrong theme
      innerHTML: `(function(){try{var k=${JSON.stringify('markdown-editor-theme')};var t=localStorage.getItem(k);t=t==='light'||t==='dark'?t:'dark';var r=document.documentElement;r.setAttribute('data-theme',t);r.style.colorScheme=t;}catch(e){}})();`,
      tagPosition: 'head',
    },
  ],
}))

const DEFAULT_MARKDOWN = `# Live Markdown Editor

Type on the left — preview updates instantly on the right.

Open the **Cheat sheet** for syntax examples (lists, tables, notes, warnings, and more).

## Quick start

- Write markdown on the left
- See the live preview on the right
- Insert examples from the cheat sheet

\`\`\`js
console.log('Hello, markdown!')
\`\`\`

> [!TIP]
> Click **Cheat sheet** in the header whenever you forget the syntax.
`

const markdown = ref(DEFAULT_MARKDOWN)
const cheatsheetOpen = ref(false)
const editorRef = ref<{ insertSnippet: (snippet: string) => void } | null>(null)
const localeOptions: { label: string, value: Locale }[] = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
  { label: 'Español', value: 'es' },
  { label: 'Nederlands', value: 'nl' },
]

const themeLabel = computed(() =>
  theme.value === 'dark' ? t('ui.lightMode') : t('ui.darkMode'),
)

function insertExample(snippet: string) {
  editorRef.value?.insertSnippet(snippet)
}

</script>

<template>
  <div class="flex min-h-screen flex-col bg-bg text-ink">
    <NuxtRouteAnnouncer />
    <header class="flex items-center justify-between gap-4 border-b border-line bg-header-bg px-5 py-3.5 max-[800px]:flex-wrap">
      <div class="min-w-0">
        <h1 class="m-0 text-lg font-semibold tracking-tight">{{ t('ui.appTitle') }}</h1>
        <p class="m-0 text-sm text-ink-muted">{{ t('ui.appSubtitle') }}</p>
      </div>
      <div class="flex shrink-0 items-center gap-2">
        <label class="inline-flex items-center gap-1.5 rounded-md border border-line bg-panel-elevated px-2 py-1 text-xs font-semibold text-ink-muted">
          <span>{{ t('ui.language') }}</span>
          <select
            v-model="locale"
            class="min-w-34 rounded border border-line bg-header-bg px-1.5 py-0.5 text-[0.8rem] text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <option
              v-for="option in localeOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </label>
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-line bg-panel-elevated px-3 py-1.5 text-[0.85rem] font-semibold text-ink transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          @click="cheatsheetOpen = true"
        >
          {{ t('ui.cheatSheet') }}
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-line bg-panel-elevated px-3 py-1.5 text-[0.85rem] font-semibold text-ink transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          :aria-label="`Switch to ${themeLabel}`"
          @click="toggleTheme"
        >
          {{ themeLabel }}
        </button>
      </div>
    </header>
    <main class="grid min-h-0 flex-1 grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:grid-rows-2">
      <MarkdownEditor ref="editorRef" v-model="markdown" />
      <ClientOnly>
        <MarkdownPreview :source="markdown" />
      </ClientOnly>
    </main>

    <MarkdownCheatsheet
      v-model:open="cheatsheetOpen"
      @insert="insertExample"
    />
  </div>
</template>
