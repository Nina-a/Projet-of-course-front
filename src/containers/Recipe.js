import { connect } from 'react-redux';
import CardRecipe from '../components/Recipes/recipe';
// import reducerrecipes from '../reducers/reci

const mapState = null;
// == Besoin de consulter et d'envoyer des informations
// == On a besoin des ingrédients des listes des recettes ajouter par l'utilisateur
const mapDispatch = null;
// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks

export default connect(mapState, mapDispatch)(CardRecipe);
