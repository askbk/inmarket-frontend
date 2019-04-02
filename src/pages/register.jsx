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

import Header from '../components/Header/Header.jsx'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                userType: -1,
                //  Basisinformasjon for den som registrerer brukeren
                name: "",
                email: '',
                password: "",
                phone: "",

                //  Brukes for undervisningssted og høyest utdanning
                school: "",
                program: "",

                //  Stilling dersom man er bedriftsansatt
                position: "",

                //  Bedriften man registrerer/jobber for
                company_name: "",
                org: "",

                //  Rabattkode for bedrifter
                code: "",

                //  Nettside for bedrifter
                webpage: "",
            },
            step: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }
/*
    onSubmit = e => {
        e.preventDefault();
        const {data, isFormValid} = this.props.formwork;
        if (isFormValid) {
            // Do something with `data`
        }
    };*/

    submitRegistration() {
        console.log("submitting...");
        console.log(this.state.user);
        fetch("http://localhost:5000/api/register", {
            method: "post",
            body: JSON.stringify(this.state.user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log("submitted");
            return res.json();
        }).then(eyah => {
            console.log(eyah);
        }).catch((err) => {
            console.error(err);
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }
        });
    }

    render() {
        switch (this.state.user.userType) {
            case -1:
                return (
                    <Page name="registrering1">
                        <Header backLink/>
                        <Block>
                            <BlockHeader>Registrer deg som</BlockHeader>
                            <Row>
                                <Col>
                                    <Button raised fill userType={0} onClick={() => {this.setState({user: {...this.state.user, userType: 0}})}}>Videregående elev</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={1} onClick={() => {this.setState({user: {...this.state.user, userType: 1}})}}>Student</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={2} onClick={() => {this.setState({user: {...this.state.user, userType: 2}})}}>Arbeidsledig</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={3} onClick={() => {this.setState({user: {...this.state.user, userType: 3}})}}>Bedrift</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={4} onClick={() => {this.setState({user: {...this.state.user, userType: 4}})}}>Bedriftsansatt</Button>
                                </Col>
                            </Row>
                        </Block>
                    </Page>
                )
                break;

            default:
                return (
                    <form onSubmit={this.submitRegistration}>

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
                                    onChange={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Password"
                                    type="password"
                                    name="password"
                                    placeholder="Passord"
                                    value={this.state.user.password || ""}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                            </List>
                        </Block>

                        <Block>
                            <BlockHeader>Valgfri ekstrainformasjon</BlockHeader>
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
                                    //  Dersom student eller elev
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
                                    //  Dersom arbeidsledig
                                    <ListInput
                                        label="Høyeste utdanning"
                                        type="text"
                                        name="school"
                                        placeholder="Videregående/universitet/høyskole (valgfritt)"
                                        value={this.state.user.school}
                                        onInput={this.handleInputChange}
                                    ></ListInput>
                                }

                                {this.state.user.userType !== 3 && this.state.user.userType !== 4 &&
                                    //  Dersom elev, student eller arbeidsledig
                                    <ListInput
                                        label="Linje/studie"
                                        type="text"
                                        name="program"
                                        placeholder="Linje/studie (valgfritt)"
                                        value={this.state.user.program}
                                        onInput={this.handleInputChange}
                                    ></ListInput>
                                }

                                {this.state.userType === 3 &&
                                    //  Dersom bedrift
                                    <ListInput
                                        label="Bedriftens navn"
                                        type="text"
                                        name="company"
                                        placeholder=""
                                        value={this.state.user.org}
                                        onInput={this.handleInputChange}
                                    ></ListInput>
                                }

                                {(this.state.user.userType === 3  || this.state.user.userType === 4) &&
                                    //  Dersom bedrift eller bedriftsansatt
                                    <ListInput
                                        label="Bedriftens organisasjonsnummer"
                                        type="text"
                                        name="org"
                                        placeholder=""
                                        value={this.state.user.org}
                                        onInput={this.handleInputChange}
                                    ></ListInput>
                                }

                                {this.state.user.userType === 4 &&
                                    //  Dersom bedriftsansatt
                                    <ListInput
                                        label="Stilling"
                                        type="text"
                                        name="position"
                                        placeholder=""
                                        value={this.state.user.position}
                                        onInput={this.handleInputChange}
                                    ></ListInput>
                                }

                                {this.state.userType === 3 &&
                                    //  Dersom bedrift
                                    <ListInput
                                    label="Kode"
                                    type="text"
                                    placeholder=""
                                    value={this.state.bedrift.code}
                                    onInput={(e) => {
                                        this.setState({user:{ code: e.target.value}});
                                    }}
                                    ></ListInput>
                                }

                                {this.state.userType === 3 &&
                                    //  Dersom bedrift
                                    <ListInput
                                    label="Bedriftens nettside"
                                    type="url"
                                    placeholder="(valgfritt)"
                                    value={this.state.user.webpage}
                                    onInput={(e) => {
                                        this.setState({user:{webpage : e.target.value}});
                                    }}
                                    ></ListInput>
                                }
                            </List>
                            <Button raised fill large onClick={this.submitRegistration}>Registrer</Button>
                        </Block>
                    </Page>
                    </form>
                )
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

export default Register;
