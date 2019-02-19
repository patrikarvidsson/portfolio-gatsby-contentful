import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import BlockRevealAnimation from 'react-block-reveal-animation';

const Container = styled.div`
  ${tw`w-full flex flex-grow items-center mb-12`};
`

const TextWrapper = styled.div`
  ${tw`w-1/3 pr-12 px-12`};
`
const Title = styled.h3`
  ${tw`leading-normal font-sans font-black py-0 my-4 text-2xl`};
`
const Description = styled.p`
  ${tw`text-base my-4`};
`
const PublishDate = styled.p`
  ${tw`text-black my-4`};
`

const ImageWrapper = styled.div`
  ${tw`w-2/3 block relative`};
`
const ImageWrapperInner = styled(BlockRevealAnimation)`
  ${tw`mx-24 block z-20`};
`
const ImageBackground = styled.div`
  ${tw`h-full w-full block absolute pin-t z-10 py-10`};
`
const ImageBackgroundInner = styled.div`
  ${tw`block h-full w-full bg-grey-lighter`};
`
const Image = styled(Img)`
  ${tw`object-cover mb-4 rounded-sm w-full relative z-20 shadow-lg`};
`

const PreviewCase = ({ entry }) => (
  <Container>
    <TextWrapper>
      <Title>
        <Link className="leading-normal py-0" to={`/portfolio/${entry.slug}`}>{entry.clientName}</Link>
      </Title>
      <Description>
        {entry.description}
      </Description>
      <PublishDate>{entry.publishDate}</PublishDate>
    </TextWrapper>
    <ImageWrapper className="imageWrapper">
      <ImageWrapperInner>
        <Image alt={entry.title} title={entry.title} fluid={entry.heroImage.fluid} />
      </ImageWrapperInner>
      <ImageBackground>
        <ImageBackgroundInner />
      </ImageBackground>
    </ImageWrapper>
  </Container>
)

export default PreviewCase
