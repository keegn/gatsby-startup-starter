import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  background: white;
  padding: 75px 0;
  height: 400px;
  display: grid;
  position: relative;
  @media (max-width: 600px) {
    margin-top: 24px;
  }
`
const SectionCard = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: top;
  justify-items: center;
  border-radius: 4px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const SectionImg = styled.img`
  width: 500px;
  z-index: 100;
  order: ${props => props.alternate ? `-1` : `0`};
`
const SectionTitleGroup = styled.div`
  margin: 0 50px;
  order: ${props => props.alternate ? `1` : `0`};
  @media (max-width: 720px) {
    margin: 0;
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

const Section = props => (
  <SectionGroup>
    <SectionCard>
      <SectionTitleGroup alternate={props.alternate}>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
      <SectionImg src={props.img}/>
    </SectionCard>
  </SectionGroup>
)

export default Section
