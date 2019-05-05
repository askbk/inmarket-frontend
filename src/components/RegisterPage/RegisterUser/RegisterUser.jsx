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
import QualityFields from '../QualityFields/QualityFields.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tab id="tab-user" tabActive>
                {this.props.userType === "jobseeker" ?
                    <Block>
                        <h1>Vi åpner dørene for deg.</h1>
                        <p>Lag en gratis bruker for å komme deg ut i arbeidslivet.​</p>
                    </Block>
                :
                    <Block>
                        <h1>Hello</h1>
                        <p>Engasjer folk i arbeidet dere gjør og øk samtidig sjansen for å finne de beste ansatte for din bedrift.​</p>
                    </Block>
                }


                <Tabs>
                    <Tab id="tab-user-basis" tabActive>
                        <List form>
                            <BasisInformationInput onInputChange={this.props.onInputChange}/>
                        </List>

                        <Block>
                            <Button raised fill large tabLink="#tab-user-extra">Neste</Button>
                        </Block>
                    </Tab>

                    <Tab id="tab-user-extra">
                        <List>
                            <React.Fragment>
                                <ListItem>Velg det som passer best:</ListItem>
                                {/* TODO: bad practice in onClick props. rewrite*/}
                                <ListItem
                                    radio
                                    title="Arbeidssøker"
                                    name="user-type-radio"
                                    value="jobseeker"
                                    checked={this.props.userType === "jobseeker"}
                                    onClick={
                                        () => {
                                            this.props.onInputChange(
                                                {
                                                    target: {
                                                        value:"jobseeker",
                                                        name: "userType"
                                                    }
                                                }
                                            );
                                        }
                                    }
                                ></ListItem>
                                <ListItem
                                    radio
                                    title="Bedriftsansatt"
                                    name="user-type-radio"
                                    value="employee"
                                    checked={this.props.userType === "employee"}
                                    onClick={
                                        () => {
                                            this.props.onInputChange(
                                                {
                                                    target: {
                                                        value:"employee",
                                                        name: "userType"
                                                    }
                                                }
                                            );
                                        }
                                    }
                                ></ListItem>
                            </React.Fragment>
                        </List>

                        <Block>
                            {
                                this.props.userType === "jobseeker" ?
                                <p>Velg dine interesser og ferdigheter</p> :
                                <p>Velg hva slags arbeidstakere du ser etter</p>
                            }
                            <QualityFields
                                skillsChanged={this.props.skillsChanged}
                                interestsChanged={this.props.interestsChanged}
                                />
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
                                    <Button raised fill large onClick={this.props.onRegisterClick} id="userRegisterButton">Registrer</Button>
                                </Col>
                            </Row>
                        </Block>
                    </Tab>
                </Tabs>
            </Tab>
        )
    }
}
