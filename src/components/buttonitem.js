import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled(Link)`
  display: flex;
  min-width: 200px;
  width: auto;
  min-height: 40px;
  margin: 10px 15px;
  padding: 10px 15px;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
  :after {
    transition: 0.3s;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2px;
    color: black !important;
    z-index: -1;
    text-decoration: none;
    border: 2px dotted transparent;
    :active {
      bottom: 40px;
    }
  }
  :first-child {
    border-color: rgb(215, 58, 30);
  }
  :nth-child(2) {
    border-color: rgb(0, 119, 179);
  }
  :nth-child(3) {
    border-color: rgb(69, 100, 255);
  }
  :nth-child(4) {
    border-color: rgb(73, 133, 0);
  }
  :nth-child(5) {
    border-color: rgb(236, 0, 0);
  }
  :nth-child(6) {
    border-color: rgb(114, 0, 255);
  }
  :nth-child(7) {
    border-color: rgb(128, 64, 0);
  }
  :nth-child(8) {
    border-color: rgb(215, 58, 30);
  }
  :first-child:after {
    background: rgb(215, 58, 30);
  }
  :nth-child(2):after {
    background: rgb(0, 119, 179);
  }
  :nth-child(3):after {
    background: rgb(69, 100, 255);
  }
  :nth-child(4):after {
    background: rgb(73, 133, 0);
  }
  :nth-child(5):after {
    background: rgb(236, 0, 0);
  }
  :nth-child(6):after {
    background: rgb(114, 0, 255);
  }
  :nth-child(7):after {
    background: rgb(128, 64, 0);
  }
  :nth-child(8):after {
    background: rgb(215, 58, 30);
  }
  :hover {
    color: #fff;
    position: relative;
    text-decoration: none;
  }
  :hover:after {
    width: 100%;
    height: 100%;
  }
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`
const ButtonItem = ({ children }) => (
  <>
    <Wrapper>{children}</Wrapper>
  </>
)

export default ButtonItem
