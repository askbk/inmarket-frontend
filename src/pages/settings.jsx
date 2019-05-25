import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {

    Page,
    Navbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    ListInput,
    Input,
    Button,
    Toggle,
    Toolbar,
    Link
} from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import temp from '../../assets-src/ProfilePage/temp.png';

import '../css/toolbar.css';

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPassword: "",
            newEmail: "",
            newPassword: ""
        }
    }
    render() {
        return (
            <Page themeDark>
                <Header backLink title='Instillinger' />

                <BlockTitle>Oppdater instillinger</BlockTitle>
                <List form>
                    <ListInput
                        label='Gammelt passord'
                        type='password'
                        placeholder='Gammelt passord'
                        value={this.state.currentPassword}
                        onInput={e => {
                            this.setState({ currentPassword: e.target.value });
                        }}
                    />
                </List>
                <List form>
                    <ListInput
                        label='Ny epostadresse'
                        type='email'
                        placeholder='Epostadresse'
                        value={this.state.newEmail}
                        onInput={e => {
                            this.setState({ newEmail: e.target.value });
                        }}
                    />
                    <ListInput
                        label='Ny passord'
                        type='password'
                        placeholder='Passord'
                        value={this.state.newPassword}
                        onInput={e => {
                            this.setState({ newPassword: e.target.value });
                        }}
                    />
                </List>
                <Button onClick={this.updateSettings.bind(this)}>
                    Lagre innstillinger
                </Button>
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

    updateSettings(){
        console.log(this)
        let body = {}
        //Check if one of them is empty
        if(this.state.currentPassword != ""){

            body.password = this.state.currentPassword
            if(this.state.newEmail != ""){
                body.newEmail = this.state.newEmail
            }
            if(this.state.newPassword != ""){
                body.newPassword = this.state.newPassword
            }

            console.log(body)
        }
    }
}

export default Settings;
