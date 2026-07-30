<script setup lang="ts">
const { theme, toggleTheme, initTheme } = useTheme()

// Restore saved theme before paint when possible; keep html attrs reactive
if (import.meta.client) {
  initTheme()
}

useHead({
  title: 'Live Markdown Editor',
  htmlAttrs: computed(() => ({
    'data-theme': theme.value,
    style: `color-scheme: ${theme.value}`,
  })),
  script: [
    {
      key: 'theme-boot',
      // Runs early so HMR/reloads don't flash the wrong theme
      children: `(function(){try{var k=${JSON.stringify('markdown-editor-theme')};var t=localStorage.getItem(k);t=t==='light'||t==='dark'?t:'dark';var r=document.documentElement;r.setAttribute('data-theme',t);r.style.colorScheme=t;}catch(e){}})();`,
      tagPosition: 'head',
    },
  ],
})

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

const themeLabel = computed(() =>
  theme.value === 'dark' ? 'Light mode' : 'Dark mode',
)

function insertExample(snippet: string) {
  editorRef.value?.insertSnippet(snippet)
}
</script>

<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <header class="app-header">
      <div class="app-header-copy">
        <h1>Live Markdown Editor</h1>
        <p>Write markdown on the left, see the preview on the right.</p>
      </div>
      <div class="app-header-actions">
        <button
          type="button"
          class="theme-toggle"
          @click="cheatsheetOpen = true"
        >
          Cheat sheet
        </button>
        <button
          type="button"
          class="theme-toggle"
          :aria-label="`Switch to ${themeLabel}`"
          @click="toggleTheme"
        >
          {{ themeLabel }}
        </button>
      </div>
    </header>
    <main class="editor-layout">
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
