/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // remotePatterns: [
    //   {
    //   },
    // ],
    formats: ['image/avif', "image/webp"],
  }
};

export default nextConfig;
