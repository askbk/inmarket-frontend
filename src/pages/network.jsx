import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Toolbar,
    Link
} from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import NetworkView from '../components/NetworkPage/NetworkView/NetworkView.jsx';

import '../css/toolbar.css';
import '../css/search.css';

//TODO: Placeholder data - remove later
import ProfilePic from '../../assets-src/ProfilePage/temp.png';
const testProfiles = [
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
];

class Network extends React.Component {
    constructor() {
        super();
        this.state = {
            pendingRequests: [],
            networkUsers: []
        };
    }

    componentDidMount() {
        //TODO: Fetch just my connections
        fetch('http://localhost/api/users')
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({ pendingRequests: users.data });
            });
        //TODO: Fetch just pending connections
        fetch('http://localhost/api/users')
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({ networkUsers: users.data });
            });
    }

    render() {
        //TODO: These should be rewritten when using real data
        const pendingRequests =
            this.state.pendingRequests.success === 'true'
                ? this.state.pendingRequests
                : testProfiles.filter(u =>
                      ['request', 'requested'].includes(u.connectionStatus)
                  );
        const networkUsers =
            this.state.networkUsers.success === 'true'
                ? this.state.networkUsers
                : testProfiles.filter(u => u.connectionStatus === 'contact');

        return (
            <Page>
                <Header backLink title='Nettverk' />
                <BlockTitle medium className='searchTitle'>
                    Forespørsler
                </BlockTitle>
                <NetworkView noSearch profiles={pendingRequests} />
                <BlockTitle medium className='searchTitle'>
                    Ditt nettverk
                </BlockTitle>
                <NetworkView profiles={networkUsers} />
                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/'
                        iconF7='home'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
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

export default Network;
