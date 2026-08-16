import Link from "next/link";
import { navItems } from "@/content/nav";
import { business } from "@/content/business";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted">{business.description}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Mapa del sitio
          </h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{business.address.full}</li>
            <li>
              Técnico / Arquitectura:{" "}
              <a href={`mailto:${business.sectors.tecnico.email}`} className="hover:text-primary">
                {business.sectors.tecnico.email}
              </a>
            </li>
            <li>
              Gráfico:{" "}
              <a href={`mailto:${business.sectors.grafico.email}`} className="hover:text-primary">
                {business.sectors.grafico.email}
              </a>
            </li>
            <li>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {business.social.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Horarios
          </h3>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            {business.hours.map((block) => (
              <li key={block.days}>
                <span className="text-foreground">{block.days}</span>
                <br />
                {block.ranges.join(" y ")}
              </li>
            ))}
            <li className="pt-1">{business.hoursNote}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
