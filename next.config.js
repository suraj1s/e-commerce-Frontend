/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: {
  //   domains: ["127.0.0.1:8000"]
  // },
  experimental: {
    outputStandalone: true
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  generateEtags: false,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [{ loader: "@svgr/webpack", options: { icon: true } }]
      }
    )
    return config
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ]
  }
}

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors https://magic.store"
  },
  {
    key: "Cache-Control",
    value: "no-store"
  }
]

module.exports = nextConfig
