import { logoutAction } from "@/app/admin/logout/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-surface text-foreground">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <span className="font-heading text-sm uppercase tracking-wide text-muted">Admin</span>
        <form action={logoutAction}>
          <button type="submit" className="text-sm text-muted hover:text-foreground">
            Cerrar sesión
          </button>
        </form>
      </header>
      <main>{children}</main>
    </div>
  );
}
