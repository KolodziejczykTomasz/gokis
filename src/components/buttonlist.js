import React from "react"
import BreakeSection from "../components/breakeSection"
import styled from "styled-components"
import ButtonItem from "../components/buttonitem"

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;  
`

const ButtonList = () => (
  <div id="projects" style={{marginTop: '100px'}}>
    <BreakeSection>Pracownie</BreakeSection>
    <Wrapper >
      <ButtonItem>Zespół Ludowy Furman</ButtonItem>
      <ButtonItem>Kapela ludowa Rogóżanie</ButtonItem>
      <ButtonItem>Zespół wokalno-instrumentalny ContraBand'a</ButtonItem>
      <ButtonItem>Gminna Orkiestra Dęta</ButtonItem>
      <ButtonItem>Zespół muzyczny „Klika z Pilnika”</ButtonItem>
      <ButtonItem>Klub tenisa stołowego</ButtonItem>
      <ButtonItem>Rolny Skład</ButtonItem>
      <ButtonItem>Dziecięcy zespół wokalny Bel Canto</ButtonItem>
    </Wrapper>
  </div>
)

export default ButtonList
