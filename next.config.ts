import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the local review surface free of the development badge; build errors
  // remain visible in the terminal and browser console.
  devIndicators: false,
  // Pin the workspace root to this project. Without this, Turbopack walks up
  // looking for lockfiles and finds an unrelated package-lock.json at the
  // user's home directory (outside this git repo), which misdetects the root.
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-the-founder", permanent: true },
      { source: "/get-involved", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
