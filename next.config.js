/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'deo.shopeemobile.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cf.shopee.vn',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'down-vn.img.susercontent.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
