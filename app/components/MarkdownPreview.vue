<script setup lang="ts">
const props = defineProps<{
  source: string
}>()

const { renderMarkdown } = useMarkdown()
const { t } = useI18n()

const html = computed(() => renderMarkdown(props.source))
</script>

<template>
  <section class="flex min-h-0 min-w-0 flex-col bg-preview-bg" :aria-label="t('ui.renderedPreviewAria')">
    <header class="flex items-center gap-2.5 border-b border-line border-l-[3px] border-l-accent bg-panel-elevated px-4 py-2.5">
      <span class="inline-flex items-center rounded-[0.3rem] bg-badge-preview-bg px-2 py-[0.18rem] text-[0.7rem] font-bold uppercase tracking-[0.06em] text-badge-preview-ink">{{ t('ui.live') }}</span>
      <h2 class="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-ink">{{ t('ui.preview') }}</h2>
      <span class="ml-auto text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink-muted">{{ t('ui.rendered') }}</span>
    </header>
    <article class="prose flex-1 overflow-auto bg-preview-surface px-7 py-6 text-[1.08rem] leading-7 text-ink" v-html="html" />
  </section>
</template>
