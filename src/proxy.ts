import { NextRequest, NextResponse } from "next/server";
import { isSessionValueValid, SESSION_COOKIE } from "@/lib/session";

export function proxy(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE.name)?.value;
  if (!isSessionValueValid(session)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

// Scoped to /admin/dashboard only — a matcher on /admin/:path* would also
// gate /admin/login and cause a redirect loop. New pages under /admin
// besides dashboard need to be added here explicitly.
export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
