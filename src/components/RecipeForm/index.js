import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Field from './Field';
import './style.scss';
import { fetchIngredient } from '../../actions/ingredients';
import { fetchCategories } from '../../actions/categories';
import { fetchQuantities } from '../../actions/quantities';
import { useState } from 'react';
import IngredientsForm from './IngredientsForm';

const RecipeForm = ({
  sendForm,
  listCategories,
  listIngredients,
  listQuantities,
}) => {
  const dispatch = useDispatch();

  const [ingredientsWithQuantie, setIngredientsWithQuantie] = useState([]);

  const handleSubmitInternal = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);


    console.log(ingredientsWithQuantie);
    return;

    // console.log(formData.getAll('ingredients[]'));
    // console.log(formData.getAll('quantity[]'));

    debugger;
    sendForm({
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      category: formData.get('category'),
      ingredient: formData.get('ingredient'),
      description: formData.get('description'),
      serving: parseInt(formData.get('serving'), 10),
    });
  };

  useEffect(() => {
    dispatch(fetchIngredient());
    dispatch(fetchCategories());
    dispatch(fetchQuantities());
  }, []);

  return (
    <div className="recipe-form">
      <form autoComplete="off" className="recipe-form-element" onSubmit={handleSubmitInternal}>
        <Field
          name="title"
          title="titre de la recette"
          placeholder="titre"
        />
        <Field
          name="subtitle"
          type="text"
          placeholder="sous-titre"
        />
        <div className="field input-group">
          <select name="category" className="custom-select">
            <option value="">Sélectionner la catégorie</option>
            {listCategories.map((category) => <option value="{category.id}">{category.title}</option>)}
          </select>
        </div>
        <IngredientsForm listIngredients={listIngredients} setIngredientsWithQuantie={setIngredientsWithQuantie} ingredientsWithQuantie={ingredientsWithQuantie} />
        <div className="field input-group">
          <textarea className="form-control" rows="6" name="description" placeholder="écrire les étapes ici" />
        </div>
        <Field
          name="picture"
          type="file"
          placeholder="photo de la recette"
        />
        <Field
          name="serving"
          type="number"
          placeholder="indiquer le nombre de personnes"
        />

        {
          /**
          <Field
          name="private"
          type="select"
          onChange={changeField}
          value={private}
        />
         */
        }
        <button
          type="submit"
          className="recipe-form-button"
        >
          Sauvegarder la recette
        </button>
      </form>
    </div>
  );
};

RecipeForm.propTypes = {
  sendForm: PropTypes.func.isRequired,
  listCategories: PropTypes.array.isRequired,
  listIngredients: PropTypes.array.isRequired,
};

export default RecipeForm;
