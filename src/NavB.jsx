import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./images/Logo.png";
import { Link } from "react-router-dom";

function NavB() {
  return (
    <>
      <Navbar expand="lg" className="navbart">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={Logo}
            width="150"
            className="d-inline-block align-top"
            alt="Bhupender"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto tog">
            <Nav.Link as={Link} to="/" className="linkcss">
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/BhupenderPareek.pdf"
              download
              className="linkcss"
            >
              Download Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/social" className="linkcss">
              Social
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="linkcss">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavB;
