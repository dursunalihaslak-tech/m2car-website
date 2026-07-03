import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://m2car.com.tr",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}