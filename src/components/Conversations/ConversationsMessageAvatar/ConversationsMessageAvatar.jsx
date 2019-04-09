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
    
    const time_stamp = new Date(this.props.time_stamp);
    const now = new Date(Date.now());
    console.log(time_stamp.getTime());
    console.log(now.getTime());
    let timeSince = parseInt((parseInt(now.getTime()) - parseInt(time_stamp.getTime()))/(1000*60)) ;
    console.log(timeSince)
    let chipClass = "avatarMessageLabel color-theme-green";
    if (timeSince > 60*60*1000){
      chipClass = "avatarMessageLabel color-theme-red";
      timeSince = parseInt(timeSince / (60*24));
    }

    return (
      <div className="avatarMessageContainer">
        <div className = 'avatarMessageImageContainer'>
          <img className='avatarMessageImage' src={ProfilePic} />
        </div>
        <div className="avatarMessageLabelContainer">
            <Chip className = {chipClass} text={timeSince}/>
        </div>
      </div>
    );
  }
}
