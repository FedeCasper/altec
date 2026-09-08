import { sectorGraficoServices, sectorTecnicoServices } from "@/content/services";

const STATIC_LABELS: Record<string, string> = {
  "/": "Inicio",
  "/nosotros": "Nosotros",
  "/contacto": "Contacto",
  "/como-trabajamos": "Cómo trabajamos",
  "/sector-tecnico": "Sector Técnico (portada)",
  "/sector-grafico": "Sector Gráfico (portada)",
  "/sector-estudio": "Sector Estudio (portada)",
  "/sector-grafico/carteleria/cartel-de-obra": "Cartel de obra (generador)",
};

const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  [...sectorTecnicoServices, ...sectorGraficoServices].map((service) => [service.id, service.name]),
);

export function labelForPath(path: string): string {
  if (STATIC_LABELS[path]) return STATIC_LABELS[path];
  const segments = path.split("/").filter(Boolean);
  const last = segments[segments.length - 1];
  if (last && SERVICE_LABELS[last]) return SERVICE_LABELS[last];
  return path;
}
