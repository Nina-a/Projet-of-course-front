// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Footer = () => (
  <div className="footer">
    <nav className="navbar navbar-expand-lg">
      <NavLink exact className="navigation-link-footer" to="/contact">Contact</NavLink>
      <NavLink exact className="navigation-link-footer" to="/legalsmentions">Mentions&nbsp;légales</NavLink>
      <NavLink exact className="navigation-link-footer" to="/team">Equipe</NavLink>
    </nav>
  </div>
);

// == Export
export default Footer;
