"use client";

import { useState } from "react";
import type { MaterialOption } from "@/content/serviceDetails";

type Props = {
  label: string;
  options: MaterialOption[];
  fallbackDescription?: string;
};

export function MaterialSelector({ label, options, fallbackDescription }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = options[selectedIndex];
  const description = selected.description ?? fallbackDescription;

  return (
    <div className="flex flex-col gap-8">
      {description && (
        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Detalles
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
        </div>
      )}

      <div>
        <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
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

      {selected.weights && selected.weights.length > 0 && (
        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Gramajes disponibles
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
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Tamaños disponibles
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
    </div>
  );
}
