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
    constructor(props) {
        super(props);
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
                            {/* wrap inputs in fragment to remove ul parent element */}
                            <React.Fragment>
                                <ListInput
                                    label="Bedriftens navn"
                                    type="text"
                                    name="name"
                                    placeholder=""
                                    onChange={this.props.onInputChange}
                                    ></ListInput>

                                <ListInput
                                    label="Bedriftens organisasjonsnummer"
                                    type="text"
                                    name="orgNumber"
                                    placeholder=""
                                    onChange={this.props.onInputChange}
                                ></ListInput>

                                <ListInput
                                    label="Kode"
                                    type="text"
                                    name="registrationCode"
                                    placeholder="Hvis bedriften din har en kode, oppgi den her"
                                    onChange={this.props.onInputChange}
                                    ></ListInput>

                                <ListInput
                                    label="Bedriftens nettside"
                                    type="url"
                                    name="webpage"
                                    placeholder="(valgfritt)"
                                    onChange={this.props.onInputChange}
                                    ></ListInput>
                            </React.Fragment>
                        </List>

                        <Block>
                            <Button raised fill large tabLink="#tab-company-extra">Neste</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-company-extra">
                        <List form>
                            <BasisInformationInput onInputChange={this.props.onInputChange}/>
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
                                    <Button raised fill large onClick={this.props.onRegisterClick} id="companyRegisterButton">Registrer</Button>
                                </Col>
                            </Row>
                        </Block>
                    </Tab>
                </Tabs>
            </Tab>
        )
    }
}
