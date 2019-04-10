import React, {Component} from 'react';

//import styling
import './DatePicker.css';

//import picture
import Location from '../../../../assets-src/DatePicker/Location.png';


//Import datepicker
import DatePickerCustomHeader from '../components/shared/DatePicker/DatePickerCustomHeader'
import DatePicker from 'react-mobile-datepicker';

//import Framework7 grid-components
import {
  Block,
  Row,
  Col,
  Button
} from 'framework7-react';


class DatePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      startDateClicked: false,
      endDateClicked: false,
    };
  }

  render(){
    return(
<div></div>
    );
  }
}

export default DatePicker;