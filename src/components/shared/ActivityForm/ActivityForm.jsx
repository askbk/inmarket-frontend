import React from 'react';

//import datepicker object
import DatePicker from '../DatePicker/DatePicker';

import { List, ListInput, ListItem, router } from 'framework7-react';
import Button from '../../shared/Button/StyledButton';

class ActivityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',

            //What is the activity?
            description: '',

            //What is the type of activity? (dropdown)
            type: '',

            //Where is the activity?
            location: '',

            //How long does the activity last?
            startDate: null,
            endDate: null,

            //gjentas aktiviteten?
            recurringActivity: true,

            //gjenta hver dag/uke/mnd
            repeatEvery: '',

            //person som arrangerer eventet
            host: '',

            //bedrift som holder eventet
            company: ''
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleDateChange(start, end) {
        this.setState({ startDate: start, endDate: end });
    }

    handleSubmit() {
        //sender verdier til endpoind

        const state = this.state;
        const data = {
            name: state.title,
            description: state.description,
            startDateUTC: state.startDate,
            endDateUTC: state.endDate,
            isRecurring: state.recurringActivity,
            recurrencePattern: state.repeatEvery,
            duration: 0
        };
        const id = this.props.id;

        //Create and invite
        let url = `${gConfig.url}/activities/users/${id}`;
        //Only create
        if (id === null || id === '' || id === undefined) {
            url = `${gConfig.url}/activities/`;
        }

        fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                authorization: localStorage.jwt,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(json => {
                if (res.status === 200) {
                    this.successfulDialog();
                } else {
                    this.unsuccessfulDialog(res.message);
                }
            });
        });
    }
    unsuccessfulDialog(feedback) {
        const app = this.$f7;
        app.dialog.alert(`${feedback}`, () => {
            app.loginScreen.close();
        });
    }
    successfulDialog() {
        const app = this.$f7;
        app.dialog.alert('Aktiviteten har blitt laget', () => {
            app.loginScreen.close();
            app.views.main.router.back();
        });
    }

    render() {
        return (
            <div>
                <List inlineLabels noHairlinesMd>
                    <ListInput
                        label='Tittel'
                        type='text'
                        name='title'
                        placeholder='Tittel til aktivitet'
                        onInput={i => {
                            this.setState({ title: i.target.value });
                        }}
                    />

                    <ListInput
                        label='Beskrivelse'
                        type='textarea'
                        resizable
                        name='description'
                        placeholder='Hva slags arrangement?'
                        onInput={i => {
                            this.setState({ description: i.target.value });
                        }}
                    />

                    <ListInput
                        label='Lokasjon'
                        type='text'
                        name='location'
                        placeholder='Hvor er aktiviteten?'
                        onInput={i => {
                            this.setState({ location: i.target.value });
                        }}
                    />
                    {/* Denne er ikke ferdig.*/}
                    <br />
                    <DatePicker onChange={this.handleDateChange.bind(this)} />
                    {/*
                <ListInput
                    label='Gjentagende?'
                    type='text'
                    name='recurringActivity'
                    placeholder='Gjentas aktiviteten?'
                />
                */}
                </List>

                <Button
                    style={{ margin: '0 auto' }}
                    clicked={this.formValidity.bind(this)}
                >
                    Inviter
                </Button>
            </div>
        );
    }

    formValidity() {
        let feedback = '';
        let state = this.state;

        if (state.title === '') {
            feedback += '<br/> <br/> tittel <br/>';
        }
        if (state.description === '') {
            feedback += ' beskrivelse <br/>';
        }
        if (state.location === '') {
            feedback += ' lokasjon <br/>';
        }

        if (state.startDate === null) {
            feedback += ' dato <br/>';
        }

        if (feedback !== '') {
            feedback = `Vennligst fyll ut følgende felter: ${feedback}`;
        } else {
            this.handleSubmit();
            return;
        }

        this.unsuccessfulDialog(feedback);
    }
}

export default ActivityForm;
