import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-full md:w-1/2 md:pr-24 mb-4 md:mb-0`};
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
        <Link className="leading-normal py-0" to={`/journal/${article.slug}`}>{article.title}</Link>
      </Title>
      <Description>
        {article.description}
      </Description>
      <PublishDate>{article.publishDate}</PublishDate>
    </Container>
)

export default PreviewArticle
