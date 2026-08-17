import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex flex-col leading-none ${className ?? ""}`}>
      <span className="font-logo text-2xl tracking-tight text-foreground">
        <span className="text-primary group-hover:text-primary-hover">a</span>ltec
      </span>
    </Link>
  );
}
