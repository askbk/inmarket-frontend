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

    /*const noContact = (
      <Chip className = "avatarMessageLabel color-theme-red" text="Ingen kontakt"/>
    )*/

    const tid = this.props.time_stamp.split(' ')[1];
    let chipClass = 'avatarMessageLabel ';
    if (tid === 'min'){
      chipClass += 'color-theme-green';
    } else if (tid === 'time' || tid === 'timer'){
      chipClass += 'color-theme-orange';
    } else if (tid === 'dag' || tid === 'dager'){
      chipClass += 'color-theme-red';
    }

    return (
      <div className="avatarMessageContainer">
        <div className = 'avatarMessageImageContainer'>
          <img className='avatarMessageImage' src={ProfilePic} />
        </div>
        <div className="avatarMessageLabelContainer">
            <Chip className = {chipClass} text={this.props.time_stamp}/>
        </div>
      </div>
    );
  }
}
