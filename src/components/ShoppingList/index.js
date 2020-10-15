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
  const ref = React.createRef();
  console.log(shoppingList);
  return (
    <div className="shoppingList">
      <h1 className="shoppingList-title">Liste de courses</h1>
      <div className="list-wrapper">
        <table className="table" ref={ref}>
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
      <Pdf targetRef={ref} filename="liste de course.pdf">
        {({ toPdf }) => <button type="button" className="btn btn-success" onClick={toPdf} scale={0.60}>Télécharger ma liste</button>}
      </Pdf>

    </div>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
};
// == Export
export default ShoppingList;
