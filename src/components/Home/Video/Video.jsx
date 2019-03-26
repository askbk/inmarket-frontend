import React from 'react';

import {
  Card
} from 'framework7-react';

import './Video.css';

const Video = (props) => (
  <Card className="Video" strong>
   {props.user.first_name + ' ' + props.user.last_name}
  </Card>
);

export default Video;
