import React from 'react';
import './ConversationsMessage.css';
import ConversationsMessageAvatar from '../ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ConversationsMessageText from '../ConversationsMessageText/ConversationsMessageText.jsx';
import ConversationsMessageReact from '../ConversationsMessageReact/ConversationsMessageReact.jsx';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="conversationsMessageInnerContainer">
        <div className="conversationsMessageAvatarOuterContainer">
            <ConversationsMessageAvatar/>
        </div>
        <div className="conversationMessageTextOuterContainer">
            <ConversationsMessageText/>
        </div>
        <div className="conversationMessageReactIconOuterContainer">
            <ConversationsMessageReact/>
        </div>
      </div>
    );
  }
}