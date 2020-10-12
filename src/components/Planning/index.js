// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Pdf from 'react-to-pdf';

// == Import
import './planning.css';

// == Composant

const Planning = ({
  lundi_midi,
  lundi_soir,
  mardi_midi,
  mardi_soir,
  mercredi_midi,
  mercredi_soir,
  jeudi_midi,
  jeudi_soir,
  vendredi_midi,
  vendredi_soir,
  samedi_midi,
  samedi_soir,
  dimanche_midi,
  dimanche_soir,
  ref = React.createRef(),
}) => (
  <div>
    <div className="print">
      <Pdf targetRef={ref} filename="planning.pdf">
        {({ toPdf }) => <button type="button" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
    <div className="containerplanning">
      <div className="heading">
        <h1>Menu de la semaine</h1>
      </div>

      <div className="row">

        <div className="cardplanning">

          <div className="cardplanning-header">
            <h1>Lundi</h1>
          </div>

          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>

        </div>

        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1>Mardi</h1>
          </div>
          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1>Mercredi</h1>
          </div>
          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1>Jeudi</h1>
          </div>
          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1>Vendredi</h1>
          </div>
          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1>Samedi</h1>
          </div>
          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1>Dimanche</h1>
          </div>
          <div className="cardplanning-body">
            <h3>Midi</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
            <h3>Soir</h3>
            <ul>
              <li>Entréé</li>
              <li>Plat</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <button className="outline">Retour à la liste de course</button>
      </div>
    </div>
  </div>
);

Planning.propTypes = {
  // -------------- LUNDI ---------------
  lundi_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  lundi_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // -------------- MARDI ---------------
  mardi_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  mardi_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // -------------- MERCREDI ---------------
  mercredi_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  mercredi_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // --------------JEUDI ---------------
  jeudi_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  jeudi_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // -------------- VENDREDI ---------------
  vendredi_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  vendredi_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // -------------- SAMEDI ---------------
  samedi_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  samedi_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  // -------------- DIMANCHE ---------------
  dimanche_midi: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  dimanche_soir: PropTypes.shape({
    Entrée: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Plat: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    Dessert: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
// == Export
export default Planning;
