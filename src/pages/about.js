import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import Layout from '../components/layout'

const Wrapper = styled.div`
  ${tw`w-full lg:w-3/4 xl:w-1/2 mt-12 md:mt-24 flex items-center mx-auto`};
`
const Title = styled.h1`
  ${tw`text-3xl md:text-5xl text-black`};
`
const Body = styled.div`
  ${tw`text-lg`};
`
class AboutPage extends React.Component {
  render() {
    const [aboutHeadline] = get(this, 'props.data.allContentfulAbout.edges')
    const [aboutBody] = get(this, 'props.data.allContentfulAboutBodyTextNode.edges')
    return (
      <Layout>
        <SEO
          title="About Patrik, Interdisciplinary interaction designer"
          description="Patrik is an interdisciplinary designer living in Gothenburg, Sweden. He helps clients reimagine, prototype and design solutions for human interaction problems."
          keywords={[`design`, `blog`, `ui`, `ux`, `gatsby`, `react`]}
        />
        <Wrapper>
          <div>
            <Title>{aboutHeadline.node.headline}</Title>
            <Body dangerouslySetInnerHTML={{__html: aboutBody.node.childMarkdownRemark.html}} />
          </div>
        </Wrapper>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulAbout {
      edges {
        node {
          headline
        }
      }
    }
    allContentfulAboutBodyTextNode {
      edges {
        node {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
