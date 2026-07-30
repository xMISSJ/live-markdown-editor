import { marked } from 'marked'
import markedAlert from 'marked-alert'
import DOMPurify from 'dompurify'

marked.use(
  markedAlert(),
  {
    gfm: true,
    breaks: true,
  },
)

export function useMarkdown() {
  function renderMarkdown(source: string): string {
    const html = marked.parse(source, { async: false }) as string

    if (import.meta.client) {
      return DOMPurify.sanitize(html, {
        ADD_TAGS: ['svg', 'path'],
        ADD_ATTR: ['viewBox', 'width', 'height', 'aria-hidden', 'fill', 'd', 'class'],
      })
    }

    return html
  }

  return { renderMarkdown }
}
