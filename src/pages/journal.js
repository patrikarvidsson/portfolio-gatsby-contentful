import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import SmallPost from '../components/article-preview'

const Wrapper = styled.div`
  ${tw`w-full lg:w-3/4 xl:w-2/3 py-10 lg:py-20 mx-auto`};
`
const Body = styled.div`
  ${tw`border-t border-l-0 border-r-0 border-b-0 border-solid border-grey-light mt-10`};
`
const Title = styled.h2`
  ${tw`text-black font-normal text-4xl md:text-5xl`};
`
const Subtitle = styled.span`
  ${tw`text-lg`};
`

class JournalIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout>
        <SEO
          title="Journal - Patrik Arvidsson"
          description="A collection of articles about design, workflows and other things."
          keywords={[`design`, `blog`, `ui`, `ux`, `gatsby`, `react`]}
        />
        <Wrapper>
          <header>
            <Title>Journal</Title>
            <Subtitle>A collection of articles about design, workflows and other things.</Subtitle>
          </header>
          <Body>
            {posts.map(({ node }) => {
              return (
                <SmallPost article={node} key={node.slug} />
              )
            })}
          </Body>
        </Wrapper>
      </Layout>
    )
  }
}

export default JournalIndex

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
