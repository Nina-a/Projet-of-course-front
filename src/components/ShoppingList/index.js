/* eslint-disable react/jsx-no-undef */
// == Import npm
import React from 'react';
import Ingredient from './ingredient';
// == Import
import './style.scss';

// == Composant
const ShoppingList = () => (
  <div className="shoppingList">
    <h1>ShoppingList</h1>
    <ul>
      <Ingredient />
    </ul>
  </div>
);

// == Export
export default ShoppingList;
