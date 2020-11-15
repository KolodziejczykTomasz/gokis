import React from "react"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  height: 20vh;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  max-width: 1250px;
  border-top: px dotted #717171;
`

const StyledButton = styled.button`
  width: 270px;
  height: 80px;
  font-size: 16px;
  border: 4px dotted #717171;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 60px;
  cursor: pointer;
  :hover  {
    border: 4px dashed orange;
  }
  :focus  {
    border: 4px dashed red;
  }
`

const StyledButtonLink = styled.a`
  text-decoration: none;
  height: 100%;
`

const Main = () => (
  <StyledWrapper>
    <StyledButtonLink
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/Gminny-O%C5%9Brodek-Kultury-i-Sportu-w-Pilniku-401376726727548"
    >
      <StyledButton>Zapraszamy na profil FB</StyledButton>
    </StyledButtonLink>
  </StyledWrapper>
)

export default Main
