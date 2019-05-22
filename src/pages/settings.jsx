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
            </Page>
        );
    }

    updateSettings(){
        console.log(this)
    }
}

export default Settings;
