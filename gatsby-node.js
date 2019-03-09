const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('src/templates/article-template.js')
    const portfolioEntry = path.resolve('src/templates/case-template.js')

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
            path: `/journal/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        const entries = result.data.allContentfulPortfolioEntry.edges
        entries.forEach((entry, index) => {
          createPage({
            path: `/portfolio/${entry.node.slug}/`,
            component: portfolioEntry,
            context: {
              slug: entry.node.slug,
            },
          })
        })
      })
    )
  })
}
