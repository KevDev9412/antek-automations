import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/redesign-preview",
        destination: "/",
        permanent: true,
      },
      {
        source: "/redesign-preview/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
