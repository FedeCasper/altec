import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conocé Altec Ploteos e Imprenta: servicios gráficos y técnicos con atención personalizada en Godoy Cruz, Mendoza.",
  path: "/nosotros",
});

const characteristics = [
  "Atención personalizada en cada trabajo.",
  "Soluciones de ploteo e impresión para particulares, empresas y profesionales.",
  "Equipo de trabajo con experiencia en el rubro.",
  "Compromiso con la calidad, la precisión y la eficiencia.",
  "Los trabajos se adaptan a las necesidades de cada cliente.",
];

const notOffered = [
  "No funciona como librería.",
  "No comercializa materiales de manera independiente.",
  "No vende artículos de librería.",
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow="Nosotros" title={business.name} description={business.description} />

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
            Cómo trabajamos
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {characteristics.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
            Nuestra actividad
          </h2>
          <p className="mt-4 text-sm text-muted">
            Altec presta servicios gráficos y de impresión. Los materiales necesarios para cada trabajo
            forman parte del servicio realizado.
          </p>
          <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Lo que Altec no ofrece
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {notOffered.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
