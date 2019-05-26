import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Toolbar, Link } from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import NetworkView from '../components/NetworkPage/NetworkView/NetworkView.jsx';

import '../css/toolbar.css';

//TODO: Placeholder data - remove later
const testProfiles = [
    {
        id: 1,
        firstName: 'Endre',
        lastName: 'Braut Medhus',
        birthDate: '1997-10-11',
        role: 'Konsulent',
        name: 'Junior Consulting',
        connectionStatus: 'contact'
    },
    {
        id: 2,
        firstName: 'Casper',
        lastName: 'Feng',
        birthDate: '1996-09-01',
        role: 'Konsulent',
        name: 'Junior Consulting',
        connectionStatus: 'requested'
    },
    {
        id: 3,
        firstName: 'Kjip',
        lastName: 'Konsult',
        birthDate: '1988-12-12',
        role: 'Konsulent',
        name: 'Kjip Consulting',
        connectionStatus: 'request'
    },
    {
        id: 4,
        firstName: 'Edvard',
        lastName: 'Bakken',
        birthDate: '1994-02-25',
        role: 'Konsulent',
        name: 'Junior Consulting',
        connectionStatus: 'request'
    },
    {
        id: 5,
        firstName: 'Ask',
        lastName: 'Kolltveit',
        birthDate: '1997-09-08',
        role: 'Teknologidirektør',
        name: 'Inmarket AS',
        connectionStatus: 'request'
    }
];

class Network extends React.Component {
    constructor() {
        super();
        this.state = {
            //TODO: Remove placeholder
            testProfiles: testProfiles,
            pendingRequests: [],
            networkUsers: []
        };
        this.handleContactRequest = this.handleContactRequest.bind(this);
    }

    componentDidMount() {
        const userId = JSON.parse(atob(localStorage.jwt.split('.')[1])).sub;
        // Fetch just my connections
        fetch(`http://localhost/api/users/${userId}/contacts`, {
            method: 'get',
            headers: {
                authorization: localStorage.jwt
            }
        })
            .then(res => {
                return res.json();
            })
            .then(users => {
                if (users.success) {
                    this.setState({ networkUsers: users });
                } else {
                    console.error(users.message);
                }
            });
        // Fetch just pending connections
        fetch(`http://localhost/api/users/${userId}/contact/requests`, {
            method: 'get',
            headers: {
                authorization: localStorage.jwt
            }
        })
            .then(res => {
                return res.json();
            })
            .then(users => {
                if (users.success) {
                    this.setState({ pendingRequests: users });
                } else {
                    console.error(users.message);
                }
            });
    }

    // Called after a contact request has been successfully sent to the user
    // with the given id, or an accept has been sent. This updates the users
    // connection status, and moves them to the appropriate list.
    // It is used for rerendering the list.
    handleContactRequest(id, status) {
        this.setState(state => {
            //TODO: Remove placeholder logic when fetching real data
            for (let i = 0; i < state.testProfiles.length; i++) {
                if (state.testProfiles[i].id === id) {
                    state.testProfiles[i].connectionStatus = status;
                    if (status === 'noContact') {
                        state.testProfiles.splice(i, 1);
                    }
                    break;
                }
            }
            for (let i = 0; i < state.pendingRequests.length; i++) {
                if (state.pendingRequests[i].id === id) {
                    state.pendingRequests[i].connectionStatus = status;
                    if (status === 'contact') {
                        state.networkUsers.push(state.pendingRequests[i]);
                    }
                    state.pendingRequests.splice(i, 1);
                    break;
                }
            }
            return {
                ...state
            };
        });
    }

    render() {
        //TODO: These should be rewritten when using real data
        // const pendingRequests = this.state.pendingRequests.success
        //     ? this.state.pendingRequests.data
        //     : this.state.testProfiles.filter(u =>
        //           ['requestReceived', 'requestSent'].includes(u.connectionStatus)
        //       );
        // const networkUsers = this.state.networkUsers.success
        //     ? this.state.networkUsers.data
        //     : this.state.testProfiles.filter(
        //           u => u.connectionStatus === 'contact'
        //       );
        const pendingRequests = this.state.pendingRequests.success
            ? this.state.pendingRequests.data : [];
        const networkUsers = this.state.networkUsers.success
            ? this.state.networkUsers.data : [];

        return (
            <Page>
                <Header backLink title='Nettverk' />
                <NetworkView
                    pendingRequests={pendingRequests}
                    networkUsers={networkUsers}
                    contactRequest={this.handleContactRequest}
                />
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
                        href='/profile/me'
                        iconF7='person_round'
                    />
                </Toolbar>
            </Page>
        );
    }
}

export default Network;
