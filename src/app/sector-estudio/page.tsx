import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sector Estudio",
  description: "Muy pronto vamos a sumar este sector. Mientras tanto, consultanos por WhatsApp.",
  path: "/sector-estudio",
});

export default function SectorEstudioPage() {
  const sector = business.sectors.tecnico;

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Sector Estudio"
        title="Muy pronto"
        description="Estamos preparando este sector, pensado para relevamientos en obra y desarrollo de proyectos integrales. Mientras tanto, consultanos directamente por WhatsApp."
      />
      <WhatsAppButton
        whatsappNumber={sector.whatsapp}
        message="Hola, quiero consultar por el Sector Estudio."
        className="mt-8"
      >
        Consultar por WhatsApp
      </WhatsAppButton>
    </div>
  );
}
