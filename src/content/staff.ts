export type StaffMember = {
  id: string;
  name: string;
  role: string;
  photo?: string;
};

export const staff: StaffMember[] = [
  {
    id: "gustavo-cruz",
    name: "Gustavo Cruz",
    role: "Jefe del Sector Técnico",
  },
  {
    id: "hernan-baez",
    name: "Hernán Báez",
    role: "Jefe del Sector Diseño",
  },
];
