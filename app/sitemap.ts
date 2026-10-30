import type { MetadataRoute } from "next";
import { SITE } from "@/lib/landing-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacidade", "/termos"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
