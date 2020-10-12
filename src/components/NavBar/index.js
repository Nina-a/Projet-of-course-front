// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import logoblanc from '../../assets/images/logoblanc.png';

// == Import
import './style.scss';

// == Composant
const NavBar = ({ isLogged }) => (
  <div className="navigation-bar">
    <div className="divlogo">
      <img className="image" src={logo} alt="logo" />
      <img className="imagetext" src={logoblanc} alt="logo" />
    </div>
    <NavLink exact className="navigation-link" to="/">Accueil</NavLink>
    <NavLink exact className="navigation-link" to="/recipes">Recettes</NavLink>
    <NavLink exact className="navigation-link" to="/planning">Planning</NavLink>
    <NavLink exact className="navigation-link" to="/shoppingList">Courses</NavLink>
    <NavLink exact className="navigation-link" to="/login">
      { !isLogged ? 'Connexion' : 'Déconnexion' }
    </NavLink>
  </div>
);

// == Pas besoin de props !!!!
export default NavBar;
