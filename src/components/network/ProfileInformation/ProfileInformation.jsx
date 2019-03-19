import React from 'react';
import './ProfileInformation.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const information = "Endre Medhus, Junior";
    const contactRequest = true;


    return (
      <div className="row">
        <div className = 'profileImageNetworkContainer'>
          <img className="profileImageNetwork" src=""></img>
        </div>
        <div className = "profileInformationNetworkContainer">
          <div className="row">
            <h1>{information}</h1>
          </div>
          <div className="row">
            <p>{contactRequest ? "Har sendt deg en kontaktforespørsel" : ""}</p>
          </div>
        </div>
      </div>

    );
  }
}
