import type { MetadataRoute } from "next";

const siteUrl = "https://www.leaddaily.app";
const lastModified = new Date("2026-10-19");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
