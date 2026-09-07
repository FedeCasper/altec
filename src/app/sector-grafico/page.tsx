import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { business } from "@/content/business";
import { sectorGraficoServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sector Gráfico",
  description:
    "Vinilos, lonas, banners, gigantografías, cartelería, papelería, folletos y diseño gráfico en Godoy Cruz, Mendoza. Trabajos personalizados para particulares y empresas.",
  path: "/sector-grafico",
});

export default function SectorGraficoPage() {
  const sector = business.sectors.grafico;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="border-b border-border pb-12">
        <SectionHeading
          eyebrow="Sector Gráfico"
          title="Impresión, gigantografías y diseño"
          description="Vinilos, lonas, banners, gigantografías, cartelería, papelería, folletos y diseño gráfico a medida para particulares y empresas."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectorGraficoServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            whatsappNumber={sector.whatsapp}
            href={`/sector-grafico/${service.id}`}
          />
        ))}
      </div>
    </div>
  );
}
