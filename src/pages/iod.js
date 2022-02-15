import React, { useState } from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Tennis from "../sections/tennis"
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

const Content = styled.div`
display: flex;
  flex-direction: column;
  text-align: left;
  align-content: center;
  padding: 100px 10px;
  justify-content: left;
  & div{
    padding: 20px 0;
  }
`

const IodPage = () => {
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
      <SEO title="GOKIS" name="Klub tenisa stołowego" />
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
     <Content>
       <div style={{fontSize: "24px", fontWeight: "600"}}>Inspektor Ochrony Danych w Gminnym Ośrodku Kultury i Sportu w Pilniku</div>

       <div>Iwona Stępień</div>

      <div style={{fontSize: "18px", fontWeight: "600"}}>Kontakt do IOD:</div>
<ul>
  <li>e-mail: iod@gokispilnik.pl</li>
  <li> pisemnie na adres korespondencyjny: Gminny Ośrodek Kultury i Sportu w Pilniku, Pilniku 2,
    11-100 Lidzbark Warmiński, z dopiskiem „dla IOD”. </li>

</ul>
     </Content>
    </StyledWrapper> 
    <Footer
        plussize={plussize}
        minussize={minussize}
        activecolor={contrastColor}
      />
      </>
  )}


export default IodPage
