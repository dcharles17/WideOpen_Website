import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for Netlify static exports
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
