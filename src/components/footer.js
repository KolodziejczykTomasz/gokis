import React from "react"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 7vh;
  background-color: grey;
  @media (max-width: 600px) {
    justify-content: center;
  }
  @media (min-width: 600px) {
    justify-content: center;
  }
  @media (min-width: 992px) {
    justify-content: center;
  }
  @media (min-width: 1024px) {
     justify-content: end;
  }
`
const StyledFooterText = styled.span`
  text-transform: uppercase;
  color: #717171;
  font-size: 12px;
  padding-right: 5px;
`

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledFooterText>
        © {new Date().getFullYear()}, Webside developed by
        <span> NETTOM</span>
      </StyledFooterText>
    </StyledWrapper>
  )
}

export default Footer
