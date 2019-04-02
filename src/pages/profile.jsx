import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

import Header from '../components/Header/Header.jsx'

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/users/${this.$f7route.params.id}`).then(res => {
            return res.json();
        }).then(user => {
            this.setState({user:user.data});
        });
    }

    render() {
        let userdata;
        if (this.state.user) {
            console.log(this.state.user);
            userdata = Object.keys(this.state.user).map(key =>
                <ListItem key={key} title={this.state.user[key]}></ListItem>
            )
        } else {
            userdata = <ListItem title="nje"></ListItem>;
            console.log(this.state.user);
        }

        return (
            <Page>
              <Header backLink/>
              <Navbar title="Profil" backLink="Back" />
              <BlockTitle strong>Profil</BlockTitle>
              <List>
                {userdata}
              </List>
            </Page>
        )
    }
}

export default Profile;
