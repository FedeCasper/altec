"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppGlyph } from "@/components/WhatsAppButton";
import { contactSectors } from "@/lib/contactSectors";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function HeaderContactMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        <WhatsAppGlyph className="h-4 w-4" />
        Consultanos
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 w-56 pt-3" role="menu">
          <ul className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
            {contactSectors.map((sector) => (
              <li key={sector.id} role="none">
                <a
                  href={buildWhatsAppLink(sector.whatsapp, sector.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-alt hover:text-primary"
                >
                  {sector.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
