"use client";

import { useEffect, useState } from "react";
import type { MaterialOption } from "@/content/serviceDetails";

type Props = {
  label: string;
  options: MaterialOption[];
  weightsLabel?: string;
  sizesLabel?: string;
};

export function MaterialSelector({
  label,
  options,
  weightsLabel = "Gramajes disponibles",
  sizesLabel = "Tamaños disponibles",
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSupportIndex, setSelectedSupportIndex] = useState(0);
  const selected = options[selectedIndex];
  const description = selected.description;
  const selectedSupport = selected.supports?.[selectedSupportIndex];

  useEffect(() => {
    setSelectedSupportIndex(0);
  }, [selectedIndex]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
          {label}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {options.map((option, index) => (
            <button
              key={option.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-pressed={index === selectedIndex}
              className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                index === selectedIndex
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      {description && (
        <div>
          <h2 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
            Detalles
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
        </div>
      )}

      {selected.supports && selected.supports.length > 0 && (
        <div>
          <h2 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
            {weightsLabel}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {selected.supports.map((support, index) => (
              <button
                key={support.name}
                type="button"
                onClick={() => setSelectedSupportIndex(index)}
                aria-pressed={index === selectedSupportIndex}
                className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                  index === selectedSupportIndex
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {support.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedSupport && (selectedSupport.sizes?.length || selectedSupport.customSize) && (
        <div>
          <h2 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
            Tamaños disponibles
          </h2>
          {selectedSupport.sizes && selectedSupport.sizes.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedSupport.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
                >
                  {size}
                </span>
              ))}
              {selectedSupport.customSize && (
                <span className="rounded-lg border border-dashed border-primary/50 px-4 py-2 text-sm text-primary">
                  Medida personalizada
                </span>
              )}
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted">
              Se trabaja a medida personalizada. Consultanos las planchas estándar disponibles.
            </p>
          )}
        </div>
      )}

      {selected.weights && selected.weights.length > 0 && (
        <div>
          <h2 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
            {weightsLabel}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {selected.weights.map((weight) => (
              <span
                key={weight}
                className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
              >
                {weight}
              </span>
            ))}
          </div>
        </div>
      )}

      {selected.sizes && selected.sizes.length > 0 && (
        <div>
          <h2 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
            {selected.sizesLabel ?? sizesLabel}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {selected.sizes.map((size) => (
              <span
                key={size}
                className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      )}

      {selected.extraInfo && (
        <details
          key={selected.name}
          className="group rounded-xl border border-border bg-surface open:border-primary/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            <span>¿Querés saber más sobre {selected.name.toLowerCase()}?</span>
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{selected.extraInfo}</p>
        </details>
      )}
    </div>
  );
}
