import type { MetadataRoute } from "next";
import {
  MATIERES,
  NIVEAUX,
  getFicheMetas,
} from "./reviser/[niveau]/epreuves/ecrites/[matiere]/data";
import { articles } from "./blog/data";

const BASE_URL = "https://www.maitrizz.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/reviser`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
  ];

  // Pages de parcours dédoublées par niveau de concours (L3 / M2).
  const parcoursPages: MetadataRoute.Sitemap = NIVEAUX.flatMap((niveau) => [
    {
      url: `${BASE_URL}/reviser/${niveau}/epreuves`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reviser/${niveau}/epreuves/ecrites`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reviser/${niveau}/epreuves/orales`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const matierePages: MetadataRoute.Sitemap = NIVEAUX.flatMap((niveau) =>
    MATIERES.map((matiere) => ({
      url: `${BASE_URL}/reviser/${niveau}/epreuves/ecrites/${matiere}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  const fichePages: MetadataRoute.Sitemap = NIVEAUX.flatMap((niveau) =>
    MATIERES.flatMap((matiere) =>
      getFicheMetas(niveau, matiere).map((fiche) => ({
        url: `${BASE_URL}/reviser/${niveau}/epreuves/ecrites/${matiere}/${fiche.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      }))
    )
  );

  return [
    ...staticPages,
    ...parcoursPages,
    ...matierePages,
    ...fichePages,
    ...blogPages,
  ];
}
