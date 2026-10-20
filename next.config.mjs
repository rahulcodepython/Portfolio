/** @type {import('next').NextConfig} */
const nextConfig = {
    // Fully static build in `out/`, served by Cloudflare Pages
    output: "export",
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
}

export default nextConfig
