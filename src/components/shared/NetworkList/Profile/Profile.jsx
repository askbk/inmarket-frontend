import React from 'react';
import Buttons from '../Buttons/Buttons.jsx';
import ProfileInformation from '../ProfileInformation/ProfileInformation.jsx';
import './Profile.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='profileContainer'>
                <div className='profileProfileInformationContainer'>
                    <ProfileInformation
                        name={this.props.name}
                        birth={this.props.birth}
                        role={this.props.role}
                        workplace={this.props.workplace}
                        rating={this.props.rating}
                    />
                </div>
                <div className='profileButtonContainer'>
                    <Buttons />
                </div>
            </div>
        );
    }
}
