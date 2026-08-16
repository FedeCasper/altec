export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sector Técnico", href: "/sector-tecnico" },
  { label: "Sector Gráfico", href: "/sector-grafico" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Cómo Trabajamos", href: "/como-trabajamos" },
  { label: "Contacto", href: "/contacto" },
];
