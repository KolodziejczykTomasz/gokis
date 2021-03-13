import React from "react"

import styled from "styled-components"

const WrapperStartBreakeLine = styled.div`
  display: grid;
  margin: 40px 0 50px 0;
  height: 80px;
`

const WrapperItemLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  margin: 5px 0;
`

const WrapperItemCentral = styled.div`
  grid-column-start: 6;
  grid-column-end: 9;
`
const WrapperItemRight = styled.div`
  grid-column-start: 9;
  grid-column-end: 15;
  margin: 5px 0;
`

const WrapperText = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #5b5b5b;
  letter-spacing: 0.2rem;
`

const BreakeSection = ({ children }) => (
  <WrapperStartBreakeLine>
    <WrapperItemLeft>
      <hr style={{ borderTop: "1.5px solid #1680BC" }} />
    </WrapperItemLeft>
    <WrapperItemCentral>
      <WrapperText>{children}</WrapperText>
    </WrapperItemCentral>
    <WrapperItemRight>
      <hr style={{ borderTop: "1.5px solid #1680BC" }} />
    </WrapperItemRight>
  </WrapperStartBreakeLine>
)
export default BreakeSection
