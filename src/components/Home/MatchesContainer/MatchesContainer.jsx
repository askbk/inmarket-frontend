import React from 'react';

import {
  Block,
  List,
  ListItem,
  Row,
  Col,
} from 'framework7-react';

import Match from '../Match/Match.jsx'

import './MatchesContainer.css';

const MatchesContainer = (props) => (
  <Block className="MatchesContainer" strong >
  {props.users.map(u=> <Match key={u.id} user={u} />)}
  </Block>
);

export default MatchesContainer;
