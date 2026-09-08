import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cómo Trabajamos",
  description:
    "Presupuestos, medios de pago, trabajos urgentes, tiempos de entrega y modalidades de retiro o envío en Altec Ploteos e Imprenta.",
  path: "/como-trabajamos",
});

const modalidad = [
  {
    title: "Presupuestos",
    description: "Realizamos presupuestos a medida para cada trabajo, sin compromiso.",
  },
  {
    title: "Medios de pago",
    description: "Aceptamos diferentes medios de pago según la modalidad de cada cliente.",
  },
  {
    title: "Trabajos urgentes",
    description: "Realizamos trabajos urgentes; consultanos por disponibilidad y tiempos.",
  },
  {
    title: "Tiempos de entrega",
    description: "El tiempo de entrega depende del tipo y las características del trabajo.",
  },
  {
    title: "Facturación",
    description: "Emitimos factura para particulares, empresas y profesionales.",
  },
  {
    title: "Tipos de clientes",
    description: "Trabajamos con particulares, empresas y profesionales de distintos rubros.",
  },
  {
    title: "Promociones",
    description: "Ofrecemos promociones y descuentos según el trabajo y la temporada.",
  },
];

const entrega = [
  {
    title: "Retiro en el local",
    description: "Podés retirar tu trabajo directamente en Rivadavia 485, Godoy Cruz.",
  },
  {
    title: "Retiro posterior",
    description: "Los trabajos pueden quedar preparados para ser retirados más adelante.",
  },
  {
    title: "Envíos coordinados",
    description: "Coordinamos envíos según las condiciones de cada pedido.",
  },
];

export default function ComoTrabajamosPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Modalidad comercial y de entrega"
        description="Cada pedido se adapta a la necesidad del cliente, desde el presupuesto hasta la entrega final."
      />

      <div className="mt-12">
        <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
          Modalidad comercial
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modalidad.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-foreground">
          Entrega de trabajos
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {entrega.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
