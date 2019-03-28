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
  Link
} from 'framework7-react';

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
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Passord"
                            ></ListInput>

                            <ListInput
                                label="Navn"
                                type="text"
                                name="name"
                                placeholder="Ditt navn (valgfritt)"
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
                        <List form>
                            <ListInput
                                label="Undervisningssted (valgfritt)"
                                type="text"
                                name="school"
                                placeholder=""
                            ></ListInput>
                            <ListInput
                                label="Linje/studie"
                                type="text"
                                name="program"
                                placeholder="Linje/studie (valgfritt)"
                            ></ListInput>
                        </List>

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
