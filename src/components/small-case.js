import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 pr-8 mb-6`};
`
const Title = styled.h3`
  ${tw`leading-normal font-semibold font-sans py-0 my-2 text-2xl`};
`
const Description = styled.p`
  ${tw`my-2 text-base`};
`
const Tags = styled.p`
  ${tw`my-2 font-semibold tracking-wide uppercase text-red font-sans text-xs`};
`

const SmallCase = ({ entry }) => (
    <Container>
      <Title>
        <Link className="leading-normal py-0" to={`/portfolio/${entry.slug}`}>{entry.clientName}</Link>
      </Title>
      <Description>
        {entry.description}
      </Description>
      <Tags>{entry.tags}</Tags>
    </Container>
)

export default SmallCase
