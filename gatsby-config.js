module.exports = {
  siteMetadata: {
    title: `Mostafa Sameti - Front-end Developer`,
    description: `Mostafa Sameti Personal Website`,
    author: `Mostafa Sameti`,
    url: "https://www.sameti.dev",
    image: "/src/static/favicon.png",
    twitterUsername: "@mostafa_sameti",
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
  ],
}
