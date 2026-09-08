import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactInfoBlock } from "@/components/ContactInfoBlock";
import { HoursBlock } from "@/components/HoursBlock";
import { MapEmbed } from "@/components/MapEmbed";
import { business } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contactate con Altec Ploteos e Imprenta: dirección, horarios, WhatsApp y email de cada sector en Godoy Cruz, Mendoza.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Contacto"
        title="Estamos en Godoy Cruz, Mendoza"
        description="Escribinos por WhatsApp según el sector que necesites, o visitanos en el local."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Dirección
            </h3>
            <p className="mt-2 text-muted">{business.address.full}</p>
            <a
              href={business.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-primary hover:text-primary-hover"
            >
              Ver cómo llegar
            </a>
          </div>

          <HoursBlock />
          <ContactInfoBlock />
        </div>

        <MapEmbed className="h-full min-h-96" />
      </div>
    </div>
  );
}
