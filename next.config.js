/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_UA_ID ?? '',
  },
};

module.exports = nextConfig;
