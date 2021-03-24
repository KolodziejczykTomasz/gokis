import React from "react"
import BreakeSection from "../components/breakeSection"
import styled from "styled-components"
import ButtonItem from "../components/buttonitem"

const Section = styled.div`
  color: ${({ activeColor, value }) => {
    if (activeColor === true) return "black"
    return "white"
  }};

  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "transparent"
  }};
`

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const ButtonList = ({ plusSize, minusSize, activeColor }) => (
  <Section
    id="projects"
    style={{ marginTop: "100px", fontSize: `${16 + plusSize - minusSize}px` }}
    plusSize={plusSize}
    minusSize={minusSize}
    activeColor={activeColor}
  >
    <BreakeSection>Zajęcia</BreakeSection>
    <Wrapper
      plusSize={plusSize}
      minusSize={minusSize}
      style={{ fontSize: `${16 + plusSize - minusSize}px` }}
    >
      <ButtonItem
        linkItem="/furman"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Zespół Ludowy Furman
      </ButtonItem>
      <ButtonItem
        linkItem="/rogoz"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Kapela ludowa Rogóżanie
      </ButtonItem>
      <ButtonItem
        linkItem="/contraband"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Zespół wokalno-instrumentalny ContraBand'a
      </ButtonItem>
      <ButtonItem
        linkItem="/orkiestra"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Gminna Orkiestra Dęta
      </ButtonItem>
      <ButtonItem
        linkItem="/klika"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Zespół muzyczny „Klika z Pilnika”
      </ButtonItem>
      <ButtonItem
        linkItem="/tennis"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Klub tenisa stołowego
      </ButtonItem>
      <ButtonItem
        linkItem="/rolny"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Rolny Skład
      </ButtonItem>
      <ButtonItem
        linkItem="/belcanto"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Dziecięcy zespół wokalny Bel Canto
      </ButtonItem>
      <ButtonItem
        linkItem="/mazoretki"
        plusSize={plusSize}
        minusSize={minusSize}
        style={{ fontSize: `${16 + plusSize - minusSize}px` }}
      >
        Mażoretki
      </ButtonItem>
    </Wrapper>
  </Section>
)

export default ButtonList
