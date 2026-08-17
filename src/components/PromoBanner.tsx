import Image from "next/image";
import { business } from "@/content/business";
import { promoBanner } from "@/content/promo";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function PromoBanner() {
  if (!promoBanner.enabled) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-primary">
      {promoBanner.image && (
        <>
          <Image
            src={promoBanner.image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/20" />
        </>
      )}

      <div className="relative mx-auto flex min-h-64 max-w-6xl flex-col items-start justify-center gap-6 px-6 py-12 sm:min-h-72 sm:py-16">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-primary-foreground text-balance sm:text-5xl">
            {promoBanner.title}
          </h2>
          {promoBanner.description && (
            <p className="mt-4 text-lg text-primary-foreground/90">{promoBanner.description}</p>
          )}
        </div>

        {promoBanner.ctaLabel && (
          <a
            href={buildWhatsAppLink(
              business.sectors.tecnico.whatsapp,
              promoBanner.whatsappMessage ?? "Hola, quiero consultar por la promoción."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-white"
          >
            {promoBanner.ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
