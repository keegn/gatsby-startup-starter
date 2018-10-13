import React from 'react'
import { Link } from 'gatsby'
import polygon from '../images/polygon-purple.svg'
import styled from 'styled-components'
import { LogoAnimation } from './global-styles'
// we could also {require('../images/gatsby-icon.png')} within the src={} - helpful if you have lots of images

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    padding: 30px 0;
    z-index: 100;
`
const RotateLogo = styled.img`
  animation: ${LogoAnimation} .5s;
`
const HeaderGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    max-width: 800px;
`
const HeaderLink = styled(Link)`
  color: #333e48;
  text-decoration: none;
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`


const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderGroup>
      <HeaderLink to="/"><RotateLogo src={polygon} alt="logo" width="20"></RotateLogo></HeaderLink>
      <HeaderLink to="/product">Product</HeaderLink>
      <HeaderLink to="/pricing">Pricing</HeaderLink>
      <HeaderLink to="/sign-up">Get Demo</HeaderLink>
    </HeaderGroup>
  </HeaderContainer>
)

export default Header
