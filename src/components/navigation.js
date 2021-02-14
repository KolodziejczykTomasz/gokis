import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Logo from "../assets/images/logo.jpg"

import "bulma/css/bulma.css"

const Navigation = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
        <Nav className="mr-auto">          
          <Nav.Link href="#pricing">O nas</Nav.Link>
          <NavDropdown title="Pracownie" id="collasible-nav-dropdown">
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
            Facebook
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)
export default Navigation
