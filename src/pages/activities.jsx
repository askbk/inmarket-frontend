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
import ActivitiesView from '../components/Activities/ActivitiesView/ActivitiesView.jsx';

import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

class Activities extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Page className='theme-dark'>
                <Header backLink title='Activities' />
                <ActivitiesView />
                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
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
                        tabLinkActive
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

export default Activities;
