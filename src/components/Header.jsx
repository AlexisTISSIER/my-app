import React from 'react';

function Header() {
  return (
    <nav>
      <div>
        <h1 className="text-3xl font-bold underline text-center py-10">
          Alexis TISSIER
        </h1>
        <img src="https://actustream.fr/img/clubs/esport/karmine-corp.png" alt="image-mex" />
      </div>
      <ul className="flex justify-center">
        <li className="mr-10">
          <a href="/App.js" className="text-blue-500">
            App.js
          </a>
        </li>
        <li className="mr-10">
          <a href='/Header.jsx' className="text-blue-500">
            Header
          </a>
        </li>
        <li className="mr-10">
          <a href="#contact" className="text-blue-500">
            Autre
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
