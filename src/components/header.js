import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/gatsby-icon.png'
// we could also {require('../images/gatsby-icon.png')} within the src={} - helpful if you have lots of images
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} alt="logo" width="30"></img></Link>
      <Link to="/product">Product</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/about">About</Link>
      <Link to="/sign-up"><button>Get Demo</button></Link>
    </div>
  </div>
)

export default Header
