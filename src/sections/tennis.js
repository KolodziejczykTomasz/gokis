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

const Tennis = () => (
  <div id="tennis" style={{ marginTop: "100px" }}>
    <BreakeSection>Klub tenisa stołowego</BreakeSection>
    <Section>
      <PhotoWrapper>
        <Photo src={Logo} alt="Logo" />
      </PhotoWrapper>
      <Content>
        <Description>
          Program sekcji tenisa stołowego dla dzieci i dorosłych zaprojektowany
          jest tak, aby promować rekreacyjną stronę aktywności fizycznej, która
          łączy w sobie dobrą zabawę i pasję w gronie znajomych. 
          <p>Treningi tenisa stołowego, dla juniorów i seniorów- w poniedziałki i środy o
          godz.17.00-20.00</p>
          <p>Prowadzi: Marcin Dadura</p>
        </Description>
      </Content>
    </Section>
  </div>
)

export default Tennis
