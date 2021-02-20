import React from "react"
import BreakeSection from "../breakeSection"
import Logo from "../../assets/images/logo.jpg"
import styled from "styled-components"

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
`

const Belcanto = () => (
  <div id="belcanto" style={{ marginTop: "100px" }}>
    <BreakeSection>Dziecięcy zespół wokalny Bel Canto</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description>
          Zespół wokalno-instrumentalny ContraBand'a powstał w styczniu 2016 r.
          Grupa spotyka się w każdy piątek w GOKiS w Pilniku. Mimo młodego stażu
          ma już za sobą wiele koncertów. Swój repertuar opiera głównie na
          muzyce rozrywkowej i muzyce nurtu gospels. Można ich usłyszeć podczas
          imprez gminnych, powiatowych oraz okolicznościowych. Muzyków połączyła
          wspólna pasja, miłość do muzyki i przyjaźń. <p>Instruktorem jest Ewelina
          Banach-Bardońska.</p>
        </Description>
      </Content>
    </Section>
  </div>
)

export default Belcanto
