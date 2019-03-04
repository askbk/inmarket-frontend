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
  BlockHeader,
  View,
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  Col,
  Views
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                userType: null,

            },
            step: 0
        }
    }

    render() {
        let regpage;
        switch (this.state.step) {
            case 0:
                return <RegPage1></RegPage1>;
                break;
            case 1:
                return (
                    <Block>
                        <BlockHeader>Basisinformasjon</BlockHeader>
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
                    </Block>
                )
                    break;
            default:
                break;

        }
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


class RegPage1 extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Page name="registrering">
                <Navbar title="Registrering" backLink="Back"></Navbar>
                    <Block>
                        <BlockHeader>Registrer deg som</BlockHeader>
                        <Row>
                            <Col>
                                <Button raised fill onClick={() => {this.setState({step:1, user: {userType: 0}})}}>Elev</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill>Student</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill>Arbeidsledig</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill>Bedrift</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill>Bedriftsansatt</Button>
                            </Col>
                        </Row>
                    </Block>
            </Page>
        )
    }
}
