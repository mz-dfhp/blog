/** @type {import('next').NextConfig} */
import UnoCSS from '@unocss/webpack'
console.log(12121)

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(UnoCSS())
    return config
  }
}

export default nextConfig
