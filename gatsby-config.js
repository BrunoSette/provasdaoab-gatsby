module.exports = {
  siteMetadata: {
    title: `Provas da OAB`,
    description: `Material completo para você passar na OAB de uma vez por todas!`,
    author: `Bruno Sette`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `provasdaoab.com.br`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `provasdaoab.com.br`,
              protocol: `https`,
              maxWidth: 650,
              wrapperStyle: ``,
              postTypes: ["post", "page"],
              backgroundColor: `white`,
              withWebp: false, // enable WebP files generation
            },
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
