import React from 'react'
import {
  Hero,
  HeroGroup,
  HeroGroupH1,
  HeroP,
  HeroA,
} from '../components/global-styles/global-styles'
import Section from '../components/section'
import app from '../images/app.svg'

import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <HeroGroupH1>Professional messenger for academia</HeroGroupH1>
        <HeroP>
          Speed up the learning process through intelligent communication tools.
        </HeroP>
        <HeroA href="/">Watch the video</HeroA>
      </HeroGroup>
    </Hero>
    <Section
      img={app}
      title="Organize your research"
      text="Here is some nice text. Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him."
      alt="Product feature illustration"
    />
    <Section
      img={app}
      alternate
      title="Share your knowledge"
      text="Here is some nice text. Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him."
      alt="Product feature illustration number two"
    />
  </Layout>
)

export default Index
