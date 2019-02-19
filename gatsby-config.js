let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

const siteUrl = process.env.URL || process.env.DEPLOY_URL || `https://patrikarvidsson.com`

module.exports = {
  siteMetadata: {
    title: 'Patrik Arvidsson',
    author: 'Patrik Arvidsson',
    description: 'Interdisciplinary designer living in Gothenburg, Sweden. I help clients reimagine, prototype and design solutions for human interaction problems.',
    siteUrl,
    social: {
      twitter: 'patrikarvidsson',
    }
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true,
              sizeByPixelDensity: true,
              wrapperStyle: 'margin-left:-10%!important;min-width:120%;border-radius:0.25rem;',
            },
          },
        ],
      },
    },
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Patrik Arvidsson',
        short_name: 'Patrik Arvidsson',
        start_url: '/',
        background_color: '#3273dc',
        theme_color: '#3273dc',
        display: 'minimal-ui',
        icon: 'src/images/logo-blue.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/category/*", `/tag/*`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-56CKRTV",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://patrikarvidsson.com`,
      },
    },

    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    //{
    //  resolve: `gatsby-plugin-hotjar`,
    //  options: {
    //    id: `1178731`,
    //  },
    //},
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.css": [
            "Cache-Control: public, max-age=31536000, immutable",
          ],
          "/*.js": [
            "Cache-Control: public, max-age=31536000, immutable",
          ]
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
