/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //       permanent: true,
  //     },
  //   ];
  // },
  async rewrites() {
    // this.basePath = "/public";

    return [
      {
        source: "/:page*",
        destination: "/public/pages/:page*",
      },
      // {
      //   source: "/",
      //   destination: "/home",
      //   // permanent: true,
      // },
    ];
  },
};

export default nextConfig;
