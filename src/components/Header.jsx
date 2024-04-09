

import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/images/Logo.webp';
import { Image } from 'react-bootstrap';
import './header.css';


function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/"> {}
            <Image src={logo} alt="Logo" className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Accueil</Link> {}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">A propos</Link> {}
              </li>
              {}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
