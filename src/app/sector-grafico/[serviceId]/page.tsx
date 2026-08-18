import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PaperSelector } from "@/components/PaperSelector";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import { sectorGraficoServices } from "@/content/services";
import { serviceDetails } from "@/content/serviceDetails";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ serviceId: string }>;
};

export function generateStaticParams() {
  return sectorGraficoServices.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = sectorGraficoServices.find((item) => item.id === serviceId);

  if (!service) {
    return buildMetadata({
      title: "Servicio no encontrado",
      description: "El servicio que buscás no existe.",
      path: "/sector-grafico",
    });
  }

  return buildMetadata({
    title: service.name,
    description: service.description,
    path: `/sector-grafico/${service.id}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceId } = await params;
  const service = sectorGraficoServices.find((item) => item.id === serviceId);

  if (!service) {
    notFound();
  }

  const sector = business.sectors.grafico;
  const detail = serviceDetails[service.id];
  const otherServices = sectorGraficoServices.filter((item) => item.id !== service.id);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/sector-grafico"
        className="text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-primary"
      >
        ← {sector.label}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-24">
          <div className="bg-blueprint-grid-fine relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"
              aria-hidden="true"
            />
            {detail?.image ? (
              <Image
                src={detail.image}
                alt={service.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ServiceIcon name={service.icon} className="h-28 w-28 text-primary/80" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {sector.label}
            </span>
            <h1 className="font-heading mt-2 text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
              {service.name}
            </h1>
            <p className="mt-4 text-muted">{service.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              whatsappNumber={sector.whatsapp}
              message={service.whatsappMessage}
              className="w-full sm:w-auto"
            >
              Consultar por WhatsApp
            </WhatsAppButton>

            {service.id === "carteleria" && (
              <Link
                href="/sector-grafico/carteleria/cartel-de-obra"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                Cargar cartel de obra
              </Link>
            )}
          </div>

          <div className="flex flex-col gap-8 border-t border-border pt-8">
            {detail?.details && (
              <div>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  Detalles
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{detail.details}</p>
              </div>
            )}
            {detail?.papers ? (
              <>
                <PaperSelector papers={detail.papers} />
                {detail.printSystems && (
                  <div>
                    <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                      Sistema de impresión
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {detail.printSystems.map((system) => (
                        <span
                          key={system}
                          className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
                {detail?.note ?? "Consultanos por WhatsApp para conocer más detalles de este servicio."}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-16">
        <SectionHeading eyebrow="También te puede interesar" title="Otros servicios del sector" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((item) => (
            <ServiceCard
              key={item.id}
              service={item}
              whatsappNumber={sector.whatsapp}
              href={`/sector-grafico/${item.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
