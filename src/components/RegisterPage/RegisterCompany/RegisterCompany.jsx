import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
    List,
    ListInput,
    ListItem,
    Row,
    Button,
    Block,
    Col,
    Tabs,
    Tab
} from 'framework7-react';

import TermsCheckbox from '../TermsCheckbox/TermsCheckbox.jsx';
import BasisInformationInput from '../BasisInformationInput/BasisInformationInput.jsx';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Tab id="tab-company" labels className="">

                <Block>
                    <h1>Hello</h1>
                    <p>Engasjer folk i arbeidet dere gjør og øk samtidig sjansen for å finne de beste ansatte for din bedrift.​</p>
                </Block>

                <Tabs>

                    <Tab id="tab-company-basis" tabActive>
                        <List form>
                            <ListInput
                                label="Bedriftens navn"
                                type="text"
                                name="company"
                                placeholder=""
                            ></ListInput>

                            <ListInput
                                label="Bedriftens organisasjonsnummer"
                                type="text"
                                name="org"
                                placeholder=""
                            ></ListInput>

                            <ListInput
                                label="E-post"
                                type="email"
                                name="email"
                                placeholder="E-post"
                            ></ListInput>

                            <ListInput
                                label="Passord"
                                type="password"
                                name="password"
                                placeholder="Passord"
                            ></ListInput>
                        </List>

                        <Block>
                            <Button raised fill large tabLink="#tab-company-extra">Neste</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-company-extra">
                        <List form>
                            <BasisInformationInput />

                            <ListInput
                                label="Stilling"
                                type="text"
                                name="position"
                                placeholder=""
                            ></ListInput>

                            <ListInput
                                label="Kode"
                                type="text"
                                placeholder=""
                            ></ListInput>

                            <ListInput
                                label="Bedriftens nettside"
                                type="url"
                                placeholder="(valgfritt)"
                            ></ListInput>
                        </List>

                        <Block>
                            <TermsCheckbox />
                        </Block>

                        <Block>
                            <Row>
                                <Col width="50">
                                    <Button raised fill large tabLink="#tab-company-basis">Tilbake</Button>
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
