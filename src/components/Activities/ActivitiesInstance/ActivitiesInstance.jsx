import React from 'react';
import '../../../css/conversationsActivitiesInstanceShared.css';
import ConversationsMessageAvatar from '../../Conversations/ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ActivitiesInstanceText from '../ActivitiesInstanceText/ActivitiesInstanceText.jsx';
import ActivitiesInstanceButtons from '../ActivitiesInstanceButtons/ActivitiesInstanceButtons.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    formatTime(start_time, end_time) {
        return start_time.substring(0, 5) + '-' + end_time.substring(0, 5);
    }

    formatDate(start_date, end_date, frequency) {
        const WEEKDAYS = ['man', 'tirs', 'ons', 'tor', 'fre'];
        let workdays = '';
        let formattedDate = '';
        if (start_date === end_date) {
            const date = new Date(start_date);
            const month =
                date.getMonth().toString() < 9
                    ? '0' + (date.getMonth() + 1).toString()
                    : (date.getMonth() + 1).toString();
            const day =
                date.getDate().toString() < 10
                    ? '0' + date.getDate().toString()
                    : date.getDate().toString();
            return day + '.' + month;
        } else {
            const start = new Date(start_date);
            const end = new Date(end_date);
            const start_month =
                start.getMonth().toString() < 9
                    ? '0' + (start.getMonth() + 1).toString()
                    : (start.getMonth() + 1).toString();
            const start_day =
                start.getDate().toString() < 10
                    ? '0' + start.getDate().toString()
                    : start.getDate().toString();
            const end_month =
                end.getMonth().toString() < 9
                    ? '0' + (end.getMonth() + 1).toString()
                    : (end.getMonth() + 1).toString();
            const end_day =
                end.getDate().toString() < 10
                    ? '0' + end.getDate().toString()
                    : end.getDate().toString();
            let dayCount = 0;
            for (let i = 0; i < 5; i++) {
                if (frequency[i]) {
                    workdays +=
                        workdays === '' ? WEEKDAYS[i] : ', ' + WEEKDAYS[i];
                    dayCount += 1;
                }
            }
            if (dayCount === 5) {
                workdays = 'Alle hverdager';
            }
            formattedDate +=
                start_day +
                '.' +
                start_month +
                '-' +
                end_day +
                '.' +
                end_month +
                ' (' +
                workdays +
                ')';
            return formattedDate;
        }
    }

    formatTimeStamp(start_date, start_time) {
        const now = new Date(Date.now());
        const time = new Date(start_date + ' ' + start_time);
        let timeSinceInt = parseInt(
            (time.getTime() - now.getTime()) / (1000 * 60)
        );
        let timeSinceStr = '';
        if (timeSinceInt > 60 * 24) {
            timeSinceInt = parseInt(timeSinceInt / (60 * 24));
            timeSinceStr =
                timeSinceInt.toString() +
                (timeSinceInt === 1 ? ' dag' : ' dager');
        } else if (timeSinceInt > 60) {
            timeSinceInt = parseInt(timeSinceInt / 60);
            timeSinceStr =
                timeSinceInt.toString() +
                (timeSinceInt === 1 ? ' time' : ' timer');
        } else if (timeSinceInt > 0) {
            timeSinceStr = timeSinceInt.toString() + ' min';
        } else {
            timeSinceStr = 'Ongoing';
        }
        return timeSinceStr;
    }

    render() {
        const date = this.formatDate(
            this.props.start_date,
            this.props.end_date,
            this.props.frequency
        );
        const time = this.formatTime(
            this.props.start_time,
            this.props.end_time
        );
        const chip_time_stamp = this.formatTimeStamp(
            this.props.start_date,
            this.props.start_time
        );

        return (
            <div className='conversationsActivitiesInstanceInnerContainer'>
                <div className='conversationsActivitiesAvatarOuterContainer'>
                    <ConversationsMessageAvatar time_stamp={chip_time_stamp} />
                </div>
                <div className='conversationActivitiesTextOuterContainer'>
                    <ActivitiesInstanceText
                        header={this.props.header}
                        informationText={this.props.informationText}
                        date={date}
                        time={time}
                        frequency={this.props.frequency}
                        address={this.props.address}
                    />
                </div>
                <div className='conversationActivitiesReactOuterContainer  activitiesButtonsContainer'>
                    <ActivitiesInstanceButtons state={this.props.state} />
                </div>
            </div>
        );
    }
}
