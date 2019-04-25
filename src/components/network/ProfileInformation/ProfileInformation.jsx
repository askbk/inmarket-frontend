import React from 'react';
import './ProfileInformation.css';

//import picture
import ProfilePic from '../../../../assets-src/IMG_1318.jpg';
import NetworkAvatar from '../NetworkAvatar/NetworkAvatar.jsx';
import ProfileTextInformation from '../ProfileTextInformation/ProfileTextInformation.jsx';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
        
      <div className = 'profileInformationContainer'>
          <NetworkAvatar/>
          <ProfileTextInformation 
            name = {this.props.name} 
            birth ={this.props.birth} 
            role = {this.props.role} 
            workplace = {this.props.workplace} 
            rating = {this.props.rating}/>
      </div>
    );
  }
}
