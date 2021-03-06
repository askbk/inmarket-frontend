import React from 'react';
import { List, ListItem, Page, Panel } from 'framework7-react';

import EditProfile from '../../../assets-src/SidebarIcons/editProfile.png';
import Settings from '../../../assets-src/SidebarIcons/settings.png';
import Network from '../../../assets-src/SidebarIcons/network.png';
import Saved from '../../../assets-src/SidebarIcons/saved.png';

const Sidebar = () => (
    <Panel right cover>
        <Page>
            <List>
                {/* Must implement settings tab and insert here */}
                {/*<ListItem
                    panelClose='right'
                    link='/form/'
                    title='INNSTILLINGER'
                    media={Settings}
                />*/}
                {/* Must implement network tab and insert here */}
                <ListItem
                    panelClose='right'
                    link='/nettverk/'
                    title='NETTVERK'
                    media={Network}
                />
            </List>
        </Page>
    </Panel>
);

export default Sidebar;
