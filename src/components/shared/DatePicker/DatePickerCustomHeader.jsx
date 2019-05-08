import React, { Component } from 'react';

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
    '12': 'Dec'
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
    '12': 'desember'
};

function getMinutes(date) {
    let minutes = date.getMinutes();
    if (parseInt(minutes) < 10) {
        minutes = '0' + minutes;
    }
    return minutes;
}

function getHours(date) {
    let minutes = date.getHours();
    if (parseInt(minutes) < 10) {
        minutes = '0' + minutes;
    }
    return minutes;
}

function dateFormat(date) {
    let year = date.getFullYear();
    if (year === new Date().getFullYear()) {
        year = '';
    }
    return (
        ' ' +
        date.getDate() +
        '. ' +
        monthMapFull[parseInt(date.getMonth()) + 1] +
        ' ' +
        year +
        ' kl ' +
        getHours(date) +
        ':' +
        getMinutes(date)
    );
}

class DatePickerCustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    startDate() {
        if (this.props.selected === 1) {
            return 'fra: ';
        }
        return '';
    }
    endDate() {
        if (this.props.selected === 2) {
            return (
                <div>
                    fra: {dateFormat(this.props.startDate)} <br /> til:{' '}
                </div>
            );
        }
        return '';
    }

    render() {
        return (
            <div>
                {this.startDate()}
                {this.endDate()}
            </div>
        );
    }
}

export default DatePickerCustomHeader;
