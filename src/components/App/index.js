// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
// == Import
import NavBar from '../NavBar';
import Home from '../Home';
import Planning from '../../containers/Planning';
import Recipes from '../../containers/Recipes';
import ShoppingList from '../../containers/ShoppingList';
import Footer from '../Footer';
import LoginForm from '../LoginForm';
import './styles.css';
import data from '../../data';
import RegisterForm from '../RegisterForm';

const recipeData = data.map((dataObjet) => ({
  title: dataObjet.title,
  image: dataObjet.thumbnail,
}));


// == Composant
const App = () => (
  <div className="app">
    <NavBar className="navbar" />
    <main className="main">
      <header className="header">
        Of'Course
      </header>
      <Route exact path="/">
        <Home className="home" />
      </Route>
      <Route exact path="/recipes">
        <Recipes list={recipeData} className="recipes" />
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
        <RegisterForm />
      </Route>
      <Footer className="footer" />
    </main>
  </div>
);

// == Export
export default App;
