import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MaterialSelector } from "@/components/MaterialSelector";
import { RelatedServiceCard } from "@/components/RelatedServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
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

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="flex flex-col gap-8 lg:order-1">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {sector.label}
            </span>
            <h1 className="font-heading mt-2 text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
              {service.name}
            </h1>
            <p className="mt-4 text-muted">{detail?.details ?? service.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {service.id === "carteleria" && (
              <Link
                href="/sector-grafico/carteleria/cartel-de-obra"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
              >
                Cargar cartel de obra
              </Link>
            )}
          </div>

          {detail?.idealPara && (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
                Ideal para
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {detail.idealPara.map((item) => (
                  <span
                    key={item}
                    className="rounded-[5px] bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div id="detalles-tecnicos" className="flex flex-col gap-8 border-t border-border pt-8">
            {detail?.materials ? (
              <MaterialSelector
                label={detail.materialsLabel ?? "Material"}
                options={detail.materials}
                weightsLabel={detail.weightsLabel}
                sizesLabel={detail.sizesLabel}
              />
            ) : (
              <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
                {detail?.note ?? "Consultanos por WhatsApp para conocer más detalles de este servicio."}
              </p>
            )}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[280px] lg:order-2 lg:sticky lg:top-24">
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
                sizes="280px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ServiceIcon name={service.icon} className="h-20 w-20 text-primary/80" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-border pt-16">
        <SectionHeading eyebrow="También te puede interesar" title="Otros servicios del sector" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((item) => (
            <RelatedServiceCard key={item.id} service={item} href={`/sector-grafico/${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
