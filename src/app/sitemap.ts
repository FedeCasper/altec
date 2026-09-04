import type { MetadataRoute } from "next";
import { navItems } from "@/content/nav";
import { sectorGraficoServices, sectorTecnicoServices } from "@/content/services";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const navEntries = navItems.map((item) => ({
    url: `${siteUrl}${item.href}`,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const graficoServiceEntries = sectorGraficoServices.map((service) => ({
    url: `${siteUrl}/sector-grafico/${service.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const tecnicoServiceEntries = sectorTecnicoServices.map((service) => ({
    url: `${siteUrl}/sector-tecnico/${service.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...navEntries, ...graficoServiceEntries, ...tecnicoServiceEntries];
}
