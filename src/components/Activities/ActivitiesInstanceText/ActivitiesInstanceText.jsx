import React from 'react';
import '../../../css/conversationsActivititesTextShared.css';
import {Block} from 'framework7-react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  formatTime(start_time, end_time){
    return start_time.substring(0,5) + '-' + end_time.substring(0,5);
  }

  formatDate(start_date, end_date, frequency){
    const WEEKDAYS = ['man', 'tirs', 'ons', 'tor', 'fre'];
    let workdays = "";
    let formattedDate = "";
    if(start_date === end_date){
      const date = new Date(start_date);
      const month = date.getMonth().toString() < 9 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
      const day = date.getDate().toString() < 10 ? '0' + date.getDate().toString() : date.getDate().toString();
      return day + "." + month;
    } else{
      const start = new Date(start_date);
      const end = new Date(end_date);
      const start_month = start.getMonth().toString() < 9 ? '0' + (start.getMonth() + 1).toString() : (start.getMonth() + 1).toString();
      const start_day = start.getDate().toString() < 10 ? '0' + start.getDate().toString() : start.getDate().toString();
      const end_month = end.getMonth().toString() < 9 ? '0' + (end.getMonth() + 1).toString() : (end.getMonth() + 1).toString();
      const end_day = end.getDate().toString() < 10 ? '0' + end.getDate().toString() : end.getDate().toString();
      let dayCount = 0;
      for (let i = 0; i < 5; i++){
        if(frequency[i]){
          workdays += (workdays === "") ? WEEKDAYS[i] : ', ' + WEEKDAYS[i];
          dayCount += 1;
        }
      }
      if(dayCount === 5){
        workdays = "Alle hverdager"
      }
      formattedDate += start_day + '.' + start_month + '-' + end_day + '.' + end_month + ' (' + workdays + ')';
      return formattedDate;
    }
  }

  render(){

    const informationText = this.props.informationText;//Dette er litt informasjon om hva aktiviteten kommer til å gå ut på.";
    var information = (<div></div>);
    if (informationText !== ""){
        information = (
            <div className="conversationsActivitiesTextMessageContainer activitiesTextInformation">
                <p>{informationText}</p>
            </div>);
    } 

    return (
      <Block strong inset className="conversationsActivitiesTextInnerContainer">
        <div className="conversationsActivitiesTextContentContainer">
            <div className="conversationsActivitiesTextHeaderContainer">
                <h1>{this.props.header}</h1>
            </div>
            <div className="conversationsActivitiesTextMessageContainer">
                <p>{this.props.date}</p>
            </div>
            <div className="conversationsActivitiesTextMessageContainer">
                <p>{this.props.time}</p>
            </div>
            {information}
            <div className="conversationsActivitiesTextMessageContainer activitiesTextAddress">
                <p>{this.props.address}</p>
            </div>
        </div>
      </Block>
    );
  }
}