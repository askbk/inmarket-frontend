import React from 'react';

import './InformationBox.css';

const informationPage = (props) => (
  <div className="informationBox">
  {props.children}
  </div>
);

export default informationPage;