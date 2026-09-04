export type Service = {
  id: string;
  name: string;
  description: string;
  whatsappMessage: string;
  icon: ServiceIcon;
  tags: string[];
};

export type ServiceIcon =
  | "plot"
  | "printer"
  | "blueprint"
  | "binding"
  | "scan"
  | "copy"
  | "cad"
  | "billboard"
  | "vinyl"
  | "tarp"
  | "rollup"
  | "sign"
  | "card"
  | "flyer"
  | "design";

export const sectorTecnicoServices: Service[] = [
  {
    id: "ploteo-impresion-planos",
    name: "Ploteo / Impresión de planos",
    description:
      "Impresión y ploteo técnico de planos y renders. Servicio integral con plegado bajo norma y refilado incluido.",
    whatsappMessage: "Hola, quiero consultar por ploteo / impresión de planos.",
    icon: "blueprint",
    tags: ["ploteo", "planos", "arquitectura", "ingeniería", "agrimensura", "gran formato", "obra"],
  },
  {
    id: "fotocopia-escaneo-planos",
    name: "Fotocopia / Escaneo de planos",
    description:
      "Digitalización a alta resolución (PDF/JPG) y duplicación de planos físicos. Aclarado de fondos, refilado y plegado incluido.",
    whatsappMessage: "Hola, quiero consultar por fotocopia / escaneo de planos.",
    icon: "scan",
    tags: ["fotocopia", "escaneo", "planos", "digitalización", "obra"],
  },
  {
    id: "impresion-fotocopia-documentos",
    name: "Impresión / Fotocopia de documentos y títulos",
    description:
      "Copia e impresión de documentos y títulos universitarios o secundarios. Digitalización de alta fidelidad con opción de ampliación a gran formato.",
    whatsappMessage: "Hola, quiero consultar por impresión / fotocopia de documentos y títulos.",
    icon: "copy",
    tags: ["documentos", "títulos", "fotocopia", "impresión", "dni", "escrituras"],
  },
  {
    id: "escaneo-documentos-titulos",
    name: "Escaneo de documentos y títulos",
    description:
      "Digitalización ordenada de legajos, expedientes y títulos delicados. Entrega en PDF o JPG vía WhatsApp, email o pendrive.",
    whatsappMessage: "Hola, quiero consultar por escaneo de documentos y títulos.",
    icon: "scan",
    tags: ["escaneo", "documentos", "títulos", "legajos", "expedientes"],
  },
  {
    id: "dibujo-digitalizacion-autocad",
    name: "Dibujo y digitalización de planos (AutoCAD)",
    description:
      "Pasaje de croquis y planos impresos a archivos CAD editables (DWG). Digitalización con precisión técnica para trámites y proyectos.",
    whatsappMessage: "Hola, quiero consultar por dibujo y digitalización de planos en AutoCAD.",
    icon: "cad",
    tags: ["autocad", "dwg", "dibujo técnico", "digitalización", "planos"],
  },
  {
    id: "anillados-plastificados-libro-obra",
    name: "Anillados, plastificados y libro de obra",
    description:
      "Encuadernación en A4, plastificados a calor hasta A3 y venta de Libros de Obra por triplicado con carbónicos.",
    whatsappMessage: "Hola, quiero consultar por anillados, plastificados o libro de obra.",
    icon: "binding",
    tags: ["anillado", "plastificado", "libro de obra", "encuadernación"],
  },
];

export const sectorGraficoServices: Service[] = [
  {
    id: "impresion-color",
    name: "Impresiones color",
    description: "Trabajos personalizados según las necesidades del cliente.",
    whatsappMessage: "Hola, quiero consultar por impresiones a color A4/A3.",
    icon: "printer",
    tags: ["impresión", "color", "a4", "a3", "stickers"],
  },
  {
    id: "vinilos",
    name: "Vinilos",
    description: "Trabajos personalizados en diferentes medidas y características.",
    whatsappMessage: "Hola, quiero consultar por vinilos.",
    icon: "vinyl",
    tags: ["vinilos", "adhesivos", "stickers", "vidriera"],
  },
  {
    id: "lonas",
    name: "Lonas",
    description: "Lonas de gran formato en distintas terminaciones para fachadas, eventos y locales.",
    whatsappMessage: "Hola, quiero cotizar lonas.",
    icon: "tarp",
    tags: ["lonas", "gran formato", "fachada", "backlight"],
  },
  {
    id: "banners",
    name: "Banners",
    description: "Banners clásicos y roll up para stands, eventos y locales.",
    whatsappMessage: "Hola, quiero cotizar banners.",
    icon: "rollup",
    tags: ["banners", "roll up", "stands", "eventos"],
  },
  {
    id: "carteleria",
    name: "Cartelería",
    description: "Producción de cartelería personalizada, medidas y características según pedido.",
    whatsappMessage: "Hola, quiero cotizar cartelería.",
    icon: "sign",
    tags: ["cartelería", "carteles", "señalética"],
  },
  {
    id: "gigantografias",
    name: "Gigantografías",
    description: "Trabajos de gran formato, con medidas y características según cada pedido.",
    whatsappMessage: "Hola, quiero cotizar una gigantografía.",
    icon: "billboard",
    tags: ["gigantografía", "gran formato", "banner", "lona"],
  },
  {
    id: "papeleria",
    name: "Papeplería",
    description: "Tarjetas personales, folletos, hojas membretadas, carpetas institucionales, infografías.",
    whatsappMessage: "Hola, quiero consultar por diseño e impresión de tarjetas.",
    icon: "card",
    tags: ["tarjetas", "tarjetas personales", "presentación"],
  },
  {
    id: "folletos",
    name: "Folletos",
    description: "Diseño e impresión de folletos según requerimientos del cliente.",
    whatsappMessage: "Hola, quiero consultar por diseño e impresión de folletos.",
    icon: "flyer",
    tags: ["folletos", "volantes", "flyers"],
  },
  {
    id: "diseno-grafico",
    name: "Diseño gráfico",
    description: "Servicio de diseño gráfico con trabajos personalizados.",
    whatsappMessage: "Hola, quiero consultar por diseño gráfico.",
    icon: "design",
    tags: ["diseño gráfico", "diseño", "arte"],
  },
];
