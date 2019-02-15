import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from '../components/SEO/SEO';

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [aboutHeadline] = get(this, 'props.data.allContentfulAbout.edges')
    const [aboutBody] = get(this, 'props.data.allContentfulAboutBodyTextNode.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <div className="w-3/5 mx-auto py-16 mt-8">
            <h2 className="text-heading font-semibold text-semibold text-4xl lg:text-5xl">{aboutHeadline.node.headline}</h2>
            <div className="text-lg md:text-xl" dangerouslySetInnerHTML={{__html: aboutBody.node.childMarkdownRemark.html}}>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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

