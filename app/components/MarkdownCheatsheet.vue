<script setup lang="ts">
import { markdownSections } from '~/utils/markdownExamples'

const open = defineModel<boolean>('open', { default: false })

const emit = defineEmits<{
  insert: [snippet: string]
}>()

const { t, tm } = useI18n()

const activeSection = ref(markdownSections[0]?.id ?? '')

function sectionText(sectionId: string) {
  const sections = tm('sections') as Record<string, { title: string, description: string }>
  const section = sections?.[sectionId]
  if (section) return section

  return {
    title: t(`sections.${sectionId}.title`),
    description: t(`sections.${sectionId}.description`),
  }
}

const sectionCopyById = computed(() =>
  Object.fromEntries(
    markdownSections.map(section => [section.id, sectionText(section.id)]),
  ),
)

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
      class="fixed inset-0 z-40 transition-opacity duration-200"
      :class="open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
    >
      <div
        class="absolute inset-0 bg-black/45"
        @click="close"
      />
    </div>

    <div
      class="fixed inset-y-0 right-0 z-50 flex w-full justify-end"
      :class="open ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <aside
        class="flex h-full w-full max-w-136 flex-col border-l border-line bg-header-bg text-ink shadow-2xl transition-transform duration-250 ease-out will-change-transform"
        :class="open ? 'translate-x-0' : 'translate-x-full'"
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
          <MarkdownCheatsheetSection
            v-for="section in markdownSections"
            :key="section.id"
            :section="section"
            :title="sectionCopyById[section.id]?.title ?? sectionText(section.id).title"
            :description="sectionCopyById[section.id]?.description ?? sectionText(section.id).description"
            @insert="emit('insert', $event)"
          />
        </div>
      </aside>
    </div>
  </Teleport>
</template>
