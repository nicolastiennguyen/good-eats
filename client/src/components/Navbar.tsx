import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="shadow-lg p-3 mb-5 bg-white rounded">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/favorites" as={NavLink}>
            Favorites
          </Nav.Link>
          <Nav.Link to="/saved" as={NavLink}>
            Saved
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        Good Eats!
      </Container>
    </NavbarBs>
  );
}
