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

    const noContact = (
      <Chip className = "avatarNetworkLabel color-theme-red" text="Ingen kontakt"/>
    )

    const request = (
      <Chip className = "avatarNetworkLabel avatarNetworkRequestLabel color-theme-green" text="Ber om kontakt"/>
    )

    const contact = (
      <Chip className = "avatarNetworkLabel color-theme-green" text="Har kontakt"/>
    )

    const requested = (
      <Chip className = "avatarNetworkLabel color-theme-orange" text="Forespurt"/>
    )

    return (
      <div className="avatarNetworkContainer">
        <div className = 'avatarNetworkImageContainer'>
          <img className='avatarNetworkImage' src={ProfilePic} />
        </div>
        <div className="avatarNetworkLabelContainer">
          {request}
        </div>
      </div>
    );
  }
}
