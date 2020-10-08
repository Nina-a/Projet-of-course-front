import { connect } from 'react-redux';
import planning from '../components/Planning';


const mapStateToProps = (state) => {
  console.log(state);
  console.log(state.planning.planning[1]);

  return {
    lundi_midi: state.planning.planning[1],
    lundi_soir: state.planning.planning[2],
    mardi_midi: state.planning.planning[3],
    mardi_soir: state.planning.planning[4],
    mercredi_midi: state.planning.planning[5],
    mercredi_soir: state.planning.planning[6],
    jeudi_midi: state.planning.planning[7],
    jeudi_soir: state.planning.planning[8],
    vendredi_midi: state.planning.planning[9],
    vendredi_soir: state.planning.planning[10],
    samedi_midi: state.planning.planning[11],
    samedi_soir: state.planning.planning[12],
    dimanche_midi: state.planning.planning[13],
    dimanche_soir: state.planning.planning[14],
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(planning);
