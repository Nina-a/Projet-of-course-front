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
  options = {
    unit: 'cm',
    orientation: 'landscape',
  },
}) => (
  <div>

    <div className="containerplanning">
      <h1 className="planning-title">Planning de la semaine</h1>

      <div className="row" ref={ref}>

        <div className="cardplanning">

          <div className="cardplanning-header">
            <h1 className="day">Lundi</h1>
          </div>

          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{lundi_midi.Entrée.title ? `${lundi_midi.Entrée.title}` : '' }</li>
              <li>{lundi_midi.Plat.title ? `${lundi_midi.Plat.title}` : '' }</li>
              <li>{lundi_midi.Dessert.title ? `${lundi_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{lundi_soir.Entrée.title ? `${lundi_soir.Entrée.title}` : '' }</li>
              <li>{lundi_soir.Plat.title ? `${lundi_soir.Plat.title}` : '' }</li>
              <li>{lundi_soir.Dessert.title ? `${lundi_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>

        </div>

        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1 className="day">Mardi</h1>
          </div>
          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{mardi_midi.Entrée.title ? `${mardi_midi.Entrée.title}` : '' }</li>
              <li>{mardi_midi.Plat.title ? `${mardi_midi.Plat.title}` : '' }</li>
              <li>{mardi_midi.Dessert.title ? `${mardi_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{mardi_soir.Entrée.title ? `${mardi_soir.Entrée.title}` : '' }</li>
              <li>{mardi_soir.Plat.title ? `${mardi_soir.Plat.title}` : '' }</li>
              <li>{mardi_soir.Dessert.title ? `${mardi_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1 className="day">Mercredi</h1>
          </div>
          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{mercredi_midi.Entrée.title ? `${mercredi_midi.Entrée.title}` : '' }</li>
              <li>{mercredi_midi.Plat.title ? `${mercredi_midi.Plat.title}` : '' }</li>
              <li>{mercredi_midi.Dessert.title ? `${mercredi_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{mercredi_soir.Entrée.title ? `${mercredi_soir.Entrée.title}` : '' }</li>
              <li>{mercredi_midi.Plat.title ? `${mercredi_soir.Plat.title}` : '' }</li>
              <li>{mercredi_soir.Dessert.title ? `${mercredi_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1 className="day">Jeudi</h1>
          </div>
          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{jeudi_midi.Entrée.title ? `${jeudi_midi.Entrée.title}` : '' }</li>
              <li>{jeudi_midi.Plat.title ? `${jeudi_midi.Plat.title}` : '' }</li>
              <li>{jeudi_midi.Dessert.title ? `${jeudi_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{jeudi_soir.Entrée.title ? `${jeudi_soir.Entrée.title}` : '' }</li>
              <li>{jeudi_midi.Plat.title ? `${jeudi_soir.Plat.title}` : '' }</li>
              <li>{jeudi_soir.Dessert.title ? `${jeudi_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1 className="day">Vendredi</h1>
          </div>
          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{vendredi_midi.Entrée.title ? `${vendredi_midi.Entrée.title}` : '' }</li>
              <li>{vendredi_midi.Plat.title ? `${vendredi_midi.Plat.title}` : '' }</li>
              <li>{vendredi_midi.Dessert.title ? `${vendredi_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{vendredi_soir.Entrée.title ? `${vendredi_soir.Entrée.title}` : '' }</li>
              <li>{vendredi_soir.Plat.title ? `${vendredi_soir.Plat.title}` : '' }</li>
              <li>{vendredi_soir.Dessert.title ? `${vendredi_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1 className="day">Samedi</h1>
          </div>
          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{samedi_midi.Entrée.title ? `${samedi_midi.Entrée.title}` : '' }</li>
              <li>{samedi_midi.Plat.title ? `${samedi_midi.Plat.title}` : '' }</li>
              <li>{samedi_midi.Dessert.title ? `${samedi_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{samedi_soir.Entrée.title ? `${samedi_soir.Entrée.title}` : '' }</li>
              <li>{samedi_soir.Plat.title ? `${samedi_soir.Plat.title}` : '' }</li>
              <li>{samedi_soir.Dessert.title ? `${samedi_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>
        </div>
        <div className="cardplanning">
          <div className="cardplanning-header">
            <h1 className="day">Dimanche</h1>
          </div>
          <div className="cardplanning-body">
            <h3 className="moment">Midi</h3>
            <ul>
              <li>{dimanche_midi.Entrée.title ? `${dimanche_midi.Entrée.title}` : '' }</li>
              <li>{dimanche_midi.Plat.title ? `${dimanche_midi.Plat.title}` : '' }</li>
              <li>{dimanche_midi.Dessert.title ? `${dimanche_midi.Dessert.title}` : '' }</li>
            </ul>
            <h3 className="moment">Soir</h3>
            <ul>
              <li>{dimanche_soir.Entrée.title ? `${dimanche_soir.Entrée.title}` : '' }</li>
              <li>{dimanche_soir.Plat.title ? `${dimanche_soir.Plat.title}` : '' }</li>
              <li>{dimanche_soir.Dessert.title ? `${dimanche_soir.Dessert.title}` : '' }</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="print">
        <Pdf targetRef={ref} filename="planning.pdf" options={options} scale={0.48}>
          {({ toPdf }) => <button type="button" onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
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
