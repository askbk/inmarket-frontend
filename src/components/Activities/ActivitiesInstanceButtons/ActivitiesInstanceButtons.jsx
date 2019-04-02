import React from 'react';
import {Button, Row, Col, Block} from 'framework7-react';
import './ActivitiesInstanceButtons.css'

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const accepted = true;
    const canceled = false;
    var acceptButtonClass = "activitiesInstanceButton";
    var postponedButtonClass = "activitiesInstanceButton regularActivitiesInstanceButton";
    var canceledButtonClass = "activitiesInstanceButton";

    if(accepted){
        acceptButtonClass += " acceptedButton color-theme-green";
    } else{
        acceptButtonClass += " regularActivitiesInstanceButton";
    }
    if(canceled){
        canceledButtonClass += " canceledButton color-theme-red";
    } else{
        canceledButtonClass += " regularActivitiesInstanceButton";
    }


    return (
      <div className="activitiesInstanceButtonsInnerContainer">
        <Button small outline className={acceptButtonClass} fill >{accepted ? "Akseptert" : "Aksepter"}</Button>
        <Button small outline className={postponedButtonClass} fill>Utsett</Button>
        <Button small outline className={canceledButtonClass} fill>{canceled ? "Avbrutt" : "Avbryt"}</Button>
      </div>
    );
  }
}