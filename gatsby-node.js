/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    const portfolioEntryTemplate = path.resolve('src/templates/portfolio-entry.js')
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(limit: 1000) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulPortfolioEntry(limit: 1000) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/journal/${post.node.slug}/`,
            component: blogPostTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })

        const entries = result.data.allContentfulPortfolioEntry.edges
        entries.forEach((entry, index) => {
          createPage({
            path: `/portfolio/${entry.node.slug}/`,
            component: portfolioEntryTemplate,
            context: {
              slug: entry.node.slug
            },
          })
        })
      })
    )
  })
}

