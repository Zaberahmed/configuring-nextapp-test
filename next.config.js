/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true, //statically type check routes
  },
  logging: {
    //logging the full api url when data is fetched and also show cache hit or miss
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
