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
import ConversationsView from '../components/Conversations/ConversationsView/ConversationsView.jsx';

import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

class Conversations extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Page className='theme-dark'>
                <Header backLink title='Conversations' />
                <ConversationsView />
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
                        iconF7='calendar'
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

export default Conversations;
