import React, { Fragment } from "react"
import { FaSearch, FaSearchMinus, FaSearchPlus, FaAdjust } from "react-icons/fa"

import styled from "styled-components"

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  transform: translate(0, 60%);
  position: fixed;
  width: 60px;
  height: 180px;
  z-index: 9999;
`

const MenuItem = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border: 1px solid blue;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: blue;
  transition: 0.3s;
  :hover {
    background-color: blue;
    color: white;
  }
`

const AsideNavi = ({ Reset, Contrast, ShrinkFontSize, GrowFontSize }) => (
  <Fragment>
    <Menu aria-label="Menu accesible" id="accesibleWrapper">
      <MenuItem
        as="button"
        id="accesibleIcon"
        aria-label="Powiększenie czcionki na stronie po kliknięciu"
        aria-hidden="true"
        onClick={GrowFontSize}
      >
        <FaSearchPlus />
      </MenuItem>
      <MenuItem
        as="button"
        id="accesibleIcon"
        aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
        aria-hidden="true"
        onClick={ShrinkFontSize}
      >
        <FaSearchMinus />
      </MenuItem>
      <MenuItem
        as="button"
        id="accesibleIcon"
        aria-label="Zmiana kontrastu strony po kliknięciu"
        aria-hidden="true"
        onClick={Contrast}
      >
        <FaAdjust />
      </MenuItem>
      <MenuItem
        as="button"
        id="accesibleIcon"
        aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu"
        aria-hidden="true"
        onClick={Reset}
      >
        <FaSearch />
      </MenuItem>
    </Menu>
  </Fragment>
)

export default AsideNavi
