import React from 'react';
import StarRatings from '../../../../node_modules/react-star-ratings';

import {
  Card,
  Button
} from 'framework7-react';


import './Match.css';


//import temp data
import ProfilePic from '../../../../assets-src/IMG_1318.jpg';
const institution = "Konsulent, Junior Consulting";

const Match = (props) => (
  <Card className="Match" strong>
    <div className = 'avatarContainer'>
      <img className='avatarImage' src={ProfilePic} />
    </div>

    <div>
        <div className="profileTextName">
            {/*Hardcoded age for now*/}
            <p>{props.user.first_name + ' ' + props.user.last_name}, 21</p>
        </div>
        <div className="profileTextInstitution">
            <p>{institution}</p>
        </div>
        <div className="profileTextProgressContainer">
            <StarRatings starDimension="20px" starSpacing="2px" rating={4.2} starRatedColor="#c08d42" starEmptyColor="black"/>
        </div>
    </div>
    {/* hacky styling for now */}
    <Button style={{margin: '0 0 .5rem 0'}} fill>Kontakt</Button>
  </Card>
);

export default Match;
