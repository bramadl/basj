/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "image.mux.com",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        pathname: "/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
