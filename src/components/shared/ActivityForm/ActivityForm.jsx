import React from 'react';

//import datepicker object
import DatePicker from '../DatePicker/DatePicker';

import {List, ListInput, ListItem, router} from 'framework7-react';
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


    handleDateChange(start,end){
        this.setState({startDate:start, endDate:end});
    }

    handleSubmit() {
        //sender verdier til endpoind
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
                    onInput={(i)=>{this.setState({title:i})}}
                />

                <ListInput
                    label='Beskrivelse'
                    type='textarea'
                    resizable
                    name='description'
                    placeholder='Hva slags arrangement?'
                    onInput={(i)=>{this.setState({description:i})}}
                />

                <ListInput
                    label='Lokasjon'
                    type='text'
                    name='location'
                    placeholder='Hvor er aktiviteten?'
                    onInput={(i)=>{this.setState({location:i})}}
                />
                {/* Denne er ikke ferdig.*/}
                <br/>
                <DatePicker onChange={this.handleDateChange.bind(this)}/>
                {/*
                <ListInput
                    label='Gjentagende?'
                    type='text'
                    name='recurringActivity'
                    placeholder='Gjentas aktiviteten?'
                />
                */}



            </List>

                <Button style={{margin: '0 auto'}} clicked={this.createActivity.bind(this)}>Inviter</Button>
            </div>
        );
    }

    createActivity() {
        const app = this.$f7;

        const router = this.$f7router;

        let feedback = "";
        let state = this.state;

        if(state.title === ""){
            feedback += "<br/> <br/> tittel <br/>";
        }
        if(state.description === ""){
            feedback += " beskrivelse <br/>";
        }
        if(state.location === ""){
            feedback += " lokasjon <br/>";
        }

        if(state.startDate === null){
            feedback += " dato <br/>";
        }

        let success = false;
        if(feedback !== ""){
            feedback = `Vennligst fyll ut følgende felter ${feedback}`;
        }
        else{
            feedback = "Aktiviteten har blitt laget";
            success = true;
        }


        console.log(router);
        console.log(this);

        app.dialog.alert(`${feedback}`, () => {
            app.loginScreen.close();
            if(success){
                app.views.main.router.back();
            }
        });
    }
}

export default ActivityForm;
