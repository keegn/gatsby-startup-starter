import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const SectionGroup = styled.div`
    background: rgba(135, 78, 244, .05);
    height: 600px;
    display: grid;
    grid-template-rows: 200px auto;
    grid-gap: 20px;
    position: relative;
    @media (max-width: 600px) {
        margin-top: 24px;
    }
`

const SplitSection = styled.div`
    display: grid;
    grid-template-columns: 2;
`
const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    align-items: center;
    justify-items: center;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const SectionTitle = styled.h3`
    font-size: 32px;
    margin: 0;
    line-height: 1.2;
    color: rgba(22, 23, 26, 1);
`
const SectionText = styled.p`
    color: rgba(22, 23, 26, 1);
`
const WaveBottom = styled.div`
    positiion: absolute;
    width: 100%;
    bottom: 0;
    height: 100px;
`

const WaveTop= styled.div`
    positiion: absolute;
    width: 100%;
    top: 0;
    height: 120px;
    transform: rotate(180deg);
`
const Section = props => (
  <SectionGroup>
  <WaveTop><Wave /></WaveTop>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
    <WaveBottom><Wave /></WaveBottom>
  </SectionGroup>
)

export default Section
