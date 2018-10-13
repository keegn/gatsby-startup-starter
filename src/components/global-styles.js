import styled, { keyframes, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}
 
html {
    font-size: 62.5%;
    box-sizing: border-box;
}


body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-size: 2rem;
     -webkit-font-smoothing: antialiased;
    line-height: 1.4;
}

img {
  max-width: 100%;
  height: auto;
}

a {
    color: #5334F5;
    font-weight: 600;
}
`
// Keyframes

const HeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`
export const LogoAnimation = keyframes`
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
// Hero
export const Hero = styled.div`
  background: white;
  height: 680px;
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
  font-size: 48px;
  line-height: 1.2;
  opacity: 0;
  animation: ${HeroAnimation};
  animation-duration: 2s;
  animation-delay: 0.01s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`
export const HeroP = styled.p`
  color: rgba(51, 62, 72, 0.9);
  line-height: 1.2;
  font-size: 20px;
  padding: 0 0 16px 0;
  animation: ${HeroAnimation} 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`
export const HeroA = styled.button`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: none;
  background: rgba(85, 58, 235, 1);
  padding: 12px 40px;
  text-decoration: none;
  border-radius: 1px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    background: rgba(85, 58, 235, 1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`
// End Hero

// Section

export const StyledSection = styled.section`
  height: 500px;
  background-position: center;
  background: rgba(85, 58, 235, 1);
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`

// Buttons

// Inputs
