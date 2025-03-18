/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi.upwardsae.com",
      },
    ],
  },
};

export default nextConfig;
