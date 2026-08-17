import Image from "next/image";
import { clients } from "@/content/clients";

export function ClientLogos() {
  const items = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Empresas que confían en Altec
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-6">
          {items.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex h-20 w-56 shrink-0 items-center justify-center rounded-xl border border-border bg-background px-6"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={56}
                  className="max-h-12 w-auto object-contain"
                />
              ) : (
                <span className="font-heading text-center text-base font-semibold uppercase tracking-wide text-muted">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
