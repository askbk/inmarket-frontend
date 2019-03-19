import React from 'react';
import './ProfileInformation.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const information = "Endre Medhus, Junior Consulting";
    const contactRequest = true;


    return (
        
      <div className = 'profileInformationContainer'>
          <div className = 'profileImageNetworkContainer'>
            <img src="" />
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
