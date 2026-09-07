export type MaterialOption = {
  name: string;
  weights?: string[];
  sizes?: string[];
  description?: string;
};

export type ServiceDetail = {
  image?: string;
  details?: string;
  materialsLabel?: string;
  materials?: MaterialOption[];
  note?: string;
};

const genericNote =
  "Consultanos por WhatsApp para conocer materiales, medidas y terminaciones disponibles.";

// Papel obra y Papel fotográfico brillante simple faz: datos confirmados.
// El resto de los materiales (papeles, vinilos, lonas, banners y los
// productos de papelería) son combinaciones de referencia inventadas para
// completar los selectores — falta confirmar gramajes, tamaños y
// descripciones reales con Altec.
export const serviceDetails: Record<string, ServiceDetail> = {
  "impresion-color": {
    details:
      "Impresiones a color con sistema de chorro a tinta, disponibles en diferentes formatos, tamaños y tipos de papel para adaptarse a cada necesidad. Ideales para fotografías, afiches, trabajos escolares y universitarios, presentaciones, láminas, ilustraciones, folletos, material publicitario, invitaciones, proyectos, planos con imágenes y todo tipo de trabajos donde se necesite una impresión a color de buena calidad y excelente definición.",
    materialsLabel: "Papel",
    materials: [
      {
        name: "Papel obra",
        weights: ["90 grs"],
        sizes: ["A4", "Rollo — 50 cm de ancho"],
        description:
          "Pensado para trabajos de mayor volumen o en formato rollo: folletería, láminas y afiches de uso interno.",
      },
      {
        name: "Papel fotográfico brillante simple faz",
        weights: ["160 grs", "200 grs", "300 grs"],
        sizes: ["A4", "A3", "Super A3"],
        description:
          "Terminación brillante en una cara, ideal para imágenes con mucho detalle y color: fotos y láminas de calidad.",
      },
      {
        name: "Papel fotográfico brillante doble faz",
        weights: ["200 grs", "300 grs"],
        sizes: ["A4", "A3", "Super A3"],
        description:
          "El mismo brillo y detalle del simple faz, pero permite imprimir en las dos caras de la hoja.",
      },
      {
        name: "Papel mate simple faz",
        weights: ["160 grs", "200 grs", "260 grs"],
        sizes: ["A4", "A3", "Super A3"],
        description:
          "Terminación sin brillo que evita reflejos: ideal para presentaciones y láminas que se leen bajo luz directa.",
      },
      {
        name: "Papel mate doble faz",
        weights: ["200 grs", "260 grs"],
        sizes: ["A4", "A3"],
        description:
          "La opción mate para trabajos que necesitan impresión en ambas caras.",
      },
      {
        name: "Papel adhesivo brillante",
        weights: ["160 grs", "200 grs"],
        sizes: ["A4", "A3"],
        description:
          "Papel autoadhesivo con terminación brillante, ideal para stickers, etiquetas y señalética temporal.",
      },
    ],
  },
  gigantografias: { note: genericNote },
  vinilos: {
    details:
      "Impresión en vinilo de alta calidad, ideal para crear piezas gráficas resistentes y versátiles para interiores y exteriores. Una excelente opción para cartelería, vidrieras, promociones, señalización, decoración, vehículos, escaparates, etiquetas, gráficos para paredes, campañas publicitarias y todo tipo de piezas que necesiten una impresión llamativa, duradera y adaptable a diferentes superficies y tamaños.",
    materialsLabel: "Tipo de vinilo",
    materials: [
      {
        name: "Vinilo brillante",
        description:
          "Terminación brillante que resalta los colores, ideal para vidrieras, autos y señalética con buen impacto visual.",
      },
      {
        name: "Vinilo mate",
        description:
          "Terminación sin brillo, pensada para vidrieras y superficies con reflejos donde se busca una lectura más limpia.",
      },
      {
        name: "Vinilo traslúcido",
        description:
          "Deja pasar la luz: ideal para vidrieras y espacios donde se busca privacidad sin perder luminosidad.",
      },
    ],
  },
  lonas: {
    details:
      "Impresión en lona para crear piezas gráficas de gran formato, resistentes y de alto impacto visual. Ideal para banners, carteles publicitarios, promociones, eventos, fachadas, obras, comercios, campañas, señalización y comunicación exterior. Una solución versátil para proyectos que necesitan gran tamaño, buena visibilidad y una impresión preparada para distintos usos, tanto en interiores como en exteriores.",
    materialsLabel: "Tipo de lona",
    materials: [
      {
        name: "Lona brillante",
        description: "Terminación brillante que realza los colores, ideal para gigantografías y fachadas.",
      },
      {
        name: "Lona mate",
        description: "Sin brillo, para lecturas limpias sin reflejos en exteriores e interiores.",
      },
      {
        name: "Lona backlight",
        description:
          "Material translúcido pensado para carteles retroiluminados, con buena difusión de la luz.",
      },
    ],
  },
  banners: {
    details:
      "Banners para stands, eventos y locales. Elegí el tipo de banner para ver el detalle de cada opción.",
    materialsLabel: "Tipo de banner",
    materials: [
      {
        name: "Banner clásico",
        description: "Lona con terminación en bastón y soguilla, lista para colgar o atar en el lugar que necesites.",
      },
      {
        name: "Banner roll up",
        description:
          "Banner con soporte enrollable propio, ideal para armar y desarmar rápido en stands y eventos.",
      },
    ],
  },
  carteleria: { note: genericNote },
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
