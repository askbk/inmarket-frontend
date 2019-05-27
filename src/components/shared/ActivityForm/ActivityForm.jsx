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

    handleSubmit2() {
        //sender verdier til endpoind

        //let id = this.$f7route.params.id;

        const s = this.state;
        let data = {
            name: s.title,
            description: s.description,
            startDateUTC: s.startDate,
            endDateUTC: s.endDate,
            isRecurring: s.recurringActivity,
            recurrencePattern: s.repeatEvery
        };

        const url = gConfig.url + '/activities/';
        console.log(url);
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                authorization: localStorage.jwt,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
            .then((res) => res.json())
            .then((response) => this.successfulDialog(response))
            .catch((error) => this.unsuccessfulDialog(error));
    }
    unsuccessfulDialog(feedback) {
        const app = this.$f7;
        app.dialog.alert(`${feedback}`, (e) => {
            app.loginScreen.close();
        });
    }
    successfulDialog(response) {
        if (response.status !== 200) return;
        const app = this.$f7;
        app.dialog.alert('Aktiviteten har blitt laget', (e) => {
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
                            this.setState({ title: i });
                        }}
                    />

                    <ListInput
                        label='Beskrivelse'
                        type='textarea'
                        resizable
                        name='description'
                        placeholder='Hva slags arrangement?'
                        onInput={i => {
                            this.setState({ description: i });
                        }}
                    />

                    <ListInput
                        label='Lokasjon'
                        type='text'
                        name='location'
                        placeholder='Hvor er aktiviteten?'
                        onInput={i => {
                            this.setState({ location: i });
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
                    clicked={()=>this.formValidity().bind(this)}
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
            this.handleSubmit2();
            return;
        }

        this.unsuccessfulDialog(feedback);
    }
}

export default ActivityForm;
