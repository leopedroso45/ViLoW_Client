import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";

class NavbarD extends Component {
  render() {
    return (
      <Navbar r collapseOnSelect expand="md" fixed="top" variant="dark">
        <Navbar.Brand href="/">ViLoW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              href="https://github.com/leopedroso45/ViLoW"
              target="_blank"
            >
              Contribute
            </Nav.Link>
            <Nav.Link
              href="https://github.com/leopedroso45/ViLoW/graphs/contributors"
              target="_blank"
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarD;
