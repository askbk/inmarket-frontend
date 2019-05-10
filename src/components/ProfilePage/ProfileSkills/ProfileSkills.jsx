import React from 'react';
import ProfileSkill from './ProfileSkill/ProfileSkill';
import { Checkbox, Button } from 'framework7-react';
import '../../../css/profile.css';

const profileSkills = props => {
    const onChecked = e => {
        props.onChecked(e, e.target.name);
    };

    const removeSkill = e => {
        props.removeSkill(e, e.target.parentElement.id);
    };

    let skills;

    if (
        props.activeSkills.length > 0 ||
        (props.skills.length > 0 && props.editIsActive)
    ) {
        skills = props.skills
            .filter(
                a => props.activeSkills.includes(a.text) || props.editIsActive
            )
            .map((skill, i) => (
                <div key={i} className='profileSkillsContainer'>
                    <ProfileSkill
                        editIsActive={props.editIsActive}
                        rating={skill.rating}
                        text={skill.text}
                    />
                    {props.editIsActive && (
                        <Checkbox
                            name={skill.text}
                            onChange={onChecked}
                            defaultChecked={props.activeSkills.includes(
                                skill.text
                            )}
                        />
                    )}
                    {props.editIsActive && (
                        <Button
                            id={skill.text}
                            onClick={removeSkill}
                            className='removeSkillButton'
                            text='x'
                            small={true}
                            round={true}
                        />
                    )}
                </div>
            ));
    } else {
        //Skal kun gjøres dersom man er logget inn
        skills = <h3>Add new skills</h3>;
    }

    return skills;
};

export default profileSkills;
