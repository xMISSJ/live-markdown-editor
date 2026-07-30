export default {
  ui: {
    appTitle: '实时 Markdown 编辑器',
    appSubtitle: '左侧编写 Markdown，右侧实时预览。',
    cheatSheet: '语法速查',
    lightMode: '浅色模式',
    darkMode: '深色模式',
    language: '语言',
    cheatTitle: 'Markdown 语法速查',
    cheatSubtitle: '完整语法参考。可一键插入示例到编辑器。',
    close: '关闭',
    insert: '插入',
    write: '编写',
    markdown: 'Markdown',
    source: '源码',
    live: '实时',
    preview: '预览',
    rendered: '渲染结果',
    markdownEditorAria: 'Markdown 编辑器',
    markdownInputAria: 'Markdown 输入',
    renderedPreviewAria: '渲染预览',
    loadingEditor: '正在加载编辑器…',
    markdownSectionsAria: 'Markdown 章节',
    startWriting: '开始编写 Markdown… 试试 Ctrl+Space 获取片段建议。',
    suggestCalloutInfo: '信息提示 Callout',
    suggestCalloutInfoDetail: '插入 NOTE 提示片段',
    suggestCalloutTip: '提示 Callout',
    suggestCalloutTipDetail: '插入 TIP 提示片段',
    suggestCalloutImportant: '重要 Callout',
    suggestCalloutImportantDetail: '插入 IMPORTANT 提示片段',
    suggestCalloutWarning: '警告 Callout',
    suggestCalloutWarningDetail: '插入 WARNING 提示片段',
    suggestCalloutCaution: '注意 Callout',
    suggestCalloutCautionDetail: '插入 CAUTION 提示片段',
    suggestHeadings: '标题',
    suggestHeadingsDetail: '插入标题层级',
    suggestUnorderedList: '无序列表',
    suggestUnorderedListDetail: '插入项目符号列表',
    suggestOrderedList: '有序列表',
    suggestOrderedListDetail: '插入编号列表',
    suggestChecklist: '任务清单',
    suggestChecklistDetail: '插入 Markdown 任务列表',
    suggestTable: '表格',
    suggestTableDetail: '插入 Markdown 表格模板',
    suggestLink: '链接',
    suggestLinkDetail: '插入 Markdown 链接',
    suggestImage: '图片',
    suggestImageDetail: '插入 Markdown 图片',
    suggestCodeBlock: '代码块',
    suggestCodeBlockDetail: '插入围栏代码块',
    suggestBlockquote: '引用',
    suggestBlockquoteDetail: '插入引用文本',
    suggestDivider: '分隔线',
    suggestDividerDetail: '插入水平分隔线',
    suggestDetails: '折叠区块',
    suggestDetailsDetail: '插入 HTML details 区块',
    suggestPreviewLabel: '预览',
    suggestHint: '输入可筛选，或按 Ctrl+Space 查看带预览的片段建议。',
    suggestButton: '建议',
  },
  sections: {
    basics: {
      title: '基础语法',
      description: '几乎所有文档都会用到的 Markdown 核心语法。',
    },
    'lists-tables': {
      title: '列表与表格',
      description: '结构化内容：项目符号、复选框和表格。',
    },
    'links-media': {
      title: '链接与媒体',
      description: '链接与嵌入资源的常见方式。',
    },
    'code-blocks': {
      title: '代码与引用',
      description: '代码块、引用和预格式化文本。',
    },
    'github-flavored': {
      title: 'GitHub 扩展语法',
      description: '常见的 GFM 专属语法。',
    },
    advanced: {
      title: '进阶',
      description: '依赖渲染器支持的特性与扩展写法。',
    },
    'html-in-markdown': {
      title: 'Markdown 中的 HTML',
      description: '在允许时可使用原生 HTML 完成布局和格式。',
    },
  },
  examples: {
    basics: {
      headings: {
        title: '标题',
        description: '使用 # 表示 1-6 级标题。',
      },
      'paragraph-breaks': {
        title: '段落与换行',
        description: '空行会开启新段落；行尾两个空格可强制换行。',
      },
      emphasis: {
        title: '加粗、斜体、删除线',
        description: '用符号强调文本。',
      },
      'inline-code': {
        title: '行内代码',
        description: '用反引号包裹短代码片段。',
      },
      'escape-characters': {
        title: '转义字符',
        description: '使用反斜杠按字面显示 markdown 符号。',
      },
      hr: {
        title: '分隔线',
        description: '在章节之间插入水平分隔线。',
      },
    },
    'lists-tables': {
      'unordered-list': {
        title: '无序列表',
        description: '支持嵌套的项目符号列表。',
      },
      'ordered-list': {
        title: '有序列表',
        description: '编号步骤列表。',
      },
      'task-list': {
        title: '任务列表',
        description: '任务复选框（GFM）。',
      },
      'table-basic': {
        title: '表格',
        description: '带表头行的基础表格。',
      },
      'table-alignment': {
        title: '表格对齐',
        description: '按列设置左对齐、居中和右对齐。',
      },
    },
    'links-media': {
      links: {
        title: '行内链接',
        description: '可点击链接（可选标题）。',
      },
      'reference-links': {
        title: '引用式链接',
        description: '将 URL 放在底部，让正文更整洁。',
      },
      autolinks: {
        title: '自动链接',
        description: '原始 URL 或邮箱会自动变为链接。',
      },
      images: {
        title: '图片',
        description: '使用替代文本嵌入图片。',
      },
      'linked-image': {
        title: '可点击图片',
        description: '让图片本身可点击跳转。',
      },
    },
    'code-blocks': {
      'fenced-code': {
        title: '围栏代码块',
        description: '三反引号语法，可选语言标识。',
      },
      'indented-code': {
        title: '缩进代码块',
        description: '每行缩进四个空格。',
      },
      blockquote: {
        title: '引用块',
        description: '使用 > 引用文本。',
      },
      'nested-quote': {
        title: '嵌套引用',
        description: '使用多个 > 表示嵌套层级。',
      },
      'code-in-list': {
        title: '列表中的代码',
        description: '组合列表与代码块。',
      },
    },
    'github-flavored': {
      note: {
        title: '注释',
        description: '信息提示型 callout。',
      },
      tip: {
        title: '提示',
        description: '建议型 callout。',
      },
      important: {
        title: '重要',
        description: '关键性信息。',
      },
      warning: {
        title: '警告',
        description: '风险导向的警示。',
      },
      caution: {
        title: '注意',
        description: '可能产生负面后果的警示。',
      },
      'mention-hashtag': {
        title: '提及与议题',
        description: '适用于支持艾特符号与话题标签解析的平台。',
      },
    },
    advanced: {
      footnotes: {
        title: '脚注（若支持）',
        description: '在文末添加引用说明。',
      },
      'definition-list': {
        title: '定义列表（若支持）',
        description: '术语与定义格式。',
      },
      'superscript-subscript-html': {
        title: '通过 HTML 实现上标/下标',
        description: '对基础 markdown 不支持的语法使用 HTML。',
      },
      details: {
        title: '通过 HTML 实现折叠区块',
        description: '使用 HTML 实现可交互的展开/折叠内容。',
      },
      kbd: {
        title: '通过 HTML 表示按键',
        description: '常用于文档与教程。',
      },
      'emoji-shortcodes': {
        title: 'Emoji 短代码（平台相关）',
        description: '可能在 GitHub/Discord 风格渲染器中生效。',
      },
    },
    'html-in-markdown': {
      'html-basic': {
        title: '基础 HTML 区块',
        description: '混合使用 HTML 与 markdown 内容。',
      },
      'manual-callout': {
        title: '通过 HTML 自定义 callout',
        description: '当不支持警告语法时的替代方案。',
      },
    },
  },
}
