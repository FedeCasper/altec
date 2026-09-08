"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/content/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full border-b border-border bg-background px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium uppercase tracking-wide text-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-border pt-4">
              <Link
                href="/admin/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm text-muted hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" />
                </svg>
                Ingresar
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
