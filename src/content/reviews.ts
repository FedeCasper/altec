export type Testimonial = {
  author: string;
  rating: number;
  text: string;
};

export const googleReviews = {
  businessName: "Altec Ploteos / Imprenta",
  category: "Imprenta en Godoy Cruz",
  rating: 4.7,
  reviewCount: 171,
  url: "https://share.google/9IInx7OJrTd8y4Tie",
};

export const testimonials: Testimonial[] = [
  {
    author: "Eduardo Ariel Menegazzo",
    rating: 5,
    text: "El mejor servicio y calidad. Profesionalismo y muy buena atención. Desde hace 20 años que trabajo con ellos. Un lujo.",
  },
  {
    author: "Pablo Fiorenza",
    rating: 5,
    text: "Buena atención, son profesionales y nunca un problema con nada, te asesoran muy bien.",
  },
  {
    author: "Evangelina Scilipoti",
    rating: 5,
    text: "Muy buena atención. Calidad y seriedad en los trabajos entregados.",
  },
];
