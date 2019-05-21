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
                if (profiles.success) this.setState({ data: profiles.data });
                else {
                    console.error(profiles.message);
                }
            });
    }

    render() {
        return (
            <Page>
                <Header backLink title='Søk' />
                <SearchView profiles={this.state.data} />
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
