import React from 'react';

import {Page, Toolbar, Link} from 'framework7-react';

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

        this.handleContactRequestSent = this.handleContactRequestSent.bind(this);
    }

    componentDidMount() {
        // Currently only fetching employee recommendations for user 1
        // TODO: fetch for correct user
        fetch('http://localhost/api/recommendations/1/employees').then(res => {
            return res.json();
        }).then(users => {
            this.setState({data: users});
        });
    }

    handleContactRequestSent(id) {
        console.log(id);
        this.setState(state => {
            for (let i = 0; i < state.data.length; i++) {
                if (state.data[i].id === id) {
                    state.data.splice(i, 1);
                    break;
                }
            }

            return {
                ...state
            }
        })
    }

    render() {
        const users = this.state.data;

        return (
            <Page name='home'>
                <Header/>
                <MatchesContainer
                    users={users}
                    contactRequestSent={this.handleContactRequestSent}/>
                <Toolbar
                    className='bottomToolbar'
                    tabbar
                    labels
                    bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        tabLinkActive
                        href='/'
                        iconF7='home'/>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/nettverk/'
                        iconF7='search'/>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/activities/'
                        iconF7='email'/>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/profilepage/'
                        iconF7='person_round'/>
                </Toolbar>
            </Page>
        );
    }
}

export default Home;
