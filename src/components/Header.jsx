import React from 'react';
import logo from '../assets/logo.webp';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light item-center ">
        <div className="container  ">
          <a className="navbar-brand " href="/">
            <img className="logo" src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> {}
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Projets">Projets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
