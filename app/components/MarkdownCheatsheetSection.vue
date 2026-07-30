<script setup lang="ts">
import type { MarkdownSection } from '~/utils/markdownExamples'

const props = defineProps<{
  section: MarkdownSection
  title: string
  description: string
}>()

const emit = defineEmits<{
  insert: [snippet: string]
}>()

const { renderMarkdown } = useMarkdown()
const { t } = useI18n()
</script>

<template>
  <section
    :id="`section-${props.section.id}`"
    class="flex scroll-mt-3 flex-col gap-2.5"
  >
    <header>
      <h3 class="m-0 text-[0.96rem] font-semibold">{{ props.title }}</h3>
      <p class="mt-1 text-[0.8rem] text-ink-muted">{{ props.description }}</p>
    </header>
    <article
      v-for="example in props.section.examples"
      :key="example.id"
      class="rounded-[0.55rem] border border-line bg-preview-surface p-3.5"
    >
      <div class="mb-3 flex items-start justify-between gap-3">
        <div>
          <h4 class="mb-1 text-[0.9rem] font-semibold">{{ example.title }}</h4>
          <p class="m-0 text-[0.82rem] leading-[1.4] text-ink-muted">{{ example.description }}</p>
        </div>
        <button
          type="button"
          class="shrink-0 rounded-md border border-line bg-panel-elevated px-2.5 py-1.5 text-[0.8rem] font-semibold text-ink transition-colors hover:border-accent"
          @click="emit('insert', example.snippet)"
        >
          {{ t('ui.insert') }}
        </button>
      </div>

      <pre class="mb-3 overflow-auto whitespace-pre-wrap rounded-md border border-line bg-editor-field-bg px-3.5 py-3 text-[0.78rem] leading-[1.55] text-ink"><code>{{ example.snippet }}</code></pre>

      <div
        class="prose rounded-md border border-line bg-panel-elevated px-3.5 py-3 text-[0.92rem]"
        v-html="renderMarkdown(example.snippet)"
      />
    </article>
  </section>
</template>
