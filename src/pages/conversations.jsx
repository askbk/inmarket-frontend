import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import ConversationsView from '../components/Conversations/ConversationsView/ConversationsView.jsx';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return (
            <Page className="theme-dark">
              <Navbar title="Conversations" backLink="Back" />
              <ConversationsView/>
            </Page>
        )
    }
}