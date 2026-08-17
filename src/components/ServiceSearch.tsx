"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ServiceIcon } from "@/components/ServiceIcon";
import { business } from "@/content/business";
import { sectorGraficoServices, sectorTecnicoServices } from "@/content/services";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const searchableServices = [
  ...sectorTecnicoServices.map((service) => ({
    ...service,
    href: `/sector-tecnico#${service.id}`,
    sectorLabel: business.sectors.tecnico.shortLabel,
  })),
  ...sectorGraficoServices.map((service) => ({
    ...service,
    href: `/sector-grafico#${service.id}`,
    sectorLabel: business.sectors.grafico.shortLabel,
  })),
];

export function ServiceSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = normalize(query.trim());
    if (!term) return [];
    return searchableServices.filter((service) => {
      const haystack = normalize([service.name, service.description, ...service.tags].join(" "));
      return haystack.includes(term);
    });
  }, [query]);

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscá un servicio: ploteo, vinilos, tarjetas…"
          className="w-full rounded-full border border-border bg-surface py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
        />
      </div>

      {query.trim() && (
        <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto">
              {results.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 hover:bg-surface-alt"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-primary">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{service.name}</span>
                      <span className="text-xs uppercase tracking-wide text-muted">
                        {service.sectorLabel}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-muted">
              No encontramos servicios para &ldquo;{query}&rdquo;. Probá con otra palabra o consultanos
              por WhatsApp.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
