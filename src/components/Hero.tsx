import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="bg-blueprint-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div
        className="absolute -right-24 top-0 h-full w-1/2 bg-gradient-to-l from-primary/15 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 sm:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Ploteo · Impresión · Diseño gráfico
        </span>
        <h1 className="font-heading max-w-3xl text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance sm:text-6xl">
          De la idea al plano, del plano a la impresión
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Servicios de ploteo, impresión de planos y diseño gráfico en Godoy Cruz, Mendoza.
          Atención personalizada para particulares, empresas y profesionales.
        </p>

        <div className="mt-2 flex flex-wrap gap-4">
          <WhatsAppButton
            whatsappNumber={business.sectors.tecnico.whatsapp}
            message="Hola, quiero cotizar un servicio técnico/de arquitectura."
          >
            Sector Técnico
          </WhatsAppButton>
          <WhatsAppButton
            whatsappNumber={business.sectors.grafico.whatsapp}
            message="Hola, quiero cotizar un servicio gráfico."
            variant="outline"
          >
            Sector Gráfico
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
