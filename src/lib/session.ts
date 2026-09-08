import { createHmac, timingSafeEqual } from "crypto";

const MAX_AGE_SECONDS = 60 * 60 * 8; // 8h

export const SESSION_COOKIE = {
  name: "admin_session",
  maxAge: MAX_AGE_SECONDS,
} as const;

function sign(value: string): string {
  return createHmac("sha256", process.env.SESSION_SECRET!).update(value).digest("hex");
}

// Cookie value format: "<issuedAtMs>.<hmacHex>". No username/role in the
// payload — there is a single admin, so "valid signature, not expired" is
// already "authenticated".
export function createSessionValue(): string {
  const issuedAt = Date.now().toString();
  return `${issuedAt}.${sign(issuedAt)}`;
}

export function isSessionValueValid(value: string | undefined): boolean {
  if (!value) return false;
  const [issuedAt, mac] = value.split(".");
  if (!issuedAt || !mac) return false;
  if (Date.now() - Number(issuedAt) > MAX_AGE_SECONDS * 1000) return false;

  const expected = sign(issuedAt);
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
