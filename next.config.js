/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "src/styles/abstracts/index.scss";`,
  }
}

module.exports = nextConfig
