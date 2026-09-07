import Link from "next/link";
import type { Service } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";

type Props = {
  service: Service;
  href: string;
};

export function RelatedServiceCard({ service, href }: Props) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/50"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-primary">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="font-heading flex-1 text-base font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
        {service.name}
      </h3>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
