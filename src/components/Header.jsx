import React from 'react';


function Header() {
  return (
    <nav className="bg-gray-800 py-4">
    <div className="container mx-auto flex items-center justify-between">
      {}
      <div>
        <img className="h-8" src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-
3262834_960_720.png" alt="Logo" />
      </div>

      {}
      <ul className="flex items-center space-x-4">
        <li>
          <a href="#" className="text-white hover:text-gray-300">Accueil</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">Projets</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);
}


export default Header;
