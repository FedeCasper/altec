import Link from "next/link";
import { navItems } from "@/content/nav";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { HeaderContactMenu } from "@/components/HeaderContactMenu";
import { ServiceSearch } from "@/components/ServiceSearch";
import { sectorGraficoServices, sectorTecnicoServices } from "@/content/services";

const sectorDropdowns: Record<string, { id: string; name: string; href: string }[]> = {
  "/sector-tecnico": sectorTecnicoServices.map((service) => ({
    id: service.id,
    name: service.name,
    href: `/sector-tecnico/${service.id}`,
  })),
  "/sector-grafico": sectorGraficoServices.map((service) => ({
    id: service.id,
    name: service.name,
    href: `/sector-grafico/${service.id}`,
  })),
};

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <Logo className="shrink-0" />

          <div className="min-w-0 flex-1">
            <ServiceSearch />
          </div>

          <div className="hidden shrink-0 xl:block">
            <HeaderContactMenu />
          </div>

          <Link
            href="/admin/login"
            aria-label="Ingresar"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:text-primary xl:flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" />
            </svg>
          </Link>

          <MobileNav />
        </div>
      </div>

      <div className="hidden border-b border-border xl:block">
        <div className="mx-auto max-w-6xl px-6">
          <nav>
            <ul className="flex items-center justify-between gap-4 py-1.5">
              {navItems.map((item) => {
                const services = sectorDropdowns[item.href];

                if (!services) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
                        {services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-alt hover:text-primary"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
