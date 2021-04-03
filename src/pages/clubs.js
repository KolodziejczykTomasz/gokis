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
  background-color: ${({ activecolor, value }) => {
    if (activecolor === true) return "yellow"
    return "white"
  }};
`

const ClubPage = () => {
  const [contrastColor, setContrastColor] = useState(false)
  const [plussize, setplussize] = useState(0)
  const [minussize, setminussize] = useState(0)

  const Reset = () => {
    setContrastColor(false), setplussize(0), setminussize(0)
  }

  const Contrast = () => {
    setContrastColor(!contrastColor)
  }

  const GrowFontSize = () => {
    setplussize(plussize + 1)
  }

  const ShrinkFontSize = () => {
    setminussize(minussize + 1)
  }
  return (
    <StyledWrapper
      plussize={plussize}
      minussize={minussize}
      activecolor={contrastColor}
      style={{ fontSize: `${16 + plussize - minussize}px` }}
    >
      <SEO title="GOKIS" name="Świetlice wiejskie" />
      <AsideNavi
        Reset={Reset}
        Contrast={Contrast}
        ShrinkFontSize={ShrinkFontSize}
        GrowFontSize={GrowFontSize}
      />
      <Layout
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <ClubList
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      <Footer
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
    </StyledWrapper>
  )
}

export default ClubPage
