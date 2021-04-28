// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// == Import
import './recipe.scss';

// == Composant
const CardRecipe = ({ recipe, addToPlanning, isLogged }) => {
  console.log(recipe);
  return (
    recipe.map((recipeDetail) => (
      <div key={recipeDetail.id} className="card">
        <img className="card-img-top" src={recipeDetail.picture} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{recipeDetail.title}</h5>
          <div className="divButton">
            {
          isLogged && (
          <Button className="add_to_favorite" variant="success" size="lg">Ajouter au favoris</Button>
          )
        }
            <select
              className="btn btn-info"
              name={recipeDetail.title}
              onChange={(e) => addToPlanning(recipeDetail, e.target.value,
                recipeDetail.categories[0].title)}
            >
            <option value="0">Choississez un jour</option>
              {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"].map((jour, i) => (
                ["midi", "soir"].map((moment, j) => (
                <option value={1+2*i+j} inner>{`${jour} ${moment}`}</option>
              ))))}
            </select>
          </div>
        </div>
      </div>
    ))
  );
};

CardRecipe.propTypes = {
  recipe: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
  addToPlanning: PropTypes.func.isRequired,
};
// == Export
export default CardRecipe;
