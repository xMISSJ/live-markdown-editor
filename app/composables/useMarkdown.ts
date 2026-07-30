import { marked } from 'marked'
import DOMPurify from 'dompurify'

marked.setOptions({
  gfm: true,
  breaks: true,
})

export function useMarkdown() {
  function renderMarkdown(source: string): string {
    const html = marked.parse(source, { async: false }) as string

    if (import.meta.client) {
      return DOMPurify.sanitize(html)
    }

    return html
  }

  return { renderMarkdown }
}
