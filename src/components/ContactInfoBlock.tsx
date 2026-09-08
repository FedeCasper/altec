import { business } from "@/content/business";
import { WhatsAppButton, WhatsAppGlyph } from "@/components/WhatsAppButton";

export function MailGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

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
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <WhatsAppGlyph className="h-4 w-4 shrink-0 text-primary" />
              {sector.whatsappDisplay}
            </p>
            <a
              href={`mailto:${sector.email}`}
              className="mt-1 flex items-center gap-2 text-sm text-muted hover:text-primary"
            >
              <MailGlyph className="h-4 w-4 shrink-0 text-primary" />
              {sector.email}
            </a>
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
