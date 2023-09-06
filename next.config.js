/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    env: {
        MONGODB_URL: process.env.MONGODB_URL,
        DOMAIN_NAME: process.env.DOMAIN_NAME,
    }
}

module.exports = nextConfig
