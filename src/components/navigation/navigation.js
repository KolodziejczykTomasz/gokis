import React from "react"
import {Link} from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import { FaFacebookSquare } from "react-icons/fa"
import Logo from "../../assets/images/logo.jpg"

import "bulma/css/bulma.css"
import "./navigation.css"
import styled from "styled-components"

const IconFacebook = styled(FaFacebookSquare)`
  font-size: 40px;
  color: #536e79;
  transition: 0.7s;
  text-align: left;
  &:hover {
    color: #1877f2;
  }
`

const Navigation = () => (
  <div id="home">
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      fixed="top"
      variant="light"
      className="NavbarTop"
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
        <Nav className="mr-auto" style={{ margin: "0 auto", color: "white" }}>
          <Link to="/#home" className="NavLinkItem">
            Home
          </Link>
          <Link to="/#news" className="NavLinkItem">
            Aktualności
          </Link>
          <Link to="/#about" className="NavLinkItem">
            O nas
          </Link>
          <Link to="/#projects" className="NavLinkItem">
            Pracownie
          </Link>
          <Link to="/#contact" className="NavLinkItem">
            Kontakt
          </Link>
        </Nav>
        <Nav>
          <Nav.Link
            eventKey={2}
            href="https://www.facebook.com/Gminny-Ośrodek-Kultury-i-Sportu-w-Pilniku-401376726727548"
          >
            <IconFacebook />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
export default Navigation
