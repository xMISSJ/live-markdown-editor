<script setup lang="ts">
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection, placeholder } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'
import { syntaxHighlighting, HighlightStyle } from '@codemirror/language'
import { tags } from '@lezer/highlight'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { theme } = useTheme()

const host = ref<HTMLElement | null>(null)
let view: EditorView | null = null
const themeCompartment = new Compartment()

const lightHighlight = HighlightStyle.define([
  { tag: tags.heading, color: '#0550ae', fontWeight: '700' },
  { tag: tags.strong, color: '#1f2328', fontWeight: '700' },
  { tag: tags.emphasis, color: '#1f2328', fontStyle: 'italic' },
  { tag: tags.link, color: '#0969da' },
  { tag: tags.url, color: '#0a3069' },
  { tag: tags.monospace, color: '#cf222e' },
  { tag: tags.quote, color: '#59636e', fontStyle: 'italic' },
  { tag: tags.meta, color: '#8250df' },
  { tag: tags.keyword, color: '#cf222e' },
  { tag: tags.comment, color: '#6e7781' },
  { tag: tags.processingInstruction, color: '#8250df' },
])

const darkHighlight = HighlightStyle.define([
  { tag: tags.heading, color: '#79c0ff', fontWeight: '700' },
  { tag: tags.strong, color: '#e6edf3', fontWeight: '700' },
  { tag: tags.emphasis, color: '#e6edf3', fontStyle: 'italic' },
  { tag: tags.link, color: '#a5d6ff' },
  { tag: tags.url, color: '#a5d6ff' },
  { tag: tags.monospace, color: '#ff7b72' },
  { tag: tags.quote, color: '#8b949e', fontStyle: 'italic' },
  { tag: tags.meta, color: '#d2a8ff' },
  { tag: tags.keyword, color: '#ff7b72' },
  { tag: tags.comment, color: '#8b949e' },
  { tag: tags.processingInstruction, color: '#d2a8ff' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
])

const lightTheme = EditorView.theme({
  '&': {
    height: '100%',
    backgroundColor: '#f0f2f5',
    color: '#1f2328',
  },
  '.cm-scroller': {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.95rem',
    lineHeight: '1.65',
  },
  '.cm-content': {
    caretColor: '#0f7a52',
    padding: '1rem 0',
  },
  '.cm-gutters': {
    backgroundColor: '#e8ebf0',
    color: '#656d76',
    border: 'none',
    borderRight: '1px solid #d0d7de',
  },
  '.cm-activeLine': {
    backgroundColor: '#e7ecf2',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#dde3ea',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
    backgroundColor: '#add6ff55',
  },
  '.cm-cursor': {
    borderLeftColor: '#0f7a52',
  },
}, { dark: false })

const darkTheme = EditorView.theme({
  '&': {
    height: '100%',
    backgroundColor: '#1c2128',
    color: '#e6edf3',
  },
  '.cm-scroller': {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.95rem',
    lineHeight: '1.65',
  },
  '.cm-content': {
    caretColor: '#3fb950',
    padding: '1rem 0',
  },
  '.cm-gutters': {
    backgroundColor: '#1c2128',
    color: '#768390',
    border: 'none',
    borderRight: '1px solid #373e47',
  },
  '.cm-activeLine': {
    backgroundColor: '#252b33',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#252b33',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
    backgroundColor: '#388bfd33',
  },
  '.cm-cursor': {
    borderLeftColor: '#3fb950',
  },
}, { dark: true })

function themeExtensions(mode: 'dark' | 'light') {
  if (mode === 'dark') {
    return [darkTheme, syntaxHighlighting(darkHighlight)]
  }
  return [lightTheme, syntaxHighlighting(lightHighlight)]
}

function currentThemeMode(): 'dark' | 'light' {
  if (import.meta.client) {
    const fromDom = document.documentElement.dataset.theme
    if (fromDom === 'light' || fromDom === 'dark') return fromDom
  }
  return theme.value
}

function createEditor(parent: HTMLElement) {
  const updateListener = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      emit('update:modelValue', update.state.doc.toString())
    }
  })

  view = new EditorView({
    parent,
    state: EditorState.create({
      doc: props.modelValue,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        drawSelection(),
        history(),
        markdown(),
        placeholder('Start writing markdown…'),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        themeCompartment.of(themeExtensions(currentThemeMode())),
        updateListener,
        EditorView.lineWrapping,
      ],
    }),
  })
}

watch(
  () => props.modelValue,
  (value) => {
    if (!view) return
    const current = view.state.doc.toString()
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      })
    }
  },
)

watch(
  theme,
  (mode) => {
    if (!view) return
    view.dispatch({
      effects: themeCompartment.reconfigure(themeExtensions(mode)),
    })
  },
)

watch(
  host,
  (el) => {
    if (!el) return
    // Recreate after HMR remounts so CodeMirror picks up the active theme
    view?.destroy()
    view = null
    createEditor(el)
    view?.dispatch({
      effects: themeCompartment.reconfigure(themeExtensions(currentThemeMode())),
    })
  },
  { flush: 'post' },
)

onBeforeUnmount(() => {
  view?.destroy()
  view = null
})
</script>

<template>
  <section class="pane editor-pane" aria-label="Markdown editor">
    <header class="pane-header">
      <span class="pane-badge pane-badge-editor">Write</span>
      <h2>Markdown</h2>
      <span class="pane-meta">source</span>
    </header>
    <ClientOnly>
      <div ref="host" class="editor-host" role="textbox" aria-label="Markdown input" />
      <template #fallback>
        <div class="editor-host editor-fallback">Loading editor…</div>
      </template>
    </ClientOnly>
  </section>
</template>
