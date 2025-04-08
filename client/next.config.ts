import { backendURL } from "@/lib/config/backend-url";

// next.config.js
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2gb",
    },
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/scormCourse/:path*",
  //       destination: backendURL + "/:path*", // Proxy to Backend
  //     },
  //   ];
  // },
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "lmsbackend.techapsol.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
export default withNextIntl(nextConfig);

