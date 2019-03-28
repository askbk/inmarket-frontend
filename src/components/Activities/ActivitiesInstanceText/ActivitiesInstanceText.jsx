import React from 'react';
import '../../../css/conversationsActivititesTextShared.css';
import {Block} from 'framework7-react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const header = "Intervju - InMarket";
    const date = "12.03.19";
    const time = "1400-1500";
    const informationText = "Dette er litt informasjon om hva aktiviteten kommer til å gå ut på.";
    var information = (<div></div>);
    if (informationText !== ""){
        information = (
            <div className="conversationsActivitiesTextMessageContainer activitiesTextInformation">
                <p>{informationText}</p>
            </div>);
    } 
    const address = "Wessels Gate 20A";

    return (
      <Block strong inset className="conversationsActivitiesTextInnerContainer">
        <div className="conversationsActivitiesTextContentContainer">
            <div className="conversationsActivitiesTextHeaderContainer">
                <h1>{header}</h1>
            </div>
            <div className="conversationsActivitiesTextMessageContainer">
                <p>{date}</p>
            </div>
            <div className="conversationsActivitiesTextMessageContainer">
                <p>{time}</p>
            </div>
            {information}
            <div className="conversationsActivitiesTextMessageContainer activitiesTextAddress">
                <p>{address}</p>
            </div>
        </div>
      </Block>
    );
  }
}