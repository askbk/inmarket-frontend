import React from 'react';
import {Button, Row, Col, Block} from 'framework7-react';
import './Buttons.css'

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const noContact = (
      <Button small className="networkContactButton" fill>Kontakt</Button>
    );
  
    const request = (
      <div>
        <Button small className="networkRequestButton color-theme-green" fill>Aksepter</Button>
        <Button small className="networkRequestButton color-theme-red" fill>Avlys</Button>
      </div>
    );
  
    const contact = (
      <div>
        <Button small className="networkViewButton" fill>Se logg</Button>
        <Button small className="networkViewButton" fill>Inviter</Button>
      </div>
    );

    const requested = (<div></div>);
  

    return (
      <div className="buttonsContainer">
        {request}
      </div>
    );
  }
}
