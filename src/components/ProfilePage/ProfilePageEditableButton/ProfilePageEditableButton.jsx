import React from 'react';
import Button from '../../shared/Button/StyledButton';

const ProfilePageEditableButton = props => {
    return (
        <div className='profilePageEditButtonsContainer'>
            <button
                className='profilePagePopupButton'
                onClick={() => props.onClick()}
            >
                {props.information}
            </button>
        </div>
    );
};

export default ProfilePageEditableButton;
