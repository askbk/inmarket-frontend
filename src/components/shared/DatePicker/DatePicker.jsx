import React, { Component } from "react";

//import styling
import "./DatePicker.css";

//import picture
import Location from "../../../../assets-src/DatePicker/Location.png";

//Import datepicker
import DatePickerCustomHeader from "./DatePickerCustomHeader";
import DatePickerReact from "react-mobile-datepicker";

//import Framework7 grid-components
import { Block, Row, Col, Button } from "framework7-react";
const monthMap = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "Mai",
  "6": "Jun",
  "7": "Jul",
  "8": "Aug",
  "9": "Sep",
  "10": "Okt",
  "11": "Nov",
  "12": "Dec"
};

const monthMapFull = {
  "1": "januar",
  "2": "februar",
  "3": "mars",
  "4": "april",
  "5": "mai",
  "6": "juni",
  "7": "july",
  "8": "august",
  "9": "september",
  "10": "oktober",
  "11": "november",
  "12": "desember"
};

function IntervalsWith5(minutes) {
  return Math.ceil(minutes / 5) * 5;
}
function getMinutes(date) {
  let minutes = date.getMinutes();
  if (parseInt(minutes) < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
}

function getHours(date) {
  let minutes = date.getHours();
  if (parseInt(minutes) < 10) {
    minutes = "0" + minutes;
  }
  return minutes;
}

function dateFormat(date) {
  let year = date.getFullYear();
  if (year === new Date().getFullYear()) {
    year = "";
  }
  return (
    " " +
    date.getDate() +
    ". " +
    monthMapFull[parseInt(date.getMonth()) + 1] +
    " " +
    year +
    " kl " +
    getHours(date) +
    ":" +
    getMinutes(date)
  );
}

function dateFormatFromAndTo(from, to) {
  let fromString = dateFormat(from);
  let toString = "";
  if (
    from.getFullYear() === to.getFullYear() &&
    from.getMonth() === to.getMonth() &&
    from.getDate() === to.getDate()
  ) {
    toString = "-" + getHours(to) + ":" + getMinutes(to);
    if (
      from.getHours() === to.getHours() &&
      from.getMinutes() === to.getMinutes()
    ) {
      toString = "";
    }
  } else {
    toString = " til ";
    toString += dateFormat(to);
  }
  return "" + fromString + "" + toString;
}

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      selectedDate: 0,
      isOpen: false,
      value: new Date()
    };
  }

  handleClick() {
    /*Datepickeren har lavere z-index enn det framework-7 bruker. så vi må tvinge den til å bli høyere*/
    let datepickers = document.getElementsByClassName("datepicker-modal");
    for (let i = 0; i < datepickers.length; i++) {
      datepickers[i].style.zIndex = "100000";
    }

    let value = null;
    let now = new Date();
    now.setMinutes(IntervalsWith5(now.getMinutes()));
    value = this.state.startDate ? this.state.startDate : now;

    this.setState({ isOpen: true, selectedDate: 1, value: value });
  }

  handleCancel() {
    this.setState({ isOpen: false, selectedDate: 0 });
  }

  handleSelect(time) {
    if (this.state.selectedDate === 1) {
      let endDate = this.state.endDate;
      if (this.state.endDate === null) {
        if (endDate === null) {
          endDate = time;
        }
      }
      this.setState({
        startDate: time,
        endDate: endDate,
        value: time,
        isOpen: true,
        selectedDate: 2
      });
    } else if (this.state.selectedDate === 2) {
      this.setState({ endDate: time, isOpen: false, selectedDate: 0 });
    }

    this.props.onChange(this.state.startDate, this.state.endDate);
  }

  renderFromDate(dateConfig) {
    return (
      <DatePickerReact
        value={this.state.value}
        showCaption={true}
        isOpen={this.state.selectedDate === 1}
        onSelect={time => {
          this.handleSelect(time);
        }}
        onCancel={() => {
          this.handleCancel();
        }}
        customHeader={
          <DatePickerCustomHeader
            startDate={this.state.startDate ? this.state.startDate : new Date()}
            endDate={this.state.endDate ? this.state.endDate : new Date()}
            selected={this.state.selectedDate}
          />
        }
        confirmText={"Gå til neste"}
        cancelText={"Avbryt"}
        theme={"dark"}
        dateConfig={dateConfig}
      />
    );
  }
  renderToDate(dateConfig) {
    return (
      <DatePickerReact
        value={this.state.value}
        showCaption={true}
        isOpen={this.state.selectedDate === 2}
        onSelect={time => {
          this.handleSelect(time);
        }}
        onCancel={() => {
          this.handleCancel();
        }}
        customHeader={
          <DatePickerCustomHeader
            startDate={this.state.startDate ? this.state.startDate : new Date()}
            endDate={this.state.endDate ? this.state.endDate : new Date()}
            selected={this.state.selectedDate}
          />
        }
        confirmText={"Ferdig"}
        cancelText={"Avbryt"}
        theme={"dark"}
        dateConfig={dateConfig}
      />
    );
  }

  render() {
    let dateConfig = {
      year: {
        format: "YYYY",
        caption: "År",
        step: 1
      },
      month: {
        format: value => monthMap[value.getMonth() + 1],
        caption: "Måned",
        step: 1
      },
      date: {
        format: "D",
        caption: "Dag",
        step: 1
      },
      hour: {
        format: "hh:mm",
        caption: "Time",
        step: 1
      },
      minute: {
        format: "mm",
        caption: "Min",
        step: 5
      }
    };

    return (
      <div>
        <Button
          className="styledPageButton"
          onClick={() => {
            this.handleClick();
          }}
          style={{
            maxWidth: "1000px"
          }}
        >
          <span>
            {this.state.startDate
              ? dateFormatFromAndTo(this.state.startDate, this.state.endDate)
              : "Dato"}
          </span>
        </Button>
        {this.renderFromDate(dateConfig)}
        {this.renderToDate(dateConfig)}
      </div>
    );
  }
}

export default DatePicker;
