// == Import npm
import React from 'react';

// == Import
import NavBar from '../NavBar';
import Main from '../Main';
import Planning from '../Planning';
import Recipes from '../Recipes';
import ShoppingList from '../ShoppingList';
import Footer from '../Footer';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <NavBar className="navbar" />
    <Main className="main">
      <Recipes className="recipes" />
      <Planning className="planning" />
      <ShoppingList className="shoppinglist" />
    </Main>
    <Footer className="footer" />
  </div>
);

// == Export
export default App;
