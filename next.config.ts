import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://link.receptyv.ca https://link.msgsndr.com https://www.youtube.com https://s.ytimg.com; style-src 'self' 'unsafe-inline' https://www.youtube.com; img-src 'self' data: blob: https://www.youtube.com https://i.ytimg.com; font-src 'self'; connect-src 'self' https://backend.leadconnectorhq.com https://www.youtube.com; frame-src https://link.receptyv.ca https://link.msgsndr.com https://www.youtube.com 'self'; frame-ancestors 'self' https://teraseed.landseed.ca https://landseed.ca;",
  },
  {
    key: 'Access-Control-Allow-Credentials',
    value: 'true',
  },
  {
    key: 'Access-Control-Allow-Origin',
    // Replace with your domain
    value: '*',
  },
  {
    key: 'Access-Control-Allow-Methods',
    value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  },
  {
    key: 'Access-Control-Allow-Headers',
    value: 'X-CSRF-Token, X-Requested-With, Accept, Accept- Version, Content - Length, Content - MD5, Content - Type, Date, X - Api - Version',
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
