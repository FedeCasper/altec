"use client";

import { useState } from "react";
import type { PaperOption } from "@/content/serviceDetails";

type Props = {
  papers: PaperOption[];
};

export function PaperSelector({ papers }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = papers[selectedIndex];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
          Papel
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {papers.map((paper, index) => (
            <button
              key={paper.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-pressed={index === selectedIndex}
              className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                index === selectedIndex
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {paper.name}
            </button>
          ))}
        </div>
      </div>

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
    </div>
  );
}
