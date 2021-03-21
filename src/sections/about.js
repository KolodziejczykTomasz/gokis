import React from "react"
import BreakeSection from "../components/breakeSection"
import Logo from "../assets/images/logo.jpg"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ activeColor, value }) => {
    if (activeColor === "yellow") return "yellow"
    return "transparent"
  }};
`

const Section = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr; 
`
const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`
const Photo = styled.img`
  display: block;
  width: 75%;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  align-self: center;
`
const Description = styled.div`
  padding: 30px 20px 30px 40px;
  font-size: 18px;
  line-height: 32px;
  color: ${({ activeColor, value }) => {
    if (activeColor !== "yellow") return "white"
    return "black"
  }};
`

const About = ({ activeSize, activeColor }) => (
  <Wrapper
    id="about"
    style={{ marginTop: "100px" }}
    activeSize={activeSize}
    activeColor={activeColor}
  >
    <BreakeSection>O nas</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Gminny Ośrodek Kultury i Sportu" />
      </PhotoWrapper>
      <Content>
        <Description activeSize={activeSize} activeColor={activeColor}>
          Cele i zadania GOKiS w Pilniku to: organizowanie zespołowego
          uczestnictwa w kulturze, prowadzenie różnorodnych form edukacji
          regionalnej, organizowanie imprez o charakterze indywidualnym,
          rekreacyjnym i masowym. Ponadto celami jest współpraca z
          organizacjami, stowarzyszeniami, zakładami pracy i szkołami oraz
          upowszechnianie i popularyzacja historii i tradycji lokalnej
          społeczności.
        </Description>
      </Content>
    </Section>
  </Wrapper>
)

export default About
