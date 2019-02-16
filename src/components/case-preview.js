import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div className="text-center">
    <Img className="object-cover rounded" alt="" fluid={article.heroImage.fluid} />
    <h3 className="text-2xl font-medium mt-6 mb-0">
      <Link className="leading-normal py-0" to={`/portfolio/${article.slug}`}>{article.clientName}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
      className="my-2 text-base font-sans text-grey-darker px-24"
    />
    <p>{article.publishDate}</p>
  </div>
)
