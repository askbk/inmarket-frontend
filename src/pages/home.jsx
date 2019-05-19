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
        // For now it simply won't try to fetch any recommendation if no token
        // is found.
        if (!localStorage.jwt) {
            return false;
        }

        const userId = (JSON.parse(atob(localStorage.jwt.split(".")[1]))).sub,
            recommend = localStorage.userType === "employee" ? "jobseekers" : "employees";

        fetch(`http://localhost/api/recommendations/${userId}/${recommend}`).then(res => {
            return res.json();
        }).then(users => {
            if (users.success) {
                this.setState({data: users.data});
            }
        });
    }

    // Called after a contact request has been successfully sent to the user
    // with the given id. It removes the contacted user from the array of
    // contact recommendations. This is because the SwiperSlide component in
    // MatchesContainer is still taking up space, even when it is empty. This is
    // a brute force solution to that.
    handleContactRequestSent(id) {
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
<<<<<<< HEAD
                        href='/nettverk/'
                        iconF7='search'/>
=======
                        href='/sok/'
                        iconF7='search'
                    />
>>>>>>> b3a00e4... Split search and network, new search route
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
