import type { Metadata } from "next";
import Link from "next/link";
import { ImpresionColorWizard } from "@/components/ImpresionColorWizard";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Armá tu pedido de impresión color",
  description: "Respondé unas preguntas rápidas y te ayudamos a elegir la mejor opción para tu impresión a color.",
  path: "/sector-grafico/impresion-color/asistente",
});

export default function ImpresionColorAsistentePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/sector-grafico/impresion-color"
        className="text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-primary"
      >
        ← Impresiones color
      </Link>

      <div className="mt-8 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Sector Gráfico</span>
        <h1 className="font-heading mt-2 text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Armá tu pedido
        </h1>
        <p className="mt-4 text-muted">
          Te ayudamos a elegir la mejor opción para tu impresión. Respondé estas preguntas y armamos el mensaje
          para WhatsApp.
        </p>
      </div>

      <div className="mt-10">
        <ImpresionColorWizard />
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        ¿Ya sabés exactamente qué necesitás?{" "}
        <Link
          href="/sector-grafico/impresion-color#detalles-tecnicos"
          className="font-semibold text-primary hover:text-primary-hover"
        >
          Ver especificaciones técnicas
        </Link>
      </p>
    </div>
  );
}
