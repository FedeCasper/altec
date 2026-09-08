"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionValue, SESSION_COOKIE } from "@/lib/session";

export type LoginState = { error: string | null };

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  const validUser = username === process.env.ADMIN_USERNAME;
  const validPass = validUser && (await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH ?? ""));

  if (!validUser || !validPass) {
    return { error: "Usuario o contraseña incorrectos." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE.name, createSessionValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_COOKIE.maxAge,
  });

  redirect("/admin/dashboard");
}
