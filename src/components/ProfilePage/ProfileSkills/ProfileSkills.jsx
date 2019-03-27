import React from 'react';
import ProfileSkill from './ProfileSkill/ProfileSkill';

const profileSkills = (props) => {
  const skills = props.skills.map((skill, i) => (
    <ProfileSkill 
    rating={skill.rating} 
    text={skill.text}
    />
  ));

  return skills;
};

export default profileSkills;