import type { MetadataRoute } from "next";

const base = "https://startupknect.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/events", "/contact"];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
