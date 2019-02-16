import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div className="flex items-center w-3/4">
    <div className="w-48 h-34">
      <Img alt="" fluid={article.heroImage.fluid} />
    </div>
    <div className="ml-4">
      <h3 className="text-3xl font-medium mb-0">
        <Link className="shadow-none py-0" to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
        className="my-2 text-base text-grey-darker"
      />
      <p className="my-1">{article.publishDate}</p>
    </div>
  </div>
)
