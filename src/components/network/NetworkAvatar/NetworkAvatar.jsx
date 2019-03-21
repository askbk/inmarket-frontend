import React from 'react';
import './NetworkAvatar.css';
import {Chip} from 'framework7-react';

//import picture
import ProfilePic from '../../../../assets-src/IMG_1318.jpg';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="avatarNetworkContainer">
        <div className = 'avatarNetworkImageContainer'>
          <img className='avatarNetworkImage' src={ProfilePic} />
        </div>
        <div className="avatarNetworkLabelContainer">
          <Chip className = "avatarNetworkRequestLabel color-theme-green" text="Ber om kontakt"/>
        </div>
      </div>
    );
  }
}
