import React from 'react'
import {
  Hero,
  HeroGroup,
  HeroGroupH1,
  HeroP,
  HeroA,
} from '../components/global-styles'
import Section from '../components/section'
import app from '../images/app.svg'


import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <HeroGroupH1>Intelligent business software.</HeroGroupH1>
        <HeroP>
          Reinventing business software with the help of smart machines.
        </HeroP>
        <HeroA href="/">Watch the video</HeroA>
      </HeroGroup>
    </Hero>
    <Section img={app}
      title="This is the title"
      text="Here is some nice text."
    />
    <Section img={app} alternate
      title="This is the title"
      text="Here is some nice text."
    />
  </Layout>
)

export default IndexPage
