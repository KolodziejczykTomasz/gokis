import React, { Framgnent } from "react"
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
  background-color: blue;
  color: white;
  transition: 0.2s;
  :hover {
    background-color: white;
    color: blue;
  }
`

const AsideNavi = () => {
  return (
    <Framgnent>
      <Menu aria-label="Menu accesible" id="accesibleWrapper">
        <MenuItem
          as="button"
          id="accesibleIcon"
          aria-label="Powiększenie czcionki na stronie po kliknięciu"
          aria-hidden="true"
        >
          <FaSearchPlus />
        </MenuItem>
        <MenuItem
          as="button"
          id="accesibleIcon"
          aria-label="Zmniejszenie czcionki na stronie po kliknięciu"
          aria-hidden="true"
        >
          <FaSearchMinus />
        </MenuItem>
        <MenuItem
          as="button"
          id="accesibleIcon"
          aria-label="Zmiana kontrastu strony po kliknięciu"
          aria-hidden="true"
        >
          <FaAdjust />
        </MenuItem>
        <MenuItem
          as="button"
          id="accesibleIcon"
          aria-label="Przywrócenie początkowej wielkości czcionki na stronie po kliknięciu"
          aria-hidden="true"
        >
          <FaSearch />
        </MenuItem>
      </Menu>
    </Framgnent>
  )
}

export default AsideNavi
