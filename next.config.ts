import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-4f4a2eaf8dee4b5796d383446a4d350a.r2.dev',
      },
    ],
  },
};

export default nextConfig;
