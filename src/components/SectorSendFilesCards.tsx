import Link from "next/link";
import { WhatsAppGlyph } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const cards = [
  {
    id: "tecnico",
    label: business.sectors.tecnico.shortLabel,
    href: "/sector-tecnico",
    whatsapp: business.sectors.tecnico.whatsapp,
    whatsappMessage: "Hola, quiero enviarles unos archivos para cotizar un trabajo técnico.",
  },
  {
    id: "grafico",
    label: business.sectors.grafico.shortLabel,
    href: "/sector-grafico",
    whatsapp: business.sectors.grafico.whatsapp,
    whatsappMessage: "Hola, quiero enviarles unos archivos para cotizar un trabajo gráfico.",
  },
];

export function SectorSendFilesCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5"
        >
          <p className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
            {card.label}
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href={buildWhatsAppLink(card.whatsapp, card.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[5px] bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Enviar archivos
            </a>
          </div>

          <Link
            href={card.href}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-primary"
          >
            Ver {card.label}
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
