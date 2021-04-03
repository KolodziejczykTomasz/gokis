import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { FaFacebookSquare } from "react-icons/fa"
import Logo from "../../assets/images/logo.jpg"

import "bulma/css/bulma.css"
import "./navigation.css"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

const Wrapper = styled.div``

const IconFacebook = styled(FaFacebookSquare)`
  font-size: 40px;
  color: #536e79;
  transition: 0.7s;
  text-align: left;
  &:hover {
    color: #1877f2;
  }
`

const Navigation = ({ plussize, minussize, activecolor }) => {
  const getBackgroundColor = () => {
    let color
    if (activecolor === true) {
      color = "yellow"
    } else color = "white"
    return color
  }

  return (
    <Wrapper id="home">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        fixed="top"
        variant="light"
        className="NavbarTop"
        activecolor={activecolor}
        plussize={plussize}
        minussize={minussize}
        style={{
          backgroundColor: getBackgroundColor(),
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="GOKIS logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto"
            style={{
              margin: "0 auto",
              color: "white",
              fontSize: `${16 + plussize - minussize}px`,
            }}
            plussize={plussize}
            minussize={minussize}
          >
            <Link
              role="navigation"
              aria-label=" Strona główna"
              to="/#home"
              className="NavLinkItem"
              plussize={plussize}
              minussize={minussize}
              style={{ fontSize: `${16 + plussize - minussize}px` }}
            >
              Home
            </Link>
            <Link
              role="navigation"
              aria-label=" Aktualności"
              to="/#news"
              className="NavLinkItem"
              plussize={plussize}
              minussize={minussize}
              style={{ fontSize: `${16 + plussize - minussize}px` }}
            >
              Aktualności
            </Link>
            <Link
              role="navigation"
              aria-label="O nas"
              to="/#about"
              className="NavLinkItem"
              plussize={plussize}
              minussize={minussize}
              style={{ fontSize: `${16 + plussize - minussize}px` }}
            >
              O nas
            </Link>
            <Link
              role="navigation"
              aria-label="Zajęcia"
              to="/#projects"
              className="NavLinkItem"
              plussize={plussize}
              minussize={minussize}
              style={{ fontSize: `${16 + plussize - minussize}px` }}
            >
              Zajęcia
            </Link>
            <Link
              role="navigation"
              aria-label="Kontakt"
              to="/clubs"
              className="NavLinkItem"
              plussize={plussize}
              minussize={minussize}
              style={{ fontSize: `${16 + plussize - minussize}px` }}
            >
              Świetlice
            </Link>
            <Link
              role="navigation"
              aria-label="Kontakt"
              to="/#contact"
              className="NavLinkItem"
              plussize={plussize}
              minussize={minussize}
              style={{ fontSize: `${16 + plussize - minussize}px` }}
            >
              Kontakt
            </Link>
          </Nav>
          <Nav>
            <Nav.Link
              eventKey={2}
              target="_blank"
              href="https://www.facebook.com/Gminny-Ośrodek-Kultury-i-Sportu-w-Pilniku-401376726727548"
            >
              <span className="sr-only">Opens in new window</span>
              <i aria-hidden="true"></i>
              <IconFacebook />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrapper>
  )
}

export default Navigation
