import React from 'react';
import '../../../css/conversationsActivitiesInstanceShared.css';
import ConversationsMessageAvatar from '../../Conversations/ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ActivitiesInstanceText from '../ActivitiesInstanceText/ActivitiesInstanceText.jsx';
import ActivitiesInstanceButtons from '../ActivitiesInstanceButtons/ActivitiesInstanceButtons.jsx';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="conversationsActivitiesInstanceInnerContainer">
        <div className="conversationsActivitiesAvatarOuterContainer">
            <ConversationsMessageAvatar/>
        </div>
        <div className="conversationActivitiesTextOuterContainer">
            <ActivitiesInstanceText/>
        </div>
        <div className="conversationActivitiesReactOuterContainer  activitiesButtonsContainer">
            <ActivitiesInstanceButtons/>
        </div>
      </div>
    );
  }
}