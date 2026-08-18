"use client";

import { useState } from "react";
import { CartelDeObraPreview } from "@/components/CartelDeObraPreview";
import {
  MAX_PROFESIONALES,
  emptyProfesional,
  medidas,
  type Medida,
  type Profesional,
} from "@/content/cartelDeObra";

type ProfesionalField = keyof Profesional;

const profesionalFields: { key: ProfesionalField; label: string }[] = [
  { key: "cargo", label: "Cargo del profesional" },
  { key: "tarea", label: "Tarea" },
  { key: "matricula", label: "Matrícula" },
  { key: "categoria", label: "Categoría" },
];

const inputClassName =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none";

export function CartelDeObraForm() {
  const [medida, setMedida] = useState<Medida>(medidas[0]);
  const [obra, setObra] = useState("");
  const [propietario, setPropietario] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [expediente, setExpediente] = useState("");
  const [profesionales, setProfesionales] = useState<Profesional[]>([{ ...emptyProfesional }]);

  function updateProfesional(index: number, field: ProfesionalField, value: string) {
    setProfesionales((current) =>
      current.map((profesional, i) => (i === index ? { ...profesional, [field]: value } : profesional)),
    );
  }

  function addProfesional() {
    setProfesionales((current) =>
      current.length < MAX_PROFESIONALES ? [...current, { ...emptyProfesional }] : current,
    );
  }

  function removeProfesional(index: number) {
    setProfesionales((current) => current.filter((_, i) => i !== index));
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <form className="flex flex-col gap-8" onSubmit={(event) => event.preventDefault()}>
        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Medida
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {medidas.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMedida(option)}
                aria-pressed={option === medida}
                className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                  option === medida
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {option} cm
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
            Datos de la obra
          </h2>
          <label className="flex flex-col gap-1.5 text-sm text-muted">
            Obra:
            <input
              type="text"
              value={obra}
              onChange={(event) => setObra(event.target.value)}
              className={inputClassName}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-muted">
            Propietario:
            <input
              type="text"
              value={propietario}
              onChange={(event) => setPropietario(event.target.value)}
              className={inputClassName}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-muted">
            Ubicación:
            <input
              type="text"
              value={ubicacion}
              onChange={(event) => setUbicacion(event.target.value)}
              className={inputClassName}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-muted">
            Nro. Expediente:
            <input
              type="text"
              value={expediente}
              onChange={(event) => setExpediente(event.target.value)}
              className={inputClassName}
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Profesionales
            </h2>
            <span className="text-xs text-muted">
              {profesionales.length} / {MAX_PROFESIONALES}
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {profesionales.map((profesional, index) => (
              <div key={index} className="flex flex-col gap-3 rounded-xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Profesional {index + 1}
                  </span>
                  {profesionales.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProfesional(index)}
                      className="text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary-hover"
                    >
                      Quitar
                    </button>
                  )}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {profesionalFields.map(({ key, label }) => (
                    <label key={key} className="flex flex-col gap-1.5 text-sm text-muted">
                      {label}:
                      <input
                        type="text"
                        value={profesional[key]}
                        onChange={(event) => updateProfesional(index, key, event.target.value)}
                        className={inputClassName}
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {profesionales.length < MAX_PROFESIONALES && (
            <button
              type="button"
              onClick={addProfesional}
              className="self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              + Agregar profesional
            </button>
          )}
        </div>
      </form>

      <div className="lg:sticky lg:top-24">
        <CartelDeObraPreview
          medida={medida}
          obra={obra}
          propietario={propietario}
          ubicacion={ubicacion}
          expediente={expediente}
          profesionales={profesionales}
        />
      </div>
    </div>
  );
}
