// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../../assets/images/logo.png';

// == Import
import './style.scss';

// == Composant
const NavBar = ({ isLogged, handleLogout, redirectToHomepage, redirectToHomePageDone }) => {
  const handleLogoutFromButton = (evt) => {
    evt.preventDefault();
    handleLogout();
  };

  const history = useHistory();
  useEffect(() => {
    if (redirectToHomepage) {
      history.push('/');
      redirectToHomePageDone();
    }
  }, [redirectToHomepage]);

  return (
    <div>
      <nav className="menu" tabIndex="0">
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src={logo} alt="logo" />
        </header>
        <NavLink exact className="navigation-link" to="/">
          Accueil
        </NavLink>
        <NavLink exact className="navigation-link" to="/recipes">
          Recettes
        </NavLink>
        <NavLink exact className="navigation-link" to="/planning">
          Planning
        </NavLink>
        <NavLink exact className="navigation-link" to="/shoppingList">
          Courses
        </NavLink>
        {isLogged && (
          <NavLink type="button" className="navigation-link" onClick={handleLogoutFromButton} to="">
            Déconnexion
          </NavLink>
        )}
        {!isLogged && (
          <NavLink exact className="navigation-link" to="/login">
            Connexion
          </NavLink>
        )}
      </nav>
      ;
    </div>
  );
};
NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  redirectToHomepage: PropTypes.bool.isRequired,
  redirectToHomePageDone: PropTypes.func.isRequired,
};

export default NavBar;
