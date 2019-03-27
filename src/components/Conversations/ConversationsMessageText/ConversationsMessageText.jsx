import React from 'react';
import './ConversationsMessageText.css';
import {Block} from 'framework7-react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const name = "Endre Braut Medhus";
    const content = "This is a message for everyone who goes a";// long way at following what we do and how things are getting along with each other circumstances are pushing us to renew.";
    const time = "12.03";

    return (
      <Block strong inset className="conversationsMessageTextInnerContainer">
        <div className="conversationsMessageTextContentContainer">
            <div className="conversationsMessageTextNameContainer">
                <h1>{name}</h1>
            </div>
            <div className="conversationsMessageTextMessageContainer">
                <p>{content}</p>
            </div>
        </div>
        <div className="conversationsMessageTextTimeContainer">
            <p className="conversationsMessageTextTime">{time}</p>
        </div>
      </Block>
    );
  }
}