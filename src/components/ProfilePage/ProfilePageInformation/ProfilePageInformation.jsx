import React from 'react';

import './ProfilePageInformation.css';

const profilePageInformation = (props) => (
  <div className="profilePageInformationBox">
  {props.children}
  </div>
);

export default profilePageInformation;