import React, { Component } from 'react';

//import components
import EmployeeHeader from '../components/EmployeePage/EmployeeHeader/EmployeeHeader.jsx';
import Button from '../components/shared/Button/StyledButton';
import InformationBox from '../components/shared/InformationBox/InformationBox';
import Header from '../components/Header/Header.jsx'

//import picture
import TempPic from '../../assets-src/EmployeePage/temp2.png';

//import styling
import '../css/employee.css';

//import components from framework7
import {
  Page,
  Row,
} from 'framework7-react';

class Employee extends Component {
  constructor(){
    super();
    this.state = {
      pic: TempPic,
      position: "Daglig Leder, InMarket AS",
      name: "Chris Africa, 34"
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
      <Button>FORESPØR</Button>
    </Row>
    <InformationBox>
      Lorem Ipsum
    </InformationBox>
    </Page>
    );
  }
}

export default Employee;
