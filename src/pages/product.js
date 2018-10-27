import React from 'react'
import {
  Hero,
  HeroGroup,
  HeroGroupH1,
  HeroP,
} from '../components/global-styles/global'
import Layout from '../components/layout'
import Section from '../components/section'

const Product = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <HeroGroupH1>Product features</HeroGroupH1>
        <HeroP>
          Reinventing business software with the help of smart machines.
        </HeroP>
      </HeroGroup>
    </Hero>
    <Section />
  </Layout>
)

export default Product
