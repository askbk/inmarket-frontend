import React from 'react';
import ProfileSkill from './ProfileSkill/ProfileSkill';
import {Checkbox} from 'framework7-react';

const profileSkills = (props) => {
  const skills = props.skills.filter(a => (props.activeSkills.includes(a.text) || props.editIsActive)).map((skill, i) => (
    <div>
      <ProfileSkill 
      rating={skill.rating} 
      text={skill.text}
      />
     {props.editIsActive && (
       <Checkbox defaultChecked={props.activeSkills.includes(skill.text)}/>
     )} 
    </div>
    
  ));

  return skills;
};

export default profileSkills;