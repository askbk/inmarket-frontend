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

import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/users/${this.$f7route.params.id}`)
            .then(res => {
                return res.json();
            })
            .then(user => {
                this.setState({ user: user.data });
            });
    }

    render() {
        let userdata;
        if (this.state.user) {
            console.log(this.state.user);
            userdata = Object.keys(this.state.user).map(key => (
                <ListItem key={key} title={this.state.user[key]} />
            ));
        } else {
            userdata = <ListItem title='nje' />;
            console.log(this.state.user);
        }

        return (
            <Page>
                <Header backLink title='Profil' />
                <Navbar title='Profil' backLink='Back' />
                <BlockTitle strong>Profil</BlockTitle>
                <List>{userdata}</List>
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

export default Profile;
