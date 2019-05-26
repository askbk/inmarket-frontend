import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {ListInput, ListItem, Radio, List} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <List>
                    {/* TODO: bad practice in onClick props. rewrite*/}
                    <ListItem
                        radio
                        title='Arbeidssøker'
                        name='user-type-radio'
                        value='jobseeker'
                        checked={this.props.userType === 'jobseeker'
}
                        onClick={() => {
                            this.props.onInputChange({
                                target: {
                                    value: 'jobseeker',
                                    name: 'userType'
                                }
                            });
                        }}/>

                    <ListItem
                        radio
                        title='Bedriftsansatt'
                        name='user-type-radio'
                        value='employee'
                        checked={this.props.userType === 'employee'}
                        onClick={() => {
                            this.props.onInputChange({
                                target: {
                                    value: 'employee',
                                    name: 'userType'
                                }
                            });
                        }}/>
                </List>

                <ListInput
                    label='E-post'
                    type='email'
                    name='email'
                    placeholder='E-postadresse for å logge inn'
                    onChange={this.props.onInputChange}/>

                <ListInput
                    label='Passord'
                    type='password'
                    name='password'
                    placeholder='Velg et passord for brukeren din'
                    onChange={this.props.onInputChange}/>

                <ListInput
                    label='Fornavn'
                    type='text'
                    name='firstName'
                    placeholder='Hva heter du?'
                    onChange={this.props.onInputChange}/>

                <ListInput
                    label='Etternavn'
                    type='text'
                    name='lastName'
                    placeholder='Hva heter du?'
                    onChange={this.props.onInputChange}/> {
                    this.props.userType === 'employee'
                        ? <ListInput
                                label='Bedrift'
                                type='text'
                                name='company'
                                placeholder='Hvor arbeider du?'
                                onChange={this.props.onInputChange}/>
                        : <ListInput
                                label='Utdanning'
                                type='text'
                                name='education'
                                placeholder='Hva slags utdanning har du?'
                                onChange={this.props.onInputChange}/>
                }

                {
                    this.props.userType === 'employee'
                        ? <ListInput
                                label='Stilling'
                                type='text'
                                name='role'
                                placeholder='Hva slags stilling har du?'
                                onChange={this.props.onInputChange}/>
                        : <React.Fragment>
                                <ListItem header='Velg det som passer best til din situasjon:'></ListItem>
                                <ListItem
                                    radio
                                    title='Elev'
                                    name='type-radio'
                                    value='pupil'
                                    checked={this.props.type === 'Elev'
}
                                    onClick={() => {
                                        this.props.onInputChange({
                                            target: {
                                                value: 'Elev',
                                                name: 'type'
                                            }
                                        });
                                    }}/>

                                <ListItem
                                    radio
                                    title='Student'
                                    name='type-radio'
                                    value='student'
                                    checked={this.props.type === 'Student'}
                                    onClick={() => {
                                        this.props.onInputChange({
                                            target: {
                                                value: 'Student',
                                                name: 'type'
                                            }
                                        });
                                    }}/>

                                <ListItem
                                    radio
                                    title='Arbeidssøker'
                                    name='type-radio'
                                    value='jobseeker'
                                    checked={this.props.type === 'Arbeidssøker'}
                                    onClick={() => {
                                        this.props.onInputChange({
                                            target: {
                                                value: 'Arbeidssøker',
                                                name: 'type'
                                            }
                                        });
                                    }}/>
                            </React.Fragment>
                }

                {/*
                <ListInput
                label='Telefonnummer'
                type='tel'
                name='phoneNumber'
                placeholder='Ditt telefonnummer (valgfritt)'
                onChange={this.props.onInputChange}
                />

                <ListInput
                label='Kommune'
                type='text'
                name='municipality'
                placeholder='Din kommune (valgfritt)'
                onChange={this.props.onInputChange}
                />
                */
                }
            </React.Fragment>
        );
    }
}
