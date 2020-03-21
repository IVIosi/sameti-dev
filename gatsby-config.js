module.exports = {
  siteMetadata: {
    title: `Mostafa Sameti Website`,
    description: `Mostafa Sameti Personal Website`,
    author: `mostafa-sameti`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
