import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import { sectorGraficoServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sector Gráfico",
  description:
    "Gigantografías, vinilos, cartelería, tarjetas, folletos y diseño gráfico en Godoy Cruz, Mendoza. Trabajos personalizados para particulares y empresas.",
  path: "/sector-grafico",
});

export default function SectorGraficoPage() {
  const sector = business.sectors.grafico;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 border-b border-border pb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Sector Gráfico"
          title="Impresión, gigantografías y diseño"
          description="Gigantografías, vinilos, cartelería, tarjetas, folletos y diseño gráfico a medida para particulares y empresas."
        />
        <WhatsAppButton whatsappNumber={sector.whatsapp} message="Hola, quiero hacer una consulta gráfica.">
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectorGraficoServices.map((service) => (
          <ServiceCard key={service.id} service={service} whatsappNumber={sector.whatsapp} />
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-border bg-surface p-8">
        <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
          Ideal para
        </h2>
        <p className="mt-2 text-sm text-muted">
          Comercios, profesionales, eventos y particulares que necesitan cartelería, gigantografías o
          material gráfico impreso.
        </p>
        <p className="mt-4 text-sm text-muted">
          Contacto directo del sector: {sector.whatsappDisplay} ·{" "}
          <a href={`mailto:${sector.email}`} className="text-primary hover:text-primary-hover">
            {sector.email}
          </a>
        </p>
      </div>
    </div>
  );
}
