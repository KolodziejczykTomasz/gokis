import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
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
    <Navbar collapseOnSelect expand="lg" bg="white" fixed="top" variant="light">
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
          <Nav.Link href="#pricing" className="NavLinkItem">
            O nas
          </Nav.Link>
          <NavDropdown
            className="NavLinkItem"
            title="Pracownie"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Zespół Ludowy Furman
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Kapela ludowa Rogóżanie
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Zespół wokalno-instrumentalny ContraBand'a
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Gminna Orkiestra Dęta
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Mażoretki</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">
              Zespół muzyczny „ Klika z Pilnika ”
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">
              Klub tenisa stołowego
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.8">Rolny Skład</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.9">
              Dziecięcy zespół wokalny Bel Canto
            </NavDropdown.Item>
          </NavDropdown>
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
