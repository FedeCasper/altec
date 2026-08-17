export type PaperOption = {
  name: string;
  weights: string[];
  sizes: string[];
};

export type ServiceDetail = {
  image?: string;
  details?: string;
  papers?: PaperOption[];
  printSystems?: string[];
  note?: string;
};

const genericNote =
  "Consultanos por WhatsApp para conocer materiales, medidas y terminaciones disponibles.";

// Papel obra y Papel fotográfico brillante simple faz: datos confirmados.
// Los otros 4 papeles son combinaciones de referencia inventadas para completar
// el selector — falta confirmar gramajes y tamaños reales con Altec.
export const serviceDetails: Record<string, ServiceDetail> = {
  "impresion-color": {
    details:
      "La impresión A4 / A3 a color es ideal para folletería, láminas, afiches chicos, presentaciones y cualquier trabajo que necesite buena calidad de imagen y color. Elegís el papel según el uso: fotográfico para imágenes con más detalle y brillo, mate para evitar reflejos, y obra para trabajos de mayor volumen o en formato rollo.",
    papers: [
      {
        name: "Papel obra",
        weights: ["90 grs"],
        sizes: ["A4", "Rollo — 50 cm de ancho"],
      },
      {
        name: "Papel fotográfico brillante simple faz",
        weights: ["160 grs", "200 grs", "300 grs"],
        sizes: ["A4", "A3", "Super A3"],
      },
      {
        name: "Papel fotográfico brillante doble faz",
        weights: ["200 grs", "300 grs"],
        sizes: ["A4", "A3", "Super A3"],
      },
      {
        name: "Papel mate simple faz",
        weights: ["160 grs", "200 grs", "260 grs"],
        sizes: ["A4", "A3", "Super A3"],
      },
      {
        name: "Papel mate doble faz",
        weights: ["200 grs", "260 grs"],
        sizes: ["A4", "A3"],
      },
      {
        name: "Papel adhesivo brillante",
        weights: ["160 grs", "200 grs"],
        sizes: ["A4", "A3"],
      },
    ],
    printSystems: ["Chorro a tinta"],
  },
  gigantografias: { note: genericNote },
  vinilos: { note: genericNote },
  carteleria: { note: genericNote },
  tarjetas: { note: genericNote },
  folletos: { note: genericNote },
  "diseno-grafico": {
    note: "Consultanos por WhatsApp para conocer el proceso y alcance de este servicio.",
  },
};
