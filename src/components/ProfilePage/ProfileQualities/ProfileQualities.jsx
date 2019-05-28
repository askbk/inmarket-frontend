import React from 'react';
import ProfileQuality from './ProfileQuality/ProfileQuality';
import { Checkbox, Button } from 'framework7-react';
import '../../../css/profile.css';

const profileQualities = props => {
    const onChecked = e => {
        props.onChecked(e, e.target.name);
    };

    const removeQuality = e => {
        props.removeQuality(e, e.target.parentElement.id);
    };
    // console.log(props);
    let qualities;

    if (
        // props.activeQualities.length > 0 ||
        // (props.qualities.length > 0 && props.editIsActive)
        true
    ) {
        qualities = props.qualities
            // .filter(
            //     a => props.activeQualities.includes(a.text) || props.editIsActive
            // )
            .map((quality, i) => (
                <div key={i} className='profileQualitiesContainer'>
                    <ProfileQuality
                        editIsActive={props.editIsActive}
                        rating={4.2}
                        text={quality.name}
                    />
                {/*props.editIsActive && (
                        <Checkbox
                            name={quality.name}
                            onChange={onChecked}
                            defaultChecked={props.activeQualities.includes(
                                quality.name
                            )}
                        />
                )*/}
                    {/*props.editIsActive && (
                        <Button
                            id={quality.name}
                            onClick={removeQuality}
                            className='removeQualityButton'
                            text='x'
                            small={true}
                            round={true}
                        />
                    )*/}
                </div>
            ));
    } else {
        //Skal kun gjøres dersom man er logget inn
        qualities = <h3>Add new qualities</h3>;
    }

    return qualities;
};

export default profileQualities;
