/* eslint-disable react/jsx-no-undef */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './ingredient';
// == Import
import './style.scss';

// == Composant
const ShoppingList = (props) => {
  const { list } = props;
  console.log(list.length);
  console.log(list);
  const ingredient = {...list[0]};
  const ingredients ={...ingredient};
  console.log(ingredients);
  console.log(ingredient);
  return (
    <div className="shoppingList">
      <h1>ShoppingList</h1>
      <ul>
        {
        list.map((ingredientObjet) => (
          <Ingredient key={ingredientObjet.id} {...ingredientObjet} />
        ))
      }
      </ul>
    </div>
  );
};

// == Export
export default ShoppingList;
