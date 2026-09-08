const KNOWN_SECTORS = new Set(["sector-tecnico", "sector-grafico", "sector-estudio"]);

export function deriveSector(pathname: string): string {
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  return KNOWN_SECTORS.has(first) ? first : "otros";
}
