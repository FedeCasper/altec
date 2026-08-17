export type PromoBanner = {
  enabled: boolean;
  title: string;
  description?: string;
  ctaLabel?: string;
  whatsappMessage?: string;
  image?: string;
};

// Activá/desactivá la promoción cambiando "enabled" a true o false.
// No hace falta tocar nada más del sitio.
export const promoBanner: PromoBanner = {
  enabled: true,
  title: "Título de la promoción",
  description: "Descripción breve de la oferta o servicio temporal.",
  ctaLabel: "Consultar",
  whatsappMessage: "Hola, quiero consultar por la promoción.",
  image: undefined,
};
