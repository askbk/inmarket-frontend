import React from 'react';

//import pictures
import temp from '../../../../assets-src/ProfilePage/temp.png';

//import component
import StarRatings from '../../../../node_modules/react-star-ratings';

//import styling
import './ProfilePageHeader.css';

const profilePageHeader = (props) => (
    <div className="profilePageHeaderContainer">
    <div className="profilePageLeftRow"><span className="profilePageHeaderPic"><img src={temp} /></span></div>
    <div className="profilePageRightRow">
    <span className="profilePageHeaderText-1">
    Ask Kolltveit, 21
 {/*props.title*/}
    </span>
    <span className="profilePageHeaderText-2">Masterstudent, NTNU
 {/* props.subtext */}
    </span>
    <div className="profileTextInformationNetworkProgressContainer">
            <StarRatings starDimension="20px" starSpacing="2px" rating={4.7} starRatedColor="#c08d42" starEmptyColor="black"/>
    </div>
    <span className="profilePageHeaderText-3">
   Tidligere arbeidsplasser {/* props.adress */}
    </span>
    </div>
    </div>
);


export default profilePageHeader;