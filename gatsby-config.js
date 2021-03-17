module.exports = {
  siteMetadata: {
    title: `Gminny Ośrodek Kultury i Sportu w Pilniku`,
    description: `Bieżące informacje z działaności Gminnnego Ośrodka Kultury i Sportu w Pilniku`,
    author: `NETTOM`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/data/articles`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-remark-responsive-iframe`,
    `gatsby-remark-embed-video`,
    `gatsby-plugin-react-helmet`,
  ],
}
