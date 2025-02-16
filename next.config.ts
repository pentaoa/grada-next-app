import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ihs-1317591693.cos.ap-guangzhou.myqcloud.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
