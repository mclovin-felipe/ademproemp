/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:page*",
        destination: "/pages/:page*",
      },
    ];
  },
};

export default nextConfig;
