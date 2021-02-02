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
              <option value="1">Lundi midi</option>
              <option value="2">Lundi soir</option>
              <option value="3">Mardi midi</option>
              <option value="4">Mardi soir</option>
              <option value="5">Mercredi midi</option>
              <option value="6">Mercredi soir</option>
              <option value="7">Jeudi midi</option>
              <option value="8">Jeudi soir</option>
              <option value="9">Vendredi midi</option>
              <option value="10">Vendredi soir</option>
              <option value="11">Samedi midi</option>
              <option value="12">Samedi soir</option>
              <option value="13">Dimanche midi</option>
              <option value="14">Dimanche soir</option>
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
