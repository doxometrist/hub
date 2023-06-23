/** @type {import('next').NextConfig} */
const prodConfig = {
  output: 'export',
  basePath: "/hub",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

const devConfig = {
  output: 'standalone',
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const dev = process.env.NODE_ENV === 'development'
module.exports = dev ? devConfig : prodConfig;
