import React, { useState } from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Rogoz from "../sections/rogoz"
import Footer from "../components/footer"
import ButtonList from "../sections/buttonlist"
import AsideNavi from "../components/navigation/asideNavi"

const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 144px;
  height: 90%;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const RogozPage = ({ data }) => {
  const [contrastColor, setContrastColor] = useState(false)
  const [plussize, setplussize] = useState(0)
  const [minussize, setminussize] = useState(0)

  const Reset = () => {
    setplussize(0), setminussize(0)
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
    <>
      <StyledWrapper
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        <SEO title="GOKIS" name="Kapela ludowa Rogóżanie" />
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
        <Rogoz
          plussize={plussize}
          minussize={minussize}
          activecolor={contrastColor}
        />
        <ButtonList
          plussize={plussize}
          minussize={minussize}
          activecolor={contrastColor}
        />
      </StyledWrapper>{" "}
      <Footer
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
    </>
  )
}

export const query = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(quality: 90) {
          src
        }
      }
    }
  }
`

export default RogozPage
