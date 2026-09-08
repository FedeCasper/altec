"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/login/actions";

const inputClassName =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none";

const initialState: LoginState = { error: null };

export function LoginForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className={`flex flex-col gap-4 ${className ?? ""}`}>
      <div>
        <label htmlFor="username" className="mb-1 block text-sm text-foreground">
          Usuario
        </label>
        <input id="username" name="username" type="text" required autoComplete="username" className={inputClassName} />
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-sm text-foreground">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClassName}
        />
      </div>
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
      >
        {pending ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}
