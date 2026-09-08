import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { deriveSector } from "@/lib/pageviewSector";

export async function POST(request: NextRequest) {
  const { path } = await request.json().catch(() => ({ path: null }));
  if (typeof path !== "string" || !path.startsWith("/")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    await sql`INSERT INTO pageviews (path, sector) VALUES (${path}, ${deriveSector(path)})`;
  } catch {
    // Tracking is best-effort: never break the page for the visitor.
  }

  return NextResponse.json({ ok: true });
}
