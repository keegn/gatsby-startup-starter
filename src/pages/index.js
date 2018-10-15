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
        <HeroGroupH1>Professional messenger for schools</HeroGroupH1>
        <HeroP>
          Speed up the learning process through intelligent communication tools. 
        </HeroP>
        <HeroA href="/">Watch the video</HeroA>
      </HeroGroup>
    </Hero>
    <Section
      img={app}
      title="The future is now"
      text="Here is some nice text. Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do."
      alt="Product feature illustration"
    />
    <Section
      img={app}
      alternate
      title="Students deserve better"
      text="Here is some nice text. Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that. Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do."
      alt="Product feature illustration"
    />
  </Layout>
)

export default IndexPage
