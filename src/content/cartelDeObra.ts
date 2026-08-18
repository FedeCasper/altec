export const medidas = ["70 x 50", "100 x 50", "200 x 100"] as const;

export type Medida = (typeof medidas)[number];

export type Profesional = {
  cargo: string;
  tarea: string;
  matricula: string;
  categoria: string;
};

export const emptyProfesional: Profesional = {
  cargo: "",
  tarea: "",
  matricula: "",
  categoria: "",
};

export const MAX_PROFESIONALES = 3;
