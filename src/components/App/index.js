// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
// == Import
import NavBar from '../NavBar';
import Home from '../Home';
import Planning from '../Planning';
import Recipes from '../Recipes';
import ShoppingList from '../ShoppingList';
import Footer from '../Footer';
import './styles.css';
import data from '../../data';

const recipeData = data.map((dataObjet) => ({
  title: dataObjet.title,
  image: dataObjet.thumbnail,
}));


// == Composant
const App = () => (
  <div className="app">
    <NavBar className="navbar" />
    <Route exact path="/">
      <Home />
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
    <Footer className="footer" />
  </div>
);

// == Export
export default App;
