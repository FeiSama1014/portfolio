import type { NextConfig } from "next";

const repoBasePath = "/portfolio";

// Public site origin used for QR codes and any other link that must be
// absolute (scannable on a phone, shared elsewhere). Override at build time
// by exporting NEXT_PUBLIC_SITE_URL before `npm run build`.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://feisama1014.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
