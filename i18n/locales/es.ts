export default {
  ui: {
    appTitle: 'Editor Markdown en Vivo',
    appSubtitle: 'Escribe markdown a la izquierda y mira la vista previa a la derecha.',
    cheatSheet: 'Guía rápida',
    lightMode: 'Modo claro',
    darkMode: 'Modo oscuro',
    language: 'Idioma',
    cheatTitle: 'Guía rápida de Markdown',
    cheatSubtitle: 'Referencia completa de sintaxis. Inserta cualquier ejemplo en el editor.',
    close: 'Cerrar',
    insert: 'Insertar',
    write: 'Escribir',
    markdown: 'Markdown',
    source: 'fuente',
    live: 'En vivo',
    preview: 'Vista previa',
    rendered: 'renderizado',
    markdownEditorAria: 'Editor Markdown',
    markdownInputAria: 'Entrada Markdown',
    renderedPreviewAria: 'Vista previa renderizada',
    loadingEditor: 'Cargando editor…',
    markdownSectionsAria: 'Secciones de Markdown',
    startWriting: 'Empieza a escribir markdown… Prueba Ctrl+Espacio para snippets.',
    suggestCalloutInfo: 'Callout informativo',
    suggestCalloutInfoDetail: 'Insertar fragmento NOTE',
    suggestCalloutTip: 'Callout de consejo',
    suggestCalloutTipDetail: 'Insertar fragmento TIP',
    suggestCalloutImportant: 'Callout importante',
    suggestCalloutImportantDetail: 'Insertar fragmento IMPORTANT',
    suggestCalloutWarning: 'Callout de advertencia',
    suggestCalloutWarningDetail: 'Insertar fragmento WARNING',
    suggestCalloutCaution: 'Callout de precaución',
    suggestCalloutCautionDetail: 'Insertar fragmento CAUTION',
    suggestHeadings: 'Encabezados',
    suggestHeadingsDetail: 'Insertar niveles de encabezado',
    suggestUnorderedList: 'Lista con viñetas',
    suggestUnorderedListDetail: 'Insertar lista desordenada',
    suggestOrderedList: 'Lista numerada',
    suggestOrderedListDetail: 'Insertar lista ordenada',
    suggestChecklist: 'Lista de tareas',
    suggestChecklistDetail: 'Insertar lista de verificación markdown',
    suggestTable: 'Tabla',
    suggestTableDetail: 'Insertar plantilla de tabla markdown',
    suggestLink: 'Enlace',
    suggestLinkDetail: 'Insertar enlace markdown',
    suggestImage: 'Imagen',
    suggestImageDetail: 'Insertar imagen markdown',
    suggestCodeBlock: 'Bloque de código',
    suggestCodeBlockDetail: 'Insertar bloque de código con fences',
    suggestBlockquote: 'Cita',
    suggestBlockquoteDetail: 'Insertar texto citado',
    suggestDivider: 'Separador',
    suggestDividerDetail: 'Insertar regla horizontal',
    suggestDetails: 'Sección desplegable',
    suggestDetailsDetail: 'Insertar bloque HTML details',
    suggestPreviewLabel: 'Vista previa',
    suggestHint: 'Escribe para filtrar, o pulsa Ctrl+Espacio para ver sugerencias con vista previa.',
    suggestButton: 'Sugerencias',
  },
  sections: {
    basics: {
      title: 'Básicos',
      description: 'Sintaxis esencial de Markdown para casi cualquier documento.',
    },
    'lists-tables': {
      title: 'Listas y tablas',
      description: 'Contenido estructurado: viñetas, casillas y tablas.',
    },
    'links-media': {
      title: 'Enlaces y medios',
      description: 'Formas de enlazar e incrustar recursos.',
    },
    'code-blocks': {
      title: 'Código y citas',
      description: 'Bloques de código, citas y texto preformateado.',
    },
    'github-flavored': {
      title: 'GitHub Flavored',
      description: 'Sintaxis popular específica de GFM.',
    },
    advanced: {
      title: 'Avanzado',
      description: 'Funciones dependientes del renderizador y extensiones útiles.',
    },
    'html-in-markdown': {
      title: 'HTML en Markdown',
      description: 'HTML crudo para diseño/formato cuando está permitido.',
    },
  },
  examples: {
    basics: {
      headings: {
        title: 'Encabezados',
        description: 'Usa # para niveles de encabezado 1-6.',
      },
      'paragraph-breaks': {
        title: 'Párrafos y saltos de línea',
        description: 'Una línea vacía inicia un nuevo párrafo; dos espacios fuerzan un salto de línea.',
      },
      emphasis: {
        title: 'Negrita, cursiva y tachado',
        description: 'Resalta texto con símbolos.',
      },
      'inline-code': {
        title: 'Código en línea',
        description: 'Envuelve fragmentos cortos de código con comillas invertidas.',
      },
      'escape-characters': {
        title: 'Escapar caracteres',
        description: 'Usa una barra invertida para mostrar símbolos de markdown literalmente.',
      },
      hr: {
        title: 'Separador',
        description: 'Regla horizontal entre secciones.',
      },
    },
    'lists-tables': {
      'unordered-list': {
        title: 'Lista desordenada',
        description: 'Lista con viñetas y anidación.',
      },
      'ordered-list': {
        title: 'Lista ordenada',
        description: 'Pasos numerados.',
      },
      'task-list': {
        title: 'Lista de tareas',
        description: 'Casillas de verificación para tareas (GFM).',
      },
      'table-basic': {
        title: 'Tabla',
        description: 'Tabla simple con fila de encabezado.',
      },
      'table-alignment': {
        title: 'Alineación de tabla',
        description: 'Alineación izquierda, centrada y derecha por columna.',
      },
    },
    'links-media': {
      links: {
        title: 'Enlaces en línea',
        description: 'Enlaces clicables con título opcional.',
      },
      'reference-links': {
        title: 'Enlaces de referencia',
        description: 'Mantén las URL al final para una escritura más limpia.',
      },
      autolinks: {
        title: 'Enlaces automáticos',
        description: 'Una URL o correo en bruto se enlaza automáticamente.',
      },
      images: {
        title: 'Imágenes',
        description: 'Inserta imágenes con texto alternativo.',
      },
      'linked-image': {
        title: 'Imagen con enlace',
        description: 'Haz que una imagen sea clicable.',
      },
    },
    'code-blocks': {
      'fenced-code': {
        title: 'Bloque de código con fences',
        description: 'Tres comillas invertidas con lenguaje opcional.',
      },
      'indented-code': {
        title: 'Bloque de código con sangría',
        description: 'Sangra líneas con cuatro espacios.',
      },
      blockquote: {
        title: 'Cita en bloque',
        description: 'Cita texto con >.',
      },
      'nested-quote': {
        title: 'Cita anidada',
        description: 'Usa múltiples > para niveles anidados.',
      },
      'code-in-list': {
        title: 'Código en elemento de lista',
        description: 'Combina listas y bloques de código.',
      },
    },
    'github-flavored': {
      note: {
        title: 'Nota',
        description: 'Llamado informativo.',
      },
      tip: {
        title: 'Consejo',
        description: 'Llamado de sugerencia útil.',
      },
      important: {
        title: 'Importante',
        description: 'Información crítica.',
      },
      warning: {
        title: 'Advertencia',
        description: 'Advertencia orientada a riesgos.',
      },
      caution: {
        title: 'Precaución',
        description: 'Advertencia sobre posibles consecuencias negativas.',
      },
      'mention-hashtag': {
        title: 'Menciones e issues',
        description: 'Útil en plataformas con análisis de arroba y hashtag.',
      },
    },
    advanced: {
      footnotes: {
        title: 'Notas al pie (si se admite)',
        description: 'Notas de referencia al final.',
      },
      'definition-list': {
        title: 'Lista de definiciones (si se admite)',
        description: 'Formato de término y definición.',
      },
      'superscript-subscript-html': {
        title: 'Superíndice/subíndice vía HTML',
        description: 'Usa HTML para sintaxis no incluida en markdown básico.',
      },
      details: {
        title: 'Sección desplegable vía HTML',
        description: 'Divulgación interactiva usando HTML.',
      },
      kbd: {
        title: 'Teclas de teclado vía HTML',
        description: 'Común en documentación y tutoriales.',
      },
      'emoji-shortcodes': {
        title: 'Shortcodes de emoji (dependiente de la plataforma)',
        description: 'Puede funcionar en renderizadores estilo GitHub/Discord.',
      },
    },
    'html-in-markdown': {
      'html-basic': {
        title: 'Bloque HTML básico',
        description: 'Mezcla HTML y contenido markdown.',
      },
      'manual-callout': {
        title: 'Callout personalizado vía HTML',
        description: 'Alternativa si la sintaxis de alertas no está soportada.',
      },
    },
  },
}
