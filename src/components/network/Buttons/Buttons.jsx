import React from 'react';
import {Button, Row, Col, Block} from 'framework7-react';
import './Buttons.css'

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="buttonsContainer">
        <Button small className=" button svartButton" fill>Aksepter</Button>
        <Button small className="button" fill>Ikke Aksepter</Button>
      </div>
    );
  }
}
