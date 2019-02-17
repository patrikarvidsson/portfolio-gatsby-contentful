import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'react-emotion'

import PreviewArticle from '../components/preview-article'
import PreviewCase from '../components/preview-case'

const Hero = styled.div`
  ${tw`w-full xl:w-3/4 mt-12 mb-16 md:my-24 flex items-center`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-5xl text-black`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl`};
`
const Section = styled.section`
  ${tw``};
`
const SectionTitle = styled.header`
  ${tw`text-black font-sans font-semibold tracking-wide text-sm uppercase`};
`
const Articles = styled.div`
  ${tw`flex flex-wrap my-4`};
`

class IndexPage extends React.Component {
  render() {
    const [siteSettings] = get(this, 'props.data.allContentfulSettings.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const cases = get(this, 'props.data.allContentfulPortfolioEntry.edges')
    return (
      <Layout>
        <Hero>
          <div>
            <Title>{siteSettings.node.tagline}</Title>
            <Subline>{siteSettings.node.subline} <a href="mailto:hello@patrikarvidson.com">Send me an e-mail!</a></Subline>
          </div>
        </Hero>
        <Section id="latestArticles">
          <SectionTitle>Recent articles</SectionTitle>
          <Articles>
            {posts.map(({ node }) => {
              return (
                <PreviewArticle article={node} key={node.slug} />
              )
            })}
          </Articles>
        </Section>
        <Section id="latestWork">
          <SectionTitle>Recent cases</SectionTitle>
          <Articles>
            {cases.map(({ node }) => {
              return (
                <PreviewCase entry={node} key={node.slug} />
              )
            })}
          </Articles>
        </Section>
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
          description
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
        description
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
