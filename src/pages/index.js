import React from 'react'
import { Link } from 'gatsby'
import {Hero, HeroGroup, HeroGroupH1, HeroP, HeroA } from '../components/sharedstyles'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <HeroGroupH1>Intelligent mortgage software.</HeroGroupH1>
        <HeroP>We are providing the world with the greatest new software ever.</HeroP>
        <HeroA href="/">Watch the video</HeroA>
      </HeroGroup>
    </Hero>
  </Layout>
)

export default IndexPage
