import { buildWhatsAppLink } from "@/lib/whatsapp";

type Variant = "solid" | "outline";

type Props = {
  whatsappNumber: string;
  message: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary",
};

export function WhatsAppButton({
  whatsappNumber,
  message,
  children,
  variant = "solid",
  className,
}: Props) {
  return (
    <a
      href={buildWhatsAppLink(whatsappNumber, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${variantClasses[variant]} ${className ?? ""}`}
    >
      <WhatsAppGlyph className="h-4 w-4" />
      {children}
    </a>
  );
}

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.52 3.62 1.42 5.12L2 22l5.13-1.5a9.83 9.83 0 0 0 4.9 1.31h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.06h-.01a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.05.89.9-2.97-.19-.31a8.15 8.15 0 0 1-1.24-4.35c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.16-8.27 8.16Zm4.48-6.11c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.5.12-.12.28-.31.42-.47.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.46-.08-.12-.65-1.56-.89-2.14-.24-.56-.48-.48-.66-.49h-.56c-.18 0-.47.07-.72.34-.24.26-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.14.18 1.9 2.9 4.6 3.95 2.7 1.05 2.7.7 3.19.65.49-.05 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.24-.16-.48-.28Z" />
    </svg>
  );
}
