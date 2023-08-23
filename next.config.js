/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  images: {
    domains: [
      "images.pexels.com",
      "scontent.fdad3-5.fna.fbcdn.net",
      ".com",
      "googleusercontent.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "scontent.fdad3-5.fna.fbcdn.net",
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
