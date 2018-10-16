import React from 'react'
import { Link } from 'gatsby'

const MobileNavContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`
const MobileNavGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto, 1fr);
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  font-weight: 500;
`

const MobileLink = styled(Link)`
  color: rgba(73, 76, 87, 1);
  text-decoration: none;
  font-weight: 500;
  display: grid;
  justify-items: center;
  font-size: 2.4rem;
  padding: 20px;
`
const CloseNav = styled(Link)`
  background: none;
  border: none;
  color: #874ef4;
  font-weight: 500;
  font-size: 2.4rem;
  text-decoration: none;
`

const MobileNav = props => (
  <MobileNavContainer>
    <MobileNavGroup>
      <CloseNav to="/">Close Menu</CloseNav>
      <MobileLink to="/">Home</MobileLink>
    </MobileNavGroup>
  </MobileNavContainer>
)

export default MobileNav
