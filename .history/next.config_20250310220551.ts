// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "prod.mawulistephen.com",
//         pathname: "/uploads/**", // Only allow images from /uploads/ path
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         pathname: "/images/**", // Only allow images from /images/ path
//       },
//       {
//         protocol: "https",
//         hostname: "mawulistephen.com",
//         pathname: "/assets/**", // Only allow images from /assets/ path
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['prod.mawulistephen.com', 'localhost', 'mawulistephen.com'], // Corrected domains
  },
};

export default nextConfig;