/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: { // fetch 관련 옵션 ? 
    fetches: {
      fullUrl: true,
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
        port: '',
        pathname: '/cdn/**'
      }
    ],

    formats: ['image/avif', "image/webp"],
  }
};

export default nextConfig;
