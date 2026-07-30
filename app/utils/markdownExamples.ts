export type MarkdownExample = {
  id: string
  snippet: string
}

export type MarkdownSection = {
  id: string
  examples: MarkdownExample[]
}

export const markdownSections: MarkdownSection[] = [
  {
    id: 'basics',
    examples: [
      {
        id: 'headings',
        snippet: `# Heading 1
## Heading 2
### Heading 3
#### Heading 4`,
      },
      {
        id: 'paragraph-breaks',
        snippet: `This is paragraph one.

This is paragraph two.  
This line is a hard break.`,
      },
      {
        id: 'emphasis',
        snippet: `This is **bold**, this is *italic*, and this is ***both***.
This is ~~strikethrough~~ and this is <u>underlined (HTML)</u>.`,
      },
      {
        id: 'inline-code',
        snippet: 'Use `const name = "Jenny"` inside a sentence.',
      },
      {
        id: 'escape-characters',
        snippet: `\\*not italic\\* and \\#not a heading`,
      },
      {
        id: 'hr',
        snippet: `Section one

---

Section two`,
      },
    ],
  },
  {
    id: 'lists-tables',
    examples: [
      {
        id: 'unordered-list',
        snippet: `- Milk
- Eggs
  - Organic
  - Free range
- Bread`,
      },
      {
        id: 'ordered-list',
        snippet: `1. Mix ingredients
2. Bake for 20 minutes
3. Let cool`,
      },
      {
        id: 'task-list',
        snippet: `- [x] Draft outline
- [ ] Write first section
- [ ] Add examples`,
      },
      {
        id: 'table-basic',
        snippet: `| Feature | Supported |
| --- | --- |
| Lists | Yes |
| Tables | Yes |
| Alerts | Yes |`,
      },
      {
        id: 'table-alignment',
        snippet: `| Left | Center | Right |
| :--- | :----: | ----: |
| A | B | C |`,
      },
    ],
  },
  {
    id: 'links-media',
    examples: [
      {
        id: 'links',
        snippet: `[Markdown Guide](https://www.markdownguide.org "Open guide")`,
      },
      {
        id: 'reference-links',
        snippet: `Read [the docs][docs-link] and [the FAQ][faq].

[docs-link]: https://www.markdownguide.org
[faq]: https://www.markdownguide.org/faq/`,
      },
      {
        id: 'autolinks',
        snippet: `https://example.com
hello@example.com`,
      },
      {
        id: 'images',
        snippet: `![Alt text](https://picsum.photos/640/240)`,
      },
      {
        id: 'linked-image',
        snippet: `[![Open site](https://picsum.photos/320/120)](https://example.com)`,
      },
    ],
  },
  {
    id: 'code-blocks',
    examples: [
      {
        id: 'fenced-code',
        snippet: `\`\`\`ts
function greet(name: string) {
  return \`Hello, \${name}!\`
}
\`\`\``,
      },
      {
        id: 'indented-code',
        snippet: `    const x = 1
    const y = 2
    console.log(x + y)`,
      },
      {
        id: 'blockquote',
        snippet: `> Design is not just what it looks like.
>
> — Steve Jobs`,
      },
      {
        id: 'nested-quote',
        snippet: `> Outer quote
>> Nested quote`,
      },
      {
        id: 'code-in-list',
        snippet: `1. Install
   \`\`\`bash
   npm install
   \`\`\`
2. Run
   \`\`\`bash
   npm run dev
   \`\`\``,
      },
    ],
  },
  {
    id: 'github-flavored',
    examples: [
      {
        id: 'note',
        snippet: `> [!NOTE]
> Highlights information users should notice.`,
      },
      {
        id: 'tip',
        snippet: `> [!TIP]
> You can click **Insert** to paste this in the editor.`,
      },
      {
        id: 'important',
        snippet: `> [!IMPORTANT]
> Crucial information needed for users to succeed.`,
      },
      {
        id: 'warning',
        snippet: `> [!WARNING]
> This action may overwrite local files.`,
      },
      {
        id: 'caution',
        snippet: `> [!CAUTION]
> Negative potential consequences of an action.`,
      },
      {
        id: 'mention-hashtag',
        snippet: `Thanks @teammate — tracked in #123.`,
      },
    ],
  },
  {
    id: 'advanced',
    examples: [
      {
        id: 'footnotes',
        snippet: `Here is a claim with a footnote.[^1]

[^1]: Footnote text.`,
      },
      {
        id: 'definition-list',
        snippet: `Term
: Definition text`,
      },
      {
        id: 'superscript-subscript-html',
        snippet: `H<sub>2</sub>O and E = mc<sup>2</sup>`,
      },
      {
        id: 'details',
        snippet: `<details>
  <summary>Click to expand</summary>
  Hidden content goes here.
</details>`,
      },
      {
        id: 'kbd',
        snippet: `Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.`,
      },
      {
        id: 'emoji-shortcodes',
        snippet: `:rocket: :sparkles: :warning:`,
      },
    ],
  },
  {
    id: 'html-in-markdown',
    examples: [
      {
        id: 'html-basic',
        snippet: `<div>
  <strong>Bold via HTML</strong>
  <br />
  <em>Italic via HTML</em>
</div>`,
      },
      {
        id: 'manual-callout',
        snippet: `<blockquote>
  <p><strong>Warning:</strong> Back up your files first.</p>
</blockquote>`,
      },
    ],
  },
]
