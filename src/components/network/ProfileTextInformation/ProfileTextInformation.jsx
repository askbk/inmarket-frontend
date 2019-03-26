import React from 'react';
import './ProfileTextInformation.css';
import StarRatings from '../../../../node_modules/react-star-ratings';


//import picture
import ProfilePic from '../../../../assets-src/IMG_1318.jpg';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const name = "Endre Medhus, 21";
    const institution = "Konsulent, Junior Consulting";

    return (
    <div className = "profileTextInformationNetworkContainer">
        <div className="profileTextInformationNetworkName">
            <p>{name}</p>
        </div>
        <div className="profileTextInformationNetworkInstitution">
            <p>{institution}</p>
        </div>
        <div className="profileTextInformationNetworkProgressContainer">
            <StarRatings starDimension="20px" starSpacing="2px" rating={4.2} starRatedColor="#c08d42" starEmptyColor="black"/>
        </div>
    </div>
    );
  }
}
