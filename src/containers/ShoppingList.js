import { connect } from 'react-redux';
import ShoppingList from '../components/ShoppingList';

// == Besoin de consulter et d'envoyer des informations
// == On a besoin des ingrédients des listes des recettes ajouter par l'utilisateur
const mapState = (state) => {
  console.log(state);
  return {
    shoppingList: state.reducerShoppingList.shoppingList,
  };
};

// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks
const mapDispatch = null;

export default connect(mapState, mapDispatch)(ShoppingList);
