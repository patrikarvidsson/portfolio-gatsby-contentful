import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled.footer`
  ${tw`py-12 bg-grey-lightest text-center`};
`
const Inner = styled.div`
  ${tw`opacity-75`};
`

const Header = ({ siteTitle }) => (
    <Container>
      <Inner>
        Site built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://tailwindcss.com/">Tailwind</a> and beer. Content served from <a href="https://www.contentful.com/">Contentful</a>.
      </Inner>
    </Container>
)

export default Header
