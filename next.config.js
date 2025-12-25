/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/public/assets/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'production' ?
             "default-src 'self' https:; script-src 'self' https://www.google.com https://www.gstatic.com https://translate.googleapis.com https://translate.google.com; frame-src 'self' https://www.google.com https://translate.google.com; style-src 'self' https://fonts.googleapis.com https://translate.google.com https://translate.googleapis.com https://www.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://www.gstatic.com https://www.google.com https://translate.google.com https://translate.googleapis.com http://translate.google.com; connect-src 'self' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com http://translate.google.com; worker-src 'self' blob:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests;"
              : "default-src 'self' 'unsafe-inline' 'unsafe-eval' https:;`",
          }
        ],
      }
    ]
  }
}

module.exports = nextConfig