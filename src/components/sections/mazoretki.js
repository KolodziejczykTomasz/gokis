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

const Mazoretki = () => (
  <div id="mazoretki" style={{ marginTop: "100px" }}>
    <BreakeSection>Mażoretki</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description>
          <p>Zespół dziewczęcy działający przy Gminnej Orkiestrze Dętej.</p>
          Mażoretki to dziewczęta, ubrane w paradne stroje, które z wielką
          wytwornością maszerują przed orkiestrą i prezentują piękne widowisko
          woltyżerki. Historia zespołów mażoretkowych liczy ponad dwieście lat.
          Popisy żonglerskie zwane twirlingiem wywodzą się z Francji i są
          kontynuowane w Gminnym Ośrodku Kultury i Sportu w Pilniku. Zajęcia
          odbywają się w soboty w godz. 9.00-11.00
        </Description>
      </Content>
    </Section>
  </div>
)

export default Mazoretki
