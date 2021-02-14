import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  background-color: grey;
`

const WrapperTop = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  color: #fff;
`

const WrapperBottom = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.4fr 0.3fr;
  color: #fff;
  place-items: center;
  padding-bottom: 10px;
`

const Copyright = styled.span`
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  padding-right: 5px;
`

const Footer = () => {
  return (
    <Wrapper>
      <WrapperTop>
        <div>
          <h1>Kontakt</h1>
          <p>Gminny Ośrodek Kultury i Sportu</p>
          <ul>
            <li>Pilnik 2</li>
            <li>11-100 Lidzbark Warmiński</li>
            <li>tel. 89767....</li>
            <li>mail:...</li>
          </ul>
        </div>
        <div>
          <h1>Jak dojechać</h1>
          Mapa
        </div>
      </WrapperTop>
      <WrapperBottom>
        <div>Deklaracja dostępności</div>
        <div>Polityka bezpieczeństwa</div>
        <div>
          <Copyright>
            © {new Date().getFullYear()}, Webside developed by
            <span> NETTOM</span>
          </Copyright>
        </div>
      </WrapperBottom>
    </Wrapper>
  )
}

export default Footer
