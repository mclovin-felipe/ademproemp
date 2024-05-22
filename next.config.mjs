/** @type {import('next').NextConfig} */
const nextConfig = {
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
