/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:page*",
        destination: "/public/pages/:page*",
      },
    ];
  },
};

export default nextConfig;
