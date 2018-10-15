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
const RotateLogo = styled.img`
  ${'' /* animation: ${LogoAnimation} .5s; */};
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
  color: rgba(73, 76, 87, 1);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
            <RotateLogo src={target} alt="logo" width="20" />
          </HeaderLink>
          <HeaderLink exact to="/product" activeClassName="active">
            Product
          </HeaderLink>
          <HeaderLink to="/">Pricing</HeaderLink>
          <HeaderLink to="/">Get Demo</HeaderLink>
        </HeaderGroup>
      </HeaderContainer>
    )
  }
}

export default Header
