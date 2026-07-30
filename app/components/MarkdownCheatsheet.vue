<script setup lang="ts">
import { markdownSections } from '~/utils/markdownExamples'

const open = defineModel<boolean>('open', { default: false })

const emit = defineEmits<{
  insert: [snippet: string]
}>()

const { renderMarkdown } = useMarkdown()
const { t } = useI18n()

const activeSection = ref(markdownSections[0]?.id ?? '')

function sectionText(sectionId: string) {
  return {
    title: t(`sections.${sectionId}.title`),
    description: t(`sections.${sectionId}.description`),
  }
}

function close() {
  open.value = false
}

function jumpToSection(sectionId: string) {
  activeSection.value = sectionId
  if (!import.meta.client) return
  const el = document.getElementById(`section-${sectionId}`)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) close()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/45"
      @click="close"
    />
    <aside
      class="fixed right-0 top-0 z-50 flex h-full w-full max-w-136 translate-x-full flex-col border-l border-line bg-header-bg text-ink transition-transform duration-200 pointer-events-none"
      :class="{ 'translate-x-0 pointer-events-auto': open }"
      :aria-label="t('ui.cheatTitle')"
      :aria-hidden="!open"
    >
      <header class="flex items-start justify-between gap-4 border-b border-line px-[1.15rem] py-4">
        <div>
          <h2 class="mb-1 text-[1.05rem] font-semibold">{{ t('ui.cheatTitle') }}</h2>
          <p class="m-0 text-[0.88rem] leading-[1.45] text-ink-muted">{{ t('ui.cheatSubtitle') }}</p>
        </div>
        <button type="button" class="inline-flex items-center rounded-md border border-line bg-panel-elevated px-3 py-1.5 text-[0.85rem] font-semibold text-ink transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" @click="close">
          {{ t('ui.close') }}
        </button>
      </header>

      <nav class="flex flex-wrap gap-1.5 border-b border-line bg-panel-elevated px-4 py-3" :aria-label="t('ui.markdownSectionsAria')">
        <button
          v-for="section in markdownSections"
          :key="section.id"
          type="button"
          class="cursor-pointer rounded-full border border-line bg-transparent px-[0.55rem] py-[0.28rem] text-[0.74rem] font-semibold tracking-[0.03em] text-ink-muted transition-colors hover:border-accent hover:text-ink"
          :class="{ 'border-accent bg-accent/20 text-ink': activeSection === section.id }"
          @click="jumpToSection(section.id)"
        >
          {{ sectionText(section.id)?.title }}
        </button>
      </nav>

      <div class="flex flex-1 flex-col gap-4 overflow-auto p-4">
        <section
          v-for="section in markdownSections"
          :id="`section-${section.id}`"
          :key="section.id"
          class="flex scroll-mt-3 flex-col gap-2.5"
        >
          <header>
            <h3 class="m-0 text-[0.96rem] font-semibold">{{ sectionText(section.id)?.title }}</h3>
            <p class="mt-1 text-[0.8rem] text-ink-muted">{{ sectionText(section.id)?.description }}</p>
          </header>
          <article
            v-for="example in section.examples"
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
      </div>
    </aside>
  </Teleport>
</template>
