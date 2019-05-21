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
    }
    render() {
        return (
            <Page themeDark>
                <Header backLink title='Instillinger' />

                <BlockTitle>Oppdater instillinger</BlockTitle>
                <List form>
                    <ListInput label='Gammelt passord' type='password' placeholder='Gammelt passord' />
                </List>
                <List form>
                    <ListInput label='Ny epostadresse' type='email' placeholder='Epostadresse' />
                    <ListInput label='Ny passord' type='password' placeholder='Passord' />
                </List>
                <Button>
                    Lagre innstillinger
                </Button>
            </Page>
        );
    }
}

export default Settings;
