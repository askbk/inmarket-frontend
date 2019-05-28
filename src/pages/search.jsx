import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Toolbar, Link } from 'framework7-react';

import SearchView from '../components/SearchPage/SearchView/SearchView.jsx';
import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };

        this.handleContactRequest = this.handleContactRequest.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const userId = JSON.parse(atob(localStorage.jwt.split('.')[1])).sub,
            recommend =
                localStorage.userType === 'employee'
                    ? 'jobseekers'
                    : 'employees';

        const url = `${gConfig.url}/recommendations/${userId}/${recommend}`;

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(profiles => {
                if (profiles.success) this.setState({ data: profiles.data });
                else {
                    console.error(profiles.message);
                }
            });
    }

    // Called after a contact request has been successfully sent to the user
    // with the given id, or an accept has been sent. This updates the users
    // connection status, and is used for rerendering the list.
    handleContactRequest(id, status) {
        this.setState(state => {
            for (let i = 0; i < state.data.length; i++) {
                if (state.data[i].id === id) {
                    state.data[i].connectionStatus = status;
                    break;
                }
            }

            return {
                ...state
            };
        });
    }

    handleSearch(value) {
        // If no search value, fetch the initial recommended users
        if (value === '') {
            this.componentDidMount();
        } else {


            const url = `${gConfig.url}/users?search=${value}`;
            fetch(url, {
                method: 'get',
                headers: {
                    authorization: localStorage.jwt
                }
            })
                .then(res => {
                    return res.json();
                })
                .then(profiles => {
                    if (profiles.success)
                        this.setState({ data: profiles.data });
                    else {
                        console.error(profiles.message);
                    }
                });
        }
    }

    render() {
        return (
            <Page>
                <Header backLink title='Søk' />
                <SearchView
                    profiles={this.state.data}
                    contactRequest={this.handleContactRequest}
                    search={this.handleSearch}
                />
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
