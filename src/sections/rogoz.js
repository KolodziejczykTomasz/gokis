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

const Rogoz = () => (
  <div id="rogoz" style={{ marginTop: "100px" }}>
    <BreakeSection>Kapela ludowa Rogóżanie</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description>
          Kapela powstała we wsi Rogóż w Gminie Lidzbark Warmiński w sierpniu
          1991 roku. Tworzy ją 13 osób, które w tradycyjnych strojach
          warmińskich wykonują pieśni ludowe i biesiadne, przy akompaniamencie
          akordeonu, trąbki, bębna czy diabelskich skrzypiec charakterystycznych
          dla regionu warmińskiego. Kapela Rogóżanie uczestniczy w różnego
          rodzaju festynach, dożynkach gminnych i powiatowych oraz w targach
          rolniczych. Bierze udział w konkursach, przeglądach wojewódzkich oraz
          ogólnokrajowych zdobywając liczne nagrody i wyróżnienia. W Przeglądzie
          Zespołów Śpiewaczych w Suchaczu w roku 2012 zajęła pierwsze miejsce.
          Dodatkowo Kapela Rogóżanie reprezentuje region warmiński na
          przeglądach międzynarodowych, m. in. w Szwecji, Niemczech i Holandii.
        </Description>
      </Content>
    </Section>
  </div>
)

export default Rogoz
