import React from 'react';

//import pictures
import CompanyPagePic from '../../../../assets-src/CompanyPage/DefaultCompanyPage.png';

//import styling
import './CompanyPageHeader.css';

const companyPageHeader = (props) => (
    <div className="companyPageHeaderContainer">
    <div className="companyPageLeftRow"><span className="companyPageHeaderPic"><img src={CompanyPagePic} /></span></div>
    <div className="companyPageRightRow">
    <span className="companyPageHeaderText-1">
    InMarket AS {/*props.title*/}
    </span>
    <span className="companyPageHeaderText-2">Teknologi, kompetansebygging {/* props.subtext */}
    </span>
    <span className="companyPageHeaderText-3">
    Torggata 15, 0181 Oslo {/* props.adress */}
    </span>
    </div>
    </div>
);


export default companyPageHeader;