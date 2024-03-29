// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import
import NavBar from '../../containers/NavBar';
import Home from '../Home';
import Planning from '../../containers/Planning';
import Recipes from '../../containers/Recipes';
import ShoppingList from '../../containers/ShoppingList';
import LoginForm from '../../containers/LoginForm';
import RegisterForm from '../../containers/RegisterForm';
import './styles.css';
import data from '../../data';
import RecipeForm from '../../containers/RecipeForm';

/*const ingredientData = data.map((dataObjet) => ({
  ingredient: dataObjet.ingredients,
}));*/
// == Composant
const App = ({ fetchRecipes, reloadUser }) => {
  useEffect(() => {
    reloadUser();
    fetchRecipes();
  }, []);
  return (
    <div className="app">
      <NavBar className="navigation-bar" />
      <main className="main">
        <Route exact path="/">
          <header className="header">
            Of'Course
          </header>
          <Home className="home" />
        </Route>
        <Route exact path="/recipes">
          <Recipes className="recipes" />
        </Route>
        <Route exact path="/planning">
          <Planning className="planning" />
        </Route>
        <Route exact path="/shoppingList">
          <ShoppingList className="shoppinglist" />
        </Route>
        <Route exact path="/login">
          <LoginForm className="connexion" />
        </Route>
        <Route exact path="/register">
          <RegisterForm className="RecipeForm" />
        </Route>
        <Route exact path="/recipes/add">
          <RecipeForm className="RecipeForm" />
        </Route>
      </main>
    </div>
  );
};
// == PropTypes
App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  reloadUser: PropTypes.func.isRequired,
};

// == Export
export default App;
