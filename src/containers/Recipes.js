import { connect } from 'react-redux';

import Recipes from '../components/Recipes';

// import reducerrecipes from '../reducers/recipes';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    listEntree: state.reducerrecipes.listEntree,
    listPlat: state.reducerrecipes.listPlat,
    listDessert: state.reducerrecipes.listDessert,
  };
};

const mapDispatchToProps = null;
// == Besoin d'envoyer des actions jusqu'au reducer
// == On aura besoin de modifier la liste en fonction des stocks

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
