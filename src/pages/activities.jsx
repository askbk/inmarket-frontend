import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import ActivitiesView from '../components/Activities/ActivitiesView/ActivitiesView.jsx';

import Header from '../components/Header/Header.jsx'

class Activities extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <Page className="theme-dark">
            <Header backLink/>
              <ActivitiesView/>
            </Page>
        )
    }
}

export default Activities;
