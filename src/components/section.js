import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
  background: white;
  padding: 50px 0;
  height: auto;
  display: grid;
  position: relative;
  justify-items: center;
  @media (max-width: 600px) {
    margin-top: 24px;
  }
`
const SectionCard = styled.div`
  display: grid;
  grid-template-columns: minmax(max-content, 1fr) minmax(max-content, 1fr);
  align-items: center;
  justify-items: center;
  border-radius: 4px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const SectionImg = styled.img`
  width: 400px;
  z-index: 100;
  order: ${props => (props.alternate ? `-1` : `0`)};
  @media (max-width: 860px) {
    width: 600px;
  }
`
const SectionTitleGroup = styled.div`
  margin: 0 50px;
  order: ${props => (props.alternate ? `1` : `0`)};
  @media (max-width: 860px) {
    margin: 0;
  }
`
const SectionTitle = styled.h3`
  font-size: 32px;
  margin: 0;
  line-height: 1.4;
  color: rgba(22, 23, 26, 1);
`
const SectionText = styled.p`
  color: rgba(73, 76, 87, 1);
  max-width: 350px;
  font-size: 1.8rem;
  line-height: 1.6;
  @media (max-width: 860px) {
    max-width: 800px;
  }
`

const Section = props => (
  <SectionGroup>
    <SectionCard>
      <SectionTitleGroup alternate={props.alternate}>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
      </SectionTitleGroup>
      <SectionImg src={props.img} alt={props.alt} />
    </SectionCard>
  </SectionGroup>
)

export default Section
