// next.config.js
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.themealdb.com/api/:path*', // Replace with your actual API base URL
      },
    ];
  },
};
