import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../images/logo-black.svg'

const Container = styled.section`
  ${tw`container px-6 md:px-0 pt-12 pb-8 md:py-16 bg-grey-lightest text-center lg:text-left mt-12 md:mt-24`};
`
const Inner = styled.div`
  ${tw`flex justify-between w-full lg:w-4/5 xl:w-2/3 mx-auto flex-wrap md:flex-no-wrap`};
`
const Row = styled.div`
  ${tw`w-full xl:w-1/4 list-reset mb-6 lg:md-0`};
`
const ItemTitle = styled.div`
  ${tw`font-bold mb-1`};
`
const Item = styled.div`
  ${tw``};
`
const LogoLink = styled(Link)`
  ${tw`no-underline text-inherit shadow-none hover:bg-transparent`};
`
const LogoImage = styled.img`
  ${tw`h-16 w-16 m-0`};
`

const PreFooter = () => (
  <Container id="prefooter">
    <Inner>
      <Row>
        <LogoLink to="/">
          <LogoImage src={logo} alt="Logo" />
        </LogoLink>
      </Row>
      <Row>
        <ItemTitle>Patrik Arvidsson</ItemTitle>
        <Item>UI/UX designer</Item>
        <Item>+46 734 15 60 10</Item>
        <Item>
          <a
            alt="Send me an e-mail"
            title="Send me an e-mail"
            href="mailto:hello@patrikarvidsson.com"
          >
            hello@patrikarvidsson.com
          </a>
        </Item>
      </Row>
      <Row>
        <ItemTitle>Patrik Arvidsson AB</ItemTitle>
        <Item>Kvillegatan 37</Item>
        <Item>41708 Gothenburg</Item>
        <Item>Sweden</Item>
      </Row>
      <Row>
        <ItemTitle>Social media</ItemTitle>
        <Item>
          <a
            alt="Facebook"
            title="Facebook"
            href="https://facebook.com/patrikarvidsson"
          >
            facebook.com/patrikarvidsson
          </a>
        </Item>
        <Item>
          <a
            alt="Twitter"
            title="Twitter"
            href="https://twitter.com/patrikarvidsson"
          >
            twitter.com/patrikarvidsson
          </a>
        </Item>
        <Item>
          <a
            alt="Instagram"
            title="Instagram"
            href="https://instagram.com/arvdsn"
          >
            instagram.com/arvdsn
          </a>
        </Item>
        <Item>
          <a
            alt="LinkedIn"
            title="LinkedIn"
            href="https://linkedin.com/in/patrikarvidsson"
          >
            linkedin.com/in/patrikarvidsson
          </a>
        </Item>
      </Row>
    </Inner>
  </Container>
)

export default PreFooter
