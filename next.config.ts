// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - The type definition may not include reactCompiler yet
    reactCompiler: true,
  } as any, // The 'as any' bypasses the strict type check for the experimental block
};

export default nextConfig;