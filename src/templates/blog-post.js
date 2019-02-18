import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Hero = styled.div`
  ${tw`w-full xl:w-3/4 mt-12 mb-10 md:my-24 flex items-center`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-5xl text-black`};
`
const Subline = styled.div`
  ${tw`text-lg md:text-xl`};
`
const Article = styled.article`
  ${tw``};
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <Layout>
        <Hero>
          <div>
            <Title>Title</Title>
            <Subline>Unlinked projects are not ready to be presented yet for various reasons. Contact me for more information. Design studies and explorations can be found in my <a href="/journal">journal</a>.</Subline>
          </div>
        </Hero>
        <Article>
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery {
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
