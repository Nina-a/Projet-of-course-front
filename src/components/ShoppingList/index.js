/* eslint-disable react/jsx-no-undef */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './ingredient';
// == Import
import './style.scss';

// == Composant
const ShoppingList = ({ shoppingList }) => {
  console.log(shoppingList);
  return (
    <div className="shoppingList">
      <h1 className="shoppingList-title">Liste de courses</h1>
      <div className="list-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Qté & Produit</th>
            </tr>
          </thead>
          <ul>
            {
          shoppingList.map((ingredientObjet) => (
            <Ingredient key={ingredientObjet.id} {...ingredientObjet} />
          ))
        }
          </ul>
        </table>
      </div>
      <button type="button" className="btn btn-danger">Editer ma liste</button>
      <button type="button" className="btn btn-success" OnClick="javascript:window.print()">Imprimer ma liste</button>
    </div>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
};
// == Export
export default ShoppingList;
