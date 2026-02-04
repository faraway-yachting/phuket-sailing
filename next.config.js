/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
    ],
  },
};

module.exports = nextConfig;
