import React from 'react';
import {Link} from 'framework7-react';
import '../../../css/conversationsActivitiesInstanceShared.css';
import ConversationsMessageAvatar from '../ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ConversationsMessageText from '../ConversationsMessageText/ConversationsMessageText.jsx';
import ConversationsMessageReact from '../ConversationsMessageReact/ConversationsMessageReact.jsx';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const person_id = "1";
    const url = 'http://localhost:8080/#!/chat/' + person_id;

    return (
      <Link className="conversationsMessageLink" external href = {url}>
      <div className="conversationsActivitiesInstanceInnerContainer">
        <div className="conversationsActivitiesAvatarOuterContainer">
            <ConversationsMessageAvatar/>
        </div>
        <div className="conversationActivitiesTextOuterContainer">
            <ConversationsMessageText/>
        </div>
        <div className="conversationActivitiesReactOuterContainer">
            <ConversationsMessageReact/>
        </div>
      </div>
      </Link>
    );
  }
}