<script setup lang="ts">
const props = defineProps<{
  source: string
}>()

const { renderMarkdown } = useMarkdown()

const html = computed(() => renderMarkdown(props.source))
</script>

<template>
  <section class="pane preview-pane" aria-label="Rendered preview">
    <header class="pane-header">
      <span class="pane-badge pane-badge-preview">Live</span>
      <h2>Preview</h2>
      <span class="pane-meta">rendered</span>
    </header>
    <article class="preview prose" v-html="html" />
  </section>
</template>
