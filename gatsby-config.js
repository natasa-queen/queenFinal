/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title: "Queen Kozmetički salon",
    description: "Kozmetički salon Queen, Prnjavor",
    author: "@natasa",
    image: `/images/icon.png`,
    siteUrl: `https://queen-kozmetickisalon.netlify.app`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-static-cms`,


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Queen Kozmetički salon`,
        short_name: `Queen`,
        description: `Kozmetički salon Queen, Prnjavor`,
        lang: `bs`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#fff`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `md`,
        // Path to the directory
        path: `${__dirname}/content`,
      },
    },



  ],
}
