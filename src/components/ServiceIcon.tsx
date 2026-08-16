import type { ServiceIcon as ServiceIconName } from "@/content/services";

type Props = {
  name: ServiceIconName;
  className?: string;
};

const paths: Record<ServiceIconName, React.ReactNode> = {
  plot: (
    <>
      <path d="M4 19h16" />
      <path d="M7 19V7l10-3v15" />
      <path d="M7 11l10-3" />
    </>
  ),
  printer: (
    <>
      <path d="M6 9V3h12v6" />
      <rect x="4" y="9" width="16" height="8" rx="1" />
      <path d="M6 17v4h12v-4" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M7 8h4v4H7z" />
      <path d="M13 8h4" />
      <path d="M13 12h4" />
      <path d="M7 16h10" />
    </>
  ),
  binding: (
    <>
      <rect x="6" y="3" width="14" height="18" rx="1" />
      <path d="M4 6h2M4 10h2M4 14h2M4 18h2" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5a1 1 0 0 1 1-1h3" />
      <path d="M20 8V5a1 1 0 0 0-1-1h-3" />
      <path d="M4 16v3a1 1 0 0 0 1 1h3" />
      <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M4 12h16" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="1" />
      <path d="M4 16V5a1 1 0 0 1 1-1h11" />
    </>
  ),
  billboard: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="1" />
      <path d="M8 20l1-4" />
      <path d="M16 20l-1-4" />
    </>
  ),
  vinyl: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  sign: (
    <>
      <path d="M4 4v16" />
      <path d="M4 5h14l-2 4 2 4H4" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14h4" />
    </>
  ),
  flyer: (
    <>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
  design: (
    <>
      <path d="M12 3a9 9 0 1 0 9 9c0-1-1-2-2-2h-3a2 2 0 0 1-2-2V6c0-2-1-3-2-3z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="9" cy="15" r="1" />
      <circle cx="14" cy="16" r="1" />
    </>
  ),
};

export function ServiceIcon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
