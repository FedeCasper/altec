import Link from "next/link";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = {
  service: Service;
  whatsappNumber: string;
  href?: string;
};

export function ServiceCard({ service, whatsappNumber, href }: Props) {
  return (
    <article
      id={service.id}
      className="group relative flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
    >
      {href && (
        <Link
          href={href}
          className="absolute inset-0 z-0"
          aria-label={`Ver detalle de ${service.name}`}
        />
      )}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-alt text-primary">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
        {service.name}
      </h3>
      <p className="flex-1 text-sm text-muted">{service.description}</p>
      {href && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary group-hover:text-primary-hover">
          Ver detalle
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      )}
      <WhatsAppButton
        whatsappNumber={whatsappNumber}
        message={service.whatsappMessage}
        variant="outline"
        className="relative z-10 self-start"
      >
        Consultar
      </WhatsAppButton>
    </article>
  );
}
