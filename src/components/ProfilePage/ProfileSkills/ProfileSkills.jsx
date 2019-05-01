import React from 'react';
import ProfileSkill from './ProfileSkill/ProfileSkill';
import {Checkbox} from 'framework7-react';
import '../../../css/profile.css';

const profileSkills = (props) => {

  const onChecked = (e) => {
    props.onChecked(e, e.target.parentElement.previousSibling.firstChild.textContent)
  }

  const skills = props.skills.filter(a => (props.activeSkills.includes(a.text) || props.editIsActive)).map((skill, i) => (
    <div key={i} className="profileSkillsContainer">
      <ProfileSkill 
      editIsActive={props.editIsActive}
      rating={skill.rating} 
      text={skill.text}
      />
     {props.editIsActive && (
       <Checkbox onChange={onChecked} defaultChecked={props.activeSkills.includes(skill.text)}/>
     )} 
    </div>
    
  ));

  return skills;
};

export default profileSkills;