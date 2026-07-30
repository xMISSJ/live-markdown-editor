export default {
  ui: {
    appTitle: 'Live Markdown Editor',
    appSubtitle: 'Schrijf markdown links en bekijk de preview rechts.',
    cheatSheet: 'Cheatsheet',
    lightMode: 'Lichte modus',
    darkMode: 'Donkere modus',
    language: 'Taal',
    cheatTitle: 'Markdown cheatsheet',
    cheatSubtitle: 'Volledige syntaxisreferentie. Voeg voorbeelden direct in de editor in.',
    close: 'Sluiten',
    insert: 'Invoegen',
    write: 'Schrijven',
    markdown: 'Markdown',
    source: 'bron',
    live: 'Live',
    preview: 'Voorbeeld',
    rendered: 'gerenderd',
    markdownEditorAria: 'Markdown-editor',
    markdownInputAria: 'Markdown-invoer',
    renderedPreviewAria: 'Gerenderde preview',
    loadingEditor: 'Editor laden…',
    markdownSectionsAria: 'Markdown-secties',
    startWriting: 'Begin met markdown schrijven… Probeer Ctrl+Spatie voor snippets.',
    suggestCalloutInfo: 'Informatieve callout',
    suggestCalloutInfoDetail: 'NOTE-calloutfragment invoegen',
    suggestCalloutTip: 'Tip-callout',
    suggestCalloutTipDetail: 'TIP-calloutfragment invoegen',
    suggestCalloutImportant: 'Belangrijke callout',
    suggestCalloutImportantDetail: 'IMPORTANT-calloutfragment invoegen',
    suggestCalloutWarning: 'Waarschuwing-callout',
    suggestCalloutWarningDetail: 'WARNING-calloutfragment invoegen',
    suggestCalloutCaution: 'Let-op-callout',
    suggestCalloutCautionDetail: 'CAUTION-calloutfragment invoegen',
    suggestHeadings: 'Koppen',
    suggestHeadingsDetail: 'Kopniveaus invoegen',
    suggestUnorderedList: 'Opsommingslijst',
    suggestUnorderedListDetail: 'Ongeordende lijst invoegen',
    suggestOrderedList: 'Genummerde lijst',
    suggestOrderedListDetail: 'Geordende lijst invoegen',
    suggestChecklist: 'Checklist',
    suggestChecklistDetail: 'Markdown-takenlijst invoegen',
    suggestTable: 'Tabel',
    suggestTableDetail: 'Markdown-tabelstarter invoegen',
    suggestLink: 'Link',
    suggestLinkDetail: 'Markdown-link invoegen',
    suggestImage: 'Afbeelding',
    suggestImageDetail: 'Markdown-afbeelding invoegen',
    suggestCodeBlock: 'Codeblok',
    suggestCodeBlockDetail: 'Codeblok met fences invoegen',
    suggestBlockquote: 'Blokcitaat',
    suggestBlockquoteDetail: 'Geciteerde tekst invoegen',
    suggestDivider: 'Scheidslijn',
    suggestDividerDetail: 'Horizontale lijn invoegen',
    suggestDetails: 'Inklapbare sectie',
    suggestDetailsDetail: 'HTML-detailsblok invoegen',
    suggestPreviewLabel: 'Preview',
    suggestHint: 'Typ om te filteren, of druk Ctrl+Spatie voor snippet-suggesties met preview.',
    suggestButton: 'Suggesties',
  },
  sections: {
    basics: {
      title: 'Basis',
      description: 'Kernsyntax van Markdown voor bijna elk document.',
    },
    'lists-tables': {
      title: 'Lijsten en tabellen',
      description: 'Gestructureerde inhoud: bullets, checkboxes en tabellen.',
    },
    'links-media': {
      title: 'Links en media',
      description: 'Manieren om resources te linken en in te sluiten.',
    },
    'code-blocks': {
      title: 'Code en citaten',
      description: 'Codeblokken, citaten en voorgeformatteerde tekst.',
    },
    'github-flavored': {
      title: 'GitHub Flavored',
      description: 'Populaire GFM-specifieke syntaxis.',
    },
    advanced: {
      title: 'Geavanceerd',
      description: 'Renderer-afhankelijke functies en handige extensies.',
    },
    'html-in-markdown': {
      title: 'HTML in Markdown',
      description: 'Ruwe HTML voor layout/opmaak wanneer toegestaan.',
    },
  },
  examples: {
    basics: {
      headings: {
        title: 'Koppen',
        description: 'Gebruik # voor kopniveaus 1-6.',
      },
      'paragraph-breaks': {
        title: 'Alinea’s en regeleinden',
        description: 'Een lege regel start een nieuwe alinea; twee spaties forceren een regeleinde.',
      },
      emphasis: {
        title: 'Vet, cursief, doorhalen',
        description: 'Benadruk tekst met symbolen.',
      },
      'inline-code': {
        title: 'Inline code',
        description: 'Zet korte codefragmenten tussen backticks.',
      },
      'escape-characters': {
        title: 'Speciale tekens escapen',
        description: 'Gebruik een backslash om markdown-symbolen letterlijk te tonen.',
      },
      hr: {
        title: 'Scheidslijn',
        description: 'Horizontale lijn tussen secties.',
      },
    },
    'lists-tables': {
      'unordered-list': {
        title: 'Ongeordende lijst',
        description: 'Opsomming met nesting.',
      },
      'ordered-list': {
        title: 'Geordende lijst',
        description: 'Genummerde stappen.',
      },
      'task-list': {
        title: 'Takenlijst',
        description: 'Checkboxes voor taken (GFM).',
      },
      'table-basic': {
        title: 'Tabel',
        description: 'Eenvoudige tabel met koprij.',
      },
      'table-alignment': {
        title: 'Tabeluitlijning',
        description: 'Links, midden en rechts uitlijnen per kolom.',
      },
    },
    'links-media': {
      links: {
        title: 'Inline links',
        description: 'Klikbare links met optionele titel.',
      },
      'reference-links': {
        title: 'Referentielinks',
        description: 'Houd URL’s onderaan voor schonere tekst.',
      },
      autolinks: {
        title: 'Automatische links',
        description: 'Ruwe URL of e-mail wordt automatisch gelinkt.',
      },
      images: {
        title: 'Afbeeldingen',
        description: 'Voeg afbeeldingen in met alt-tekst.',
      },
      'linked-image': {
        title: 'Klikbare afbeelding',
        description: 'Maak een afbeelding klikbaar.',
      },
    },
    'code-blocks': {
      'fenced-code': {
        title: 'Codeblok met fences',
        description: 'Drie backticks met optionele taal.',
      },
      'indented-code': {
        title: 'Ingesprongen codeblok',
        description: 'Spring regels vier spaties in.',
      },
      blockquote: {
        title: 'Blokcitaat',
        description: 'Citeer tekst met >.',
      },
      'nested-quote': {
        title: 'Genest citaat',
        description: 'Gebruik meerdere > voor geneste niveaus.',
      },
      'code-in-list': {
        title: 'Code in lijstitem',
        description: 'Combineer lijsten met codeblokken.',
      },
    },
    'github-flavored': {
      note: {
        title: 'Notitie',
        description: 'Informatieve callout.',
      },
      tip: {
        title: 'Tip',
        description: 'Nuttige suggestie-callout.',
      },
      important: {
        title: 'Belangrijk',
        description: 'Kritieke informatie.',
      },
      warning: {
        title: 'Waarschuwing',
        description: 'Waarschuwing met risico-focus.',
      },
      caution: {
        title: 'Let op',
        description: 'Waarschuwing voor negatieve gevolgen.',
      },
      'mention-hashtag': {
        title: 'Mentions en issues',
        description: 'Handig op platforms met at-teken- en hashtag-parsing.',
      },
    },
    advanced: {
      footnotes: {
        title: 'Voetnoten (indien ondersteund)',
        description: 'Referentienotities onderaan de pagina.',
      },
      'definition-list': {
        title: 'Definitielijst (indien ondersteund)',
        description: 'Term- en definitie-opmaak.',
      },
      'superscript-subscript-html': {
        title: 'Superscript/subscript via HTML',
        description: 'Gebruik HTML voor syntax die niet standaard in markdown zit.',
      },
      details: {
        title: 'Inklapbare sectie via HTML',
        description: 'Interactieve uitklapbare inhoud met HTML.',
      },
      kbd: {
        title: 'Toetsen via HTML',
        description: 'Veelgebruikt in documentatie en tutorials.',
      },
      'emoji-shortcodes': {
        title: 'Emoji-shortcodes (platformafhankelijk)',
        description: 'Werkt mogelijk op GitHub/Discord-achtige renderers.',
      },
    },
    'html-in-markdown': {
      'html-basic': {
        title: 'Basis HTML-blok',
        description: 'Combineer HTML en markdown-inhoud.',
      },
      'manual-callout': {
        title: 'Aangepaste callout via HTML',
        description: 'Fallback als alert-syntax niet ondersteund is.',
      },
    },
  },
}
