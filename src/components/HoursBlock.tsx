import { business } from "@/content/business";

export function HoursBlock({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
        Horarios de atención
      </h3>
      <dl className="mt-3 space-y-2 text-sm text-muted">
        {business.hours.map((block) => (
          <div key={block.days} className="flex flex-col">
            <dt className="text-foreground">{block.days}</dt>
            <dd>{block.ranges.join(" y ")}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 text-sm text-muted">{business.hoursNote}</p>
    </div>
  );
}
