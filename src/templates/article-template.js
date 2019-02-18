import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from 'react-emotion'

const Article = styled.article`
  ${tw``};
`
const Header = styled.section`
  ${tw`w-full md:w-2/3 mx-auto text-center mb-16`};
`
const Tags = styled.div`
  ${tw`text-sm font-sans font-semibold tracking-wide uppercase`};
`
const Concept = styled.span`
  ${tw`text-red`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-5xl text-black my-4`};
`
const PublishDate = styled.div`
  ${tw``};
`
const Image = styled(Img)`
  ${tw`text-red mt-8 mb-16 rounded`};
`
const Content = styled.section`
  ${tw`md:px-48`};
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this, 'props.data.contentfulBlogPost')

    return (
      <Layout>
        <Article id="main">
          <Header>
            <Tags>
              {post.tags.map(tag => (
                <span className="mb-0" key={tag}>
                  {tag}
                </span>
              ))}
              {post.concept === true && <Concept>&nbsp;·&nbsp;Concept</Concept>}
            </Tags>
            <Title>{post.title}</Title>
            <PublishDate>{post.publishDate}</PublishDate>
          </Header>
          <Image alt={post.title} fluid={post.heroImage.fluid} />
          <Content
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      concept
      publishDate(formatString: "MMMM Do, YYYY")
      tags
      heroImage {
        fluid(maxWidth: 1200, resizingBehavior: SCALE) {
         ...GatsbyContentfulFluid_tracedSVG
        }
      }
      description
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
