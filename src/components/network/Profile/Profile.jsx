import React from 'react';
import Buttons from '../Buttons/Buttons.jsx';
import ProfileInformation from '../ProfileInformation/ProfileInformation.jsx'
import './Profile.css'

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){


    return (
      <div className="row">
        <div className = 'profileInformationContainer'>
          <ProfileInformation/>
        </div>
        <div className = 'profileButtonContainer'>
          <Buttons/>
        </div>
      </div>
    );
  }
}
