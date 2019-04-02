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
    BlockFooter
} from 'framework7-react';

import Header from '../components/Header/Header.jsx'

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <Page noToolbar noNavbar noSwipeback loginScreen>
              <Header backLink/>
              <LoginScreenTitle>Logg inn</LoginScreenTitle>
              <List form>
                <ListInput
                  label="Brukernavn"
                  type="text"
                  placeholder="E-posten din"
                  value={this.state.username}
                  onInput={(e) => {
                    this.setState({ username: e.target.value});
                  }}
                />
                <ListInput
                  label="Passord"
                  type="password"
                  placeholder="Passordet ditt"
                  value={this.state.password}
                  onInput={(e) => {
                    this.setState({ password: e.target.value});
                  }}
                />
              </List>
              <List>
                <ListButton onClick={this.signIn.bind(this)}>Logg inn</ListButton>
                <ListButton href="/registrering/">Registrer deg</ListButton>
              </List>
            </Page>
        )
    }

    signIn() {
        const router = this.$f7router;
        fetch("http://localhost:5000/api/login", {
            method: "post",
            body: JSON.stringify(
                {
                    "email": this.state.username,
                    "password": this.state.password
                }
            ),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(tok => {
            if (tok.error) {
                console.error(tok.error);
            } else if (tok.token) {
                localStorage.jwt = tok.token;
                router.navigate("/");
            }
        });
    }
}

export default Login;
