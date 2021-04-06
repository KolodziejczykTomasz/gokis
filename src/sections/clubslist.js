import React from "react"
import { FaFileDownload } from "react-icons/fa"
import BreakeSection from "../components/breakeSection"
import styled from "styled-components"
import ButtonItem from "../components/buttonitem"


const Section = styled.div`
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 75px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ activecolor }) =>
    activecolor ? "yellow" : "transparent"};
`

const ClubList = ({ plussize, minussize, activecolor }) => (
  <>
    <Section
      id="clubs"
      style={{ marginTop: "100px", fontSize: `${16 + plussize - minussize}px` }}
      plussize={plussize}
      minussize={minussize}
      activecolor={activecolor}
    >
      <BreakeSection>Świetlice wiejskie</BreakeSection>
      <Wrapper
        style={{
          marginTop: "100px",
          fontSize: `${16 + plussize - minussize}px`,
        }}
        plussize={plussize}
        minussize={minussize}
        activecolor={activecolor}
      >
        <ButtonItem plussize={plussize} minussize={minussize}>
          Babiak
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Blanki
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Ignalin
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Jarandowo
        </ButtonItem>
        <ButtonItem plus>Kłębowo</ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Kochanówka
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Koniewo
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Kraszewo
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Łaniewo
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Miejska Wola
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Miłogórze
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Morawa
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Nowa Wieś Wielka
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Nowosady
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Rogóż
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Runowo
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Sarnowo
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Stryjkowo
        </ButtonItem>
        <ButtonItem plussize={plussize} minussize={minussize}>
          Zaręby
        </ButtonItem>
      </Wrapper>
      <div className="mainSection" style={{ padding: "150px 0 100px 0" }}>
        <table
          className="table"
          style={{
            width: "100%",
            margin: "0 auto",
            backgroundColor: activecolor ? "yellow" : "white",
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
    </Section>
  </>
)

export default ClubList
