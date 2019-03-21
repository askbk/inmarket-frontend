import React from 'react';
import { Button } from 'framework7-react';
import './companyPageButton.css';

const companyPageButton = (props) => (
  <Button className="companyPageButton" onClick={props.clicked} raised>{props.children}</Button>
);

export default companyPageButton;