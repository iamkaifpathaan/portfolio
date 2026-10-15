import type { MetadataRoute } from "next";
import { profile, projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.site;
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/work`, priority: 0.9 },
    ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, priority: 0.8 })),
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.6 },
  ];
}
