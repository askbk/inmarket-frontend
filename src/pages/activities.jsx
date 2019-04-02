import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import ActivitiesView from '../components/Activities/ActivitiesView/ActivitiesView.jsx';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return (
            <Page className="theme-dark">
              <ActivitiesView/>
            </Page>
        )
    }
}
