import Link from "next/link";
import { navItems } from "@/content/nav";
import { business } from "@/content/business";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wide text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
