/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  env: {
    MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI,
    MONGODB_DB: process.env.NEXT_PUBLIC_MONGODB_DB,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL
  }
}


module.exports = nextConfig;
