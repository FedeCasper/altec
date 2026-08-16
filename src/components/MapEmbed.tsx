import { business } from "@/content/business";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border ${className ?? ""}`}>
      <iframe
        src={business.mapEmbedUrl}
        title={`Mapa de ubicación de ${business.name}`}
        referrerPolicy="no-referrer-when-downgrade"
        className="h-72 w-full grayscale invert-[0.9] contrast-[1.1] sm:h-96"
      />
    </div>
  );
}
