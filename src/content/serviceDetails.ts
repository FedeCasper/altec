export type SupportOption = {
  name: string;
  sizes?: string[];
  customSize?: boolean;
};

export type MaterialOption = {
  name: string;
  weights?: string[];
  sizes?: string[];
  sizesLabel?: string;
  supports?: SupportOption[];
  description?: string;
  extraInfo?: string;
};

export type ServiceDetail = {
  image?: string;
  details?: string;
  materialsLabel?: string;
  weightsLabel?: string;
  sizesLabel?: string;
  materials?: MaterialOption[];
  note?: string;
  idealPara?: string[];
};

const genericNote =
  "Consultanos por WhatsApp para conocer materiales, medidas y terminaciones disponibles.";

// Medidas de planchas de plástico corrugado: confirmadas. Alto impacto y
// PVC espumado: falta confirmar las medidas de plancha estándar con Altec.
const carteleriaSupports: SupportOption[] = [
  {
    name: "Plástico corrugado",
    sizes: ["70x50 cm", "100x60 cm", "200x100 cm"],
    customSize: true,
  },
  {
    name: "Alto impacto",
    customSize: true,
  },
  {
    name: "PVC espumado",
  },
];

// Papel obra y Papel fotográfico brillante simple faz: datos confirmados.
// El resto de los materiales (papeles, vinilos, lonas, banners y los
// productos de papelería) son combinaciones de referencia inventadas para
// completar los selectores — falta confirmar gramajes, tamaños y
// descripciones reales con Altec.
export const serviceDetails: Record<string, ServiceDetail> = {
  "impresion-color": {
    details:
      "Impresiones a color con sistema de chorro a tinta, disponibles en diferentes formatos, tamaños y tipos de papel para adaptarse a cada necesidad. Ideales para fotografías, afiches, trabajos escolares y universitarios, presentaciones, láminas, ilustraciones, folletos, material publicitario, invitaciones, proyectos, planos con imágenes y todo tipo de trabajos donde se necesite una impresión a color de buena calidad y excelente definición.",
    idealPara: ["Documentos", "Fotografías", "Afiches", "Material escolar", "Folletos", "Stickers", "Etiquetas"],
    materialsLabel: "Papel",
    materials: [
      {
        name: "Papel obra",
        weights: ["90 grs"],
        sizes: ["A4", "Rollo — 50 cm de ancho"],
      },
      {
        name: "Papel fotográfico",
        weights: ["160 grs", "200 grs", "300 grs"],
        sizes: ["A4", "A3", "Super A3"],
        extraInfo:
          "Es la opción más elegida para imprimir fotos con buena definición de color. Se puede pedir con terminación brillante (resalta el color, ideal para álbumes y regalos) o mate (sin reflejos, ideal para portarretratos y exhibición). Para fotos individuales recomendamos A4 o A3; para pósters o composiciones, Super A3.",
      },
      {
        name: "Papel mate",
        weights: ["160 grs", "200 grs", "260 grs"],
        sizes: ["A4", "A3", "Super A3"],
      },
      {
        name: "Papel adhesivo",
        weights: ["160 grs", "200 grs"],
        sizes: ["A4", "A3"],
      },
    ],
  },
  gigantografias: { note: genericNote },
  vinilos: {
    details:
      "Impresión en vinilo de alta calidad, ideal para crear piezas gráficas resistentes y versátiles para interiores y exteriores. Una excelente opción para cartelería, vidrieras, promociones, señalización, decoración, vehículos, escaparates, etiquetas, gráficos para paredes, campañas publicitarias y todo tipo de piezas que necesiten una impresión llamativa, duradera y adaptable a diferentes superficies y tamaños.",
    idealPara: ["Vidrieras", "Vehículos", "Cartelería", "Señalización", "Decoración de paredes", "Stickers"],
    materialsLabel: "Tipo de vinilo",
    materials: [
      {
        name: "Vinilo impreso brillante",
        description:
          "Terminación brillante que resalta los colores, ideal para vidrieras, autos y señalética con buen impacto visual.",
      },
      {
        name: "Vinilo impreso mate",
        description:
          "Terminación sin brillo, pensada para vidrieras y superficies con reflejos donde se busca una lectura más limpia.",
      },
      {
        name: "Vinilo traslúcido",
        description:
          "Deja pasar la luz: ideal para vidrieras y espacios donde se busca privacidad sin perder luminosidad.",
      },
      {
        name: "Vinilo esmerilado",
        description:
          "Efecto traslúcido tipo vidrio esmerilado, ideal para puertas, mamparas y vidrieras donde se busca privacidad con una terminación prolija.",
      },
      {
        name: "Vinilo de corte",
        description:
          "Vinilo monocromático recortado a la forma del diseño, sin fondo, ideal para letras, logos y gráficos aplicados directamente sobre la superficie.",
      },
    ],
  },
  // Anchos de rollo de lona: valores genéricos de referencia, falta confirmar
  // los anchos reales con Altec.
  "lonas-banners": {
    details:
      "Impresión en lona de gran formato y banners para stands, eventos y locales. Ideal para carteles publicitarios, promociones, fachadas, obras, comercios, campañas, señalización y comunicación exterior, tanto en interiores como en exteriores. Elegí el producto para ver los soportes y medidas disponibles.",
    materialsLabel: "Producto",
    materials: [
      {
        name: "Lona brillante",
        description: "Terminación brillante que realza los colores, ideal para gigantografías y fachadas.",
        sizes: ["1,10 m", "1,60 m", "3,20 m"],
        sizesLabel: "Ancho de rollo disponible",
      },
      {
        name: "Lona mate",
        description: "Sin brillo, para lecturas limpias sin reflejos en exteriores e interiores.",
        sizes: ["1,10 m", "1,60 m", "3,20 m"],
        sizesLabel: "Ancho de rollo disponible",
      },
      {
        name: "Banner con estructura",
        description: "Lona con terminación en bastón y soguilla, lista para colgar o atar en el lugar que necesites.",
        sizes: ["100x190 cm"],
      },
      {
        name: "Banner roll up",
        description:
          "Banner con soporte enrollable propio, ideal para armar y desarmar rápido en stands y eventos.",
        sizes: ["85x200 cm"],
      },
    ],
  },
  carteleria: {
    details:
      "Producción de cartelería personalizada, con medidas y características según cada pedido. Elegí el tipo de cartel para ver los soportes y tamaños disponibles.",
    idealPara: ["Obras en construcción", "Comercios", "Empresas y oficinas", "Eventos", "Señalización interna"],
    materialsLabel: "Tipo de cartel",
    weightsLabel: "Soportes disponibles",
    materials: [
      {
        name: "Carteles de obra",
        description:
          "Cartel reglamentario de obra con los datos de la empresa y los profesionales a cargo. Podés cargar los datos y ver una vista previa antes de cotizarlo.",
        supports: carteleriaSupports,
      },
      {
        name: "Cartel de conexión",
        description:
          "Cartel de conexión de servicios para trámites municipales y de obra, con los datos técnicos y de la empresa prestataria.",
        supports: carteleriaSupports,
      },
      {
        name: "Señaléticas",
        description:
          "Señalética para locales, oficinas y espacios de trabajo: identificación, información y señalización normativa.",
        supports: carteleriaSupports,
      },
    ],
  },
  papeleria: {
    details:
      "Papelería institucional y comercial para presentar tu marca con una imagen prolija. Elegí el tipo de producto para ver el detalle de cada opción.",
    materialsLabel: "Tipo de producto",
    materials: [
      {
        name: "Tarjetas personales",
        description:
          "Tarjetas con tu nombre, contacto y rubro, en un formato prolijo y fácil de llevar para presentarte profesionalmente.",
      },
      {
        name: "Folletos",
        description:
          "Ideales para promocionar productos, servicios o eventos con información clara y buena presentación.",
        extraInfo:
          "Se entregan hoja simple o plegados (díptico o tríptico), según cuánta información necesites comunicar. Podés elegir tamaño A4 o A5, y combinarlos con papel obra para tiradas grandes o papel ilustración para una terminación más premium. Consultanos la cantidad mínima según el tipo de plegado.",
      },
      {
        name: "Hojas membretadas",
        description:
          "Papelería con tu marca para presupuestos, notas y comunicaciones institucionales.",
      },
      {
        name: "Carpetas institucionales",
        description:
          "Carpetas personalizadas para presentar propuestas, contratos o material institucional con una imagen prolija.",
      },
      {
        name: "Infografías",
        description: "Piezas visuales para explicar procesos, datos o información de forma clara y atractiva.",
      },
    ],
  },
  folletos: { note: genericNote },
  "diseno-grafico": {
    note: "Consultanos por WhatsApp para conocer el proceso y alcance de este servicio.",
  },
};
