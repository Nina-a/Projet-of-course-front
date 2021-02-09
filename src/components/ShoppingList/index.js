/* eslint-disable react/jsx-no-undef */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Pdf from 'react-to-pdf';
import Ingredient from './ingredient';
// == Import
import './style.scss';

// == Composant
const ShoppingList = ({ shoppingList }) => {
  const options = {
    orientation: 'landscape',
  };
  const ref = React.createRef();
  return (
    <div className="shoppingList">
      <h1 className="shoppingList-title">Liste de courses</h1>
      <Pdf targetRef={ref} filename="liste de course.pdf" options={options}>
        {({ toPdf }) => <button type="button" className="btn btn-success" onClick={toPdf}>Télécharger ma liste</button>}
      </Pdf>
      <div className="list-wrapper" ref={ref}>
        <h2 className="shoppingList-title-h2">Qté & Produit</h2>
        <ul className="col">
          {
          shoppingList.map((ingredientObjet) => (
            <Ingredient key={ingredientObjet.ingredient_id} {...ingredientObjet} />
          ))
        }
        </ul>
      </div>
      <button type="button" className="btn btn-danger">Editer ma liste</button>
    </div>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
};
// == Export
export default ShoppingList;
