import type { Metadata } from "next";
import { ClientLogos } from "@/components/ClientLogos";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { SectorOverviewCard } from "@/components/SectorOverviewCard";
import { HoursBlock } from "@/components/HoursBlock";
import { MapEmbed } from "@/components/MapEmbed";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import { sectorGraficoServices, sectorTecnicoServices } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${business.name} — Ploteo, impresión de planos y diseño gráfico en Mendoza`,
  description: business.description,
  path: "/",
});

const features = [
  {
    title: "Atención personalizada",
    description: "Cada trabajo se adapta a las necesidades específicas del cliente.",
  },
  {
    title: "Equipo con experiencia",
    description: "Profesionales con trayectoria en el rubro gráfico y técnico.",
  },
  {
    title: "Precisión y calidad",
    description: "Compromiso con la precisión, la eficiencia y el detalle en cada entrega.",
  },
  {
    title: "Todas las medidas",
    description: "Trabajos personalizados en cualquier medida, formato y cantidad.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <PromoBanner />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Nuestros sectores"
          title="Dos áreas, un mismo estándar de calidad"
          description="Elegí el sector que necesitás y consultanos directamente por WhatsApp."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <SectorOverviewCard
            title={business.sectors.tecnico.label}
            description="Ploteo, impresión de planos, anillados, escaneo y fotocopias para arquitectos, ingenieros, constructores y estudiantes."
            href="/sector-tecnico"
            services={sectorTecnicoServices.map((s) => s.name)}
          />
          <SectorOverviewCard
            title={business.sectors.grafico.label}
            description="Gigantografías, vinilos, cartelería, tarjetas, folletos y diseño gráfico para particulares y empresas."
            href="/sector-grafico"
            services={sectorGraficoServices.map((s) => s.name)}
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading title="Por qué elegir Altec" align="center" className="mx-auto text-center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Ubicación" title="Visitanos en Godoy Cruz" />
            <p className="mt-4 text-muted">{business.address.full}</p>
            <div className="mt-6">
              <HoursBlock />
            </div>
            <WhatsAppButton
              whatsappNumber={business.sectors.tecnico.whatsapp}
              message="Hola, quiero hacer una consulta."
              className="mt-6"
            >
              Consultanos ahora
            </WhatsAppButton>
          </div>
          <MapEmbed />
        </div>
      </section>

      <ClientLogos />

      <GoogleReviews />
    </>
  );
}
