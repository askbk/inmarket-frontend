import React from 'react';

import { Page, Toolbar, Link } from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import VideosContainer from '../components/Home/VideosContainer/VideosContainer.jsx';
import MatchesContainer from '../components/Home/MatchesContainer/MatchesContainer.jsx';

import '../css/toolbar.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // Currently only fetching employee recommendations for user 1
        // TODO: fetch for correct user
        fetch('http://localhost:5000/api/recommendations/1/employees')
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({ data: users });
            });
    }

    render() {
        const users = this.state.data;

        return (
            <Page name='home'>
                <Header />
                <MatchesContainer users={users} />
                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        tabLinkActive
                        href='/'
                        iconF7='home'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/nettverk/'
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

export default Home;
