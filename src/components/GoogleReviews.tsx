import { SectionHeading } from "@/components/SectionHeading";
import { googleReviews, testimonials } from "@/content/reviews";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.09.99 5.77L10 14.77l-5.18 2.68.99-5.77L1.62 7.6l5.79-.84L10 1.5z" />
    </svg>
  );
}

function StarRating({ rating, className }: { rating: number; className?: string }) {
  const percentage = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <div className={`relative inline-flex ${className ?? ""}`} aria-hidden="true">
      <div className="flex gap-0.5 text-border">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="h-5 w-5" />
        ))}
      </div>
      <div
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-primary"
        style={{ width: `${percentage}%` }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="h-5 w-5" />
        ))}
      </div>
    </div>
  );
}

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.87c2.27-2.09 3.58-5.17 3.58-8.81z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.94-2.92l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.95H1.27v3.11C3.25 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A11.99 11.99 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.11z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.61l4 3.11C6.22 6.88 8.87 4.77 12 4.77z"
      />
    </svg>
  );
}

export function GoogleReviews() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Opiniones" title="Lo que dicen en Google" align="center" className="mx-auto text-center" />

        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 text-center">
          <GoogleGlyph className="h-8 w-8" />
          <p className="font-heading text-3xl font-bold text-foreground">{googleReviews.rating.toFixed(1)}</p>
          <StarRating rating={googleReviews.rating} />
          <p className="text-sm text-muted">
            {googleReviews.reviewCount} opiniones · {googleReviews.category}
          </p>
          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Ver reseñas en Google
          </a>
        </div>

        {testimonials.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6"
              >
                <StarRating rating={testimonial.rating} />
                <p className="flex-1 text-sm text-muted">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
