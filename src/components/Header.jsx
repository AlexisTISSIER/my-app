import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/Logo.webp';
import { Image } from 'react-bootstrap';
import '../assets/styles/Header.css';

function Header({cart}) {
  return (
    <header>
      <Navbar expand="lg" bg="body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink className="nav-link" to="/">Accueil</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/about">A propos</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/cart">Panier ({cart.length}) </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
