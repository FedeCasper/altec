import type { Medida, Profesional } from "@/content/cartelDeObra";

type Props = {
  medida: Medida;
  obra: string;
  propietario: string;
  ubicacion: string;
  expediente: string;
  profesionales: Profesional[];
};

const aspectRatioByMedida: Record<Medida, string> = {
  "70 x 50": "7 / 5",
  "100 x 50": "2 / 1",
  "200 x 100": "2 / 1",
};

export function CartelDeObraPreview({
  medida,
  obra,
  propietario,
  ubicacion,
  expediente,
  profesionales,
}: Props) {
  const datos = [
    { label: "Obra", value: obra },
    { label: "Propietario", value: propietario },
    { label: "Ubicación", value: ubicacion },
    { label: "Nro. Expediente", value: expediente },
  ];

  const profesionalesCompletos = profesionales.filter(
    (profesional) => profesional.cargo || profesional.tarea || profesional.matricula || profesional.categoria,
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
        Vista previa
      </h2>
      <div
        style={{ aspectRatio: aspectRatioByMedida[medida] }}
        className="bg-blueprint-grid-fine relative w-full overflow-hidden rounded-2xl border-2 border-foreground bg-surface p-6 sm:p-8"
      >
        <div className="flex h-full flex-col gap-4 overflow-y-auto">
          <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
            <span className="font-logo text-2xl leading-none text-primary sm:text-3xl">ALTEC</span>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
              {medida} cm
            </span>
          </div>

          <div className="grid gap-1.5 text-sm sm:text-base">
            {datos.map(({ label, value }) => (
              <p key={label} className="leading-snug">
                <span className="font-semibold text-foreground">{label}: </span>
                <span className="text-muted">{value || "—"}</span>
              </p>
            ))}
          </div>

          {profesionalesCompletos.length > 0 && (
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Profesionales
              </span>
              <div className="flex flex-col gap-2">
                {profesionalesCompletos.map((profesional, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-x-3 gap-y-0.5 rounded-lg border border-border px-3 py-2 text-xs sm:text-sm"
                  >
                    <p>
                      <span className="text-muted">Cargo: </span>
                      {profesional.cargo || "—"}
                    </p>
                    <p>
                      <span className="text-muted">Tarea: </span>
                      {profesional.tarea || "—"}
                    </p>
                    <p>
                      <span className="text-muted">Matrícula: </span>
                      {profesional.matricula || "—"}
                    </p>
                    <p>
                      <span className="text-muted">Categoría: </span>
                      {profesional.categoria || "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
