import React, {Component} from 'react';

//import styling
import './DatePicker.css';

//import pictures
import Location from '../../../../assets-src/DatePicker/Location.png';
import Edit from '../../../../assets-src/DatePicker/edit.png';

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
class DatePicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      startDateClicked: false,
      endDateClicked: false,
      editLocation: false,
      location: '',
      description: '',
    };
    this.submitActivity = this.submitActivity.bind(this);
  }

  submitActivity(){
    //send inn relecant info til databasen
    return;
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
      <Button className="fieldStyling"><span className="dateContent">{this.state.startDate ? this.state.startDate.date() : 1}</span></Button>
      </Col>
      <Col onClick={() => this.setState({startDateClicked: !this.state.startDateClicked, endDateClicked: false})}>
     <Button className="fieldStyling"><span className="dateContent">{this.state.startDate ? this.state.startDate.month()+1 : 2}</span></Button>
      </Col>
      <Col onClick={() => this.setState({startDateClicked: !this.state.startDateClicked, endDateClicked: false})}>
      <Button className="fieldStyling"><span className="dateContent">{this.state.startDate ? this.state.startDate.year() : 2019}</span></Button>
      </Col>
      {":"}
        <Col onClick={() => this.setState({endDateClicked: !this.state.endDateClicked, startDateClicked: false})}>
      <Button className="fieldStyling"><span className="dateContent">{this.state.endDate ? this.state.endDate.date() : 1}</span></Button>
      </Col>
      <Col onClick={() => this.setState({endDateClicked: !this.state.endDateClicked, startDateClicked: false})}>
      <Button className="fieldStyling"><span className="dateContent">{this.state.endDate ? this.state.endDate.toDate().getMonth()+1: 2}</span></Button>
      </Col>
      <Col onClick={() => this.setState({endDateClicked: !this.state.endDateClicked, startDateClicked: false})}>
      <Button className="fieldStyling"><span className="dateContent">{this.state.endDate ? this.state.endDate.toDate().getYear()+1900 : 2019}</span></Button>
      </Col>
      </Row>
      <Row style={{width: '50%'}} className="dateTimeContainer">
      <Col>
      <span className="dateContent">Kl. start:</span>
        </Col>
        <Col>
        <span className="dateContent">&nbsp;&nbsp;&nbsp;&nbsp;Kl.slutt</span>
        </Col>
      </Row>
      <Row style={{width: '50%'}} className="dateTimeContainer">
      <Col>
        <Button className="fieldStyling"><span className="dateContent">12</span></Button>
      </Col>
      <Col>
        <Button className="fieldStyling"><span className="dateContent">30</span></Button>
      </Col>
      {":"}
      <Col>
        <Button
        className="fieldStyling">
        <span className="dateContent">
        14
        </span>
        </Button>
      </Col>
      <Col>
        <Button
        className="fieldStyling">
        <span
        className="dateContent">
        30
        </span>
        </Button>
      </Col>
      <Row>
        <Col>
        {this.state.startDateClicked ? <SingleDatePicker
        placeholder="Velg startdato"
        date={this.state.startDate} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ startDate: date, startDateClicked: false })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        /> : null}
        {this.state.endDateClicked ? <SingleDatePicker
        placeholder="Velg sluttdato"
        date={this.state.endDate} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ endDate: date, endDateClicked: false })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        /> : null}
        </Col>
      </Row>
      </Row>
      <Row>
        <Col>
       <textarea className="dateDesc inputStyling" type="text" maxLength={300} placeholder="Placeholder" value={this.state.description} onChange={(e) => {
         this.setState({description: e.target.value});
       }}/>
       </Col>
      </Row>
      <Row>
        <Col>
        <span className="datePic" style={{ display: 'inline'}}>
          <img src={Location}/>
        </span>
        <textarea
          className="locationDesc"
          type="text" maxLength={300}
          style={{ display: 'inline'}}
          value={this.state.location}
          onChange={(e) => {
            this.state.editLocation && this.setState({location: e.target.value})
        }} />
        <span className="datePic" style={{ display: 'inline'}}>
        <img
          src={Edit}
          onClick={() => {
            this.setState({editLocation: !this.state.editLocation});
          }}/>
          </span>
        </Col>
      </Row>
      <Row>
        <Button className="fieldStyling" style={{margin: '0 auto', marginTop: '20px'}} onClick={() => this.submitActivity()}>Forespør</Button>
      </Row>
    </Block>
    );
  }
}

export default DatePicker;
