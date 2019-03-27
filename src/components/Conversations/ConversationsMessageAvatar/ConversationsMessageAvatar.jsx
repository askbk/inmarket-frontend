import React from 'react';
import './ConversationsMessageAvatar.css';
import {Chip} from 'framework7-react';

//import picture
import ProfilePic from '../../../../assets-src/IMG_1318.jpg';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const noContact = (
      <Chip className = "avatarMessageLabel color-theme-red" text="Ingen kontakt"/>
    )

    const numberOfMinutes = "10 min"

    return (
      <div className="avatarMessageContainer">
        <div className = 'avatarMessageImageContainer'>
          <img className='avatarMessageImage' src={ProfilePic} />
        </div>
        <div className="avatarMessageLabelContainer">
            <Chip className = "avatarMessageLabel color-theme-green" text={numberOfMinutes}/>
        </div>
      </div>
    );
  }
}
