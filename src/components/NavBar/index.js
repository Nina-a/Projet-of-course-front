// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const NavBar = () => (
  <div className="navbar">
    <a className="navigation-link active" href="#">Accueil</a>
    <a className="navigation-link" href="#">Liste des recettes</a>
    <a className="navigation-link" href="#">Planning</a>
    <a className="navigation-link" href="#">Liste des courses</a>
    <a className="navigation-link" href="#">Connexion</a>
  </div>
);

// == Export
export default NavBar;
