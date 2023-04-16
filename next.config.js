/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mall.industry.siemens.com',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
