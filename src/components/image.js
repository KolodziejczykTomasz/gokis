import React from "react"
import Logo from "./../images/logo.jpg"

import styled from "styled-components"

const Image = styled.img`
  margin: auto;
  width: 80%;
  max-width: 800px;
  max-height: 100%;
`

const ImageLogo = () => {
  return <Image src={Logo} alt="logo" />
}

export default ImageLogo
