import React from 'react';
import Profile from '../Profile/Profile.jsx';
import { List, ListItem } from 'framework7-react';
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
const ratings = [1, 2, 3, 4, 5, 1.5, 2.5, 3.5, 4.5];

const NetworkList = props => (
    <List noHairlines noHairlinesBetween>
        {props.profiles &&
            props.profiles
                .filter(a =>
                    `${a.firstName} ${a.lastName}`
                        .toLowerCase()
                        .includes(props.searchbarContent)
                )
                .map((profile, index) => (
                    <ListItem title='' key={index}>
                        <div className='networkListProfileContainer'>
                            <Profile
                                userId={profile.id}
                                name={`${profile.firstName} ${
                                    profile.lastName
                                }`}
                                birth={profile.birthDate}
                                role={profile.role}
                                workplace={profile.name}
                                rating={ratings[index] /*TODO*/}
                                connectionStatus={
                                    profile.connectionStatus
                                        ? profile.connectionStatus
                                        : statuses[index] /*TODO*/
                                }
                                profilePic={ProfilePic /*TODO*/}
                                contactRequest={props.contactRequest}
                            />
                        </div>
                    </ListItem>
                ))}
    </List>
);

export default NetworkList;
