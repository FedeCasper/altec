export type TecnicoServiceSection = {
  title: string;
  items: string[];
};

export type TecnicoServiceDetail = {
  bajada: string;
  details: string;
  note?: string;
  sections: TecnicoServiceSection[];
  idealPara?: string[];
};

export const tecnicoServiceDetails: Record<string, TecnicoServiceDetail> = {
  "ploteo-impresion-planos": {
    bajada:
      "Servicio de impresión y ploteo técnico de alta precisión para arquitectura, ingeniería, agrimensura, obras y trámites municipales.",
    details:
      "Realizamos la impresión y ploteo de todo tipo de planos técnicos, proyectos de arquitectura, láminas de agrimensura y renders de presentación. Trabajamos tanto desde archivos digitales como a partir de copias directas de planos físicos. Si tu archivo CAD no incluye tabla de puntas (.ctb), asignamos los espesores de línea bajo normas técnicas estandarizadas o según las referencias de la lámina. Todos los trabajos incluyen refilado a margen y plegado estandarizado con pestaña listo para encarpetar.",
    sections: [
      {
        title: "Tipo de cobertura y trabajo",
        items: ["Líneas Blanco y Negro", "Líneas en Color y Renders", "Full Color / Alta Cobertura"],
      },
      {
        title: "Soportes y papeles",
        items: ["Papel Obra (90 grs)", "Film (Especial Agrimensura)"],
      },
      {
        title: "Formatos y tamaños disponibles",
        items: ["Láminas estándar (A4 / A3 / A2 / A1)", "Rollo 60 cm", "Rollo 90 cm", "Rollo 106.5 cm (107)"],
      },
      {
        title: "Formatos de archivo aceptados",
        items: ["PDF (Recomendado)", "AutoCAD (DWG / DWF)", "Tabla de Puntas (.CTB)"],
      },
      {
        title: "Servicios incluidos",
        items: ["Plegado con pestaña para carpeta", "Corte a margen / Refilado"],
      },
    ],
  },
  "fotocopia-escaneo-planos": {
    bajada:
      "Servicio de digitalización y copia directa de planos en formato físico para proyectos de arquitectura, ingeniería y agrimensura.",
    details:
      "Realizamos la digitalización (escaneo a archivo) y fotocopiado directo de planos técnicos en papel. Contamos con tecnología equipada con filtros de aclarado automático, ideal para recuperar planos viejos, manchados o desgastados, dejando el fondo lo más limpio y blanco posible para resaltar la legibilidad de líneas, firmas y sellos. Al digitalizar, te enviamos el archivo por WhatsApp, email o te lo guardamos directamente en tu pendrive. Si realizás una fotocopia (copia de plano físico a físico), entregamos el trabajo refilado a margen y con plegado bajo norma listo para encarpetar.",
    sections: [
      {
        title: "Modos de procesamiento",
        items: ["Blanco y Negro / Escala de Grises", "Color / Full Color", "Limpieza y Aclarado de Fondos"],
      },
      {
        title: "Formatos digitales de entrega",
        items: ["PDF (Alta calidad)", "JPG", "Envío por WhatsApp / Email / Pendrive"],
      },
      {
        title: "Tamaños y capacidad",
        items: ["Ancho máximo de paso: 90 cm", "Resolución técnica: 300 DPI"],
      },
      {
        title: "Servicios incluidos en fotocopia",
        items: ["Plegado con pestaña para carpeta", "Corte a margen / Refilado"],
      },
    ],
  },
  "impresion-fotocopia-documentos": {
    bajada:
      "Copia e impresión de documentación personal, legal y títulos académicos con cuidado de alta precisión y limpieza digital.",
    details:
      "Ofrecemos un servicio especializado para la duplicación e impresión de documentos importantes, escrituras, DNI y títulos (secundarios, universitarios y certificaciones). Para evitar daños y lograr la máxima nitidez, los títulos son procesados en nuestros escáneres de alta resolución, permitiendo limpiar manchas, corregir sombras del paso del tiempo y aclarar los fondos para que queden impecables. Gracias a este proceso digital, no solo realizamos copias estándar, sino que también podemos ampliar tu título o certificado a láminas de mayor tamaño.",
    sections: [
      {
        title: "Tamaños y formatos disponibles",
        items: ["A4 Estándar (Documentación general)", "Ampliaciones a gran formato: A3 / A2 / A1 (Títulos y certificados)"],
      },
      {
        title: "Tipo de impresión y color",
        items: ["Impresión A4: Blanco y Negro", "Formatos especiales (A3 a A1): Blanco y Negro y Color"],
      },
      {
        title: "Papeles y gramajes",
        items: ["Papel Obra 80 grs (Especial para A4)", "Gramajes y papeles especiales a elección (para A4 y A3 en títulos)"],
      },
      {
        title: "Cuidado y tratamiento especial",
        items: [
          "Procesamiento mediante escáner de alta definición",
          "Aclarado de fondos y remoción de manchas",
          "Impresión nítida de sellos, firmas y relieves",
        ],
      },
    ],
  },
  "escaneo-documentos-titulos": {
    bajada:
      "Servicio de digitalización para documentación personal, carpetas técnicas, expedientes y títulos académicos.",
    details:
      "Ofrecemos digitalización de alta definición para todo tipo de documentos impresos. Trabajamos con escaneo hoja por hoja para piezas delicadas o títulos que requieren máximo cuidado, y con escaneo masivo para legajos o expedientes de volumen. Entregamos los archivos ordenados numéricamente en PDF multipágina o JPG para que tus documentos digitales mantengan la misma secuencia que el formato físico original.",
    sections: [
      {
        title: "Modalidades de escaneo",
        items: [
          "Digitalización hoja por hoja (Títulos y documentos delicados)",
          "Escaneo masivo de expedientes y legajos",
          "Orden correlativo de hojas garantizado",
        ],
      },
      {
        title: "Formatos digitales de entrega",
        items: ["PDF multipágina (Documento único ordenado)", "JPG (Imágenes independientes)", "Envío por WhatsApp / Email / Pendrive"],
      },
      {
        title: "Aplicaciones comunes",
        items: [
          "Títulos secundarios, universitarios y certificaciones",
          "Documentación personal y escrituras",
          "Legajos técnicos y carpetas de obra",
        ],
      },
    ],
  },
  "dibujo-digitalizacion-autocad": {
    bajada: "De papel a digital, con la precisión técnica que tu proyecto, obra o trámite municipal necesita.",
    details:
      "Vectorizamos y dibujamos tus planos a partir de bocetos a mano alzada (croquis con cotas provistas), archivos PDF o planos antiguos impresos en papel. Convertimos cualquier formato a archivos CAD editables (.DWG) con estricto criterio técnico, organizado por capas (layers), cotas y escalas estandarizadas. Realizamos redibujo completo, adecuación de láminas para presentaciones municipales y modificaciones a partir de medidas suministradas.",
    note:
      "Este servicio comprende el redibujo y digitalización de información y medidas provistas por el cliente. Para relevamientos en obra o desarrollo de proyectos integrales, consultá por nuestro Sector Estudio.",
    sections: [
      {
        title: "Servicios comprendidos",
        items: [
          "Digitalización de planos impresos o antiguos",
          "Pasaje de Croquis a AutoCAD (con cotas provistas)",
          "Conversión de PDF a DWG editable",
          "Planos para presentaciones municipales",
          "Modificaciones, correcciones y redibujo",
        ],
      },
      {
        title: "Formatos de entrega",
        items: ["Archivo CAD editable (.DWG)", "Lámina vectorial lista para ploteo (.PDF)", "Archivos de configuración de puntas (.CTB)"],
      },
      {
        title: "Características y tiempos",
        items: [
          "Alta precisión técnica en cada detalle",
          "Archivos editables estructurados por capas",
          "Tiempos de entrega: De 24 hs a 1 semana (según complejidad)",
        ],
      },
    ],
    idealPara: ["Arquitectos", "Maestros Mayores de Obra", "Ingenieros", "Agrimensores", "Constructoras", "Estudiantes"],
  },
  "anillados-plastificados-libro-obra": {
    bajada:
      "Terminaciones gráficas, protección de documentos y material reglamentario para presentaciones y seguimiento de obra.",
    details:
      "Ofrecemos servicios de terminación y encuadernación para dejar tus carpetas técnicas, presentaciones o documentación personal perfectamente presentadas y protegidas. Realizamos anillados A4 con variedad de colores en tapas y espirales, adaptando el tamaño del anillo al grosor de tu legajo. También contamos con plastificados térmicos a calor para resguardar carnets o láminas hasta A3. Además, disponemos de Libros de Obra estandarizados por triplicado listos para utilizar en el seguimiento técnico de tus proyectos.",
    sections: [
      {
        title: "Anillados y encuadernación",
        items: [
          "Formato disponible: A4",
          "Tapas: Frontal cristal transparente / Posterior negra u opaca (variedad de colores)",
          "Espirales plásticos de diversos colores y diámetros (según cantidad de hojas)",
          "Abrochado y perforado de legajos (exclusivo para trabajos impresos en el local)",
        ],
      },
      {
        title: "Plastificados (laminado térmico)",
        items: [
          "Sellado a calor de alta durabilidad",
          "Tamaños: Desde formato Carnet / Cédula / DNI hasta A3",
          "Protección total contra agua, desgaste y suciedad",
        ],
      },
      {
        title: "Libro de obra",
        items: ["Formato estándar reglamentario: 22 cm de alto x 17 cm de ancho", "Confección por triplicado", "Incluye 3 papeles carbónico"],
      },
    ],
  },
};
