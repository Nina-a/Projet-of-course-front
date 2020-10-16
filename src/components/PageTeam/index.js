import React from 'react';

// == Import style
import './style.scss';
import {
  Card,
  CardDeck,
} from 'react-bootstrap';

// == import photos équipe
import aurore from './photos-team/Aurore-teamofcourse.jpg';
import nina from './photos-team/Nina-teamofcourse.jpg';
import cyril from './photos-team/Cyril-teamofcourse.jpg';
// eslint-disable-next-line import/no-unresolved
import anthony from './photos-team/Anthony-teamofcourse.png';

const PageTeam = () => (
  <div className="page-team">
    <h1> La Team Of'Course <br />(Tous développeurs!)</h1>
    <CardDeck>
      <Card>
        <Card.Img className="phototeam" variant="top" src={nina} />
        <Card.Title>Nina Le Duc</Card.Title>
        <Card.Title>Product Owner & Scrum Master</Card.Title>
      </Card>
      <Card>
        <Card.Img className="phototeam" variant="top" src={aurore} />
        <Card.Title>Aurore Fayet</Card.Title>
        <Card.Title>Lead dev Front</Card.Title>
      </Card>
      <Card>
        <Card.Img className="phototeam" variant="top" src={anthony} />
        <Card.Title>Anthony Maillard</Card.Title>
        <Card.Title>Lead dev Back</Card.Title>
      </Card>
      <Card>
        <Card.Img className="phototeam" variant="top" src={cyril} />
        <Card.Title>Cyril Rufin</Card.Title>
        <Card.Title>Git Master</Card.Title>
      </Card>
    </CardDeck>
  </div>
);
export default PageTeam;
