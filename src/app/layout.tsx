import type { Metadata } from "next";
import { Anton, Inter, Oswald } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { business } from "@/content/business";
import { buildMetadata, localBusinessJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${business.name} — Ploteo, impresión de planos y diseño gráfico en Mendoza`,
    description: business.description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${oswald.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
