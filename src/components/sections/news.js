import React from "react"
import BreakeSection from "../breakeSection"
import CardList from "./cardlist"

import styled from "styled-components"


const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`


const News = (props) => (
  <div id="news" style={{ marginTop: "100px" }}>
    <BreakeSection>Aktualności</BreakeSection>
    <Section>
       <CardList {...props}/>     
    </Section>
  </div>
)

export default News
