import React from 'react'
import { Link } from 'gatsby'
import target from '../images/box.svg'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: ${props => (props.scrolled ? `20px 0` : `40px 0`)};
  z-index: 10000;
  background: ${props => (props.scrolled ? `white` : null)};
  box-shadow: ${props =>
    props.scrolled ? `rgba(72, 76, 87, 0.1) 0px 1px 3px` : null};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`
const Logo = styled.img`
  justify-self: start;
`
const SignUpLink = styled(Link)`
  justify-self: end;
  color: #874ef4;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
`
const HeaderGroup = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) repeat(3, 10rem) 1fr;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  font-weight: 500;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
`
const HeaderLink = styled(Link)`
  color: rgba(73, 76, 87, 1);
  text-decoration: none;
  font-weight: 500;
  display: grid;
  justify-items: center;
  font-size: 1.6rem;
  @media (max-width: 500px) {
    display: ${props => (props.desktop ? 'none' : 'relative')};
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <HeaderContainer scrolled={this.state.hasScrolled}>
        <HeaderGroup>
          <HeaderLink to="/">
            <Logo src={target} alt="logo" width="20" />
          </HeaderLink>
          <HeaderLink desktop to="/">
            Product
          </HeaderLink>
          <HeaderLink desktop to="/">
            Pricing
          </HeaderLink>
          <HeaderLink desktop to="/">
            Demo
          </HeaderLink>
          <SignUpLink desktop to="/">
            Sign Up
          </SignUpLink>
        </HeaderGroup>
      </HeaderContainer>
    )
  }
}

export default Header
