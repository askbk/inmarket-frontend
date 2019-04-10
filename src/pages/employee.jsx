import React, { Component } from 'react';
import DatePickerCustomHeader from '../components/shared/DatePicker/DatePickerCustomHeader'

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

function getDateWith5Minutes(date){
  let minutes = Math.ceil(date.getMinutes()/5)*5;
  date.setMinutes(minutes);
}
function getMinutes(date){
  let minutes = date.getMinutes();
  if(parseInt(minutes) < 10){
    minutes = "0" + minutes;
  }
  return minutes;
}

function dateFormat(date){
  let year = date.getFullYear();
  if(year === new Date().getFullYear()){
    year = "";
  }
  return " "  + date.getDate() + ". " +  monthMapFull[(parseInt(date.getMonth())+1)] + " " + year + " kl " + date.getHours() + ":" + getMinutes(date);
}

function dateFormatFromAndTo(from,to){
  let fromString = dateFormat(from);
  let toString = "";
  if(from.getFullYear() === to.getFullYear() && from.getMonth() === to.getMonth() && from.getDate() === to.getDate()){
    toString = " kl " + to.getHours() + ":" + getMinutes(to);
  }
  else {
    toString = dateFormat(to);
  }
  return "" + fromString + " til " + toString;
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
      selectedDate: 0,
      isOpen: false,
      value : new Date(),
      confirmText: "Gå til neste",


    };
  }


  handleClick (selected) {
    /*Datepickeren har lavere z-index enn det framework-7 bruker. så vi må tvinge den til å bli høyere*/
    let datepickers = document.getElementsByClassName("datepicker-modal");
    for (let i = 0; i < datepickers.length; i++) {
      datepickers[i].style.zIndex = "100000";
    }

    let value = null;
    if(selected === 1){
      value = this.state.startDate ? this.state.startDate : new Date();
    }
    else if(selected === 2){
      value = this.state.endDate ? (this.state.startDate ? this.state.startDate : new Date()) : new Date();
    }

    this.setState({ isOpen: true, selectedDate:selected, value:value });
  }

  handleCancel ()  {
    this.setState({ isOpen: false });
  }

  handleSelect (time)  {
    if(this.state.selectedDate === 1){
      let endDate = this.state.endDate;
      if(this.state.endDate === null){
        if(endDate === null){
          endDate = time;
        }
      }
      this.setState({ startDate:time, endDate:endDate, value:time, isOpen: true, selectedDate:2 , confirmText:"Ferdig"});


    }
    else if(this.state.selectedDate === 2){
      this.setState({ endDate:time, isOpen: false, confirmText:"Gå til neste" });
    }
  }
/* <a
            className="select-btn"
            onClick={this.handleClick.bind(this)}>
          select timecustomHeader{<button>Test</button>}
        </a>
min={this.state.selectedDate === 2 ? this.state.startDate : new Date(1970, 0, 1)}

         */

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

        <h3>Velg dato</h3>

        <Button clicked={() => {this.handleClick(1)}} style={{ backgroundColor: 'black',
          color: 'white',
          border: '1px solid #c08d42',
          marginBottom: '10px',
          minWidth: 'fit-content',
        maxWidth:"100%!important"}}><span>{this.state.startDate ? dateFormatFromAndTo(this.state.startDate,this.state.endDate) : "Velg dato her"}</span></Button>
      </Row>


      <Row>





        <DatePicker
            value={getDateWith5Minutes(this.state.value)}
            headerFormat={"DD/MM/YYYY hh:mm"}
            showCaption={true}

            isOpen={this.state.isOpen}
            onSelect={(time) =>{this.handleSelect(time)}}
            onCancel={()=>{this.handleCancel()}}
            customHeader={<DatePickerCustomHeader startDate={this.state.startDate ? this.state.startDate : new Date()} endDate={this.state.endDate ? this.state.endDate : new Date()} selected ={this.state.selectedDate}/>}
            confirmText={this.state.confirmText}
            cancelText={"Avbryt"}
            theme={"dark"}
            dateConfig={{

              'year': {
                format: 'YYYY',
                caption: 'År',
                step: 1,
              },
              'month': {
                format: value => monthMap[value.getMonth() + 1],
                caption: 'Måned',
                step: 1,
              },
              'date': {
                format: 'D',
                caption: 'Dag',
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
                step: 5,
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
