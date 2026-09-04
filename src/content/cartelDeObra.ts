export const medidas = ["70 x 50", "100 x 50", "200 x 100"] as const;

export type Medida = (typeof medidas)[number];

export const tareas = [
  "Cálculo",
  "Dirección de estructura",
  "Dirección técnica",
  "Verificación sísmica",
  "Proyecto",
] as const;

export type Tarea = (typeof tareas)[number];

export type Profesional = {
  nombre: string;
  cargo: string;
  tareas: Tarea[];
  matricula: string;
  categoria: string;
};

export const emptyProfesional: Profesional = {
  nombre: "",
  cargo: "",
  tareas: [],
  matricula: "",
  categoria: "",
};

export const MIN_PROFESIONALES = 1;
export const MAX_PROFESIONALES = 3;
