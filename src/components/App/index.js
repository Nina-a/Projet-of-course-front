// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import
import NavBar from '../NavBar';
import Home from '../Home';
import Planning from '../../containers/Planning';
import Recipes from '../../containers/Recipes';
import ShoppingList from '../../containers/ShoppingList';
import Footer from '../Footer';
import LoginForm from '../../containers/LoginForm';
import './styles.css';
import data from '../../data';
//import RegisterForm from '../../containers/RegisterForm';

const ingredientData = data.map((dataObjet) => ({
  ingredient: dataObjet.ingredients,
}));
// == Composant
// TODO rajouter fetchRecipes
const App = ({ fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      <NavBar className="navigation-bar" />
      <main className="main">
        <header className="header">
          Of'Course
        </header>
        <Route exact path="/">
          <Home className="home" />
        </Route>
        <Route exact path="/recipes">
          <Recipes className="recipes" />
        </Route>
        <Route exact path="/planning">
          <Planning className="planning" />
        </Route>
        <Route exact path="/shoppingList">
          <ShoppingList list={ingredientData} className="shoppinglist" />
        </Route>
        <Route exact path="/login">
          <LoginForm className="connexion" />
        </Route>
        <Route exact path="/register">
          Hi c'est moi
        </Route>
      </main>
      <Footer className="footer" />
    </div>
  );
};
// == PropTypes
App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
};

// == Export
export default App;
