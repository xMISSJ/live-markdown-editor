export type MarkdownExample = {
  id: string
  title: string
  description: string
  snippet: string
}

export type MarkdownSection = {
  id: string
  title: string
  description: string
  examples: MarkdownExample[]
}

export const markdownSections: MarkdownSection[] = [
  {
    id: 'basics',
    title: 'Basics',
    description: 'Core Markdown syntax used in nearly every document.',
    examples: [
      {
        id: 'headings',
        title: 'Headings',
        description: 'Use # marks for heading levels 1–6.',
        snippet: `# Heading 1
## Heading 2
### Heading 3
#### Heading 4`,
      },
      {
        id: 'paragraph-breaks',
        title: 'Paragraphs & line breaks',
        description: 'Blank line starts a new paragraph; two spaces force a line break.',
        snippet: `This is paragraph one.

This is paragraph two.  
This line is a hard break.`,
      },
      {
        id: 'emphasis',
        title: 'Bold, italic, strikethrough',
        description: 'Emphasize text with symbols.',
        snippet: `This is **bold**, this is *italic*, and this is ***both***.
This is ~~strikethrough~~ and this is <u>underlined (HTML)</u>.`,
      },
      {
        id: 'inline-code',
        title: 'Inline code',
        description: 'Wrap short code snippets in backticks.',
        snippet: 'Use `const name = "Jenny"` inside a sentence.',
      },
      {
        id: 'escape-characters',
        title: 'Escape characters',
        description: 'Use a backslash to show markdown symbols literally.',
        snippet: `\\*not italic\\* and \\#not a heading`,
      },
      {
        id: 'hr',
        title: 'Divider',
        description: 'Horizontal rule between sections.',
        snippet: `Section one

---

Section two`,
      },
    ],
  },
  {
    id: 'lists-tables',
    title: 'Lists & Tables',
    description: 'Structured content: bullets, checkboxes, and tabular data.',
    examples: [
      {
        id: 'unordered-list',
        title: 'Unordered list',
        description: 'Bulleted list with nesting.',
        snippet: `- Milk
- Eggs
  - Organic
  - Free range
- Bread`,
      },
      {
        id: 'ordered-list',
        title: 'Ordered list',
        description: 'Numbered steps.',
        snippet: `1. Mix ingredients
2. Bake for 20 minutes
3. Let cool`,
      },
      {
        id: 'task-list',
        title: 'Task list',
        description: 'Checkboxes for todos (GFM).',
        snippet: `- [x] Draft outline
- [ ] Write first section
- [ ] Add examples`,
      },
      {
        id: 'table-basic',
        title: 'Table',
        description: 'Simple table with header row.',
        snippet: `| Feature | Supported |
| --- | --- |
| Lists | Yes |
| Tables | Yes |
| Alerts | Yes |`,
      },
      {
        id: 'table-alignment',
        title: 'Table alignment',
        description: 'Left, center, and right column alignment.',
        snippet: `| Left | Center | Right |
| :--- | :----: | ----: |
| A | B | C |`,
      },
    ],
  },
  {
    id: 'links-media',
    title: 'Links & Media',
    description: 'Ways to link and embed resources.',
    examples: [
      {
        id: 'links',
        title: 'Inline links',
        description: 'Clickable links with optional title.',
        snippet: `[Markdown Guide](https://www.markdownguide.org "Open guide")`,
      },
      {
        id: 'reference-links',
        title: 'Reference links',
        description: 'Keep URLs at the bottom for cleaner writing.',
        snippet: `Read [the docs][docs-link] and [the FAQ][faq].

[docs-link]: https://www.markdownguide.org
[faq]: https://www.markdownguide.org/faq/`,
      },
      {
        id: 'autolinks',
        title: 'Automatic links',
        description: 'Raw URL or email gets linked automatically.',
        snippet: `https://example.com
hello@example.com`,
      },
      {
        id: 'images',
        title: 'Images',
        description: 'Embed images with alt text.',
        snippet: `![Alt text](https://picsum.photos/640/240)`,
      },
      {
        id: 'linked-image',
        title: 'Linked image',
        description: 'Make an image clickable.',
        snippet: `[![Open site](https://picsum.photos/320/120)](https://example.com)`,
      },
    ],
  },
  {
    id: 'code-blocks',
    title: 'Code & Quotes',
    description: 'Code fences, quoting, and preformatted text.',
    examples: [
      {
        id: 'fenced-code',
        title: 'Fenced code block',
        description: 'Triple backticks with optional language.',
        snippet: `\`\`\`ts
function greet(name: string) {
  return \`Hello, \${name}!\`
}
\`\`\``,
      },
      {
        id: 'indented-code',
        title: 'Indented code block',
        description: 'Indent lines by four spaces.',
        snippet: `    const x = 1
    const y = 2
    console.log(x + y)`,
      },
      {
        id: 'blockquote',
        title: 'Blockquote',
        description: 'Quote text with >.',
        snippet: `> Design is not just what it looks like.
>
> — Steve Jobs`,
      },
      {
        id: 'nested-quote',
        title: 'Nested quote',
        description: 'Use multiple > for nested levels.',
        snippet: `> Outer quote
>> Nested quote`,
      },
      {
        id: 'code-in-list',
        title: 'Code in list item',
        description: 'Combine lists and code blocks.',
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
    title: 'GitHub Flavored',
    description: 'Popular GFM-specific syntax.',
    examples: [
      {
        id: 'note',
        title: 'Note',
        description: 'Informational callout.',
        snippet: `> [!NOTE]
> Highlights information users should notice.`,
      },
      {
        id: 'tip',
        title: 'Tip',
        description: 'Helpful suggestion callout.',
        snippet: `> [!TIP]
> You can click **Insert** to paste this in the editor.`,
      },
      {
        id: 'important',
        title: 'Important',
        description: 'Critical information.',
        snippet: `> [!IMPORTANT]
> Crucial information needed for users to succeed.`,
      },
      {
        id: 'warning',
        title: 'Warning',
        description: 'Risk-oriented warning.',
        snippet: `> [!WARNING]
> This action may overwrite local files.`,
      },
      {
        id: 'caution',
        title: 'Caution',
        description: 'Negative consequences warning.',
        snippet: `> [!CAUTION]
> Negative potential consequences of an action.`,
      },
      {
        id: 'mention-hashtag',
        title: 'Mentions & issues',
        description: 'Useful on platforms that support @ and # parsing.',
        snippet: `Thanks @teammate — tracked in #123.`,
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    description: 'Renderer-dependent features and useful extensions.',
    examples: [
      {
        id: 'footnotes',
        title: 'Footnotes (if supported)',
        description: 'Reference notes at the bottom.',
        snippet: `Here is a claim with a footnote.[^1]

[^1]: Footnote text.`,
      },
      {
        id: 'definition-list',
        title: 'Definition list (if supported)',
        description: 'Term and definition format.',
        snippet: `Term
: Definition text`,
      },
      {
        id: 'superscript-subscript-html',
        title: 'Superscript/Subscript via HTML',
        description: 'Use HTML for syntax not built into basic markdown.',
        snippet: `H<sub>2</sub>O and E = mc<sup>2</sup>`,
      },
      {
        id: 'details',
        title: 'Collapsible section via HTML',
        description: 'Interactive disclosure using HTML.',
        snippet: `<details>
  <summary>Click to expand</summary>
  Hidden content goes here.
</details>`,
      },
      {
        id: 'kbd',
        title: 'Keyboard keys via HTML',
        description: 'Common for docs and tutorials.',
        snippet: `Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.`,
      },
      {
        id: 'emoji-shortcodes',
        title: 'Emoji shortcodes (platform-dependent)',
        description: 'May work on GitHub/Discord-style renderers.',
        snippet: `:rocket: :sparkles: :warning:`,
      },
    ],
  },
  {
    id: 'html-in-markdown',
    title: 'HTML in Markdown',
    description: 'Raw HTML can be used for layouts/formatting when allowed.',
    examples: [
      {
        id: 'html-basic',
        title: 'Basic HTML block',
        description: 'Mix HTML and markdown content.',
        snippet: `<div>
  <strong>Bold via HTML</strong>
  <br />
  <em>Italic via HTML</em>
</div>`,
      },
      {
        id: 'manual-callout',
        title: 'Custom callout via HTML',
        description: 'Fallback if alert syntax is unsupported.',
        snippet: `<blockquote>
  <p><strong>Warning:</strong> Back up your files first.</p>
</blockquote>`,
      },
    ],
  },
]
