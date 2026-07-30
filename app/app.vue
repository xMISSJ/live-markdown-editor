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

## Features

- **GitHub Flavored Markdown**
- Live preview as you type
- Safe HTML rendering

### Try a list

1. Write some markdown
2. Watch the preview
3. Keep going

\`\`\`js
console.log('Hello, markdown!')
\`\`\`

> Tip: use headings, lists, code, and links freely.
`

const markdown = ref(DEFAULT_MARKDOWN)

const themeLabel = computed(() =>
  theme.value === 'dark' ? 'Light mode' : 'Dark mode',
)
</script>

<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <header class="app-header">
      <div class="app-header-copy">
        <h1>Live Markdown Editor</h1>
        <p>Write markdown on the left, see the preview on the right.</p>
      </div>
      <button
        type="button"
        class="theme-toggle"
        :aria-label="`Switch to ${themeLabel}`"
        @click="toggleTheme"
      >
        {{ themeLabel }}
      </button>
    </header>
    <main class="editor-layout">
      <MarkdownEditor v-model="markdown" />
      <ClientOnly>
        <MarkdownPreview :source="markdown" />
      </ClientOnly>
    </main>
  </div>
</template>
