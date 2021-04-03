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

const Rolny = ({ plussize, minussize }) => (
  <div id="rolny" style={{ marginTop: "100px" }}>
    <BreakeSection>Rolny Skład</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Rolny Skład" />
      </PhotoWrapper>
      <Content>
        <Description style={{ fontSize: `${18 + plussize - minussize}px` }}>
          Zespół muzyczny poruszający się w klimatach rocka progresywnego.
          Wykonuje kompozycje własne, jak i covery.{" "}
          <p>Prowadzi: Paweł Rolikowski</p>
        </Description>
      </Content>
    </Section>
  </div>
)

export default Rolny
