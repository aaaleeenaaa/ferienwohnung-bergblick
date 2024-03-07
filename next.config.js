const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/appartment": { page: "/appartment" },
      "/arrival": { page: "/arrival" },
      "/contact": { page: "/contact" },
      "/legaldisclosure": { page: "/legaldisclosure" },
      "/prices": { page: "/prices" },
      "/privacystatement": { page: "/privacystatement" },
      "/surroundings": { page: "/surroundings" },
    };
  },
};

module.exports = nextConfig;
