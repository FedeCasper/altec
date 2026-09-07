"use client";

import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/content/business";
import {
  buildSummaryLines,
  buildWhatsAppMessage,
  getRecommendation,
  purposes,
  qualities,
  quantities,
  sizes,
  type Answers,
  type PurposeId,
  type QualityId,
  type QuantityId,
  type SizeId,
} from "@/content/impresionColorWizard";

const TOTAL_STEPS = 4;

function PurposeIcon({ id }: { id: PurposeId }) {
  const paths: Record<PurposeId, React.ReactNode> = {
    documentos: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    imagenes: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="M21 16l-5-5-4 4-2-2-5 5" />
      </>
    ),
    afiches: (
      <>
        <rect x="4" y="4" width="16" height="12" rx="1" />
        <path d="M9 20l1-4M15 20l-1-4" />
      </>
    ),
    folletos: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </>
    ),
    otro: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" />
        <path d="M12 17h.01" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}

function OptionCard({
  label,
  description,
  icon,
  selected,
  onClick,
}: {
  label: string;
  description?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group flex items-start gap-3 rounded-[5px] border p-4 text-left transition-colors ${
        selected ? "border-primary bg-primary/10" : "border-border bg-background hover:border-primary/60"
      }`}
    >
      {icon && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] bg-surface-alt text-primary">
          {icon}
        </span>
      )}
      <span className="flex flex-col gap-0.5">
        <span
          className={`text-sm font-semibold uppercase tracking-wide ${selected ? "text-primary" : "text-foreground group-hover:text-primary"}`}
        >
          {label}
        </span>
        {description && <span className="text-xs text-muted">{description}</span>}
      </span>
    </button>
  );
}

function StepHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground sm:text-2xl">
      {children}
    </h2>
  );
}

function ResultScreen({ answers, onRestart }: { answers: Answers; onRestart: () => void }) {
  const summary = buildSummaryLines(answers);
  const recommendation = getRecommendation(answers);
  const message = buildWhatsAppMessage(answers);
  const sector = business.sectors.grafico;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <StepHeading>Tu impresión</StepHeading>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {summary.map(({ label, value }) => (
            <div key={label} className="rounded-[5px] border border-border bg-background p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
              <p className="mt-1 text-sm text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[5px] border border-primary/30 bg-primary/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Te recomendamos</p>
        {recommendation ? (
          <>
            <p className="mt-2 font-heading text-lg font-semibold uppercase text-foreground">
              {recommendation.material.name}
            </p>
            {recommendation.material.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted">{recommendation.material.description}</p>
            )}
            {!recommendation.sizeConfirmed && (
              <p className="mt-2 text-sm text-muted">Confirmamos el tamaño exacto por WhatsApp.</p>
            )}
          </>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            Con estos datos podemos orientarte por WhatsApp.
          </p>
        )}
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <WhatsAppButton whatsappNumber={sector.whatsapp} message={message} className="w-full sm:w-auto">
          Consultar por WhatsApp
        </WhatsAppButton>
        <button
          type="button"
          onClick={onRestart}
          className="text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:text-primary"
        >
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}

export function ImpresionColorWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});

  function selectPurpose(id: PurposeId) {
    setAnswers((current) => ({ ...current, purpose: id }));
    setStep(2);
  }
  function selectSize(id: SizeId) {
    setAnswers((current) => ({ ...current, size: id }));
    setStep(3);
  }
  function selectQuality(id: QualityId) {
    setAnswers((current) => ({ ...current, quality: id }));
    setStep(4);
  }
  function selectQuantity(id: QuantityId) {
    setAnswers((current) => ({ ...current, quantity: id }));
    setStep(TOTAL_STEPS + 1);
  }
  function restart() {
    setAnswers({});
    setStep(1);
  }

  const isResult = step > TOTAL_STEPS;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      {!isResult && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted">
            <span>
              Paso {step} de {TOTAL_STEPS}
            </span>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="text-primary transition-colors hover:text-primary-hover"
              >
                ← Volver
              </button>
            )}
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-[5px] bg-surface-alt">
            <div
              className="h-full rounded-[5px] bg-primary transition-all duration-300"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <StepHeading>¿Qué querés imprimir?</StepHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {purposes.map((purpose) => (
              <OptionCard
                key={purpose.id}
                label={purpose.label}
                description={purpose.description}
                icon={<PurposeIcon id={purpose.id} />}
                selected={answers.purpose === purpose.id}
                onClick={() => selectPurpose(purpose.id)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <StepHeading>¿Qué tamaño necesitás?</StepHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {sizes.map((size) => (
              <OptionCard
                key={size.id}
                label={size.label}
                description={size.hint}
                selected={answers.size === size.id}
                onClick={() => selectSize(size.id)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-4">
          <StepHeading>¿Qué resultado buscás?</StepHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {qualities.map((quality) => (
              <OptionCard
                key={quality.id}
                label={quality.label}
                description={quality.description}
                selected={answers.quality === quality.id}
                onClick={() => selectQuality(quality.id)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="flex flex-col gap-4">
          <StepHeading>¿Cuántas copias necesitás?</StepHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {quantities.map((quantity) => (
              <OptionCard
                key={quantity.id}
                label={quantity.label}
                selected={answers.quantity === quantity.id}
                onClick={() => selectQuantity(quantity.id)}
              />
            ))}
          </div>
        </div>
      )}

      {isResult && <ResultScreen answers={answers} onRestart={restart} />}
    </div>
  );
}
