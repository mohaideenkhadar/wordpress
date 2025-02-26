/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://localhost/wordpress-6.7.2/graphql",
      type: {
        Post: {
          limit: NODE_ENV === `development` ? 100 : 5000,
        },
        MediaItem: {
          localFile: {
            requestConcurrency: 10,
          },
        },
      },
      html: {
        useGatsbyImage: false,
      },
    },
  }, 
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"
  ],
};