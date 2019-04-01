import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import logo from '../images/logo-black.svg'
import webring from '../images/icon-webring.svg'

const Container = styled.header`
  ${tw``};
`
const HeaderBar = styled.div`
  ${tw`pt-6 md:pt-12 px-6 md:px-6 lg:px-20 flex items-center justify-between w-full`};
`
const LogoLink = styled(Link)`
  ${tw`no-underline text-inherit shadow-none hover:bg-transparent`};
`
const LogoImage = styled.img`
  ${tw`h-16 w-16 m-0`};
`
const WebringLink = styled('a')`
  ${tw`no-underline text-inherit shadow-none hover:bg-transparent`};
`
const Webring = styled.img`
  ${tw`h-6 w-6 m-0 hover:bg-transparent shadow-none`};
`
const Nav = styled.nav`
  ${tw``};
`
const NavList = styled.ul`
  ${tw`list-reset m-0 uppercase tracking-wide text-sm flex items-center`};
`
const NavItem = styled.li`
  ${tw`ml-4 md:ml-6 inline-block no-underline`};
`
const NavItemLink = styled(Link)`
  ${tw`no-underline font-bold text-black hover:text-blue shadow-none`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderBar>
      <LogoLink to="/">
        <LogoImage src={logo} alt="Logo" />
      </LogoLink>

      <Nav>
        <NavList>
          <NavItem>
            <NavItemLink to="/portfolio/">Portfolio</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/journal/">Journal</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to="/about/">About</NavItemLink>
          </NavItem>
          <NavItem>
            <WebringLink href="https://webring.xxiivv.com/#random" target='_blank'>
              <Webring src={webring} alt="Webring" />
            </WebringLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderBar>
  </Container>
)

export default Header
