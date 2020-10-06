/* eslint-disable react/jsx-no-undef */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './ingredient';
// == Import
import './style.scss';

let groupBy = function (xs, key) {
  return xs.reduce(function(rv, x) {
    let tmp = x[key];
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

// == Composant
const ShoppingList = (props) => {
  const { list } = props;
  console.log(list.length);
  console.log(list);

  let ss = list.map(e => e.ingredient);
  let tt = groupBy(ss.flat(), 'id');

  console.log(tt);

  return (
    <div className="shoppingList">
    <h1 className="shoppingList-title">Liste de courses</h1>
      <div class="list-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th>Qté & Produit</th>
            </tr>
          </thead>
        <ul>
          {
          list.map((ingredientObjet) => (
            <Ingredient key={ingredientObjet.id} {...ingredientObjet} />
          ))
        }
        </ul>
        </table>
      </div>
      <button type="button" class="btn btn-danger">Editer ma liste</button>
      <button type="button" class="btn btn-success" OnClick="javascript:window.print()">Imprimer ma liste</button>
    </div>
  );
};

// == Export
export default ShoppingList;
