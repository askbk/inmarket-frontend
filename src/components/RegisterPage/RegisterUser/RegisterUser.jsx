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
  Tab,
  Radio
} from 'framework7-react';

import TermsCheckbox from '../TermsCheckbox/TermsCheckbox.jsx';
import BasisInformationInput from '../BasisInformationInput/BasisInformationInput.jsx';
import InterestsFields from '../InterestsFields/InterestsFields.jsx';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Tab id="tab-user" tabActive>
                <Block>
                    <h1>Vi åpner dørene for deg.</h1>
                    <p>Lag en gratis bruker for å komme deg ut i arbeidslivet.​</p>
                </Block>

                <Tabs>
                    <Tab id="tab-user-basis" tabActive>
                        <List form>
                            <BasisInformationInput />
                        </List>

                        <Block>
                            <Button raised fill large tabLink="#tab-user-extra">Neste</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-user-extra">
                        <List>
                            <React.Fragment>
                                <ListItem>Velg det som passer best:</ListItem>
                                <ListItem radio title="Elev" name="user-type-radio" value=""></ListItem>
                                <ListItem radio title="Student" value="" name="user-type-radio"></ListItem>
                                <ListItem radio title="Arbeidssøker" value="" name="user-type-radio"></ListItem>
                            </React.Fragment>
                        </List>

                        <Block>
                            <InterestsFields />
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
