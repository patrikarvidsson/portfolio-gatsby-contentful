import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-full md:w-1/2 md:px-4 mb-4 md:mb-0`};
`
const Image = styled(Img)`
  ${tw`object-cover mb-6 rounded`};
`
const Title = styled.h3`
  ${tw`leading-normal py-0 my-3 text-2xl`};
`
const Description = styled.p`
  ${tw`my-2 mx-20 text-base`};
`
const PublishDate = styled.p`
  ${tw`my-2`};
`

const PreviewCase = ({ entry }) => (
    <Container>
      <Image alt="" fluid={entry.heroImage.fluid} />
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
