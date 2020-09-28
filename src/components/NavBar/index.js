// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const NavBar = () => (
  <div className="navbar">
    <a className="navigation-link active" href="#">Accueil</a>
    <a className="navigation-link" href="#">Recettes</a>
    <a className="navigation-link" href="#">Planning</a>
    <a className="navigation-link" href="#">Courses</a>
    <a className="navigation-link" href="#">Connexion</a>
  </div>
);

// == Pas besoin de props !!!!
export default NavBar;
