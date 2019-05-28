import React from 'react';
import '../../../css/conversationsActivitiesInstanceShared.css';
import ConversationsMessageAvatar from '../../Conversations/ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ActivitiesInstanceText from '../ActivitiesInstanceText/ActivitiesInstanceText.jsx';
import ActivitiesInstanceButtons from '../ActivitiesInstanceButtons/ActivitiesInstanceButtons.jsx';
import { Link } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { startDate: null };
    }

    formatHoursAndMinutes(time) {
        return time.getHours() + ':' + time.getMinutes();
    }

    formatTime(start_time, end_time) {
        return (
            this.formatHoursAndMinutes(start_time) +
            '-' +
            this.formatHoursAndMinutes(end_time)
        );
        //return start_time.substring(0, 5) + '-' + end_time.substring(0, 5);
    }

    formatDate(startDate, endDate, frequency) {
        const WEEKDAYS = ['man', 'tir', 'ons', 'tor', 'fre'];
        let workdays = '';
        let formattedDate = '';
        if (startDate === endDate) {
            const date = new Date(startDate);
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
            const start = new Date(startDate);
            const end = new Date(endDate);
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

    formatTimeStamp(time) {
        const now = new Date(Date.now());
        let minutesUntilStart = parseInt(
            (time.getTime() - now.getTime()) / (1000 * 60)
        );
        let timeSinceStr = '';
        if (minutesUntilStart > 60 * 24) {
            minutesUntilStart = parseInt(minutesUntilStart / (60 * 24));
            timeSinceStr =
                minutesUntilStart.toString() +
                (minutesUntilStart === 1 ? ' dag' : ' dager');
        } else if (minutesUntilStart > 60) {
            minutesUntilStart = parseInt(minutesUntilStart / 60);
            timeSinceStr =
                minutesUntilStart.toString() +
                (minutesUntilStart === 1 ? ' time' : ' timer');
        } else if (minutesUntilStart > 0) {
            timeSinceStr = minutesUntilStart.toString() + ' min';
        } else {
            timeSinceStr = 'Ongoing';
        }
        return timeSinceStr;
    }

    render() {
        if (!this.props.startDate) {
            return null;
        }
        const date = this.formatDate(this.props.startDate, this.props.endDate, [
            true,
            false,
            true,
            true,
            true
        ]);
        const time = this.formatTime(this.props.startDate, this.props.endDate);
        const chip_time_stamp = this.formatTimeStamp(this.props.startDate);

        return (
            <div className='conversationsActivitiesInstanceInnerContainer'>
                <Link href={`/activities/${this.props.id}`} >
                    <div className='conversationsActivitiesAvatarOuterContainer'>
                        <ConversationsMessageAvatar
                            time_stamp={chip_time_stamp}
                        />
                    </div>
                    <div className='conversationActivitiesTextOuterContainer'>
                        <ActivitiesInstanceText
                            id={this.props.id}
                            header={this.props.header}
                            informationText={this.props.description}
                            date={date}
                            time={time}
                            frequency={this.props.frequency}
                            address={null}
                        />
                    </div>
                </Link>
                <div className='conversationActivitiesReactOuterContainer  activitiesButtonsContainer'>
                    <ActivitiesInstanceButtons status={this.props.status} id={this.props.id} />
                </div>
            </div>
        );
    }
}
