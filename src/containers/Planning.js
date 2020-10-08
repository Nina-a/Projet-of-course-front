import { connect } from 'react-redux';
import planning from '../components/Planning';

const mapState = (state) => {
  console.log(state);
  return {

  };
};

const mapDipatch = null;

export default connect(mapState, mapDipatch)(planning);
