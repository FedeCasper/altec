export const business = {
  name: "Altec Ploteos e Imprenta",
  shortName: "Altec",
  tagline: "Arquitectura | Diseño gráfico",
  description:
    "Servicios de ploteo, impresión de planos y diseño gráfico en Godoy Cruz, Mendoza. Atención personalizada para particulares, empresas y profesionales.",
  address: {
    street: "Rivadavia 485",
    city: "Godoy Cruz",
    province: "Mendoza",
    country: "Argentina",
    full: "Rivadavia 485, Godoy Cruz, Mendoza",
  },
  hours: [
    {
      days: "Lunes a viernes",
      ranges: ["09:00 a 13:50", "14:30 a 17:30"],
    },
  ],
  hoursNote: "Sábados y domingos cerrado.",
  sectors: {
    tecnico: {
      id: "tecnico",
      label: "Sector Técnico / Arquitectura",
      shortLabel: "Sector Técnico",
      whatsapp: "5492613630479",
      whatsappDisplay: "261 363-0479",
      email: "ploteoplanos@itcsa.net",
    },
    grafico: {
      id: "grafico",
      label: "Sector Gráfico",
      shortLabel: "Sector Gráfico",
      whatsapp: "5492614175406",
      whatsappDisplay: "261 417-5406",
      email: "dgrafico@gmail.com",
    },
  },
  phoneGeneral: "261 363-0479",
  social: {
    instagram: "https://www.instagram.com/altecploteos",
    instagramHandle: "@altecploteos",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=Rivadavia+485,+Godoy+Cruz,+Mendoza&output=embed",
  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Rivadavia+485,+Godoy+Cruz,+Mendoza",
} as const;

export type Sector = typeof business.sectors.tecnico | typeof business.sectors.grafico;
