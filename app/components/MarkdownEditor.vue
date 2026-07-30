<script setup lang="ts">
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection, placeholder } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'
import { syntaxHighlighting, HighlightStyle } from '@codemirror/language'
import { autocompletion, completionKeymap, startCompletion, type Completion, type CompletionContext } from '@codemirror/autocomplete'
import { tags } from '@lezer/highlight'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { theme } = useTheme()
const { t, locale } = useI18n()
const { renderMarkdown } = useMarkdown()

const host = ref<HTMLElement | null>(null)
let view: EditorView | null = null
const themeCompartment = new Compartment()
const placeholderCompartment = new Compartment()

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

function markdownCompletions() {
  const suggestionDefs: Array<{
    labelKey: string
    detailKey: string
    snippet: string
    boost: number
  }> = [
    {
      labelKey: 'ui.suggestCalloutInfo',
      detailKey: 'ui.suggestCalloutInfoDetail',
      snippet: '> [!NOTE]\n> Add helpful context here.',
      boost: 99,
    },
    {
      labelKey: 'ui.suggestCalloutTip',
      detailKey: 'ui.suggestCalloutTipDetail',
      snippet: '> [!TIP]\n> A useful tip for readers.',
      boost: 97,
    },
    {
      labelKey: 'ui.suggestCalloutImportant',
      detailKey: 'ui.suggestCalloutImportantDetail',
      snippet: '> [!IMPORTANT]\n> Crucial information for success.',
      boost: 96,
    },
    {
      labelKey: 'ui.suggestCalloutWarning',
      detailKey: 'ui.suggestCalloutWarningDetail',
      snippet: '> [!WARNING]\n> This action may have side effects.',
      boost: 95,
    },
    {
      labelKey: 'ui.suggestCalloutCaution',
      detailKey: 'ui.suggestCalloutCautionDetail',
      snippet: '> [!CAUTION]\n> Negative consequences are possible.',
      boost: 94,
    },
    {
      labelKey: 'ui.suggestHeadings',
      detailKey: 'ui.suggestHeadingsDetail',
      snippet: '# Heading 1\n## Heading 2\n### Heading 3',
      boost: 90,
    },
    {
      labelKey: 'ui.suggestUnorderedList',
      detailKey: 'ui.suggestUnorderedListDetail',
      snippet: '- First item\n- Second item\n  - Nested item',
      boost: 85,
    },
    {
      labelKey: 'ui.suggestOrderedList',
      detailKey: 'ui.suggestOrderedListDetail',
      snippet: '1. First step\n2. Second step\n3. Third step',
      boost: 84,
    },
    {
      labelKey: 'ui.suggestChecklist',
      detailKey: 'ui.suggestChecklistDetail',
      snippet: '- [x] Done\n- [ ] Next task\n- [ ] Later',
      boost: 83,
    },
    {
      labelKey: 'ui.suggestTable',
      detailKey: 'ui.suggestTableDetail',
      snippet: '| Column | Value |\n| --- | --- |\n| A | B |\n| C | D |',
      boost: 80,
    },
    {
      labelKey: 'ui.suggestLink',
      detailKey: 'ui.suggestLinkDetail',
      snippet: '[Markdown Guide](https://www.markdownguide.org)',
      boost: 75,
    },
    {
      labelKey: 'ui.suggestImage',
      detailKey: 'ui.suggestImageDetail',
      snippet: '![Alt text](https://picsum.photos/640/240)',
      boost: 74,
    },
    {
      labelKey: 'ui.suggestCodeBlock',
      detailKey: 'ui.suggestCodeBlockDetail',
      snippet: '```js\nconsole.log("Hello")\n```',
      boost: 72,
    },
    {
      labelKey: 'ui.suggestBlockquote',
      detailKey: 'ui.suggestBlockquoteDetail',
      snippet: '> Quoted text goes here.',
      boost: 70,
    },
    {
      labelKey: 'ui.suggestDivider',
      detailKey: 'ui.suggestDividerDetail',
      snippet: '---',
      boost: 65,
    },
    {
      labelKey: 'ui.suggestDetails',
      detailKey: 'ui.suggestDetailsDetail',
      snippet: '<details>\n  <summary>Click to expand</summary>\n  Hidden content goes here.\n</details>',
      boost: 60,
    },
  ]

  const items: Completion[] = suggestionDefs.map(def => ({
    label: t(def.labelKey),
    type: 'keyword',
    detail: t(def.detailKey),
    apply: def.snippet,
    info: () => suggestionPreview(def.snippet),
    boost: def.boost,
  }))

  return (context: CompletionContext) => {
    const word = context.matchBefore(/[\w!#-]*/)
    if (!word) return null
    if (!context.explicit && word.from === word.to) return null

    return {
      from: word.from,
      options: items,
      validFor: /[\w!#-]*/,
    }
  }
}

function suggestionPreview(snippet: string) {
  const container = document.createElement('div')
  container.style.maxWidth = '24rem'
  container.style.padding = '0.5rem'

  const code = document.createElement('pre')
  code.textContent = snippet
  code.style.margin = '0'
  code.style.padding = '0.5rem'
  code.style.border = '1px solid var(--line)'
  code.style.borderRadius = '0.375rem'
  code.style.background = 'var(--editor-field-bg)'
  code.style.fontSize = '0.75rem'
  code.style.whiteSpace = 'pre-wrap'
  code.style.lineHeight = '1.4'
  code.style.color = 'var(--ink)'

  const previewLabel = document.createElement('div')
  previewLabel.textContent = t('ui.suggestPreviewLabel')
  previewLabel.style.margin = '0.5rem 0 0.35rem'
  previewLabel.style.fontSize = '0.72rem'
  previewLabel.style.fontWeight = '600'
  previewLabel.style.color = 'var(--ink-muted)'

  const preview = document.createElement('div')
  preview.innerHTML = renderMarkdown(snippet)
  preview.className = 'prose'
  preview.style.padding = '0.6rem'
  preview.style.border = '1px solid var(--line)'
  preview.style.borderRadius = '0.375rem'
  preview.style.background = 'var(--panel-elevated)'
  preview.style.fontSize = '0.82rem'

  container.append(code, previewLabel, preview)
  return container
}

function createEditor(parent: HTMLElement): EditorView {
  const updateListener = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      emit('update:modelValue', update.state.doc.toString())
    }
  })

  const editor = new EditorView({
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
        autocompletion({
          override: [markdownCompletions()],
          activateOnTyping: true,
        }),
        placeholderCompartment.of(placeholder(t('ui.startWriting'))),
        keymap.of([...defaultKeymap, ...historyKeymap, ...completionKeymap, indentWithTab]),
        themeCompartment.of(themeExtensions(currentThemeMode())),
        updateListener,
        EditorView.lineWrapping,
      ],
    }),
  })

  view = editor
  return editor
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

watch(locale, () => {
  if (!view) return
  view.dispatch({
    effects: placeholderCompartment.reconfigure(placeholder(t('ui.startWriting'))),
  })
})

watch(
  host,
  (el) => {
    if (!el) return
    // Recreate after HMR remounts so CodeMirror picks up the active theme
    view?.destroy()
    view = null
    const editor = createEditor(el)
    editor.dispatch({
      effects: themeCompartment.reconfigure(themeExtensions(currentThemeMode())),
    })
  },
  { flush: 'post' },
)

onBeforeUnmount(() => {
  view?.destroy()
  view = null
})

function insertSnippet(snippet: string) {
  if (!view) {
    emit('update:modelValue', `${props.modelValue.replace(/\s*$/, '')}\n\n${snippet}\n`)
    return
  }

  const { from, to } = view.state.selection.main
  const prefix = from > 0 && view.state.doc.sliceString(Math.max(0, from - 2), from) !== '\n\n'
    ? (from > 0 ? '\n\n' : '')
    : ''
  const insert = `${prefix}${snippet}\n`

  view.dispatch({
    changes: { from, to, insert },
    selection: { anchor: from + insert.length },
    scrollIntoView: true,
  })
  view.focus()
}

function openSuggestions() {
  if (!view) return
  view.focus()
  startCompletion(view)
}

defineExpose({ insertSnippet })
</script>

<template>
  <section
    class="flex min-h-0 min-w-0 flex-col border-r border-line bg-editor-bg max-[800px]:border-r-0 max-[800px]:border-b"
    :aria-label="t('ui.markdownEditorAria')"
  >
    <header class="flex flex-wrap items-center gap-2.5 border-b border-line border-l-[3px] border-l-ink-muted bg-panel-elevated px-4 py-2.5">
      <span class="inline-flex items-center rounded-[0.3rem] bg-badge-editor-bg px-2 py-[0.18rem] text-[0.7rem] font-bold uppercase tracking-[0.06em] text-badge-editor-ink">{{ t('ui.write') }}</span>
      <h2 class="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-ink">{{ t('ui.markdown') }}</h2>
      <span class="ml-auto hidden text-[0.72rem] text-ink-muted min-[900px]:inline">{{ t('ui.suggestHint') }}</span>
      <UiButton class="ml-auto min-[900px]:ml-0 px-2.5 py-1 text-[0.75rem]" @click="openSuggestions">
        {{ t('ui.suggestButton') }}
      </UiButton>
    </header>
    <ClientOnly>
      <div
        ref="host"
        class="editor-host flex-1 overflow-hidden bg-editor-field-bg"
        role="textbox"
        :aria-label="t('ui.markdownInputAria')"
      />
      <template #fallback>
        <div class="flex flex-1 items-center justify-center bg-editor-field-bg font-mono text-sm text-ink-muted">{{ t('ui.loadingEditor') }}</div>
      </template>
    </ClientOnly>
  </section>
</template>
