import React, { useState } from "react"
import { Link } from "gatsby"
import { FaRegEnvelope, FaMobileAlt, FaTemperatureHigh } from "react-icons/fa"

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
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "black"
  }};
  position: absolute;
`

const WrapperTop = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  color: ${({ activeColor, value }) => {
    if (activeColor === true) return "black"
    return "white"
  }};
  margin-bottom: 75px;
`

const WrapperBottom = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.4fr 0.3fr;
  color: ${({ activeColor, value }) => {
    if (activeColor !== "yellow") return "white"
    return "black"
  }};
  place-items: center;
  padding-bottom: 10px;

  & a:hover {
    text-decoration: none;
    color: red;
  }
`

const Header = styled.p`
  padding-bottom: 40px;
  line-height: 60px;
  font-size: 40px;
`

const MenuItem = styled(Link)`
  & span {
    color: ${({ activeColor, value }) => {
      if (activeColor === true) return "black"
      return "white"
    }};
  }
`

const ListItem = styled.li``

const Copyright = styled.span`
  text-transform: uppercase;
  padding-right: 5px;
  color: ${({ activeColor, value }) => {
    if (activeColor === true) return "black"
    return "white"
  }};
`

const Footer = ({ plusSize, minusSize, activeColor }) => {
  return (
    <WrapperFullWidth>
      <Wrapper id="contact" activeColor={activeColor}>
        <WrapperTop
          plusSize={plusSize}
          minusSize={minusSize}
          activeColor={activeColor}
        >
          <div plusSize={plusSize} minusSize={minusSize}>
            <Header
              plusSize={plusSize}
              minusSize={minusSize}
              style={{ fontSize: `${40 + plusSize - minusSize}px` }}
            >
              Kontakt
            </Header>
            <ul style={{ fontSize: `${14 + plusSize - minusSize}px` }}>
              <ListItem
                style={{
                  fontWeight: 600,
                  paddingBottom: "15px",
                  fontSize: `${24 + plusSize - minusSize}px`,
                }}
              >
                Gminny Ośrodek Kultury i Sportu
              </ListItem>
              <ListItem>Pilnik 2</ListItem>
              <ListItem>11-100 Lidzbark Warmiński</ListItem>
            </ul>
            <ul style={{ fontSize: `${14 + plusSize - minusSize}px` }}>
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
          <div plusSize={plusSize} minusSize={minusSize}>
            <Header
              plusSize={plusSize}
              minusSize={minusSize}
              style={{ fontSize: `${40 + plusSize - minusSize}px` }}
            >
              Jak dojechać
            </Header>
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
          <div
            activeColor={activeColor}
            aplusSize={plusSize}
            minusSize={minusSize}
          >
            <MenuItem
              role="navigation"
              aria-label="Deklaracja dostępności"
              to="/accessible"
              activeColor={activeColor}
              plusSize={plusSize}
              minusSize={minusSize}
              style={{ fontSize: `${14 + plusSize - minusSize}px` }}
            >
              <span>Deklaracja dostępności</span>
            </MenuItem>
          </div>
          <div
            activeColor={activeColor}
            plusSize={plusSize}
            minusSize={minusSize}
          >
            <MenuItem
              role="navigation"
              aria-label="Polityka bezpieczeństwa"
              to="/rodo"
              activeColor={activeColor}
              style={{ fontSize: `${14 + plusSize - minusSize}px` }}
            >
              <span>Polityka bezpieczeństwa</span>
            </MenuItem>
          </div>
          <div>
            <Copyright
              activeColor={activeColor}
              plusSize={plusSize}
              minusSize={minusSize}
              style={{ fontSize: `${14 + plusSize - minusSize}px` }}
            >
              © {new Date().getFullYear()}, Webside developed by
              <span> NETTOM</span>
            </Copyright>
          </div>
        </WrapperBottom>
      </Wrapper>
    </WrapperFullWidth>
  )
}

export default Footer
