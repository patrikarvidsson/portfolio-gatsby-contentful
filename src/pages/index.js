import React from 'react'
import { Link } from "gatsby"
import styles from "./index.module.css"

import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import CasePreview from '../components/case-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [siteSettings] = get(this, 'props.data.allContentfulSettings.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const cases = get(this, 'props.data.allContentfulPortfolioEntry.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <div className="w-3/4 my-24 flex items-center">
            <div>
              <h1 className="font-serif font-semibold leading-tight text-semibold text-black text-4xl lg:text-5xl">{siteSettings.node.tagline}</h1>
              <div className="text-lg md:text-xl">{siteSettings.node.subline} <a href="mailto:hello@patrikarvidson.com">Send me an e-mail!</a></div>
            </div>
          </div>
          <section className="latest-articles">
            <h2 className="font-sans font-semibold tracking-wide text-black text-sm uppercase">Recent articles</h2>
            <ul className="list-reset m-0 flex flex-wrap">
              {posts.map(({ node }) => {
                return (
                  <li className="w-1/2 pr-16" key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </section>
          <section className={styles.latestWork}>
            <h2 className="font-sans font-semibold tracking-wide text-black text-sm uppercase">Recent projects</h2>
            <ul className="list-reset -mx-12 my-0 flex flex-wrap">
              {cases.map(({ node }) => {
                return (
                  <li className="w-1/2 pr-12" key={node.slug}>
                    <CasePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 2) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPortfolioEntry(sort: { fields: [publishDate], order: DESC }, limit: 6) {
      edges {
        node {
          title
          clientName
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 800, maxHeight: 560, resizingBehavior: FILL) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulSettings(filter: { contentful_id: { eq: "4YFMbGrvKsFO9xnO8KUzFz" } }) {
      edges {
        node {
          tagline
          subline
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
        }
      }
    }
  }
`
