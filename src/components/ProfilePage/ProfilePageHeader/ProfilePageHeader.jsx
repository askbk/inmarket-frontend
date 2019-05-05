import React from 'react';

//import pictures
import temp from '../../../../assets-src/ProfilePage/temp.png';

//import component
import StarRatings from '../../../../node_modules/react-star-ratings';

//import styling
import './ProfilePageHeader.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  getAge(birth){
   const birthdate = new Date(birth);
   const now = new Date(Date.now());
   return parseInt((now.getTime() - birthdate.getTime())/(1000*60*60*24*365));
 }

  render(){

    const {firstName, lastName, birthday, role, institution, rating, formerEmployers} = this.props;
    const age = this.getAge(birthday).toString();
    const basic_info = firstName + " " + lastName + ", " + age;
    const work_info = role + ", " + institution;

    return (
        
      <div className="profilePageHeaderContainer">
      <div className="profilePageLeftRow"><span className="profilePageHeaderPic"><img src={temp} /></span></div>
      <div className="profilePageRightRow">
      <span className="profilePageHeaderText-1">
      {basic_info}
   {/*props.title*/}
      </span>
      <span className="profilePageHeaderText-2">{work_info}
   {/* props.subtext */}
      </span>
      <div className="profileTextInformationNetworkProgressContainer">
              <StarRatings starDimension="20px" starSpacing="2px" rating={rating} starRatedColor="#c08d42" starEmptyColor="black"/>
      </div>
      <span className="profilePageHeaderText-3">
     {formerEmployers} {/* props.adress */}
      </span>
      </div>
      </div>
    );
  }
}
