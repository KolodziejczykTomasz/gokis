import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { FaFacebookSquare } from "react-icons/fa"
import Logo from "../assets/images/logo.jpg"

import "bulma/css/bulma.css"
import './navigation.css'
import styled from "styled-components"

const IconFacebook = styled(FaFacebookSquare)`
  font-size: 40px;
  color: #536e79;
  transition: 0.7s;
  text-align: left;
  &:hover {
    color: blue;
  }
`


const Navigation = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="white" fixed="top" variant="light" className="NavbarTop">
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
            textTransform: "uppercase",
            fontSize: "20px",
            fontWeight: 600,
            color: "black",
          }}
        >
          <Nav.Link href="#about" className="NavLinkItem">
            O nas
          </Nav.Link>
          <Nav.Link href="#projects" className="NavLinkItem">
            Pracownie
          </Nav.Link>
          <Nav.Link href="#contact" className="NavLinkItem">
            Kontakt
          </Nav.Link>
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
  </>
)
export default Navigation
