import React from 'react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const information = "Endre Medhus, Junior";
    const contactRequest = true;

    return (
      <div className="row">
        <div className="col-4">
          <img className="profileImageNetwork" src=""></img>
        </div>
        <div className="col-8">
          <div className="row">
            <h1>{information}</h1>
          </div>
          <div className="row">
            <h1>{contactRequest ? "Har sendt deg en kontaktforespørsel" : ""}</h1>
          </div>
        </div>
      </div>

    );
  }
}
