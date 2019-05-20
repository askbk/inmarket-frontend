import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Toolbar, Link } from 'framework7-react';

import SearchView from '../components/SearchPage/SearchView/SearchView.jsx';
import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

//TODO: Placeholder data - remove later
import ProfilePic from '../../assets-src/ProfilePage/temp.png';
const testProfiles = [
    {
        userId: 1,
        name: 'Endre Braut Medhus',
        birth: '1997-10-11',
        role: 'Konsulent',
        workplace: 'Junior Consulting',
        rating: 4.2,
        connectionStatus: 'noContact',
        profilePic: ProfilePic
    },
    {
        userId: 2,
        name: 'Casper Feng',
        birth: '1996-09-01',
        role: 'Konsulent',
        workplace: 'Junior Consulting',
        rating: 4.7,
        connectionStatus: 'noContact',
        profilePic: ProfilePic
    },
    {
        userId: 3,
        name: 'Kjip Konsult',
        birth: '1988-12-12',
        role: 'Konsulent',
        workplace: 'Kjip Consulting',
        rating: 2.5,
        connectionStatus: 'contact',
        profilePic: ProfilePic
    },
    {
        userId: 4,
        name: 'Edvard Bakken',
        birth: '1994-02-25',
        role: 'Konsulent',
        workplace: 'Junior Consulting',
        rating: 4.9,
        connectionStatus: 'request',
        profilePic: ProfilePic
    },
    {
        userId: 5,
        name: 'Ask Kolltveit',
        birth: '1997-09-08',
        role: 'Teknologidirektør',
        workplace: 'Inmarket AS',
        rating: 5.0,
        connectionStatus: 'requested',
        profilePic: ProfilePic
    }
];

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const userId = JSON.parse(atob(localStorage.jwt.split('.')[1])).sub,
            recommend =
                localStorage.userType === 'employee'
                    ? 'jobseekers'
                    : 'employees';

        fetch(`http://localhost/api/recommendations/${userId}/${recommend}`)
            .then(res => {
                return res.json();
            })
            .then(profiles => {
                this.setState({ data: profiles });
            });
    }

    render() {
        const profiles =
            this.state.data.success === 'true' ? this.state.data : testProfiles;

        return (
            <Page>
                <Header backLink title='Søk' />
                <SearchView profiles={profiles} />
                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/'
                        iconF7='home'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        tabLinkActive
                        href='/sok/'
                        iconF7='search'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/activities/'
                        iconF7='email'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/profilepage/'
                        iconF7='person_round'
                    />
                </Toolbar>
            </Page>
        );
    }
}

export default Search;
