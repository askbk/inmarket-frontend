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
                /*Navn på person og navn på bruker*/
                name: null,
                email: null,

                phone: null,
                /*Brukes for undervisningssted og høyest utdanning*/
                text1: null,
                /*Brukes for linje/studie*/
                text2: null,

                social_worker : false



            },

            bedrift:{
                name: null,
                org: null,
                code: null,
                webpage: null,


            },
            step: 0
        }


    }

    render() {
        let regpage;
        switch (this.state.step) {
            case 0:
            return (
                <Page name="registrering1">
                    <Navbar title="Registrering" backLink="Back"></Navbar>
                    <Block>
                        <BlockHeader>Registrer deg som</BlockHeader>
                        <Row>
                            <Col>
                                <Button raised fill onClick={() => {this.setState({step:1, user: {userType: 0}})}}>Videregående elev</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill onClick={() => {this.setState({step:1, user: {userType: 1}})}}>Student</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill onClick={() => {this.setState({step:1, user: {userType: 2}})}}>Arbeidsledig</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill onClick={() => {this.setState({step:2, user: {userType: 3}})}}>Bedrift</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button raised fill onClick={() => {this.setState({step:1, user: {userType: 4}})}}>Bedriftsansatt</Button>
                            </Col>
                        </Row>
                    </Block>
                </Page>
            )
                break;
            case 1:
                return (
                    <Page name="info">
                        <Navbar title="Registrering" backLink="Back"></Navbar>
                        <Block>
                            <BlockHeader>Basisinformasjon</BlockHeader>
                            <List>

                                <ListInput
                                    label="E-post"
                                    type="email"
                                    placeholder="E-post"
                                    value={this.state.user.email}
                                    onInput={(e) => {
                                        this.setState({user:{ email: e.target.value}});
                                    }}
                                ></ListInput>

                                <ListInput
                                    label="Password"
                                    type="password"
                                    placeholder="Passord"
                                    value={this.state.user.password}
                                    onInput={(e) => {
                                        this.setState({user:{ password: e.target.value}});
                                    }}
                                ></ListInput>

                            </List>
                        </Block>

                        <Block>
                            <BlockHeader>Valgfritt ekstrainformasjon</BlockHeader>
                            <List>


                                <ListInput
                                label="Navn"
                                type="text"
                                placeholder="Ditt navn (valgfritt)"
                                value={this.state.user.name}
                                onInput={(e) => {
                                    this.setState({user:{ name: e.target.value}});
                                }}
                                ></ListInput>

                                <ListInput
                                label="Telefonnummer"
                                type="tel"
                                placeholder="Ditt telefon nummer (valgfritt)"
                                value={this.state.user.phone}
                                onInput={(e) => {
                                    this.setState({user:{ phone: e.target.value}});
                                }}>
                                </ListInput>


                                {(this.state.user.userType === 0 || this.state.user.userType === 1) &&
                                <ListInput
                                    label="Undervisningssted (valgfritt)"
                                    type="text"
                                    placeholder=""
                                    value={this.state.user.text1}
                                    onInput={(e) => {
                                        this.setState({user:{ text1: e.target.value}});
                                    }}
                                ></ListInput>

                                }
                                {this.state.user.userType === 2 &&

                                <ListInput
                                    label="Høyest utdanning"
                                    type="text"
                                    placeholder="Videregående/universitet/høyskole (valgfritt)"
                                    value={this.state.user.text1}
                                    onInput={(e) => {
                                        this.setState({user:{ text1: e.target.value}});
                                    }}
                                ></ListInput>

                                }


                                <ListInput
                                    label="Linje/studie"
                                    type="text"
                                    placeholder="Ditt navn (valgfritt)"
                                    value={this.state.user.text2}
                                    onInput={(e) => {
                                        this.setState({user:{ text2: e.target.value}});
                                    }}
                                ></ListInput>



                            </List>

                        </Block>
                    </Page>
                )
                    break;
            case 2:
                return (
                    <Page name="info">
                        <Navbar title="Registrering" backLink="Back"></Navbar>
                        <Block>
                            <BlockHeader>Basisinformasjon</BlockHeader>
                            <List>

                                <ListInput
                                    label="E-post"
                                    type="email"
                                    placeholder="E-post"
                                    value={this.state.user.email}
                                    onInput={(e) => {
                                        this.setState({user:{ email: e.target.value}});
                                    }}
                                ></ListInput>

                                <ListInput
                                    label="Password"
                                    type="password"
                                    placeholder="Passord"
                                    value={this.state.user.password}
                                    onInput={(e) => {
                                        this.setState({user:{ passord: e.target.value}});
                                    }}
                                ></ListInput>

                                <ListInput
                                    label="Navn til registrereren"
                                    type="text"
                                    placeholder="Ditt navn "
                                    value={this.state.user.name}
                                    onInput={(e) => {
                                        this.setState({user:{ name: e.target.value}});
                                    }}
                                ></ListInput>

                                <ListInput
                                    label="Telefonnummer"
                                    type="tel"
                                    placeholder="Ditt telefon nummer "
                                    value={this.state.user.phone}
                                    onInput={(e) => {
                                        this.setState({user:{ phone: e.target.value}});
                                    }}>
                                </ListInput>

                            </List>
                        </Block>

                        <Block>
                            <BlockHeader>Bedriftsinformasjon</BlockHeader>
                            <List>

                                <ListInput
                                    label="Bedriftens navn"
                                    type="text"
                                    placeholder=""
                                    value={this.state.bedrift.name}
                                    onInput={(e) => {
                                        this.setState({bedrift:{ email: e.target.value}});
                                    }}
                                ></ListInput>

                                <ListInput
                                    label="Bedriftens organisasjonsnummer"
                                    type="text"
                                    placeholder=""
                                    value={this.state.bedrift.org}
                                    onInput={(e) => {
                                        this.setState({bedrift:{ org: e.target.value}});
                                    }}
                                ></ListInput>
                                <ListInput
                                    label="Kode"
                                    type="text"
                                    placeholder=""
                                    value={this.state.bedrift.code}
                                    onInput={(e) => {
                                        this.setState({bedrift:{ code: e.target.value}});
                                    }}
                                ></ListInput>
                                <ListInput
                                    label="Bedriftens nettside"
                                    type="url"
                                    placeholder="(valgfritt)"
                                    value={this.state.bedrift.webpage}
                                    onInput={(e) => {
                                        this.setState({bedrift:{webpage : e.target.value}});
                                    }}
                                ></ListInput>

                            </List>
                        </Block>
                    </Page>
                )
                break;
            default:
                break;

        }
    }
    /*
    <ListInput
                                label="Birth date"
                                type="date"
                                placeholder="Fødselsdato"
                                defaultValue="2014-04-30"
                                ></ListInput>
    */

    signIn() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
        router.navigate("/");
      });
    }
}

