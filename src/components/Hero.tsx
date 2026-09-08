import { SectorSendFilesCards } from "@/components/SectorSendFilesCards";

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-blueprint-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div
          className="absolute -right-24 top-0 h-full w-1/2 bg-gradient-to-l from-primary/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 sm:py-32">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Arquitectura · Diseño . y más...
        </span>
        <h1 className="font-heading max-w-3xl text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance sm:text-6xl">
          Bienvenido, somos Altec Ploteos
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Servicios de ploteo, impresión de planos y diseño gráfico en Godoy Cruz, Mendoza.
          Atención personalizada para particulares, empresas y profesionales.
        </p>

        <div className="mt-2 max-w-2xl">
          <SectorSendFilesCards />
        </div>
      </div>
    </section>
  );
}
