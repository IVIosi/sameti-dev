const website = require("./config/website")

module.exports = {
  siteMetadata: {
    title: website.title,
    description: website.description,
    author: website.author,
    url: website.url,
    image: website.logo,
    siteLanguage: website.siteLanguage,
    twitterUsername: website.twitter,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "minimal-ui",
        icon: website.favicon,
      },
    },
  ],
}
