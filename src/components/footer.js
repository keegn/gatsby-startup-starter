import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import target from '../images/box.svg'
import {Wave, WaveTop} from './wave'

const FooterContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  height: 200px;
  z-index: 100;
  background: black;
  bottom: 0;
`
const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 75px 1fr; 
  align-items: end;
  justify-items: center;
  margin: 0 auto;
  max-width: 800px;
`
const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const RotateLogo = styled.img`
  ${'' /* animation: ${LogoAnimation} .5s; */};
`

class Footer extends React.Component {
 
  render() {
    return (
      <FooterContainer>
      <WaveTop><Wave /></WaveTop>
        <FooterGroup>
        <FooterLink to="/">
            <RotateLogo src={target} alt="logo" width="20" />
          </FooterLink>
          <FooterLink exact to="/product">
            Product
          </FooterLink>
          <FooterLink to="/">Pricing</FooterLink>
          <FooterLink to="/">Get Demo</FooterLink>
        </FooterGroup>
      </FooterContainer>
    )
  }
}

export default Footer
