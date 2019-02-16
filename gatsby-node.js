const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const caseEntry = path.resolve('./src/templates/case-entry.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulPortfolioEntry {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulSettings(filter: { contentful_id: { eq: "4YFMbGrvKsFO9xnO8KUzFz" } }) {
	          	edges {
                node {
                  tagline
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })

        const cases = result.data.allContentfulPortfolioEntry.edges
        cases.forEach((post, index) => {
          createPage({
            path: `/portfolio/${post.node.slug}/`,
            component: caseEntry,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
