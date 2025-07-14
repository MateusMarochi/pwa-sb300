import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/apple-touch-icon.png',
        destination: '/icon-180x180.png',
      },
      {
        source: '/apple-touch-icon-precomposed.png',
        destination: '/icon-180x180.png',
      },
    ]
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
