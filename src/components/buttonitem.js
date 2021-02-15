import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  width: auto;
  min-height: 40px;
  height: auto;
  border: 1px solid grey;
  margin: 5px 5px;
  padding: 10px 15px;
`

const ButtonItem = ({ children }) => <><Wrapper>{children}</Wrapper></>

export default ButtonItem
