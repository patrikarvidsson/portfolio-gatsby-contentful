import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import Layout from '../components/layout'
import SmallPost from '../components/small-post'

const Hero = styled.div`
  ${tw`w-full xl:w-3/4 mt-12 mb-10 md:my-24 flex items-center`};
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
const Articles = styled.div`
  ${tw`flex flex-wrap my-4`};
`
class JournalPage extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout>
        <SEO
          title="Design journal"
          description="A collection of articles about design, workflows and other things."
          keywords={[`design`, `blog`, `ui`, `ux`, `gatsby`, `react`]}
        />
        <Hero>
          <div>
            <Title>Design journal</Title>
            <Subline>A collection of articles about design, workflows and other things.</Subline>
          </div>
        </Hero>
        <Section>
          <Articles>
            {posts.map(({ node }) => {
              return (
                <SmallPost post={node} key={node.slug} />
              )
            })}
          </Articles>
        </Section>
      </Layout>
    )
  }
}

export default JournalPage

export const pageQuery = graphql`
  query JournalQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit: 6) {
      edges {
        node {
          title
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
  }
`
