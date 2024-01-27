/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "ferienwohnung-bergblick.vercel.app",
  generateRobotsTxt: true,
  build: "next build",
  postbuild: "next-sitemap",
};
