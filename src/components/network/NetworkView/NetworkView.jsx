import React from 'react';
import Profile from '../Profile/Profile.jsx';
import { List, ListItem, Searchbar } from 'framework7-react';
import './NetworkView.css';

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
                    rating: 4.2
                },
                {
                    name: 'Casper Feng',
                    birth: '1996-09-01',
                    role: 'Konsulent',
                    workplace: 'Junior Consulting',
                    rating: 4.7
                },
                {
                    name: 'Kjip Konsult',
                    birth: '1988-12-12',
                    role: 'Konsulent',
                    workplace: 'Kjip Consulting',
                    rating: 2.5
                },
                {
                    name: 'Edvard Bakken',
                    birth: '1994-02-25',
                    role: 'Konsulent',
                    workplace: 'Junior Consulting',
                    rating: 4.9
                },
                {
                    name: 'Ask Kolltveit',
                    birth: '1997-09-08',
                    role: 'Teknologidirektør',
                    workplace: 'Inmarket AS',
                    rating: 5.0
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
            <div className='networkViewOuterContainer'>
                <div className='networkViewInnerContainer'>
                    <div className='networkViewSearchbarContainer'>
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
                                    <div className='networkViewProfileContainer'>
                                        <Profile
                                            name={profile.name}
                                            birth={profile.birth}
                                            role={profile.role}
                                            workplace={profile.workplace}
                                            rating={profile.rating}
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
