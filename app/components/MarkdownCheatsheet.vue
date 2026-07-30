<script setup lang="ts">
import { markdownSections } from '~/utils/markdownExamples'

const open = defineModel<boolean>('open', { default: false })

const emit = defineEmits<{
  insert: [snippet: string]
}>()

const { renderMarkdown } = useMarkdown()

const activeSection = ref(markdownSections[0]?.id ?? '')

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
      class="cheatsheet-backdrop"
      @click="close"
    />
    <aside
      class="cheatsheet"
      :class="{ 'cheatsheet-open': open }"
      aria-label="Markdown cheat sheet"
      :aria-hidden="!open"
    >
      <header class="cheatsheet-header">
        <div>
          <h2>Markdown cheat sheet</h2>
          <p>Comprehensive syntax reference. Insert any snippet into the editor.</p>
        </div>
        <button type="button" class="theme-toggle" @click="close">
          Close
        </button>
      </header>

      <nav class="cheatsheet-toc" aria-label="Markdown sections">
        <button
          v-for="section in markdownSections"
          :key="section.id"
          type="button"
          class="cheatsheet-toc-item"
          :class="{ 'cheatsheet-toc-item-active': activeSection === section.id }"
          @click="jumpToSection(section.id)"
        >
          {{ section.title }}
        </button>
      </nav>

      <div class="cheatsheet-list">
        <section
          v-for="section in markdownSections"
          :id="`section-${section.id}`"
          :key="section.id"
          class="cheatsheet-section"
        >
          <header class="cheatsheet-section-header">
            <h3>{{ section.title }}</h3>
            <p>{{ section.description }}</p>
          </header>
          <article
            v-for="example in section.examples"
            :key="example.id"
            class="cheatsheet-card"
          >
            <div class="cheatsheet-card-top">
              <div>
                <h4>{{ example.title }}</h4>
                <p>{{ example.description }}</p>
              </div>
              <button
                type="button"
                class="cheatsheet-insert"
                @click="emit('insert', example.snippet)"
              >
                Insert
              </button>
            </div>

            <pre class="cheatsheet-source"><code>{{ example.snippet }}</code></pre>

            <div
              class="cheatsheet-preview prose"
              v-html="renderMarkdown(example.snippet)"
            />
          </article>
        </section>
      </div>
    </aside>
  </Teleport>
</template>
