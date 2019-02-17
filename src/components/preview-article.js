import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-1/2 pr-24`};
`
const Title = styled.h3`
  ${tw`leading-normal py-0 my-3 text-2xl`};
`
const Description = styled.p`
  ${tw`my-2 text-base`};
`
const PublishDate = styled.p`
  ${tw`my-2`};
`

const PreviewArticle = ({ article }) => (
    <Container>
      <Title>
        <Link className="leading-normal py-0" to={`/blog/${article.slug}`}>{article.title}</Link>
      </Title>
      <Description>
        {article.description.description}
      </Description>
      <PublishDate>{article.publishDate}</PublishDate>
    </Container>
)

export default PreviewArticle
