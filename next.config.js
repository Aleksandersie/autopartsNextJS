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
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en',
  // },
}

module.exports = nextConfig
