import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jfltbluknvirjoizhavf.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/proposals/**',
      },
    ],
  },
}

export default nextConfig
