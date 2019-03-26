import React from 'react';

//import pictures
import temp from '../../../../assets-src/CompanyPage/DefaultCompanyPage.png';

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
    <span className="profilePageHeaderText-3">
    Torggata 15, 0181 Oslo {/* props.adress */}
    </span>
    </div>
    </div>
);


export default profilePageHeader;