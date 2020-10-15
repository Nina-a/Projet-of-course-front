import { connect } from 'react-redux';
import CardRecipe from '../components/Recipes/recipe';
import { addToPlanning } from '../actions/recipes';
// import reducerrecipes from '../reducers/reci

const mapStateToProps = (state) => {
  console.log(state);
  return {
    lundi_midi: state.planning[1],
    lundi_soir: state.planning[2],
    mardi_midi: state.planning[3],
    mardi_soir: state.planning[4],
    mercredi_midi: state.planning[5],
    mercredi_soir: state.planning[6],
    jeudi_midi: state.planning[7],
    jeudi_soir: state.planning[8],
    vendredi_midi: state.planning[9],
    vendredi_soir: state.planning[10],
    samedi_midi: state.planning[11],
    samedi_soir: state.planning[12],
    dimanche_midi: state.planning[13],
    dimanche_soir: state.planning[14],
    isLogged: state.user.isLogged,
  };
};
// == Besoin de consulter et d'envoyer des informations
// == On a besoin des ingrédients des listes des recettes ajouter par l'utilisateur
const mapDispatchToProps = (dispatch) => ({
  addToPlanning: (title, value, category) => {
    dispatch(addToPlanning(title, value, category));
  },
});
// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks

export default connect(mapStateToProps, mapDispatchToProps)(CardRecipe);
