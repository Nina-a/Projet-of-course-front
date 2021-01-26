// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

// == Import
import './style.scss';

// == Composant
const NavBar = ({ isLogged }) => (
  <nav className="menu" tabIndex="0">
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
      <img src={logo} alt="logo" />
    </header>
    <NavLink exact className="navigation-link" to="/">Accueil</NavLink>
    <NavLink exact className="navigation-link" to="/recipes">Recettes</NavLink>
    <NavLink exact className="navigation-link" to="/planning">Planning</NavLink>
    <NavLink exact className="navigation-link" to="/shoppingList">Courses</NavLink>
    <NavLink exact className="navigation-link" to="/login">
      { !isLogged ? 'Connexion' : 'Déconnexion' }
    </NavLink>
  </nav>
);

// == Pas besoin de props !!!!
export default NavBar;

