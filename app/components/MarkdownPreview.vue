<script setup lang="ts">
const props = defineProps<{
  source: string
}>()

const { renderMarkdown } = useMarkdown()

const html = computed(() => renderMarkdown(props.source))
</script>

<template>
  <section class="pane preview-pane">
    <header class="pane-header">
      <h2>Preview</h2>
    </header>
    <article class="preview prose" v-html="html" />
  </section>
</template>
