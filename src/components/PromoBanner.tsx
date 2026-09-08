import Image from "next/image";
import { business } from "@/content/business";
import { promoBanner } from "@/content/promo";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function PromoBanner() {
  if (!promoBanner.enabled) {
    return null;
  }

  const whatsappMessage = promoBanner.whatsappMessage ?? "Hola, quiero consultar por la promoción.";

  const cta = promoBanner.ctaLabel && (
    <a
      href={buildWhatsAppLink(business.sectors.tecnico.whatsapp, whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center justify-center rounded-[5px] bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-hover"
    >
      {promoBanner.ctaLabel}
    </a>
  );

  if (promoBanner.image) {
    return (
      <section className="relative overflow-hidden border-y border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: promoBanner.imageAspectRatio ?? "16 / 9" }}
          >
            <Image
              src={promoBanner.image}
              alt={promoBanner.imageAlt ?? ""}
              fill
              className="object-contain"
              priority
            />
          </div>
          {cta}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div className="relative mx-auto flex min-h-64 max-w-6xl flex-col items-start justify-center gap-6 px-6 py-12 sm:min-h-72 sm:py-16">
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
            {promoBanner.title}
          </h2>
          {promoBanner.description && (
            <p className="mt-4 text-lg text-muted">{promoBanner.description}</p>
          )}
        </div>

        {cta}
      </div>
    </section>
  );
}
