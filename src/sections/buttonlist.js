import React from "react"
import BreakeSection from "../components/breakeSection"
import styled from "styled-components"
import ButtonItem from "../components/buttonitem"

const Section = styled.div`
  color: ${({ activecolor, value }) => {
    if (activecolor === true) return "black"
    return "white"
  }};

  background-color: ${({ activecolor, value }) => {
    if (activecolor === true) return "yellow"
    return "transparent"
  }};
`

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 75px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ activecolor, value }) => {
    if (activecolor === true) return "yellow"
    return "transparent"
  }};
`

const ButtonList = ({ plussize, minussize, activecolor }) => (
  <Section
    id="projects"
    style={{ marginTop: "100px", fontSize: `${16 + plussize - minussize}px` }}
    plussize={plussize}
    minussize={minussize}
    activecolor={activecolor}
  >
    <BreakeSection>Zajęcia</BreakeSection>
    <Wrapper
      plussize={plussize}
      minussize={minussize}
      activecolor={activecolor}
      style={{ fontSize: `${16 + plussize - minussize}px` }}
    >
      <ButtonItem
        linkItem="/furman"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Zespół Ludowy Furman
      </ButtonItem>
      <ButtonItem
        linkItem="/rogoz"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Kapela ludowa Rogóżanie
      </ButtonItem>
      <ButtonItem
        linkItem="/contraband"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Zespół wokalno-instrumentalny ContraBand'a
      </ButtonItem>
      <ButtonItem
        linkItem="/orkiestra"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Gminna Orkiestra Dęta
      </ButtonItem>
      <ButtonItem
        linkItem="/klika"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Zespół muzyczny „Klika z Pilnika”
      </ButtonItem>
      <ButtonItem
        linkItem="/tennis"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Klub tenisa stołowego
      </ButtonItem>
      <ButtonItem
        linkItem="/rolny"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Rolny Skład
      </ButtonItem>
      <ButtonItem
        linkItem="/belcanto"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Dziecięcy zespół wokalny Bel Canto
      </ButtonItem>
      <ButtonItem
        linkItem="/mazoretki"
        plussize={plussize}
        minussize={minussize}
        style={{ fontSize: `${16 + plussize - minussize}px` }}
      >
        Mażoretki
      </ButtonItem>
    </Wrapper>
  </Section>
)

export default ButtonList
