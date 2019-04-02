import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import NetworkView from '../components/network/NetworkView/NetworkView.jsx';

export default class extends React.Component {
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
              <NetworkView/>
              <BlockTitle strong>Ditt nettverk</BlockTitle>
              <List>
                {networkList}
              </List>
            </Page>
        )
    }
}
