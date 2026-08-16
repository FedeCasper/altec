type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses} ${className ?? ""}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base text-muted">{description}</p>}
    </div>
  );
}
