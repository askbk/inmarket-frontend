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
  Tab,
  Toolbar,
  Link,
  Radio,
  Input
} from 'framework7-react';

import TermsCheckbox from '../TermsCheckbox/TermsCheckbox.jsx';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Tab id="tab-user" tabActive className="">

                <Block>
                    <h1>Vi åpner dørene for deg.</h1>
                    <p>Lag en gratis bruker for å komme deg ut i arbeidslivet.​</p>
                </Block>

                <Tabs>

                    <Tab id="tab-user-basis" tabActive>
                        <List form>

                            <ListInput
                                label="E-post"
                                type="email"
                                name="email"
                                placeholder="E-post"
                            ></ListInput>

                            <ListInput
                                label="Fullt navn"
                                type="text"
                                name="name"
                                placeholder="Fornavn etternavn (valgfritt)"
                            ></ListInput>

                            <ListInput
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Passord"
                            ></ListInput>

                            <ListInput
                                label="Telefonnummer"
                                type="tel"
                                name="phone"
                                placeholder="Ditt telefonnummer (valgfritt)"
                            ></ListInput>

                            <ListInput
                                label="Kommune"
                                type="text"
                                name="municipality"
                                placeholder="Din kommune (valgfritt)"
                            ></ListInput>
                        </List>

                        <Block>
                            <Button raised fill large tabLink="#tab-user-extra">Neste</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-user-extra">

                        <List>
                            <ListItem radio title="Elev" name="user-type-radio" value=""></ListItem>
                            <ListItem radio title="Student" value="" name="user-type-radio"></ListItem>
                            <ListItem radio title="Arbeidssøker" value="" name="user-type-radio"></ListItem>
                        </List>
                        <Block>
                            <Row>
                                <Col>
                                    <Input
                                        label="Kompetanse 1"
                                        type="text"
                                        name="competence-input-1"
                                        placeholder="Kompetanse 1"
                                        outline
                                    ></Input>
                                </Col>
                                <Col>
                                    <Input
                                        label="Interesse 1"
                                        type="text"
                                        name="interest-input-1"
                                        placeholder="Interesse 1"
                                    ></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input
                                        label="Kompetanse 1"
                                        type="text"
                                        name="competence-input-1"
                                        placeholder="Kompetanse 1"
                                        outline
                                    ></Input>
                                </Col>
                                <Col>
                                    <Input
                                        label="Interesse 1"
                                        type="text"
                                        name="interest-input-1"
                                        placeholder="Interesse 1"
                                    ></Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Input
                                        label="Kompetanse 1"
                                        type="text"
                                        name="competence-input-1"
                                        placeholder="Kompetanse 1"
                                        outline
                                    ></Input>
                                </Col>
                                <Col>
                                    <Input
                                        label="Interesse 1"
                                        type="text"
                                        name="interest-input-1"
                                        placeholder="Interesse 1"
                                    ></Input>
                                </Col>
                            </Row>
                        </Block>

                        <Block>
                            <TermsCheckbox />
                        </Block>

                        <Block>
                            <Row>
                                <Col width="50">
                                    <Button raised fill large tabLink="#tab-user-basis">Tilbake</Button>
                                </Col>
                                <Col width="50">
                                    <Button raised fill large>Registrer</Button>
                                </Col>
                            </Row>
                        </Block>
                    </Tab>
                </Tabs>

            </Tab>
        )
    }
}
