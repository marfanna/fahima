import { MetadataRoute } from "next";
import { researchProjects } from "@/lib/data";

const BASE_URL = "https://fahimasultana.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/research`, priority: 0.9 },
    { url: `${BASE_URL}/experience`, priority: 0.8 },
    { url: `${BASE_URL}/education`, priority: 0.8 },
    { url: `${BASE_URL}/skills`, priority: 0.7 },
    { url: `${BASE_URL}/volunteer`, priority: 0.7 },
    { url: `${BASE_URL}/contact`, priority: 0.6 },
  ].map((r) => ({ ...r, lastModified: new Date(), changeFrequency: "monthly" as const }));

  const researchRoutes = researchProjects.map((p) => ({
    url: `${BASE_URL}/research/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...researchRoutes];
}
