import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Container = styled.article`
  ${tw`w-full py-4 border-t-0 border-l-0 border-r-0 border-b border-solid border-grey-light flex items-center flex-wrap`};
`
const TextWrapper = styled.div`
  ${tw`w-full xl:w-2/3 pr-16`};
`
const Title = styled.h3`
  ${tw`leading-normal py-0 my-2 text-xl font-sans font-semibold`};
`
const Anchor = styled(Link)`
  ${tw`leading-normal py-0 my-3`};
`
const Description = styled.p`
  ${tw`my-2`};
`
const PublishDate = styled.p`
  ${tw`my-2 text-black`};
`
const ImageWrapper = styled.div`
  ${tw`w-full xl:w-1/3`};
`
const Image = styled(Img)`
  ${tw`rounded`};
`

const PreviewArticle = ({ article }) => (
  <Container>
    <TextWrapper>
      <Title>
        <Anchor to={`/journal/${article.slug}`}>{article.title}</Anchor>
      </Title>
      <Description>{article.description}</Description>
      <PublishDate>{article.publishDate}</PublishDate>
    </TextWrapper>
    <ImageWrapper>
      <Image
        alt={article.title}
        title={article.title}
        fluid={article.heroImage.fluid}
      />
    </ImageWrapper>
  </Container>
)

export default PreviewArticle
