import React from 'react';

import { Page, Toolbar, Link } from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import VideosContainer from '../components/Home/VideosContainer/VideosContainer.jsx';
import MatchesContainer from '../components/Home/MatchesContainer/MatchesContainer.jsx';
import ActivityForm from '../components/shared/ActivityForm/ActivityForm';

import '../css/toolbar.css';

class ActivityCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    /*
    componentDidMount() {
        fetch('http://localhost:5000/api/users?page=1')
            .then(res => {
                return res.json();
            })
            .then(users => {
                this.setState({ data: users.data });
            });
    }*/

    render() {
        const users = this.state.data;

        return (
            <Page name='home'>
                <Header />
                <ActivityForm id={this.$f7route.params.id} />
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
                        href='/profile/me'
                        iconF7='person_round'
                    />
                </Toolbar>
            </Page>
        );
    }
}

export default ActivityCreate;
