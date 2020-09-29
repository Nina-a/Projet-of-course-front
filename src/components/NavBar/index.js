// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// == Import
import './style.scss';

// == Composant
const NavBar = () => (
  <div className="navbar">
    <img className="image" src={logo} alt="logo" />
    <NavLink exact className="navigation-link" to="/">Accueil</NavLink>
    <NavLink exact className="navigation-link" to="/recipes">Recettes</NavLink>
    <NavLink exact className="navigation-link" to="/planning">Planning</NavLink>
    <NavLink exact className="navigation-link" to="/shoppinglist">Courses</NavLink>
    <NavLink exact className="navigation-link" to="/login">Connexion </NavLink>
  </div>
);

// == Pas besoin de props !!!!
export default NavBar;
