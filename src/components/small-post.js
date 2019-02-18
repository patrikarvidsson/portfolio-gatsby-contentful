import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

const Container = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 pr-8 mb-6 md:mb-12`};
`
const Image = styled(Img)`
  ${tw`object-cover mb-6 rounded`};
`
const Title = styled.h3`
  ${tw`leading-normal py-0 md:mr-10 my-3 text-2xl`};
`
const Description = styled.p`
  ${tw`my-2 text-base md:mr-16`};
`
const Tags = styled.p`
  ${tw`my-2 font-semibold tracking-wide uppercase text-red font-sans text-xs`};
`

const SmallPost = ({ post }) => (
    <Container>
      <Image alt="" fluid={post.heroImage.fluid} />
      <Title>
        <Link className="leading-normal py-0" to={`/journal/${post.slug}`}>{post.title}</Link>
      </Title>
      <Description>
        {post.description}
      </Description>
      <Tags>{post.tags}</Tags>
    </Container>
)

export default SmallPost
