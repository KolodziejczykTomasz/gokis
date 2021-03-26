import React from "react"
import { FaFileDownload } from "react-icons/fa"
import BreakeSection from "../components/breakeSection"
import styled from "styled-components"
import ButtonItem from "../components/buttonitem"

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 75px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ activeColor, value }) => {
    if (activeColor === true) return "yellow"
    return "white"
  }};
`

const ClubList = ({ plusSize, minusSize, activeColor }) => (
  <>
    <div
      id="clubs"
      style={{ marginTop: "100px", fontSize: `${16 + plusSize - minusSize}px` }}
      plusSize={plusSize}
      minusSize={minusSize}
      activeColor={activeColor}
    >
      <BreakeSection>Świetlice wiejskie</BreakeSection>
      <Wrapper
        style={{
          marginTop: "100px",
          fontSize: `${16 + plusSize - minusSize}px`,
        }}
        plusSize={plusSize}
        minusSize={minusSize}
        activeColor={activeColor}
      >
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Babiak
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Blanki
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Ignalin
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Jarandowo
        </ButtonItem>
        <ButtonItem plus>Kłębowo</ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Kochanówka
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Koniewo
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Kraszewo
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Łaniewo
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Miejska Wola
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Miłogórze
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Morawa
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Nowa Wieś Wielka
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Nowosady
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Rogóż
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Runowo
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Sarnowo
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Stryjkowo
        </ButtonItem>
        <ButtonItem plusSize={plusSize} minusSize={minusSize}>
          Zaręby
        </ButtonItem>
      </Wrapper>
      <div className="mainSection" style={{ margin: "150px 0 100px 0" }}>
        <table
          className="table"
          style={{
            width: "100%",
            margin: "0 auto",
            backgroundColor: activeColor === true ? "yellow" : "white",
          }}
        >
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <th>Regulanim korzystania ze świetlic wiejskich</th>
              <td align="center">
                <a
                  href="http://gokispilnik.pl/files/regulamin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginleft: "15",
                  }}
                >
                  <FaFileDownload style={{ fontSize: 30 }} />
                </a>
              </td>
            </tr>
            <tr>
              <th>Wniosek o wynajęcie świetlicy</th>
              <td align="center">
                <a
                  href="http://gokispilnik.pl/files/regulamin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginleft: "15" }}
                >
                  <FaFileDownload style={{ fontSize: 30 }} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
)

export default ClubList
