import React from 'react'
import { Link } from 'gatsby'
import {Hero, HeroGroup, HeroGroupH1, HeroP, HeroA, HeroSplit } from '../components/global-styles'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <HeroGroupH1>Intelligent business software.</HeroGroupH1>
        <HeroP>Reinventing business software with the help of smart machines.</HeroP>
        <HeroA href="/">Watch the video</HeroA>
      </HeroGroup>
    </Hero>
  </Layout>
)

export default IndexPage
