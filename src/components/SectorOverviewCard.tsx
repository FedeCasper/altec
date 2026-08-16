import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  services: string[];
};

export function SectorOverviewCard({ title, description, href, services }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary"
    >
      <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {services.map((service) => (
          <li
            key={service}
            className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted"
          >
            {service}
          </li>
        ))}
      </ul>
      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary group-hover:text-primary-hover">
        Ver servicios
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
