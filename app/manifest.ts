import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StartupKnect",
    short_name: "StartupKnect",
    description: "Where students meet startup founders.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      { src: "/brand/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
