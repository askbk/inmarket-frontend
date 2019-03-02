import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  ListButton,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  View
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                userType: null,

            }
        }
    }

    render() {
        return (
            <Page name="registrering">
              <Navbar title="Registrering" backLink="Back"></Navbar>
              <View url="/registrering/1">
                  <BlockTitle>Registrer deg som</BlockTitle>
                  <List>
                      <ListButton>Bruker</ListButton>
                      <ListButton>Bedrift</ListButton>
                  </List>
              </View>
              <View url="/registrering/2">
                  <List>
                      <ListInput
                      label="Name"
                      type="text"
                      placeholder="Your name"
                      ></ListInput>

                      <ListInput
                      label="E-mail"
                      type="email"
                      placeholder="E-mail"
                      ></ListInput>

                      <ListInput
                      label="Password"
                      type="password"
                      placeholder="Password"
                      ></ListInput>

                      <ListInput
                      label="Birth date"
                      type="date"
                      placeholder="Birth day"
                      defaultValue="2014-04-30"
                      ></ListInput>
                  </List>
              </View>
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
