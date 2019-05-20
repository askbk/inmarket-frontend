import React from 'react';
import './ProfileInformation.css';

//import picture
import NetworkAvatar from '../NetworkAvatar/NetworkAvatar.jsx';
import ProfileTextInformation from '../ProfileTextInformation/ProfileTextInformation.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='profileInformationContainer'>
                <NetworkAvatar
                    profilePic={this.props.profilePic}
                    status={this.props.connectionStatus}
                />
                <ProfileTextInformation
                    name={this.props.name}
                    birth={this.props.birth}
                    role={this.props.role}
                    workplace={this.props.workplace}
                    rating={this.props.rating}
                />
            </div>
        );
    }
}
