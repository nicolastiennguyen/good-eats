import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
  <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
        <Nav.Link to="/favorites" as={NavLink}>Favorites</Nav.Link>
        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
      </Nav>
      Good Eats!
    </Container>
  </NavbarBs>
  )
}