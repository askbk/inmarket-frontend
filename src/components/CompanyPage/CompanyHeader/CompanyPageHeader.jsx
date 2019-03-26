import React from 'react';

//import pictures
import CompanyPagePic from '../../../../assets-src/CompanyPage/DefaultCompanyPage.png';

//import components
import StarRatings from '../../../../node_modules/react-star-ratings';

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
    <div className="profileTextInformationNetworkProgressContainer">
            <StarRatings starDimension="20px" starSpacing="2px" rating={4.2} starRatedColor="#c08d42" starEmptyColor="black"/>
    </div>
    <span className="companyPageHeaderText-3">
    Torggata 15, 0181 Oslo {/* props.adress */}
    </span>
    </div>
    </div>
);


export default companyPageHeader;