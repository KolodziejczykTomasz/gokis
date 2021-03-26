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

const Orkiestra = ({ plusSize, minusSize }) => (
  <div id="orkiestra" style={{ marginTop: "100px" }}>
    <BreakeSection>Gminna Orkiestra Dęta</BreakeSection>
    <Section style={{ fontSize: `${16 + plusSize - minusSize}px` }}>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description style={{ fontSize: `${16 + plusSize - minusSize}px` }}>
          Obecnie liczy 20 muzyków, a kierownikiem zespołu oraz kapelmistrzem
          jest Pan Andrzej Mierzejewski. Większość członków jest
          muzykami-amatorami i sami przez wiele lat kształcili swój warsztat w
          różnych zespołach. Orkiestra uświetnia wiele imprez i uroczystości
          organizowanych przez Urząd Gminy Lidzbark Warmiński- nie tylko jako
          element uroczystości, ale i rozrywkowo, grając najsłynniejsze utwory
          muzyki rozrywkowej.
          <p>Próby odbywają się we wtorki i czwartki w godz. 19.00 - 21.00</p>
        </Description>
      </Content>
    </Section>
  </div>
)

export default Orkiestra
