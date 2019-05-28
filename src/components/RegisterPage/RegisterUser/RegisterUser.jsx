import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
    List,
    ListInput,
    Row,
    Button,
    Block,
    Col,
    Tabs,
    Tab
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
            <Tab id='tab-user' tabActive>
                {
                    this.props.userType === 'jobseeker'
                        ? (
                            <Block>
                                <h1>Vi åpner dørene for deg.</h1>
                                <p>
                                    Lag en gratis bruker for å komme deg ut i arbeidslivet.​ Møt bedrifter og bygg
                                    din karriere.
                                </p>
                            </Block>
                        )
                        : (
                            <Block>
                                <h1>Hello</h1>
                                <p>
                                    Engasjer folk i arbeidet dere gjør og øk samtidig sjansen for å finne de beste
                                    ansatte for din bedrift.​
                                </p>
                            </Block>
                        )
                }

                <Tabs>
                    <Tab id='tab-user-basis' tabActive>
                        <List form>
                            <BasisInformationInput
                                onInputChange={this.props.onInputChange}
                                userType={this.props.userType}
                                type={this.props.type}/>
                        </List>

                        <Block>
                            <Button raised fill large tabLink='#tab-user-extra'>
                                Neste
                            </Button>
                        </Block>
                    </Tab>

                    <Tab id='tab-user-extra'>
                        <Block>
                            {
                                this.props.userType === 'jobseeker'
                                    ? (<p>Velg dine interesser og ferdigheter</p>)
                                    : (<p>Velg hva slags arbeidstakere du ser etter</p>)
                            }
                            <QualityFields
                                skillsChanged={this.props.skillsChanged}
                                interestsChanged={this.props.interestsChanged}/>
                        </Block>

                        <Block>
                            <TermsCheckbox/>
                        </Block>

                        <Block>
                            <Row>
                                <Col width='50'>
                                    <Button raised fill large tabLink='#tab-user-basis'>
                                        Tilbake
                                    </Button>
                                </Col>
                                <Col width='50'>
                                    <Button
                                        raised
                                        fill
                                        large
                                        onClick={this.props.onRegisterClick}
                                        id='userRegisterButton'>
                                        Registrer
                                    </Button>
                                </Col>
                            </Row>
                        </Block>
                    </Tab>
                </Tabs>
            </Tab>
        );
    }
}
