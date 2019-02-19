import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-full py-4 border-t-0 border-l-0 border-r-0 border-b border-solid border-grey-light`};
`
const Title = styled.h3`
  ${tw`leading-normal py-0 my-2 text-xl font-sans font-semibold`};
`
const Anchor = styled(Link)`
  ${tw`leading-normal py-0 my-3`};
`
const Description = styled.p`
  ${tw`my-2 text-base`};
`
const PublishDate = styled.p`
  ${tw`my-2 text-black`};
`

const PreviewArticle = ({ article }) => (
    <Container>
      <Title>
        <Anchor to={`/journal/${article.slug}`}>{article.title}</Anchor>
      </Title>
      <Description>
        {article.description}
      </Description>
      <PublishDate>{article.publishDate}</PublishDate>
    </Container>
)

export default PreviewArticle
