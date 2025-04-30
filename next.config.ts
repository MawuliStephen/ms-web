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
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "prod.bring.com",
        hostname: "prod.mawulistephen.com",

        pathname: "/uploads/**", // Only allow /uploads/ path
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/images/**", // Only allow /images/ path
      },
      {
        protocol: "https",
        hostname: "mawulistephen.com",
        // pathname: "/assets/**", // Only allow /assets/ 
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;



// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['prod.mawulistephen.com', 'localhost', 'mawulistephen.com'], // Corrected domains
//   },
// };

// export default nextConfig;