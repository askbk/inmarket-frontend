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
  Views,
  Tabs,
  Tab
} from 'framework7-react';

export default class extends React.Component {
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
                municipality: "",

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
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

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

        return (
            <Page name="info">
                <Navbar title="Registrering" backLink="Back"></Navbar>

                <Tabs>
                    <Tab id="tab-basis" className="page-content" tabActive>
                        <Block>
                            <BlockHeader>Basisinformasjon</BlockHeader>
                            <List form>
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
                                    placeholder="Ditt telefonnummer (valgfritt)"
                                    value={this.state.user.phone}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Kommune"
                                    type="text"
                                    name="municipality"
                                    placeholder="Din kommune (valgfritt)"
                                    value={this.state.user.municipality}
                                    onInput={this.handleInputChange}
                                ></ListInput>
                            </List>

                            <Button raised fill large tabLink="#tab-usertype">Neste</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-usertype" className="page-content">
                        <Block>
                            <BlockHeader>Registrer deg som</BlockHeader>
                            <Row>
                                <Col>
                                    <Button raised fill userType={0} tabLink="#tab-student">Videregående elev</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={1} tabLink="#tab-student">Student</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={2} tabLink="#tab-unemployed">Arbeidsledig</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={3} tabLink="#tab-company">Bedrift</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button raised fill userType={4} tabLink="#tab-company">Bedriftsansatt</Button>
                                </Col>
                            </Row>
                        </Block>
                    </Tab>

                    <Tab id="tab-student" className="page-content">
                        <Block>
                            <List form>
                                <ListInput
                                    label="Undervisningssted (valgfritt)"
                                    type="text"
                                    name="school"
                                    placeholder=""
                                    value={this.state.user.school}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Linje/studie"
                                    type="text"
                                    name="program"
                                    placeholder="Linje/studie (valgfritt)"
                                    value={this.state.user.program}
                                    onInput={this.handleInputChange}
                                ></ListInput>
                            </List>

                            <Button raised fill large onClick={this.submitRegistration}>Registrer</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-unemployed" className="page-content">
                        <Block>
                            <List form>
                                <ListInput
                                    label="Høyeste utdanning"
                                    type="text"
                                    name="school"
                                    placeholder="Videregående/universitet/høyskole (valgfritt)"
                                    value={this.state.user.school}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Linje/studie"
                                    type="text"
                                    name="program"
                                    placeholder="Linje/studie (valgfritt)"
                                    value={this.state.user.program}
                                    onInput={this.handleInputChange}
                                ></ListInput>
                            </List>
                            <Button raised fill large onClick={this.submitRegistration}>Registrer</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-company" className="page-content">
                        <Block>
                            <List form>
                                <ListInput
                                    label="Bedriftens navn"
                                    type="text"
                                    name="company"
                                    placeholder=""
                                    value={this.state.user.org}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Bedriftens organisasjonsnummer"
                                    type="text"
                                    name="org"
                                    placeholder=""
                                    value={this.state.user.org}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Stilling"
                                    type="text"
                                    name="position"
                                    placeholder=""
                                    value={this.state.user.position}
                                    onInput={this.handleInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Kode"
                                    type="text"
                                    placeholder=""
                                    value={this.state.user.code}
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
                            <Button raised fill large onClick={this.submitRegistration}>Registrer</Button>
                        </Block>
                    </Tab>
                </Tabs>
            </Page>
        )
    }
}
