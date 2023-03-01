/** @type {import('next').NextConfig} */
import UnoCSS from '@unocss/webpack'

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(UnoCSS())
    return config
  }
}

export default nextConfig
