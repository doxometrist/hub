/** @type {import('next').NextConfig} */
const prodConfig = {
  // output: 'export',
  // basePath: "/hub",
  output: 'standalone',
  basePath: "",
  images: {
    unoptimized: true
  },
  experimental: {
    // serverActions: true
  }
}


const devConfig = {
  output: 'standalone',
  basePath: "",
};

const dev = process.env.NODE_ENV === 'development'
module.exports = dev ? devConfig : prodConfig;
