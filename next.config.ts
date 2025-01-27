import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com", 
      "aceternity.com",

    ], // Add external image domains here
  },
  /* other config options here */
};

export default nextConfig;
