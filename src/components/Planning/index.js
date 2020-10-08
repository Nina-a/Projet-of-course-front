// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Pdf from 'react-to-pdf';

// == Import
import './style.css';

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
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button type="button" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
    <div className="planning">
      <section className="main">

        <div className="rm-wrapper">

          <div className="rm-content" ref={ref}>

            <h4>Lundi</h4>
            <dl>
              <dt>Midi </dt>
              <dd>Entrée : {lundi_midi.Entrée.title}</dd>
              <dd>Plat : {lundi_midi.Plat.title}</dd>
              <dd>Dessert {lundi_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {lundi_soir.Entrée.title}</dd>
              <dd>Plat : {lundi_soir.Plat.title}</dd>
              <dd>Dessert {lundi_soir.Dessert.title}</dd>
            </dl>

            <h4>Mardi</h4>
            <dl>
              <dt>Midi </dt>
              <dd>Entrée : {mardi_midi.Entrée.title}</dd>
              <dd>Plat : {mardi_midi.Plat.title}</dd>
              <dd>Dessert {mardi_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {mardi_soir.Entrée.title}</dd>
              <dd>Plat : {mardi_soir.Plat.title}</dd>
              <dd>Dessert {mardi_soir.Dessert.title}</dd>
            </dl>

            <h4>Mercredi</h4>
            <dl>
              <dt>Midi</dt>
              <dd>Entrée : {mercredi_midi.Entrée.title}</dd>
              <dd>Plat : {mercredi_midi.Plat.title}</dd>
              <dd>Dessert {mercredi_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {mercredi_soir.Entrée.title}</dd>
              <dd>Plat : {mercredi_soir.Plat.title}</dd>
              <dd>Dessert {mercredi_soir.Dessert.title}</dd>
            </dl>

            <h4>Jeudi</h4>
            <dl>
              <dt>Midi</dt>
              <dd>Entrée : {jeudi_midi.Entrée.title}</dd>
              <dd>Plat : {jeudi_midi.Plat.title}</dd>
              <dd>Dessert {jeudi_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {jeudi_soir.Entrée.title}</dd>
              <dd>Plat : {jeudi_soir.Plat.title}</dd>
              <dd>Dessert {jeudi_soir.Dessert.title}</dd>
            </dl>

            <h4>Vendredi</h4>
            <dl>
              <dt>Midi</dt>
              <dd>Entrée : {vendredi_midi.Entrée.title}</dd>
              <dd>Plat : {vendredi_midi.Plat.title}</dd>
              <dd>Dessert {vendredi_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {vendredi_soir.Entrée.title}</dd>
              <dd>Plat : {vendredi_soir.Plat.title}</dd>
              <dd>Dessert {vendredi_soir.Dessert.title}</dd>
            </dl>

            <h4>Samedi</h4>
            <dl>
              <dt>Midi</dt>
              <dd>Entrée : {samedi_midi.Entrée.title}</dd>
              <dd>Plat : {samedi_midi.Plat.title}</dd>
              <dd>Dessert {samedi_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {samedi_soir.Entrée.title}</dd>
              <dd>Plat : {samedi_soir.Plat.title}</dd>
              <dd>Dessert {samedi_soir.Dessert.title}</dd>
            </dl>

            <h4>Dimanche</h4>
            <dl>
              <dt>Midi</dt>
              <dd>Entrée : {dimanche_midi.Entrée.title}</dd>
              <dd>Plat : {dimanche_midi.Plat.title}</dd>
              <dd>Dessert {dimanche_midi.Dessert.title}</dd>

              <dt>Soir</dt>
              <dd>Entrée : {dimanche_soir.Entrée.title}</dd>
              <dd>Plat : {dimanche_soir.Plat.title}</dd>
              <dd>Dessert {dimanche_soir.Dessert.title}</dd>
            </dl>
          </div>
        </div>
      </section>
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
