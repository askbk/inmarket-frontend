import React from 'react';
import Profile from '../../shared/NetworkList/Profile/Profile.jsx';
import { List, ListItem, Searchbar } from 'framework7-react';
import './SearchView.css';

//import picture
import ProfilePic from '../../../../assets-src/ProfilePage/temp.png';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchbarContent: '',
            profiles: [
                {
                    name: 'Endre Braut Medhus',
                    birth: '1997-10-11',
                    role: 'Konsulent',
                    workplace: 'Junior Consulting',
                    rating: 4.2,
                    connectionStatus: 'noContact',
                    profilePic: ProfilePic
                },
                {
                    name: 'Casper Feng',
                    birth: '1996-09-01',
                    role: 'Konsulent',
                    workplace: 'Junior Consulting',
                    rating: 4.7,
                    connectionStatus: 'noContact',
                    profilePic: ProfilePic
                },
                {
                    name: 'Kjip Konsult',
                    birth: '1988-12-12',
                    role: 'Konsulent',
                    workplace: 'Kjip Consulting',
                    rating: 2.5,
                    connectionStatus: 'contact',
                    profilePic: ProfilePic
                },
                {
                    name: 'Edvard Bakken',
                    birth: '1994-02-25',
                    role: 'Konsulent',
                    workplace: 'Junior Consulting',
                    rating: 4.9,
                    connectionStatus: 'request',
                    profilePic: ProfilePic
                },
                {
                    name: 'Ask Kolltveit',
                    birth: '1997-09-08',
                    role: 'Teknologidirektør',
                    workplace: 'Inmarket AS',
                    rating: 5.0,
                    connectionStatus: 'requested',
                    profilePic: ProfilePic
                }
            ]
        };
    }

    handleChange(e) {
        const value = e.target.value.toLowerCase();
        this.setState({ searchbarContent: value });
    }

    render() {
        return (
            <div className='searchViewOuterContainer'>
                <div className='searchViewInnerContainer'>
                    <div className='searchViewSearchbarContainer'>
                        <Searchbar onChange={this.handleChange.bind(this)} />
                    </div>
                    <List noHairlines noHairlinesBetween>
                        {this.state.profiles
                            .filter(a =>
                                a.name
                                    .toLowerCase()
                                    .includes(this.state.searchbarContent)
                            )
                            .map((profile, index) => (
                                <ListItem title='' key={index}>
                                    <div className='searchViewProfileContainer'>
                                        <Profile
                                            name={profile.name}
                                            birth={profile.birth}
                                            role={profile.role}
                                            workplace={profile.workplace}
                                            rating={profile.rating}
                                            connectionStatus={
                                                profile.connectionStatus
                                            }
                                            profilePic={profile.profilePic}
                                        />
                                    </div>
                                </ListItem>
                            ))}
                    </List>
                </div>
            </div>
        );
    }
}
