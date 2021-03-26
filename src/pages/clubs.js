import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"
import Footer from "../components/footer"
import ClubList from "../sections/clubslist"
import AsideNavi from "../components/navigation/asideNavi"


const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 1250px;
  height: 90%;
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "white"
  }};
`

const ClubPage = () => {
  const [contrastColor, setContrastColor] = useState(false)
  const [plusSize, setPlusSize] = useState(0)
  const [minusSize, setMinusSize] = useState(0)

  const Reset = () => {
    setContrastColor("black"), setPlusSize(0), setMinusSize(0)
  }

  const Contrast = () => {
    setContrastColor(!contrastColor)
  }

  const GrowFontSize = () => {
    setPlusSize(plusSize + 1)
  }

  const ShrinkFontSize = () => {
    setMinusSize(minusSize + 1)
  }
  return (
    <StyledWrapper
      plusSize={plusSize}
      minusSize={minusSize}
      activeColor={contrastColor}
      style={{ fontSize: `${16 + plusSize - minusSize}px` }}
    >
      <SEO title="GOKIS" name="Świetlice wiejskie" />
      <AsideNavi
        Reset={Reset}
        Contrast={Contrast}
        ShrinkFontSize={ShrinkFontSize}
        GrowFontSize={GrowFontSize}
      />
      <Layout
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}
      />
      <ClubList
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}
      />
      <Footer
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={contrastColor}
      />
    </StyledWrapper>
  )
}

export default ClubPage
