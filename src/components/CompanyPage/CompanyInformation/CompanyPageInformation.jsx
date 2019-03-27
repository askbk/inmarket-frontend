import React from 'react';

import './CompanyPageInformation.css';

const companyPageInformation = (props) => (
  <div className="companyPageInformationBox">
  {props.children}
  </div>
);

export default companyPageInformation;