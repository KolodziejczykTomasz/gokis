import React from "react"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 7vh;
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
