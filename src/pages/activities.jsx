import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import ActivitiesView from '../components/Activities/ActivitiesView/ActivitiesView.jsx';

import WithNav from '../components/shared/hoc/WithNav.jsx'

class Activities extends React.Component {
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

export default Activities;
