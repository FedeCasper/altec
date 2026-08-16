export type Service = {
  id: string;
  name: string;
  description: string;
  whatsappMessage: string;
  icon: ServiceIcon;
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
  },
  {
    id: "impresion-a4-a3",
    name: "Impresión A4 / A3",
    description:
      "Impresiones en diferentes modalidades y características según el pedido.",
    whatsappMessage: "Hola, quiero consultar por impresiones A4/A3.",
    icon: "printer",
  },
  {
    id: "impresion-planos",
    name: "Impresión de planos",
    description: "Impresión de planos en todos los tamaños, adaptada a cada necesidad.",
    whatsappMessage: "Hola, quiero cotizar la impresión de un plano.",
    icon: "blueprint",
  },
  {
    id: "anillados",
    name: "Anillados",
    description: "Servicio de anillado para documentación y trabajos técnicos.",
    whatsappMessage: "Hola, quiero consultar por anillado de documentación.",
    icon: "binding",
  },
  {
    id: "escaneo",
    name: "Escaneo",
    description: "Escaneo de hojas A4, A3 y planos.",
    whatsappMessage: "Hola, quiero consultar por escaneo de documentos/planos.",
    icon: "scan",
  },
  {
    id: "fotocopias",
    name: "Fotocopias",
    description: "Servicio de fotocopiado según las necesidades del cliente.",
    whatsappMessage: "Hola, quiero consultar por fotocopias.",
    icon: "copy",
  },
];

export const sectorGraficoServices: Service[] = [
  {
    id: "impresion-color",
    name: "Impresión A4 / A3 a color",
    description: "Trabajos personalizados según las necesidades del cliente.",
    whatsappMessage: "Hola, quiero consultar por impresiones a color A4/A3.",
    icon: "printer",
  },
  {
    id: "gigantografias",
    name: "Gigantografías",
    description: "Trabajos de gran formato, con medidas y características según cada pedido.",
    whatsappMessage: "Hola, quiero cotizar una gigantografía.",
    icon: "billboard",
  },
  {
    id: "vinilos",
    name: "Vinilos",
    description: "Trabajos personalizados en diferentes medidas y características.",
    whatsappMessage: "Hola, quiero consultar por vinilos.",
    icon: "vinyl",
  },
  {
    id: "carteleria",
    name: "Cartelería",
    description: "Producción de cartelería personalizada, medidas y características según pedido.",
    whatsappMessage: "Hola, quiero cotizar cartelería.",
    icon: "sign",
  },
  {
    id: "tarjetas",
    name: "Tarjetas",
    description: "Diseño e impresión de tarjetas según requerimientos del cliente.",
    whatsappMessage: "Hola, quiero consultar por diseño e impresión de tarjetas.",
    icon: "card",
  },
  {
    id: "folletos",
    name: "Folletos",
    description: "Diseño e impresión de folletos según requerimientos del cliente.",
    whatsappMessage: "Hola, quiero consultar por diseño e impresión de folletos.",
    icon: "flyer",
  },
  {
    id: "diseno-grafico",
    name: "Diseño gráfico",
    description: "Servicio de diseño gráfico con trabajos personalizados.",
    whatsappMessage: "Hola, quiero consultar por diseño gráfico.",
    icon: "design",
  },
];
