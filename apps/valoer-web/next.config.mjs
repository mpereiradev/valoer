/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@valoer/design-tokens"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
