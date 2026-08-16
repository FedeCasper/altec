import { business } from "@/content/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "@/components/WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(
        business.sectors.tecnico.whatsapp,
        "Hola, quiero hacer una consulta."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary-hover"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
