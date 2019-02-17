import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'react-emotion'

const Hero = styled.div`
  ${tw`w-3/4 my-24 flex items-center`};
`
const Title = styled.h1`
  ${tw`text-4xl lg:text-5xl`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl`};
`

class IndexPage extends React.Component {
  render() {
    const [siteSettings] = get(this, 'props.data.allContentfulSettings.edges')
    return (
      <Layout>
        <Hero>
          <div>
            <Title>{siteSettings.node.tagline}</Title>
            <Subline>{siteSettings.node.subline} <a href="mailto:hello@patrikarvidson.com">Send me an e-mail!</a></Subline>
          </div>
        </Hero>
      </Layout>
    )
  }
}

export default IndexPage


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
