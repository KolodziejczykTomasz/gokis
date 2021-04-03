import React from "react"
import BreakeSection from "../components/breakeSection"
import Logo from "../assets/images/logo.jpg"
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

const Klika = ({ plussize, minussize }) => (
  <div id="klika" style={{ marginTop: "100px" }}>
    <BreakeSection>Zespół muzyczny „Klika z Pilnika”</BreakeSection>
    <Section style={{ fontSize: `${16 + plussize - minussize}px` }}>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description style={{ fontSize: `${16 + plussize - minussize}px` }}>
          Zespół muzyki dance – Mierzejewski, Darek, Edek, Wojtek. Grupa
          wykonuje własne aranżacje znanych przebojów dance i disco polo w nieco
          rockowej konwencji. <p>Prowadzi: Andrzej Mierzejewski</p>
        </Description>
      </Content>
    </Section>
  </div>
)

export default Klika
