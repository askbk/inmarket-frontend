import React, { Component } from 'react';

//import datepicker object
import DatePicker from '../DatePicker/DatePicker';


import {
  List,
  ListInput,
} from 'framework7-react';

class ActivityForm extends Component {
  constructor(props){
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
      date: new Date(),
      
      //gjentas aktiviteten?
      recurringActivity: true,

      //gjenta hver dag/uke/mnd
      repeatEvery: '',

      //person som arrangerer eventet
      host: '',

      //bedrift som holder eventet
      company: '',

    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    //sender verdier til endpoind
    
  }

  render() {
    return (
      <List inlineLabels noHairlinesMd>
         <ListInput
                    label="Tittel"
                    type="text"
                    name="title"
                    placeholder="Tittel til aktivitet"
                ></ListInput>

            <ListInput
                label="Beskrivelse"
                type="textarea"
                resizable
                name="description"
                placeholder="Hva slags arrangement?"
            ></ListInput>
          
            <ListInput
                label="Type aktivitet"
                type="select"
                name="type"
                placeholder="Vennligst velg en type aktivitet"
            >
              {/* Fyll inn aktiviteter her */}
              <option value="Workshop">Workshop</option>
              <option value="Kurs">Kurs</option>
              <option value="Foredrag">Foredrag</option>
              <option value="Foredrag">Intervju</option>
            </ListInput>

                <ListInput
                    label="Lokasjon"
                    type="text"
                    name="location"
                    placeholder="Hvor er aktiviteten?"
                ></ListInput>
                {/* Denne er ikke ferdig */}
                <DatePicker></DatePicker>
                 <ListInput
                    label="Gjentagende?"
                    type="text"
                    name="recurringActivity"
                    placeholder="Gjentas aktiviteten?"
                ></ListInput>
                
      </List>
    );
  }
}

export default ActivityForm;