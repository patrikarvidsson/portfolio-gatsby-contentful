import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'


class CaseEntryTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPortfolioEntry')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <article>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <header className="w-2/3 mx-auto text-center mb-12">
            <div className="font-sans uppercase font-semibold text-sm tracking-loose mb-6">
                {post.tags.map(tag => (
                  <span className="mb-0" key={tag}>
                    {tag}
                  </span>
                ))}
                &nbsp;·&nbsp;
              {post.concept === true && <span className="text-red">Concept</span>}
            </div>
            <h1 className="text-4xl md:text-5xl">{post.title}</h1>
            <p className="text-grey-dark font-sans">
              {post.publishDate}
            </p>
          </header>
          <div className="mb-12">
            <Img className="rounded" alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div className="w-2/3 mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </article>
      </Layout>
    )
  }
}

export default CaseEntryTemplate

export const pageQuery = graphql`
  query CaseEntryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPortfolioEntry(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      concept
      tags
      heroImage {
        fluid(maxWidth: 1800, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
