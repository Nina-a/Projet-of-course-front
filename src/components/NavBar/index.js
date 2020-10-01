// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// == Import
import './style.scss';

// == Composant
const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light flex-column">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav nav-pills nav-stacked">
          <li className="nav-item active">
            <NavLink exact className="navigation-link" to="/">Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="navigation-link" to="/recipes">Recettes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="navigation-link" to="/planning">Planning</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="navigation-link" to="/shoppingList">Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="navigation-link" to="/login">Connexion </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

// == Pas besoin de props !!!!
export default NavBar;
