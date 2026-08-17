import Link from "next/link";
import { navItems } from "@/content/nav";
import { business } from "@/content/business";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { sectorGraficoServices, sectorTecnicoServices } from "@/content/services";

const sectorDropdowns: Record<string, { id: string; name: string; href: string }[]> = {
  "/sector-tecnico": sectorTecnicoServices.map((service) => ({
    id: service.id,
    name: service.name,
    href: `/sector-tecnico#${service.id}`,
  })),
  "/sector-grafico": sectorGraficoServices.map((service) => ({
    id: service.id,
    name: service.name,
    href: `/sector-grafico/${service.id}`,
  })),
};

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const services = sectorDropdowns[item.href];

              if (!services) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-primary"
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
                    className="text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-primary"
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

        <div className="hidden md:block">
          <WhatsAppButton
            whatsappNumber={business.sectors.tecnico.whatsapp}
            message="Hola, quiero hacer una consulta."
          >
            Consultanos
          </WhatsAppButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
