import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import logo from "../images/logo-black.svg"

const Container = styled.div`
  ${tw``};
`
const HeaderBar = styled.div`
  ${tw`pt-16 px-24 flex items-center justify-between w-full`};
`
const LogoLink = styled(Link)`
  ${tw`no-underline text-inherit shadow-none hover:bg-transparent`};
`
const LogoImage = styled.img`
  ${tw`h-16 w-16 m-0`};
`
const Nav = styled.nav`
  ${tw``};
`
const NavList = styled.ul`
  ${tw`list-reset m-0 uppercase tracking-wide text-sm`};
`
const NavItem = styled.li`
  ${tw`ml-6 inline-block no-underline`};
`
const NavItemLink = styled(Link)`
  ${tw`no-underline font-sans font-semibold text-black hover:text-blue shadow-none`};
`

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderBar>
      <LogoLink to="/">
        <LogoImage src={logo} alt="Logo" />
      </LogoLink>

      <Nav>
        <NavList>
          <NavItem> <NavItemLink to="/portfolio/">Work</NavItemLink></NavItem>
          <NavItem> <NavItemLink to="/journal/">Journal</NavItemLink></NavItem>
          <NavItem> <NavItemLink to="/about/">About</NavItemLink></NavItem>
        </NavList>
      </Nav>
    </HeaderBar>
  </Container>
)

export default Header
