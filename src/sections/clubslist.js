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
`

const ClubList = () => (
  <div id="clubs" style={{ marginTop: "100px" }}>
    <BreakeSection>Świetlice wiejskie</BreakeSection>
    <Wrapper>
      <ButtonItem>Babiak</ButtonItem>
      <ButtonItem>Blanki</ButtonItem>
      <ButtonItem>Ignalin</ButtonItem>
      <ButtonItem>Jarandowo</ButtonItem>
      <ButtonItem> Kłębowo </ButtonItem>
      <ButtonItem>Kochanówka</ButtonItem>
      <ButtonItem>Koniewo</ButtonItem>
      <ButtonItem> Kraszewo </ButtonItem>
      <ButtonItem>Łaniewo</ButtonItem>
      <ButtonItem>Miejska Wola</ButtonItem>
      <ButtonItem>Miłogórze</ButtonItem>
      <ButtonItem>Morawa</ButtonItem>
      <ButtonItem>Nowa Wieś Wielka</ButtonItem>
      <ButtonItem>Nowosady</ButtonItem>
      <ButtonItem>Rogóż</ButtonItem>
      <ButtonItem>Runowo</ButtonItem>
      <ButtonItem>Sarnowo</ButtonItem>
      <ButtonItem>Stryjkowo</ButtonItem>
      <ButtonItem>Zaręby</ButtonItem>
    </Wrapper>
    <div className="mainSection" style={{ margin: "150px 0 100px 0" }}>
      <table className="table" style={{ width: "100%", margin: "0 auto" }}>
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
                style={{ marginleft: "15" }}
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
)

export default ClubList
