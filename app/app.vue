<script setup lang="ts">
useHead({
  title: 'Live Markdown Editor',
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
</script>

<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <header class="app-header">
      <h1>Live Markdown Editor</h1>
      <p>Write markdown on the left, see the preview on the right.</p>
    </header>
    <main class="editor-layout">
      <MarkdownEditor v-model="markdown" />
      <ClientOnly>
        <MarkdownPreview :source="markdown" />
      </ClientOnly>
    </main>
  </div>
</template>
