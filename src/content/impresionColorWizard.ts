import { serviceDetails, type MaterialOption } from "@/content/serviceDetails";

export type PurposeId = "documentos" | "imagenes" | "afiches" | "folletos" | "otro";
export type SizeId = "a4" | "a3" | "rollo" | "personalizado" | "no-seguro";
export type QualityId = "economico" | "presentacion" | "alta-calidad";
export type QuantityId = "1-10" | "11-50" | "51-100" | "100+";

export const purposes: { id: PurposeId; label: string; description: string }[] = [
  { id: "documentos", label: "Documentos", description: "Apuntes, informes, trabajos, documentación." },
  {
    id: "imagenes",
    label: "Imágenes / fotografías",
    description: "Fotos, ilustraciones o imágenes donde importa la calidad del color.",
  },
  { id: "afiches", label: "Afiches", description: "Láminas y afiches para mostrar o exhibir." },
  {
    id: "folletos",
    label: "Folletos / material comercial",
    description: "Folletería y material para tu negocio o evento.",
  },
  { id: "otro", label: "Otro", description: "Cualquier otro tipo de impresión a color." },
];

export const sizes: { id: SizeId; label: string; hint?: string }[] = [
  { id: "a4", label: "A4", hint: "21 x 29,7 cm" },
  { id: "a3", label: "A3", hint: "29,7 x 42 cm" },
  { id: "rollo", label: "Rollo / formato grande", hint: "Impresión continua en rollo" },
  { id: "personalizado", label: "Tamaño personalizado" },
  { id: "no-seguro", label: "No estoy seguro", hint: "Te ayudamos a elegir el tamaño adecuado." },
];

export const qualities: { id: QualityId; label: string; description: string; materialName: string }[] = [
  {
    id: "economico",
    label: "Económico",
    description: "Para documentos y trabajos de uso habitual.",
    materialName: "Papel obra",
  },
  {
    id: "presentacion",
    label: "Buena presentación",
    description: "Para trabajos donde querés una mejor apariencia.",
    materialName: "Papel mate simple faz",
  },
  {
    id: "alta-calidad",
    label: "Alta calidad de imagen",
    description: "Para fotografías e imágenes donde el color y el detalle son importantes.",
    materialName: "Papel fotográfico brillante simple faz",
  },
];

export const quantities: { id: QuantityId; label: string }[] = [
  { id: "1-10", label: "1 a 10 copias" },
  { id: "11-50", label: "11 a 50 copias" },
  { id: "51-100", label: "51 a 100 copias" },
  { id: "100+", label: "Más de 100 copias" },
];

export type Answers = {
  purpose?: PurposeId;
  size?: SizeId;
  quality?: QualityId;
  quantity?: QuantityId;
};

export type Recommendation = {
  material: MaterialOption;
  sizeConfirmed: boolean;
} | null;

function materialSupportsSize(material: MaterialOption, sizeId: SizeId): boolean {
  const list = (material.sizes ?? []).map((size) => size.toLowerCase());
  switch (sizeId) {
    case "a4":
      return list.includes("a4");
    case "a3":
      return list.some((size) => size === "a3" || size === "super a3");
    case "rollo":
      return list.some((size) => size.includes("rollo"));
    default:
      return false;
  }
}

export function getRecommendation(answers: Answers): Recommendation {
  if (!answers.quality) return null;

  const quality = qualities.find((item) => item.id === answers.quality);
  if (!quality) return null;

  const material = serviceDetails["impresion-color"]?.materials?.find(
    (item) => item.name === quality.materialName,
  );
  if (!material) return null;

  if (!answers.size || answers.size === "personalizado" || answers.size === "no-seguro") {
    return { material, sizeConfirmed: false };
  }

  if (materialSupportsSize(material, answers.size)) {
    return { material, sizeConfirmed: true };
  }

  return null;
}

export function buildSummaryLines(answers: Answers): { label: string; value: string }[] {
  const lines: { label: string; value: string }[] = [];
  const purpose = purposes.find((item) => item.id === answers.purpose);
  const size = sizes.find((item) => item.id === answers.size);
  const quality = qualities.find((item) => item.id === answers.quality);
  const quantity = quantities.find((item) => item.id === answers.quantity);

  if (purpose) lines.push({ label: "Tipo", value: purpose.label });
  if (size) lines.push({ label: "Tamaño", value: size.label });
  if (quality) lines.push({ label: "Calidad", value: quality.label });
  if (quantity) lines.push({ label: "Cantidad", value: quantity.label });

  return lines;
}

export function buildWhatsAppMessage(answers: Answers): string {
  const lines = ["Hola, quiero consultar por una impresión color.", ""];
  for (const { label, value } of buildSummaryLines(answers)) {
    lines.push(`${label}: ${value}`);
  }
  return lines.join("\n");
}
