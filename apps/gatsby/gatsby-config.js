const path = require('path');

const assetsLibPath = path.resolve(__dirname, '../../', 'libs/assets');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `gatsby`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `local-images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shared-images`,
        path: path.resolve(assetsLibPath, 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(assetsLibPath, 'images/logo.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@nx-gatsby/assets': assetsLibPath,
      },
    },
  ],
};
