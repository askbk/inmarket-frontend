import React from 'react';
import './ProfileInformation.css';

//import picture
import ProfilePic from '../../../../assets-src/IMG_1318.jpg';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const information = "Endre, Junior Consulting";
    const contactRequest = true;


    return (
        
      <div className = 'profileInformationContainer'>
          <div className = 'profileImageNetworkContainer'>
            <img className='profileInformationImage' src={ProfilePic} />
          </div>
          <div className = "profileInformationNetworkContainer">
            <div className="profileInformationNetworkName">
              <p>{information}</p>
            </div>
            <div className="profileInformationNetworkRequest">
              <p>{contactRequest ? "Har sendt deg en kontaktforespørsel" : ""}</p>
            </div>
          </div>
      </div>
    );
  }
}
