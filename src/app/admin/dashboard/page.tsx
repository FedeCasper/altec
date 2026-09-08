import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { isSessionValueValid, SESSION_COOKIE } from "@/lib/session";

export const metadata: Metadata = {
  title: "Admin — Estadísticas",
  robots: { index: false, follow: false },
};

const SECTOR_LABELS: Record<string, string> = {
  "sector-tecnico": "Sector Técnico",
  "sector-grafico": "Sector Gráfico",
  "sector-estudio": "Sector Estudio",
  otros: "Otras páginas",
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  if (!isSessionValueValid(cookieStore.get(SESSION_COOKIE.name)?.value)) {
    redirect("/admin/login");
  }

  const [allTimeRows, last30Rows, perDayRows, perSectorRows] = await Promise.all([
    sql`SELECT COUNT(*)::int AS total FROM pageviews`,
    sql`SELECT COUNT(*)::int AS total FROM pageviews WHERE created_at > now() - interval '30 days'`,
    sql`
      SELECT to_char(date_trunc('day', created_at), 'YYYY-MM-DD') AS day, COUNT(*)::int AS total
      FROM pageviews
      WHERE created_at > now() - interval '30 days'
      GROUP BY day
      ORDER BY day DESC
    `,
    sql`
      SELECT sector, COUNT(*)::int AS total
      FROM pageviews
      GROUP BY sector
      ORDER BY total DESC
    `,
  ]);

  const allTime = Number(allTimeRows[0]?.total ?? 0);
  const last30 = Number(last30Rows[0]?.total ?? 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-heading text-2xl text-foreground">Estadísticas</h1>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted">Visitas totales</p>
          <p className="mt-1 text-3xl font-heading">{allTime}</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted">Últimos 30 días</p>
          <p className="mt-1 text-3xl font-heading">{last30}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-lg text-foreground">Sectores más visitados</h2>
        <table className="mt-3 w-full text-sm">
          <tbody>
            {perSectorRows.length === 0 && (
              <tr>
                <td className="py-2 text-muted">Todavía no hay datos.</td>
              </tr>
            )}
            {perSectorRows.map((row) => (
              <tr key={String(row.sector)} className="border-t border-border">
                <td className="py-2 text-foreground">{SECTOR_LABELS[row.sector as string] ?? row.sector}</td>
                <td className="py-2 text-right text-foreground">{Number(row.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-lg text-foreground">Visitas por día (últimos 30 días)</h2>
        <table className="mt-3 w-full text-sm">
          <tbody>
            {perDayRows.length === 0 && (
              <tr>
                <td className="py-2 text-muted">Todavía no hay datos.</td>
              </tr>
            )}
            {perDayRows.map((row) => (
              <tr key={String(row.day)} className="border-t border-border">
                <td className="py-2 text-foreground">{String(row.day)}</td>
                <td className="py-2 text-right text-foreground">{Number(row.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
