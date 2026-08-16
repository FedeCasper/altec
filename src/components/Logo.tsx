import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex flex-col leading-none ${className ?? ""}`}>
      <span className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
        al<span className="text-primary group-hover:text-primary-hover">tec</span>
      </span>
      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
        Ploteos e Imprenta
      </span>
    </Link>
  );
}
