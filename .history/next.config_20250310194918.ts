import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['prod.mawulistephen.com', 'localhost', 'mawulistephen.com/api'], // Corrected domains
  },
};

export default nextConfig;