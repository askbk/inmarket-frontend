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

export default class extends React.Component {
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
                <ListButton>Registrer deg</ListButton>
              </List>
            </Page>
        )
    }

    signIn() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
        router.navigate("/");
      });
    }
}
