<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <section class="pane editor-pane">
    <header class="pane-header">
      <h2>Markdown</h2>
    </header>
    <textarea
      class="editor"
      :value="modelValue"
      placeholder="Start writing markdown…"
      spellcheck="false"
      aria-label="Markdown input"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </section>
</template>
