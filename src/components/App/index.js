// == Import npm
import React from 'react';

// == Import
import NavBar from '../NavBar';
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
    <Recipes list={recipeData} className="recipes" />
    <Planning className="planning" />
    <ShoppingList className="shoppinglist" />
    <Footer className="footer" />
  </div>
);

// == Export
export default App;
