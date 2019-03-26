import React from 'react';
import './ConversationsMessageText.css';
import {Block} from 'framework7-react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const name = "Endre";
    const content = "This is a message";
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