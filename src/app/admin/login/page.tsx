import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/LoginForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Ingresar",
    description: "Acceso privado.",
    path: "/admin/login",
  }),
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-sm rounded-xl border border-border bg-background p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <h1 className="mt-6 font-heading text-xl text-foreground">Ingresar</h1>
          <p className="mt-1 text-sm text-muted">Acceso privado.</p>
        </div>
        <LoginForm className="mt-8" />
      </div>
    </div>
  );
}
