import React from 'react';
import '../../../css/conversationsActivitiesInstanceShared.css';
import ConversationsMessageAvatar from '../../Conversations/ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ActivitiesInstanceText from '../ActivitiesInstanceText/ActivitiesInstanceText.jsx';
import ActivitiesInstanceButtons from '../ActivitiesInstanceButtons/ActivitiesInstanceButtons.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { start_date: null };
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

    formatDate(start_date, end_date, frequency) {
        const WEEKDAYS = ['man', 'tir', 'ons', 'tor', 'fre'];
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

    componentDidMount() {
        let id = this.props.id;

        const url = gConfig.url + '/activities/' + id;

        fetch(url, { headers: { authorization: localStorage.jwt } })
            .then(res => {
                return res.json();
            })
            .then(user => {
                console.log(user.message);
                const data = user;
                console.log(data);
                console.log(this.props.id);

                // TODO  address in backend, frequency? (probably recurrencePattern
                this.setState({
                    header: data.name,
                    information: data.description,
                    start_date: new Date(data.startDateUTC),
                    end_date: new Date(data.endDateUTC),
                    duration: data.duration,
                    isRecurring: data.isRecurring,
                    recurrencePattern: data.recurrencePattern,
                    creatorId: data.creatorId,
                    createdAt: new Date(data.createdAt),
                    updatedAt: new Date(data.updatedAt)
                });
                console.log(user.data);
            });
    }

    render() {
        if (this.state.start_date === null) {
            return null;
        }
        const date = this.formatDate(
            this.state.start_date,
            this.state.end_date,
            [true, false, false, false, true]
        );
        const time = this.formatTime(
            this.state.start_date,
            this.state.end_date
        );
        const chip_time_stamp = this.formatTimeStamp(this.state.start_date);

        return (
            <div className='conversationsActivitiesInstanceInnerContainer'>
                <div className='conversationsActivitiesAvatarOuterContainer'>
                    <ConversationsMessageAvatar time_stamp={chip_time_stamp} />
                </div>
                <div className='conversationActivitiesTextOuterContainer'>
                    <ActivitiesInstanceText
                        id={this.props.id}
                        header={this.state.header}
                        informationText={this.state.informationText}
                        date={date}
                        time={time}
                        frequency={this.state.frequency}
                        address={this.state.address ? null : null}
                    />
                </div>
                <div className='conversationActivitiesReactOuterContainer  activitiesButtonsContainer'>
                    <ActivitiesInstanceButtons state={this.props.state} />
                </div>
            </div>
        );
    }
}
