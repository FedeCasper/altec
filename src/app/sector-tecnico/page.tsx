import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { business } from "@/content/business";
import { sectorTecnicoServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sector Técnico y Arquitectura",
  description:
    "Ploteo e impresión de planos, escaneo, digitalización en AutoCAD, anillados y libro de obra en Godoy Cruz, Mendoza. Trabajos personalizados para arquitectos, ingenieros y constructores.",
  path: "/sector-tecnico",
});

export default function SectorTecnicoPage() {
  const sector = business.sectors.tecnico;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="border-b border-border pb-12">
        <SectionHeading
          eyebrow="Sector Técnico / Arquitectura"
          title="Ploteo, impresión de planos y digitalización"
          description="Servicios pensados para arquitectos, ingenieros, agrimensores, maestros mayores de obra, constructores y estudiantes. Todas las medidas, todos los formatos."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectorTecnicoServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            whatsappNumber={sector.whatsapp}
            href={`/sector-tecnico/${service.id}`}
          />
        ))}
      </div>
    </div>
  );
}
