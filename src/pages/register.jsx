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
                //  Basisinformasjon for den som registrerer brukeren
                name: null,
                email: null,
                password: null,
                phone: null,
                //  Brukes for undervisningssted og høyest utdanning
                school: null,
                program: null,
                //  Stilling dersom man er bedriftsansatt
                position: null,
                //  Bedriften man registrerer/jobber for
                company_name: null,
                org: null,
                //  Rabattkode for bedrifter
                code: null,
                //  Nettside for bedrifter
                webpage: null,
            },
            step: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    submitForm(){
        const user = this.state.user;
        const bedrift = this.state.bedrift;
        let data = {}
        switch(userType){
            case 0:
                data = { name: user.name, password: user.password, phone: user.phone, email: user.email, undervisningssted: user.text1, linje: user.text2}
                break;
            case 1:
                data = { name: user.name, password: user.password,  phone: user.phone, email: user.email, undervisningssted: user.text1, linje: user.text2}
                break;
            case 2:
                data = { name: user.name, password: user.password,  phone: user.phone, email: user.email, highest_education: user.text1, linje: user.text2, social_worker : user.social_worker}
                break;
            case 3:
                data = { name: user.name, password: user.password,  phone: user.phone, email: user.email, bedrift_navn: bedrift.name, org: bedrift.org, code: bedrift.code, url: bedrift.webpage}
                break;
            case 4:
                data = { name: user.name, password: user.password, phone: user.phone, email: user.email, bedrift_navn: user.text1, stilling: user.text2}
                break;
        }

        /*Nå skal dataen være klar for å bli */
    }
/*
    onSubmit = e => {
        e.preventDefault();
        const {data, isFormValid} = this.props.formwork;
        if (isFormValid) {
            // Do something with `data`
        }
    };*/

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            user: {
                [name]: value
            }
        });
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
                    <form onSubmit={this.onSubmit}>


                    <Page name="info">
                        <Navbar title="Registrering" backLink="Back"></Navbar>
                        <Block>
                            <BlockHeader>Basisinformasjon</BlockHeader>
                            <List>

                                <ListInput
                                    label="E-post"
                                    type="email"
                                    name="email"
                                    placeholder="E-post"
                                    value={this.state.user.email}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Password"
                                    type="password"
                                    name="password"
                                    placeholder="Passord"
                                    value={this.state.user.password}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                            </List>
                        </Block>

                        <Block>
                            <BlockHeader>Valgfritt ekstrainformasjon</BlockHeader>
                            <List>


                                <ListInput
                                label="Navn"
                                type="text"
                                name="name"
                                placeholder="Ditt navn (valgfritt)"
                                value={this.state.user.name}
                                onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                label="Telefonnummer"
                                type="tel"
                                name="phone"
                                placeholder="Ditt telefon nummer (valgfritt)"
                                value={this.state.user.phone}
                                onInput={this.handleInputChange}>
                                </ListInput>


                                {(this.state.user.userType === 0 || this.state.user.userType === 1) &&
                                <ListInput
                                    label="Undervisningssted (valgfritt)"
                                    type="text"
                                    name="school"
                                    placeholder=""
                                    value={this.state.user.school}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                }
                                {this.state.user.userType === 2 &&

                                <ListInput
                                    label="Høyeste utdanning"
                                    type="text"
                                    name="school"
                                    placeholder="Videregående/universitet/høyskole (valgfritt)"
                                    value={this.state.user.school}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                }

                                {this.state.user.userType !== 4 &&
                                <ListInput
                                    label="Linje/studie"
                                    type="text"
                                    name="program"
                                    placeholder="Linje/studie (valgfritt)"
                                    value={this.state.user.program}
                                    onInput={this.handleInputChange}
                                ></ListInput>
                                }

                                {this.state.user.userType === 4 &&
                                <ListInput
                                    label="Bedriftens organisasjonsnummer som du jobber i"
                                    type="text"
                                    name="org"
                                    placeholder=""
                                    value={this.state.user.org}
                                    onInput={this.handleInputChange}
                                ></ListInput>


                                }

                                {this.state.user.userType === 4 &&

                                <ListInput
                                    label="Stilling"
                                    type="text"
                                    name="position"
                                    placeholder=""
                                    value={this.state.user.position}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                }
                            </List>
                        </Block>
                    </Page>
                        <input type="submit" value="Submit" />
                    </form>
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
                                        this.setState({user:{ password: e.target.value}});
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
                                    value={this.state.user.name}
                                    onInput={(e) => {
                                        this.setState({user:{ email: e.target.value}});
                                    }}
                                ></ListInput>

                                <ListInput
                                    label="Bedriftens organisasjonsnummer"
                                    type="text"
                                    placeholder=""
                                    value={this.state.user.org}
                                    onInput={(e) => {
                                        this.setState({user:{ org: e.target.value}});
                                    }}
                                ></ListInput>
                                <ListInput
                                    label="Kode"
                                    type="text"
                                    placeholder=""
                                    value={this.state.bedrift.code}
                                    onInput={(e) => {
                                        this.setState({user:{ code: e.target.value}});
                                    }}
                                ></ListInput>
                                <ListInput
                                    label="Bedriftens nettside"
                                    type="url"
                                    placeholder="(valgfritt)"
                                    value={this.state.user.webpage}
                                    onInput={(e) => {
                                        this.setState({user:{webpage : e.target.value}});
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
}
