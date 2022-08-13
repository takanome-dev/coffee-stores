/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'fastly.4sqi.net'],
  },
  env: {
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
  },
};

module.exports = nextConfig;
