import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'react-emotion'
import SEO from '../components/seo'

import PreviewArticle from '../components/preview-article'
import PreviewCase from '../components/preview-case'

const Hero = styled.div`
  ${tw`w-full md:max-w-md my-8 md:mt-12 md:mb-20 lg:mt-24 lg:mb-32 lg:ml-20 flex items-center`};
`
const Hello = styled.div`
  ${tw`text-4xl md:text-5xl font-sans text-black font-black`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-4xl text-black font-normal my-4 md:my-8`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl w-full md:w-2/3`};
`
const Section = styled.section`
  ${tw``};
`
const SectionTitle = styled.h2`
  ${tw`text-bold font-sans font-black tracking-wide text-sm uppercase`};
`
const Articles = styled.div`
  ${tw`flex flex-wrap my-4 font-sans text-base text-grey`};
`

class IndexPage extends React.Component {
  render() {
    const [siteSettings] = get(this, 'props.data.allContentfulSettings.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const cases = get(this, 'props.data.allContentfulPortfolioEntry.edges')
    return (
      <Layout>
        <SEO
          title="Patrik Arvidsson, Interdisciplinary interaction designer"
          description="Patrik is an interdisciplinary designer living in Gothenburg, Sweden. He helps clients reimagine, prototype and design solutions for human interaction problems."
          keywords={[`design`, `blog`, `ui`, `ux`, `gatsby`, `react`]}
        />
        <Hero>
          <div>
            <Hello>Hello,</Hello>
            <Title
            dangerouslySetInnerHTML={{
              __html: siteSettings.node.headline.childMarkdownRemark.html,
            }}
            />
            <Subline
            dangerouslySetInnerHTML={{
              __html: siteSettings.node.subline.childMarkdownRemark.html,
            }}
            />
          </div>
        </Hero>
        {/*<Section id="latestArticles">
          <SectionTitle>Latest journal articles</SectionTitle>
          <Articles>
            {posts.map(({ node }) => {
              return (
                <PreviewArticle article={node} key={node.slug} />
              )
            })}
          </Articles>
          </Section>*/}
        <Section id="latestWork">
          {/*<SectionTitle>Recent cases</SectionTitle>*/}
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
          headline {
            childMarkdownRemark {
              html
            }
          }
          subline {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
