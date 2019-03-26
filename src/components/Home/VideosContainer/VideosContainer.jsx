import React from 'react';

import {
  Block,
  List,
  ListItem,
  Row,
  Col,
} from 'framework7-react';

import Video from '../Video/Video.jsx'

import './VideosContainer.css';

const VideosContainer = (props) => (
  <Block className="VideosContainer" strong>
   {props.users.map(u=> <Video key={u.id} user={u} />)}
  </Block>
);

export default VideosContainer;
