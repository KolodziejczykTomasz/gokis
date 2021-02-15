import React from "react"
import CardItem from "./carditem"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`

const CardList = () => (
  <>
    <Wrapper>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Wrapper>
  </>
)

export default CardList
