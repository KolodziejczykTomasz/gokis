import React from "react"
import ImageLogo from "../components/image"

import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1250px;
  height: 60vh;  
`;

const Hero = () => (
  <StyledWrapper>
    <ImageLogo alt="Logo GOKIS" />    
  </StyledWrapper>
)

export default Hero
