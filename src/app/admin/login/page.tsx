import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Admin — Ingresar",
    description: "Acceso privado para administradores.",
    path: "/admin/login",
  }),
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-full max-w-sm flex-col justify-center px-6 py-24">
      <h1 className="font-heading text-2xl text-foreground">Ingresar</h1>
      <p className="mt-1 text-sm text-muted">Panel de administración.</p>
      <LoginForm className="mt-8" />
    </div>
  );
}
