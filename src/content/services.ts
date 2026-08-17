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
  | "billboard"
  | "vinyl"
  | "sign"
  | "card"
  | "flyer"
  | "design";

export const sectorTecnicoServices: Service[] = [
  {
    id: "ploteo",
    name: "Ploteo",
    description:
      "Ploteo en todas las medidas, con trabajos personalizados según las necesidades de cada proyecto.",
    whatsappMessage: "Hola, quiero consultar por un servicio de ploteo.",
    icon: "plot",
    tags: ["ploteo", "planos", "arquitectura", "gran formato", "obra"],
  },
  {
    id: "impresion-a4-a3",
    name: "Impresión A4 / A3",
    description:
      "Impresiones en diferentes modalidades y características según el pedido.",
    whatsappMessage: "Hola, quiero consultar por impresiones A4/A3.",
    icon: "printer",
    tags: ["impresión", "a4", "a3", "hojas", "documentos"],
  },
  {
    id: "impresion-planos",
    name: "Impresión de planos",
    description: "Impresión de planos en todos los tamaños, adaptada a cada necesidad.",
    whatsappMessage: "Hola, quiero cotizar la impresión de un plano.",
    icon: "blueprint",
    tags: ["planos", "impresión", "arquitectura", "ingeniería", "obra"],
  },
  {
    id: "anillados",
    name: "Anillados",
    description: "Servicio de anillado para documentación y trabajos técnicos.",
    whatsappMessage: "Hola, quiero consultar por anillado de documentación.",
    icon: "binding",
    tags: ["anillado", "encuadernación", "documentación"],
  },
  {
    id: "escaneo",
    name: "Escaneo",
    description: "Escaneo de hojas A4, A3 y planos.",
    whatsappMessage: "Hola, quiero consultar por escaneo de documentos/planos.",
    icon: "scan",
    tags: ["escaneo", "digitalización", "planos", "documentos"],
  },
  {
    id: "fotocopias",
    name: "Fotocopias",
    description: "Servicio de fotocopiado según las necesidades del cliente.",
    whatsappMessage: "Hola, quiero consultar por fotocopias.",
    icon: "copy",
    tags: ["fotocopias", "copias", "documentos"],
  },
];

export const sectorGraficoServices: Service[] = [
  {
    id: "impresion-color",
    name: "Impresión A4 / A3 a color",
    description: "Trabajos personalizados según las necesidades del cliente.",
    whatsappMessage: "Hola, quiero consultar por impresiones a color A4/A3.",
    icon: "printer",
    tags: ["impresión", "color", "a4", "a3"],
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
    id: "vinilos",
    name: "Vinilos",
    description: "Trabajos personalizados en diferentes medidas y características.",
    whatsappMessage: "Hola, quiero consultar por vinilos.",
    icon: "vinyl",
    tags: ["vinilos", "adhesivos", "stickers", "vidriera"],
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
    id: "tarjetas",
    name: "Tarjetas",
    description: "Diseño e impresión de tarjetas según requerimientos del cliente.",
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
