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

const Furman = () => (
  <div id="furman" style={{ marginTop: "100px" }}>
    <BreakeSection>Zespół Ludowy Furman</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description>
          Zespół składa się z jedenastu osób, mieszkańców Kraszewa. Mimo
          niedługiego stażu Furman zaistniał już na wielu przeglądach zespołów
          ludowych. Często można ich spotkać na imprezach gminnych i
          powiatowych. Wykonują znane wszystkim utwory ludowe oraz zapomniane
          pieśni zapisane w zeszytach rodzinnych.
          <p>Kierownikiem artystycznym jest Jacek Sobczak.</p>
        </Description>
      </Content>
    </Section>
  </div>
)

export default Furman
