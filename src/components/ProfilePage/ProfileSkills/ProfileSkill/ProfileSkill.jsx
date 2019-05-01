import React from 'react';
import StarRatings from '../../../../../node_modules/react-star-ratings';

//import styles
import './ProfileSkill.css';

const profileSkill = (props) => {
  const skillMarginClass = props.editIsActive ? "" : " profileSkillMargin"
  return (
  <div className={"profileSkillContainer" + skillMarginClass}>
  <span>{props.text}</span><StarRatings starDimension="20px" starSpacing="2px" rating={props.rating} starRatedColor="#c08d42" starEmptyColor="black"/>
  </div>
  );
};

export default profileSkill;