import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The White Rabbit",
    short_name: "White Rabbit",
    description:
      "An AI-native vinyl record shop built on Discogs. Discover by taste, listen before you buy, choose your copy from trusted partners.",
    start_url: `${base}/`,
    scope: `${base}/`,
    display: "standalone",
    background_color: "#14100d",
    theme_color: "#14100d",
    icons: [
      {
        src: `${base}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
