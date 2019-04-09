import React, { Component } from 'react';


import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
//import components
import EmployeeHeader from '../components/EmployeePage/EmployeeHeader/EmployeeHeader.jsx';
import Button from '../components/shared/Button/StyledButton';
import InformationBox from '../components/shared/InformationBox/InformationBox';
/*import DatePicker from '../components/shared/DatePicker/DatePicker';*/
import Header from '../components/Header/Header.jsx'

//import picture
import TempPic from '../../assets-src/EmployeePage/temp2.png';

//import styling
import '../css/employee.css';
import '../css/toolbar.css';

//import components from framework7
import {
  Page,
  Row,
  Col,
  Toolbar,
  Link
} from 'framework7-react';
/*
const monthMap = {
  '1': 'Jan',
  '2': 'Feb',
  '3': 'Mar',
  '4': 'Apr',
  '5': 'May',
  '6': 'Jun',
  '7': 'Jul',
  '8': 'Aug',
  '9': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};*/
const monthMap = {
  '1': 'Jan',
  '2': 'Feb',
  '3': 'Mar',
  '4': 'Apr',
  '5': 'Mai',
  '6': 'Jun',
  '7': 'Jul',
  '8': 'Aug',
  '9': 'Sep',
  '10': 'Okt',
  '11': 'Nov',
  '12': 'Dec',
};

const monthMapFull = {
  '1': 'januar',
  '2': 'februar',
  '3': 'mars',
  '4': 'april',
  '5': 'mai',
  '6': 'juni',
  '7': 'july',
  '8': 'august',
  '9': 'september',
  '10': 'oktober',
  '11': 'november',
  '12': 'desember',
};


function dateFormat(date){
  let year = date.getFullYear();
  if(year === new Date().getFullYear()){
    year = "";
  }
  return ""  + date.getDate() + "." +  monthMapFull[(parseInt(date.getMonth())+1)] + " " + year + " kl " + date.getHours() + ":" + date.getMinutes();
}

class Employee extends Component {
  constructor(){
    super();
    this.state = {
      pic: TempPic,
      position: "Daglig Leder, InMarket AS",
      name: "Chris Africa, 34",
      showDate: false,
      startDate: null,
      endDate: null,
      isOpen: false,
    };
  }


  handleClick () {
    /*Datepickeren har lavere z-index enn det framework-7 bruker. så vi må tvinge den til å bli høyere*/
    let datepickers = document.getElementsByClassName("datepicker-modal");
    for (let i = 0; i < datepickers.length; i++) {
      datepickers[i].style.zIndex = "100000";
    }
    this.setState({ isOpen: true });
  }

  handleCancel ()  {
    this.setState({ isOpen: false });
  }

  handleSelect (time)  {
    this.setState({ startDate:time, isOpen: false });
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

      <Row className="dateButtonContainer margin">

        <h3>Velg når det skal starte</h3>

        <Button clicked={this.handleClick.bind(this)} style={{ backgroundColor: 'black',
          color: 'white',
          border: '1px solid #c08d42',
          marginBottom: '10px',
          minWidth: 'fit-content',
          maxWidth: '100px',}}><span className="dateContent">{this.state.startDate ? dateFormat(this.state.startDate) : "Velg dato her"}</span></Button>

        <h3>Velg når det skal slutte</h3>

        <Button clicked={this.handleClick.bind(this)} style={{ backgroundColor: 'black',
          color: 'white',
          border: '1px solid #c08d42',
          marginBottom: '10px',
          minWidth: 'fit-content',
          maxWidth: '100px',}}><span className="dateContent">{this.state.startDate ? dateFormat(this.state.startDate) : "Velg dato her"}</span></Button>

      </Row>


      <Row>
        <a
            className="select-btn"
            onClick={this.handleClick.bind(this)}>
          select time
        </a>




        <DatePicker
            value={this.state.startDate ? this.state.startDate : new Date()}
            headerFormat={"Når det tarter: DD/MM/YYYY hh:mm"}
            showCaption={true}
            isOpen={this.state.isOpen}
            onSelect={(time) =>{this.handleSelect(time).bind(this)}}
            onCancel={()=>{this.handleCancel}}
            confirmText={"Gå til neste"}
            cancelText={"stop"}
            theme={"android-dark"}
            dateConfig={{
              'date': {
                format: 'D',
                caption: 'Dag',
                step: 1,
              },
              'month': {
                format: value => monthMap[value.getMonth() + 1],
                caption: 'Måned',
                step: 1,
              },
              'year': {
                format: 'YYYY',
                caption: 'År',
                step: 1,
              },

              'hour': {
                format: 'hh',
                caption: 'Time',
                step: 1,
              },
              'minute': {
                format: 'mm',
                caption: 'Min',
                step: 1,
              },
            }}/>

        <DatePicker
        />
      </Row>
    <InformationBox>
      Lorem Ipsum
    </InformationBox>
    <Toolbar className="bottomToolbar" tabbar labels bottom>
      <Link className="bottomToolbarLink toolbarIcon" href="/" iconF7="home" />
      <Link className="bottomToolbarLink toolbarIcon" href="/nettverk/" iconF7="search" />
      <Link className="bottomToolbarLink toolbarIcon" href="/activities/" iconF7="email" />
      <Link className="bottomToolbarLink toolbarIcon" href="/profilepage/" iconF7="person_round" />
    </Toolbar>
    </Page>
    );
  }
}

export default Employee;
