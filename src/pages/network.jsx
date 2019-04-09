import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem, Toolbar, Link } from 'framework7-react';

import NetworkView from '../components/network/NetworkView/NetworkView.jsx';
import Header from '../components/Header/Header.jsx'

import '../css/toolbar.css';

class Network extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/users?page=2").then(res => {
            return res.json();
        }).then(users => {
            this.setState({data:users.data});
        });
    }

    render() {
        let networkList;
        if (this.state.data) {
            console.log(this.state.data);
            networkList = this.state.data.map(user =>
                <ListItem title={user.first_name} key={user.id.toString()}></ListItem>
            )
        } else {
            networkList = <ListItem title="no people here"></ListItem>;
            console.log(this.state.data);
        }

        return (
            <Page>
            <Header backLink title="Nettverk"/>
              <NetworkView/>
              <BlockTitle strong>Ditt nettverk</BlockTitle>
              <List>
                {networkList}
              </List>
              <Toolbar className="bottomToolbar" tabbar labels bottom>
                <Link className="bottomToolbarLink toolbarIcon" href="/" iconF7="home" />
                <Link className="bottomToolbarLink toolbarIcon" tabLinkActive href="/nettverk/" iconF7="search" />
                <Link className="bottomToolbarLink toolbarIcon" href="/activities/" iconF7="email" />
                <Link className="bottomToolbarLink toolbarIcon" href="/profilepage/" iconF7="person_round" />
              </Toolbar>
            </Page>
        )
    }
}

export default Network;
