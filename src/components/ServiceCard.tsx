import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Props = {
  service: Service;
  whatsappNumber: string;
};

export function ServiceCard({ service, whatsappNumber }: Props) {
  return (
    <article
      id={service.id}
      className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-alt text-primary">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
        {service.name}
      </h3>
      <p className="flex-1 text-sm text-muted">{service.description}</p>
      <WhatsAppButton
        whatsappNumber={whatsappNumber}
        message={service.whatsappMessage}
        variant="outline"
        className="self-start"
      >
        Consultar
      </WhatsAppButton>
    </article>
  );
}
