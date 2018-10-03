import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} alt="logo" width="30"></img></Link>
      <Link to="/courses">Product</Link>
      <Link to="/courses">Pricing</Link>
      <Link to="/courses">Get started</Link>
    </div>
  </div>
)

export default Header
