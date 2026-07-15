import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Initialize Velite in the Webpack build step
  webpack: (config) => {
    config.plugins.push(new (require('velite/webpack/plugin'))());
    return config;
  },
};

export default nextConfig;