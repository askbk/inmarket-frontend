import React, { Component } from 'react';

//import components
import EmployeeHeader from '../components/EmployeePage/EmployeeHeader/EmployeeHeader.jsx';
import Button from '../components/shared/Button/StyledButton';
import InformationBox from '../components/shared/InformationBox/InformationBox';
import DatePicker from '../components/shared/DatePicker/DatePicker';
import Header from '../components/Header/Header.jsx'

//import picture
import TempPic from '../../assets-src/EmployeePage/temp2.png';

//import styling
import '../css/employee.css';

//import components from framework7
import {
  Page,
  Row,
  Col,
} from 'framework7-react';

class Employee extends Component {
  constructor(){
    super();
    this.state = {
      pic: TempPic,
      position: "Daglig Leder, InMarket AS",
      name: "Chris Africa, 34",
      showDate: false,
    };
  }
  render() {
    return (
    <Page name="home" className="employeePage">
    <Header backLink title="Employee"/>
    <div>
    <EmployeeHeader
          pic={this.state.pic}
          position={this.state.position}
          name={this.state.name}
        />
    </div>
    <Row className="employeePageButtonContainer">
      <Button>SE LOGG</Button>
      <Button clicked={ () => this.setState({showDate: !this.state.showDate})}>FORESPØR</Button>
    </Row>
    <Row className="datePickerContainer">
      {this.state.showDate ? <DatePicker /> : null}
    </Row>
    <InformationBox>
      Lorem Ipsum
    </InformationBox>
    </Page>
    );
  }
}

export default Employee;
