import { business } from "@/content/business";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ContactInfoBlock({ className }: { className?: string }) {
  const sectors = [business.sectors.tecnico, business.sectors.grafico];

  return (
    <div className={className}>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
        Contacto por sector
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {sectors.map((sector) => (
          <div key={sector.id} className="rounded-xl border border-border bg-surface p-5">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              {sector.label}
            </p>
            <p className="mt-2 text-sm text-muted">WhatsApp: {sector.whatsappDisplay}</p>
            <p className="text-sm text-muted">
              <a href={`mailto:${sector.email}`} className="hover:text-primary">
                {sector.email}
              </a>
            </p>
            <WhatsAppButton
              whatsappNumber={sector.whatsapp}
              message="Hola, quiero hacer una consulta."
              variant="outline"
              className="mt-4"
            >
              Escribir
            </WhatsAppButton>
          </div>
        ))}
      </div>
    </div>
  );
}
