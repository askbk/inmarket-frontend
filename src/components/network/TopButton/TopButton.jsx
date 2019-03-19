import React from 'react';
import {Button} from 'framework7-react';
import './TopButton.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="topButtonContainer">
        <Button className="topButton" fill>Kontakter</Button>
      </div>
    );
  }
}
