import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { deriveSector } from "@/lib/pageviewSector";

const EVENT_TYPES = new Set(["pageview", "whatsapp_click"]);

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({ path: null, type: null }));
  const path = body.path;
  const eventType = EVENT_TYPES.has(body.type) ? body.type : "pageview";

  if (typeof path !== "string" || !path.startsWith("/")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    await sql`INSERT INTO pageviews (path, sector, event_type) VALUES (${path}, ${deriveSector(path)}, ${eventType})`;
  } catch {
    // Tracking is best-effort: never break the page for the visitor.
  }

  return NextResponse.json({ ok: true });
}
