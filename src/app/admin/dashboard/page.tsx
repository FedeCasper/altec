import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { labelForPath } from "@/lib/pageLabel";
import { isSessionValueValid, SESSION_COOKIE } from "@/lib/session";

export const metadata: Metadata = {
  title: "Admin — Estadísticas",
  robots: { index: false, follow: false },
};

const TIMEZONE = "America/Argentina/Mendoza";
const TOP_PATHS_PER_SECTOR = 5;

const SECTOR_LABELS: Record<string, string> = {
  "sector-tecnico": "Sector Técnico",
  "sector-grafico": "Sector Gráfico",
  "sector-estudio": "Sector Estudio",
  otros: "Otras páginas",
};

const DAY_LABELS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function Bar({ label, total, max }: { label: string; total: number; max: number }) {
  const width = max > 0 ? Math.max((total / max) * 100, total > 0 ? 2 : 0) : 0;
  return (
    <div className="flex items-center gap-3 py-1 text-sm">
      <span className="w-28 shrink-0 text-muted">{label}</span>
      <div className="h-4 flex-1 rounded bg-surface-alt">
        <div className="h-4 rounded bg-primary" style={{ width: `${width}%` }} />
      </div>
      <span className="w-10 shrink-0 text-right text-foreground">{total}</span>
    </div>
  );
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  if (!isSessionValueValid(cookieStore.get(SESSION_COOKIE.name)?.value)) {
    redirect("/admin/login");
  }

  const [
    allTimeRows,
    last30Rows,
    perSectorEventRows,
    perDayRows,
    perPathRows,
    perDowRows,
    perHourRows,
  ] = await Promise.all([
    sql`SELECT COUNT(*)::int AS total FROM pageviews WHERE event_type = 'pageview'`,
    sql`
      SELECT COUNT(*)::int AS total FROM pageviews
      WHERE event_type = 'pageview' AND created_at > now() - interval '30 days'
    `,
    sql`
      SELECT sector, event_type, COUNT(*)::int AS total
      FROM pageviews
      GROUP BY sector, event_type
    `,
    sql`
      SELECT to_char(date_trunc('day', created_at AT TIME ZONE ${TIMEZONE}), 'YYYY-MM-DD') AS day,
             COUNT(*)::int AS total
      FROM pageviews
      WHERE event_type = 'pageview' AND created_at > now() - interval '30 days'
      GROUP BY day
      ORDER BY day DESC
    `,
    sql`
      SELECT sector, path, COUNT(*)::int AS total
      FROM pageviews
      WHERE event_type = 'pageview'
      GROUP BY sector, path
      ORDER BY sector, total DESC
    `,
    sql`
      SELECT EXTRACT(DOW FROM created_at AT TIME ZONE ${TIMEZONE})::int AS dow, COUNT(*)::int AS total
      FROM pageviews
      WHERE event_type = 'pageview'
      GROUP BY dow
      ORDER BY dow
    `,
    sql`
      SELECT EXTRACT(HOUR FROM created_at AT TIME ZONE ${TIMEZONE})::int AS hour, COUNT(*)::int AS total
      FROM pageviews
      WHERE event_type = 'pageview'
      GROUP BY hour
      ORDER BY hour
    `,
  ]);

  const allTime = Number(allTimeRows[0]?.total ?? 0);
  const last30 = Number(last30Rows[0]?.total ?? 0);

  // Conversión a WhatsApp por sector: visitas vs. clics, agrupados en JS.
  const bySector = new Map<string, { views: number; clicks: number }>();
  for (const row of perSectorEventRows) {
    const sector = String(row.sector);
    const entry = bySector.get(sector) ?? { views: 0, clicks: 0 };
    if (row.event_type === "pageview") entry.views = Number(row.total);
    if (row.event_type === "whatsapp_click") entry.clicks = Number(row.total);
    bySector.set(sector, entry);
  }
  const conversionRows = [...bySector.entries()]
    .map(([sector, { views, clicks }]) => ({
      sector,
      views,
      clicks,
      rate: views > 0 ? (clicks / views) * 100 : 0,
    }))
    .sort((a, b) => b.views - a.views);

  // Top páginas/servicios por sector, top N cada uno.
  const pathsBySector = new Map<string, { path: string; total: number }[]>();
  for (const row of perPathRows) {
    const sector = String(row.sector);
    const list = pathsBySector.get(sector) ?? [];
    if (list.length < TOP_PATHS_PER_SECTOR) list.push({ path: String(row.path), total: Number(row.total) });
    pathsBySector.set(sector, list);
  }
  const sectorOrder = ["sector-tecnico", "sector-grafico", "sector-estudio", "otros"].filter((sector) =>
    pathsBySector.has(sector),
  );

  const dowTotals = new Array(7).fill(0);
  for (const row of perDowRows) dowTotals[Number(row.dow)] = Number(row.total);
  const maxDow = Math.max(1, ...dowTotals);

  const hourTotals = new Array(24).fill(0);
  for (const row of perHourRows) hourTotals[Number(row.hour)] = Number(row.total);
  const maxHour = Math.max(1, ...hourTotals);

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="font-heading text-2xl text-foreground">Estadísticas</h1>

      <div className="mt-6 grid grid-cols-2 gap-4">
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
        <h2 className="font-heading text-lg text-foreground">Conversión a WhatsApp por sector</h2>
        <p className="mt-1 text-sm text-muted">
          Visitas que terminaron en un clic a &quot;Consultar por WhatsApp&quot;.
        </p>
        <table className="mt-3 w-full text-sm">
          <thead>
            <tr className="text-left text-muted">
              <th className="pb-2 font-normal">Sector</th>
              <th className="pb-2 text-right font-normal">Visitas</th>
              <th className="pb-2 text-right font-normal">Contactos</th>
              <th className="pb-2 text-right font-normal">Conversión</th>
            </tr>
          </thead>
          <tbody>
            {conversionRows.length === 0 && (
              <tr>
                <td className="py-2 text-muted" colSpan={4}>
                  Todavía no hay datos.
                </td>
              </tr>
            )}
            {conversionRows.map((row) => (
              <tr key={row.sector} className="border-t border-border">
                <td className="py-2 text-foreground">{SECTOR_LABELS[row.sector] ?? row.sector}</td>
                <td className="py-2 text-right text-foreground">{row.views}</td>
                <td className="py-2 text-right text-foreground">{row.clicks}</td>
                <td className="py-2 text-right text-foreground">{row.rate.toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-lg text-foreground">Servicios más consultados por sector</h2>
        <div className="mt-3 grid gap-6 sm:grid-cols-2">
          {sectorOrder.map((sector) => (
            <div key={sector}>
              <h3 className="text-sm font-semibold text-foreground">{SECTOR_LABELS[sector] ?? sector}</h3>
              <table className="mt-2 w-full text-sm">
                <tbody>
                  {pathsBySector.get(sector)!.map((row) => (
                    <tr key={row.path} className="border-t border-border">
                      <td className="py-1.5 text-foreground">{labelForPath(row.path)}</td>
                      <td className="py-1.5 text-right text-foreground">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          {sectorOrder.length === 0 && <p className="text-sm text-muted">Todavía no hay datos.</p>}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-lg text-foreground">Visitas por día de la semana</h2>
        <div className="mt-3">
          {DAY_LABELS.map((label, dow) => (
            <Bar key={label} label={label} total={dowTotals[dow]} max={maxDow} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-lg text-foreground">Visitas por hora del día</h2>
        <div className="mt-3">
          {hourTotals.map((total, hour) => (
            <Bar key={hour} label={`${String(hour).padStart(2, "0")}:00`} total={total} max={maxHour} />
          ))}
        </div>
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
