import React from 'react';
import Profile from '../Profile/Profile.jsx';
import { List, ListItem } from 'framework7-react';
import './NetworkList.css';

const NetworkList = props => (
    <List noHairlines noHairlinesBetween>
        {props.profiles &&
            props.profiles
                .filter(a =>
                    a.name.toLowerCase().includes(props.searchbarContent)
                )
                .map((profile, index) => (
                    <ListItem title='' key={index}>
                        <div className='networkListProfileContainer'>
                            <Profile
                                userId={profile.userId}
                                name={profile.name}
                                birth={profile.birth}
                                role={profile.role}
                                workplace={profile.workplace}
                                rating={profile.rating}
                                connectionStatus={profile.connectionStatus}
                                profilePic={profile.profilePic}
                            />
                        </div>
                    </ListItem>
                ))}
    </List>
);

export default NetworkList;
