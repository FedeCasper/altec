import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedServiceCard } from "@/components/RelatedServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import { sectorTecnicoServices } from "@/content/services";
import { tecnicoServiceDetails } from "@/content/tecnicoServiceDetails";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ serviceId: string }>;
};

export function generateStaticParams() {
  return sectorTecnicoServices.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = sectorTecnicoServices.find((item) => item.id === serviceId);

  if (!service) {
    return buildMetadata({
      title: "Servicio no encontrado",
      description: "El servicio que buscás no existe.",
      path: "/sector-tecnico",
    });
  }

  return buildMetadata({
    title: service.name,
    description: service.description,
    path: `/sector-tecnico/${service.id}`,
  });
}

export default async function TecnicoServiceDetailPage({ params }: Props) {
  const { serviceId } = await params;
  const service = sectorTecnicoServices.find((item) => item.id === serviceId);

  if (!service) {
    notFound();
  }

  const sector = business.sectors.tecnico;
  const detail = tecnicoServiceDetails[service.id];
  const otherServices = sectorTecnicoServices.filter((item) => item.id !== service.id);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/sector-tecnico"
        className="text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-primary"
      >
        ← {sector.label}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
        <div className="mx-auto w-full max-w-[280px] lg:sticky lg:top-24">
          <div className="bg-blueprint-grid-fine relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <ServiceIcon name={service.icon} className="h-20 w-20 text-primary/80" />
            </div>
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
            <p className="mt-4 text-muted">{detail?.bajada ?? service.description}</p>
          </div>

          <WhatsAppButton
            whatsappNumber={sector.whatsapp}
            message={service.whatsappMessage}
            className="w-full sm:w-auto"
          >
            Consultar por WhatsApp
          </WhatsAppButton>

          <div className="flex flex-col gap-8 border-t border-border pt-8">
            {detail?.details && (
              <div>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  Detalles
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{detail.details}</p>
              </div>
            )}

            {detail?.note && (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="text-sm leading-relaxed text-foreground">{detail.note}</p>
              </div>
            )}

            {detail?.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {detail?.idealPara && (
              <div>
                <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  Ideal para
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {detail.idealPara.map((item) => (
                    <span
                      key={item}
                      className="rounded-[5px] border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {!detail && (
              <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
                Consultanos por WhatsApp para conocer más detalles de este servicio.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-16">
        <SectionHeading eyebrow="También te puede interesar" title="Otros servicios del sector" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((item) => (
            <RelatedServiceCard key={item.id} service={item} href={`/sector-tecnico/${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
