export default {
  ui: {
    appTitle: 'Live Markdown Editor',
    appSubtitle: 'Write markdown on the left, see the preview on the right.',
    cheatSheet: 'Cheat sheet',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    language: 'Language',
    cheatTitle: 'Markdown cheat sheet',
    cheatSubtitle: 'Comprehensive syntax reference. Insert any snippet into the editor.',
    close: 'Close',
    insert: 'Insert',
    write: 'Write',
    markdown: 'Markdown',
    source: 'source',
    live: 'Live',
    preview: 'Preview',
    rendered: 'rendered',
    markdownEditorAria: 'Markdown editor',
    markdownInputAria: 'Markdown input',
    renderedPreviewAria: 'Rendered preview',
    loadingEditor: 'Loading editor…',
    markdownSectionsAria: 'Markdown sections',
    startWriting: 'Start writing markdown…',
  },
  sections: {
    basics: {
      title: 'Basics',
      description: 'Core Markdown syntax used in nearly every document.',
    },
    'lists-tables': {
      title: 'Lists & Tables',
      description: 'Structured content: bullets, checkboxes, and tabular data.',
    },
    'links-media': {
      title: 'Links & Media',
      description: 'Ways to link and embed resources.',
    },
    'code-blocks': {
      title: 'Code & Quotes',
      description: 'Code fences, quoting, and preformatted text.',
    },
    'github-flavored': {
      title: 'GitHub Flavored',
      description: 'Popular GFM-specific syntax.',
    },
    advanced: {
      title: 'Advanced',
      description: 'Renderer-dependent features and useful extensions.',
    },
    'html-in-markdown': {
      title: 'HTML in Markdown',
      description: 'Raw HTML can be used for layouts/formatting when allowed.',
    },
  },
  examples: {
    basics: {
      headings: {
        title: 'Headings',
        description: 'Use # marks for heading levels 1-6.',
      },
      'paragraph-breaks': {
        title: 'Paragraphs & line breaks',
        description: 'Blank line starts a new paragraph; two spaces force a line break.',
      },
      emphasis: {
        title: 'Bold, italic, strikethrough',
        description: 'Emphasize text with symbols.',
      },
      'inline-code': {
        title: 'Inline code',
        description: 'Wrap short code snippets in backticks.',
      },
      'escape-characters': {
        title: 'Escape characters',
        description: 'Use a backslash to show markdown symbols literally.',
      },
      hr: {
        title: 'Divider',
        description: 'Horizontal rule between sections.',
      },
    },
    'lists-tables': {
      'unordered-list': {
        title: 'Unordered list',
        description: 'Bulleted list with nesting.',
      },
      'ordered-list': {
        title: 'Ordered list',
        description: 'Numbered steps.',
      },
      'task-list': {
        title: 'Task list',
        description: 'Checkboxes for todos (GFM).',
      },
      'table-basic': {
        title: 'Table',
        description: 'Simple table with header row.',
      },
      'table-alignment': {
        title: 'Table alignment',
        description: 'Left, center, and right column alignment.',
      },
    },
    'links-media': {
      links: {
        title: 'Inline links',
        description: 'Clickable links with optional title.',
      },
      'reference-links': {
        title: 'Reference links',
        description: 'Keep URLs at the bottom for cleaner writing.',
      },
      autolinks: {
        title: 'Automatic links',
        description: 'Raw URL or email gets linked automatically.',
      },
      images: {
        title: 'Images',
        description: 'Embed images with alt text.',
      },
      'linked-image': {
        title: 'Linked image',
        description: 'Make an image clickable.',
      },
    },
    'code-blocks': {
      'fenced-code': {
        title: 'Fenced code block',
        description: 'Triple backticks with optional language.',
      },
      'indented-code': {
        title: 'Indented code block',
        description: 'Indent lines by four spaces.',
      },
      blockquote: {
        title: 'Blockquote',
        description: 'Quote text with >.',
      },
      'nested-quote': {
        title: 'Nested quote',
        description: 'Use multiple > for nested levels.',
      },
      'code-in-list': {
        title: 'Code in list item',
        description: 'Combine lists and code blocks.',
      },
    },
    'github-flavored': {
      note: {
        title: 'Note',
        description: 'Informational callout.',
      },
      tip: {
        title: 'Tip',
        description: 'Helpful suggestion callout.',
      },
      important: {
        title: 'Important',
        description: 'Critical information.',
      },
      warning: {
        title: 'Warning',
        description: 'Risk-oriented warning.',
      },
      caution: {
        title: 'Caution',
        description: 'Negative consequences warning.',
      },
      'mention-hashtag': {
        title: 'Mentions & issues',
        description: 'Useful on platforms that support at-sign and hashtag parsing.',
      },
    },
    advanced: {
      footnotes: {
        title: 'Footnotes (if supported)',
        description: 'Reference notes at the bottom.',
      },
      'definition-list': {
        title: 'Definition list (if supported)',
        description: 'Term and definition format.',
      },
      'superscript-subscript-html': {
        title: 'Superscript/Subscript via HTML',
        description: 'Use HTML for syntax not built into basic markdown.',
      },
      details: {
        title: 'Collapsible section via HTML',
        description: 'Interactive disclosure using HTML.',
      },
      kbd: {
        title: 'Keyboard keys via HTML',
        description: 'Common for docs and tutorials.',
      },
      'emoji-shortcodes': {
        title: 'Emoji shortcodes (platform-dependent)',
        description: 'May work on GitHub/Discord-style renderers.',
      },
    },
    'html-in-markdown': {
      'html-basic': {
        title: 'Basic HTML block',
        description: 'Mix HTML and markdown content.',
      },
      'manual-callout': {
        title: 'Custom callout via HTML',
        description: 'Fallback if alert syntax is unsupported.',
      },
    },
  },
}
