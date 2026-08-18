import type { Metadata } from "next";
import Link from "next/link";
import { CartelDeObraForm } from "@/components/CartelDeObraForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cargar cartel de obra",
  description: "Completá los datos de tu cartel de obra y mirá una vista previa antes de cotizarlo.",
  path: "/sector-grafico/carteleria/cartel-de-obra",
});

export default function CartelDeObraPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/sector-grafico/carteleria"
        className="text-xs font-semibold uppercase tracking-wide text-muted transition-colors hover:text-primary"
      >
        ← Cartelería
      </Link>

      <div className="mt-8 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Cartelería
        </span>
        <h1 className="font-heading mt-2 text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
          Cargar cartel de obra
        </h1>
        <p className="mt-4 text-muted">
          Completá los datos de la obra y de los profesionales a cargo. La vista previa se actualiza en
          tiempo real con el diseño del cartel.
        </p>
      </div>

      <div className="mt-12">
        <CartelDeObraForm />
      </div>
    </div>
  );
}
