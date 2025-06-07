import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: '',
                pathname: '/rahulcodepython/file-storage/main/**',
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
