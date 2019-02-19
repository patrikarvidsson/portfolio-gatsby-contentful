import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-full md:w-1/2 mb-8 md:mb-12 text-center`};
`
const Image = styled(Img)`
  ${tw`object-cover mb-4 rounded-sm w-full`};
`
const Title = styled.h3`
  ${tw`leading-normal font-sans font-semibold py-0 my-3 text-xl`};
`
const Description = styled.p`
  ${tw`my-2 lg:mx-20 text-basey`};
`
const PublishDate = styled.p`
  ${tw`my-2 text-black`};
`

const PreviewCase = ({ entry }) => (
    <Container>
      <Image alt={entry.title} title={entry.title} fluid={entry.heroImage.fluid} />
      <Title>
        <Link className="leading-normal py-0" to={`/portfolio/${entry.slug}`}>{entry.clientName}</Link>
      </Title>
      <Description>
        {entry.description}
      </Description>
      <PublishDate>{entry.publishDate}</PublishDate>
    </Container>
)

export default PreviewCase
