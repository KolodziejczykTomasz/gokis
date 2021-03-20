import React from "react"
import { Link } from "gatsby"
import { FaRegEnvelope, FaMobileAlt } from "react-icons/fa"

import styled from "styled-components"

const WrapperFullWidth = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;

  position: relative;
`

const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 20px 20px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "black"};
  position: absolute;
`

const WrapperTop = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  color: #fff;
  margin-bottom: 75px;
`

const WrapperBottom = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.4fr 0.3fr;
  color: #fff;
  place-items: center;
  padding-bottom: 10px;
  & a {
    text-decoration: none;
    color: #fff;
  }
  & a:hover {
    text-decoration: none;
    color: red;
  }
`

const Copyright = styled.span`
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  padding-right: 5px;
`

const Footer = ({ activeSize, activeColor }) => (
  <WrapperFullWidth activeSize={activeSize} activeColor={activeColor}>
    <Wrapper style={{ fontSize: `${activeSize}px` }} id="contact" activeSize={activeSize} activeColor={activeColor}>
      <WrapperTop>
        <div >
          <h1 style={{ paddingBottom: "40px" }}>Kontakt</h1>
          <ul>
            <li style={{ fontWeight: 600, fontSize: "20px" }}>
              Gminny Ośrodek Kultury i Sportu
            </li>
            <li>Pilnik 2</li>
            <li>11-100 Lidzbark Warmiński</li>
          </ul>
          <ul>
            <li>
              <FaMobileAlt style={{ marginRight: "10px" }} />
              +48 665 988 473
            </li>
            <li>
              <FaRegEnvelope style={{ marginRight: "10px" }} />
              poczta@gokispilnik.pl
            </li>
          </ul>
        </div>
        <div>
          <h1 style={{ paddingBottom: "40px" }}>Jak dojechać</h1>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2338.3662267262666!2d20.555843415785766!3d54.12043688014852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2f5078d6708b5%3A0x4b60b7e70795a017!2sGminny%20O%C5%9Brodek%20Kultury!5e0!3m2!1spl!2spl!4v1613416935177!5m2!1spl!2spl"
              style={{ width: "100%", height: "300px", border: 0 }}
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              title="Mapa google"
            ></iframe>
          </div>
        </div>
      </WrapperTop>
      <WrapperBottom>
        <div>
          <Link
            role="navigation"
            aria-label="Deklaracja dostępności"
            to="/accessible"
          >
            Deklaracja dostępności
          </Link>
        </div>
        <div>
          <Link
            role="navigation"
            aria-label="Polityka bezpieczeństwa"
            to="/rodo"
          >
            Polityka bezpieczeństwa
          </Link>
        </div>
        <div>
          <Copyright>
            © {new Date().getFullYear()}, Webside developed by
            <span> NETTOM</span>
          </Copyright>
        </div>
      </WrapperBottom>
    </Wrapper>
  </WrapperFullWidth>
)


export default Footer
