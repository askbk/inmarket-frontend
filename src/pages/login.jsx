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
    LoginScreen,
    LoginScreenTitle,
    ListButton,
    BlockFooter,
    Toolbar,
    Link
} from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import Logo from '../../assets-src/Navbar/inMarketlogo.png';
import '../css/login.css';

import '../css/toolbar.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <Page noToolbar noNavbar noSwipeback loginScreen themeDark>
                <Header backLink title='Logg inn' />
                <img className='loginPageLogo' src={Logo} />
                <LoginScreenTitle>Logg inn</LoginScreenTitle>
                <List form>
                    <ListInput
                        label='Brukernavn'
                        type='text'
                        placeholder='E-posten din'
                        value={this.state.username}
                        onInput={e => {
                            this.setState({ username: e.target.value });
                        }}
                        className='loginListInput'
                    />
                    <ListInput
                        label='Passord'
                        type='password'
                        placeholder='Passordet ditt'
                        value={this.state.password}
                        onInput={e => {
                            this.setState({ password: e.target.value });
                        }}
                    />
                </List>
                <List>
                    <ListButton onClick={this.signIn.bind(this)}>
                        Logg inn
                    </ListButton>
                    <ListButton href='/registrering/'>Registrer deg</ListButton>
                </List>
                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/'
                        iconF7='home'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/sok/'
                        iconF7='search'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/activities/'
                        iconF7='calendar'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/profile/me'
                        iconF7='person_round'
                    />
                </Toolbar>
            </Page>
        );
    }

    signIn() {
        const router = this.$f7router;
        const url = `${gConfig.url}/login`;
        fetch(url, {
            method: 'post',
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.jwt) {
                    localStorage.jwt = res.jwt;
                    localStorage.userType = res.userType
                        ? res.userType
                        : 'jobseeker';
                    localStorage.userId = JSON.parse(
                        atob(res.jwt.split('.')[1])
                    ).sub;
                    router.navigate('/');
                } else {
                    // TODO: Let user know that login attempt was unsuccessful
                    console.error(
                        'No jwt in response - are your credentials correct?'
                    );
                }
            });
    }
}

export default Login;
