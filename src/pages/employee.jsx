import React, { Component } from "react";
import DatePickerCustomHeader from "../components/shared/DatePicker/DatePickerCustomHeader";

import ReactDOM from "react-dom";
//import components
import EmployeeHeader from "../components/EmployeePage/EmployeeHeader/EmployeeHeader.jsx";
import Button from "../components/shared/Button/StyledButton";
import InformationBox from "../components/shared/InformationBox/InformationBox";
import DatePicker from "../components/shared/DatePicker/DatePicker";
import Header from "../components/Header/Header.jsx";

//import picture
import TempPic from "../../assets-src/EmployeePage/temp2.png";

//import styling
import "../css/employee.css";
import "../css/toolbar.css";

//import components from framework7
import { Page, Row, Col, Toolbar, Link } from "framework7-react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      pic: TempPic,
      position: "Daglig Leder, InMarket AS",
      name: "Chris Africa, 34",
      showDate: false,
      startDate: null,
      endDate: null
    };
  }

  dateOnChange(d1, d2) {
    this.setState({ startDate: d1, endDate: d2 });
  }

  render() {
    return (
      <Page name="home" className="employeePage">
        <Header backLink title="Employee" />
        <div>
          <EmployeeHeader
            pic={this.state.pic}
            position={this.state.position}
            name={this.state.name}
          />
        </div>
        <Row className="employeePageButtonContainer">
          <Button>SE LOGG</Button>
          <Button
            clicked={() => this.setState({ showDate: !this.state.showDate })}
          >
            FORESPØR
          </Button>
        </Row>

        {this.state.showDate ? (
          <Row className="dateButtonContainer margin">
            <h2>Velg dato:</h2>
            <DatePicker
              onChange={(d1, d2) => {
                this.dateOnChange(d1, d2);
              }}
            />
          </Row>
        ) : (
          <div />
        )}

        <Row />
        <InformationBox>Lorem Ipsum</InformationBox>
        <Toolbar className="bottomToolbar" tabbar labels bottom>
          <Link
            className="bottomToolbarLink toolbarIcon"
            href="/"
            iconF7="home"
          />
          <Link
            className="bottomToolbarLink toolbarIcon"
            href="/nettverk/"
            iconF7="search"
          />
          <Link
            className="bottomToolbarLink toolbarIcon"
            href="/activities/"
            iconF7="email"
          />
          <Link
            className="bottomToolbarLink toolbarIcon"
            href="/profilepage/"
            iconF7="person_round"
          />
        </Toolbar>
      </Page>
    );
  }
}

export default Employee;
