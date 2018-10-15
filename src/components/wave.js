import React from 'react'
import styled from 'styled-components'

export const WaveBottom = styled.div`
  positiion: absolute;
  width: 100%;
  bottom: 0;
`

export const WaveTop = styled.div`
  positiion: absolute;
  width: 100%;
  top: 0;
  height: 100px;
  transform: rotate(180deg);
`

export const Wave = () => (
  <svg
    width="100%"
    height="172"
    viewBox="0 0 100% 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#FFFFFF">
      <animate
        repeatCount="indefinite"
        fill="freeze"
        attributeName="d"
        dur="20s"
        values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; 

              M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
              "
      />
    </path>
  </svg>
)
