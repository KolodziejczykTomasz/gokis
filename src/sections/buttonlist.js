import React from "react"
import BreakeSection from "../components/breakeSection"
import styled from "styled-components"
import ButtonItem from "../components/buttonitem"

const Section = styled.div`
  color: ${({ activeColor, value }) => {
    if (activeColor !== "yellow") return "white"
    return "black"
  }};

  background-color: ${({ activeColor, value }) => {
    if (activeColor === "yellow") return "yellow"
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

const ButtonList = ({ activeSize, activeColor }) => (
  <Section
    id="projects"
    style={{ marginTop: "100px" }}
    activeSize={activeSize}
    activeColor={activeColor}
  >
    <BreakeSection>Zajęcia</BreakeSection>
    <Wrapper>
      <ButtonItem linkItem="/furman">Zespół Ludowy Furman</ButtonItem>
      <ButtonItem linkItem="/rogoz">Kapela ludowa Rogóżanie</ButtonItem>
      <ButtonItem linkItem="/contraband">
        Zespół wokalno-instrumentalny ContraBand'a
      </ButtonItem>
      <ButtonItem linkItem="/orkiestra">Gminna Orkiestra Dęta</ButtonItem>
      <ButtonItem linkItem="/klika">
        Zespół muzyczny „Klika z Pilnika”
      </ButtonItem>
      <ButtonItem linkItem="/tennis">Klub tenisa stołowego</ButtonItem>
      <ButtonItem linkItem="/rolny">Rolny Skład</ButtonItem>
      <ButtonItem linkItem="/belcanto">
        Dziecięcy zespół wokalny Bel Canto
      </ButtonItem>
      <ButtonItem linkItem="/mazoretki">Mażoretki</ButtonItem>
    </Wrapper>
  </Section>
)

export default ButtonList
