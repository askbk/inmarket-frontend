import React from 'react';
import Profile from '../Profile/Profile.jsx';
import {List, ListItem} from 'framework7-react';
import './NetworkList.css';

//TODO: Placeholder data - remove later
import ProfilePic from '../../../../../assets-src/ProfilePage/temp.png';
const statuses = [
    'contact',
    'noContact',
    'request',
    'requested',
    'contact',
    'noContact',
    'request',
    'requested'
];

const NetworkList = props => (
    <List noHairlines noHairlinesBetween>
        {
            props.profiles && props.profiles.map((profile, index) => (
                <ListItem title='' key={index}>
                    <div className='networkListProfileContainer'>
                        <Profile
                            userId={profile.id}
                            name={`${profile.firstName} ${profile.lastName}`}
                            birth={profile.birthDate}
                            role={profile.userType === "jobseeker"
                                ? profile.jobseeker.type
                                : profile.employee.role}
                            location={profile.userType === "jobseeker"
                                ? profile.jobseeker.education
                                : profile.employee.company}
                            rating={4.2/*TODO*/}
                            connectionStatus={profile.connectionStatus
                                ? profile.connectionStatus
                                : statuses[index]/*TODO*/
}
                            profilePic={ProfilePic/*TODO*/}
                            contactRequest={props.contactRequest}/>
                    </div>
                </ListItem>
            ))
        }
    </List>
);

export default NetworkList;
