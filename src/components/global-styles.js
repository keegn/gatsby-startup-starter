import  styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

// Normalize reset
injectGlobal`
  ${styledNormalize}
    html {
        font-size: 62.5%;
    }
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4;
}

a {
  color: #5334F5;
  font-weight: 600;
}
`
// End normalize

// Hero
export const Hero = styled.div`
    background: white;
    height: 540px;
    background-size: cover;
    background-position: center;
    margin: 0px;
`
export const HeroGroup = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 150px 50px;
    text-align: center;
    @media (max-width: 600px) {
      margin: 0 auto;
      max-width: 500px;
      padding: 110px 50px;
      text-align: center;
    }
`
export const HeroSplit = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-items: center;
`
export const HeroGroupH1 = styled.h1`
    margin: 0;
    color: #233e48;
    font-size: 54px;
    line-height: 1.2;;
`
export const HeroP= styled.p`
    color: rgba(51, 62, 72, .9);
    line-height: 1.2;
    font-size: 24px;
    padding: 0 0 16px 0;
`
export const HeroA= styled.a`
    font-size: 17px;
    font-weight: 600;
    color: white;
    text-transform: none;
    background: rgba(85, 58, 235, 1);
    padding: 12px 40px;
    text-decoration: none;
    border-radius: 1px;
`
// End Hero

// Buttons

// Inputs

