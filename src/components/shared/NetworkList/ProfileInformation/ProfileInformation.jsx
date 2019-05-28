import React from 'react';
import './ProfileInformation.css';

import { Link } from 'framework7-react';

//import picture
import NetworkAvatar from '../NetworkAvatar/NetworkAvatar.jsx';
import ProfileTextInformation from '../ProfileTextInformation/ProfileTextInformation.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link href={'/profile/' + this.props.userId} style={{height:"100%"}}>
                <div className='profileInformationContainer'>
                    <NetworkAvatar
                        profilePic={this.props.profilePic}
                        status={this.props.connectionStatus}
                    />
                    <ProfileTextInformation
                        name={this.props.name}
                        birth={this.props.birth}
                        role={this.props.role}
                        location={this.props.location}
                        rating={this.props.rating}
                    />
                </div>
            </Link>
        );
    }
}
