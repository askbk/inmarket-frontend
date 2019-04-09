import React, {Component} from 'react';

//import styling
import './DatePicker.css';

//import picture
import Location from '../../../../assets-src/DatePicker/Location.png';

//import airbnb datepicker
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
moment.locale('nb');

//import Framework7 grid-components
import {
  Block,
  Row,
  Col,
  Button
} from 'framework7-react';

//for styling purposes
 const styling = {
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid #c08d42',
  marginBottom: '10px',
  minWidth: 'fit-content',
  maxWidth: '100px',
};

const inputStyling = {
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid #c08d42',
  width: '100%', 
  marginBottom: '15px',
  borderRadius: '5px',
};

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
      <Block className="dateGrid">
      <Row>
        <Col>
        <span className="dateContent">Dato start:</span>
        </Col>
        <Col>
        <span className="dateContent">&nbsp;&nbsp;Dato slutt:</span>
        </Col>
      </Row>
      <Row>
      <Col onClick={() => this.setState({startDateClicked: !this.state.startDateClicked, endDateClicked: false})}>
      <Button style={styling}><span className="dateContent">{this.state.startDate ? this.state.startDate.date() : 1}</span></Button>
      </Col>
      <Col onClick={() => this.setState({startDateClicked: !this.state.startDateClicked, endDateClicked: false})}>
     <Button style={styling}><span className="dateContent">{this.state.startDate ? this.state.startDate.month()+1 : 2}</span></Button>
      </Col>
      <Col onClick={() => this.setState({startDateClicked: !this.state.startDateClicked, endDateClicked: false})}>
      <Button style={styling}><span className="dateContent">{this.state.startDate ? this.state.startDate.year() : 2019}</span></Button>
      </Col>
      {":"}
        <Col onClick={() => this.setState({endDateClicked: !this.state.endDateClicked, startDateClicked: false})}>
      <Button style={styling}><span className="dateContent">{this.state.endDate ? this.state.endDate.date() : 1}</span></Button>
      </Col>
      <Col onClick={() => this.setState({endDateClicked: !this.state.endDateClicked, startDateClicked: false})}>
      <Button style={styling}><span className="dateContent">{this.state.endDate ? this.state.endDate.toDate().getMonth()+1: 2}</span></Button>
      </Col>
      <Col onClick={() => this.setState({endDateClicked: !this.state.endDateClicked, startDateClicked: false})}>
      <Button style={styling}><span className="dateContent">{this.state.endDate ? this.state.endDate.toDate().getYear()+1900 : 2019}</span></Button>
      </Col>
      </Row>
      <Row style={{width: '50%'}} className="dateTimeContainer">
      <Col>
      <span className="dateContent">Kl. start:</span>
        </Col>
        <Col>
        <span className="dateContent">&nbsp;&nbsp;Kl.slutt</span>
        </Col>
      </Row>
      <Row style={{width: '50%'}} className="dateTimeContainer">
      <Col>
        <Button style={styling}><span className="dateContent">12</span></Button>
      </Col>
      <Col>
        <Button style={styling}><span className="dateContent">30</span></Button>
      </Col>
      {":"}
      <Col>
        <Button style={styling}><span className="dateContent">14</span></Button>
      </Col>
      <Col>
        <Button style={styling}><span className="dateContent">30</span></Button>
      </Col>
      <Row>
        <Col>
        {this.state.startDateClicked ? <SingleDatePicker
        placeholder="Velg startdato"
        date={this.state.startDate} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ startDate })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        /> : null}
        {this.state.endDateClicked ? <SingleDatePicker
        placeholder="Velg sluttdato"
        date={this.state.endDate} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ endDate })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        /> : null}
        </Col>
      </Row>
      </Row>
      <Row>
        <Col>
       <textarea className="dateDesc" type="text" maxLength={300} style={inputStyling} placeholder="Placeholder" />
       </Col>
      </Row>
      <Row>
        <Col style={{width: '25%'}}><span className="datePic"><img src={Location}/></span></Col>
      </Row>
    </Block>
    );
  }
}

export default DatePicker;