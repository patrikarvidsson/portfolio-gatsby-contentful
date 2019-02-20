import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import BlockRevealAnimation from 'react-block-reveal-animation';
import { useInView } from 'react-intersection-observer'

const Container = styled.div`
  ${tw`w-full flex flex-grow flex-wrap md:flex-no-wrap items-center mb-12`};
`

const TextWrapper = styled.div`
  ${tw`w-full md:w-2/5 lg:px-12`};
`
const Title = styled.h3`
  ${tw`leading-normal font-sans font-bold py-0 my-3 text-2xl lg:text-3xl`};
`
const Description = styled.p`
  ${tw`text-base my-3`};
`
const PublishDate = styled.p`
  ${tw`text-black my-3`};
`

const ImageWrapper = styled.div`
  ${tw`w-full md:w-3/5 block relative`};
`
const ImageWrapperInner = styled(BlockRevealAnimation)`
  ${tw`lg:w-3/4 xl:w-2/3 mx-auto block z-20`};
`
const ImageBackground = styled.div`
  ${tw`h-full w-full block absolute pin-t z-10 py-10`};
`
const ImageBackgroundInner = styled.div`
  ${tw`block h-full w-full bg-grey-lighter rounded`};
`
const Image = styled(Img)`
  ${tw`object-cover mb-4 rounded-sm w-full relative z-20 shadow-lg`};
`

const PreviewCase = ({ entry }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  })

  return (

    <div className="caseContainer" ref={ref}>
        <TextWrapper className="textWrapper">
          <Title>
            <Link className="leading-normal py-0" to={`/portfolio/${entry.slug}`}>{entry.clientName}</Link>
          </Title>
          <Description>
            {entry.description}
          </Description>
          <PublishDate>{entry.publishDate}</PublishDate>
        </TextWrapper>
        <ImageWrapper className="imageWrapper">

          {inView === true &&
           <ImageWrapperInner color={entry.clientColor} delay={0.4}>
             <Image alt={entry.title} title={entry.title} fluid={entry.heroImage.fluid} />
           </ImageWrapperInner>
          }
          <ImageBackground>
            <ImageBackgroundInner />
          </ImageBackground>
        </ImageWrapper>
    </div>
  )
}

export default PreviewCase
