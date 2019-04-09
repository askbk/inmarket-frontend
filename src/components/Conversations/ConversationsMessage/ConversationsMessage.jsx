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

    const url = '/conversations/' + this.props.chat_id;
    
    return (
      <Link className="conversationsMessageLink" href = {url}>
      <div className="conversationsActivitiesInstanceInnerContainer">
        <div className="conversationsActivitiesAvatarOuterContainer">
            <ConversationsMessageAvatar 
              time_stamp = {this.props.time_stamp} 
              avatar_img = {this.props.avatar_img} />
        </div>
        <div className="conversationActivitiesTextOuterContainer">
            <ConversationsMessageText 
              chat_name = {this.props.chat_name} 
              last_message = {this.props.last_message} 
              time_stamp = {this.props.time_stamp}/>
        </div>
        <div className="conversationActivitiesReactOuterContainer">
            <ConversationsMessageReact/>
        </div>
      </div>
      </Link>
    );
  }
}