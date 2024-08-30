/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["matricula-s3.s3.amazonaws.com"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //       permanent: true,
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:page*",
  //       destination: "/pages/:page*",
  //     },
  //   ];
  // },
};

export default nextConfig;
