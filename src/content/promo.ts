export type PromoBanner = {
  enabled: boolean;
  image?: string;
  imageAlt?: string;
  imageAspectRatio?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  whatsappMessage?: string;
};

// Activá/desactivá la promoción cambiando "enabled" a true o false.
// No hace falta tocar nada más del sitio.
//
// Si "image" apunta a un banner ya diseñado (con su propio texto, colores y
// fondo incluidos), no hace falta cargar "title" ni "description": la imagen
// se muestra completa arriba y el CTA de WhatsApp queda debajo.
export const promoBanner: PromoBanner = {
  enabled: true,
  image: "/banner_construccion_clandestina.webp",
  imageAlt:
    "Regularizá tu construcción clandestina en Altec ploteos. Moratoria en Godoy Cruz, sin multa.",
  imageAspectRatio: "3697 / 1000",
  ctaLabel: "Consulta por WhatsApp",
  whatsappMessage: "Hola, quiero consultar por la moratoria de construcción clandestina.",
};
