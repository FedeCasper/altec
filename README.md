# Altec Ploteos e Imprenta — sitio web

Sitio institucional de Altec (ploteo, impresión de planos y diseño gráfico en Godoy Cruz, Mendoza), hecho con [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS.

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Otros comandos: `pnpm build` (build de producción), `pnpm start` (servir el build), `pnpm lint`.

## Estructura

- `src/app/` — páginas (App Router): Inicio, Sector Técnico, Sector Gráfico, Nosotros, Cómo Trabajamos, Contacto.
- `src/content/` — datos editables: negocio (`business.ts`), servicios por sector (`services.ts`), navegación (`nav.ts`). Cambiar textos, horarios o servicios se hace acá, sin tocar componentes.
- `src/components/` — UI (Header, Footer, cards, botones de WhatsApp, mapa, etc.).
- `src/lib/` — helpers: `whatsapp.ts` (deep links de WhatsApp) y `seo.ts` (metadata y JSON-LD).

## Variables de entorno

Ver `.env.example`. `NEXT_PUBLIC_SITE_URL` define la URL pública usada en metadata, canonical, sitemap y robots.txt — actualizarla en Vercel cuando se configure un dominio propio.

## Deploy

Pensado para Vercel (zero-config). Alternativamente puede exportarse/hostearse en cualquier proveedor que soporte Next.js (ej. Hostinger con Node.js).
