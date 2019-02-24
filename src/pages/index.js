import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'react-emotion'
import SEO from '../components/seo'

import PreviewCase from '../components/preview-case'

const Hero = styled.div`
  ${tw`w-full md:max-w-md xl:max-w-lg md:h-screen-60 flex items-center my-10 md:my-0`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-5xl text-black font-normal my-4 md:my-6`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl w-full md:w-2/3`};
`
const Section = styled.section`
  ${tw``};
`
const Articles = styled.div`
  ${tw`flex flex-wrap my-4 lg:-mx-16 font-sans text-base text-grey`};
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
    allContentfulPortfolioEntry(sort: { fields: [publishDate], order: DESC }, limit: 6, filter: { promoteCase: {ne: false}}) {
      edges {
        node {
          title
          clientName
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1200, maxHeight: 875, resizingBehavior: FILL) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          clientColor
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
