import React from 'react';
import { Link } from 'framework7-react';
import '../../../css/conversationsActivitiesInstanceShared.css';
import ConversationsMessageAvatar from '../ConversationsMessageAvatar/ConversationsMessageAvatar.jsx';
import ConversationsMessageText from '../ConversationsMessageText/ConversationsMessageText.jsx';
import ConversationsMessageReact from '../ConversationsMessageReact/ConversationsMessageReact.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    formatTimeToShow(time, now) {
        const timeSince = (now.getTime() - time.getTime()) / (1000 * 60);
        let timeToShow = '';
        if (timeSince > 60 * 24) {
            timeToShow =
                (time.getDate() < 10
                    ? '0' + time.getDate().toString()
                    : time.getDate().toString()) +
                '.' +
                (time.getMonth() < 9
                    ? '0' + (time.getMonth() + 1).toString()
                    : (time.getMonth() + 1).toString()) +
                '.' +
                time
                    .getFullYear()
                    .toString()
                    .substring(2);
        } else {
            timeToShow =
                (time.getHours() < 10
                    ? '0' + time.getHours().toString()
                    : time.getHours().toString()) +
                ':' +
                (time.getMinutes() < 10
                    ? '0' + time.getMinutes().toString()
                    : time.getMinutes().toString());
        }
        return timeToShow;
    }

    formatTimeSince(time, now) {
        let timeSinceInt = parseInt(
            (now.getTime() - time.getTime()) / (1000 * 60)
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
        } else {
            timeSinceStr = timeSinceInt.toString() + ' min';
        }
        return timeSinceStr;
    }

    render() {
        const url = '/conversations/' + this.props.chat_id;

        const time = new Date(this.props.time_stamp);
        const now = new Date(Date.now());
        const timeToShow = this.formatTimeToShow(time, now);
        const timeSince = this.formatTimeSince(time, now);

        return (
            <Link className='conversationsMessageLink' href={url}>
                <div className='conversationsActivitiesInstanceInnerContainer'>
                    <div className='conversationsActivitiesAvatarOuterContainer'>
                        <ConversationsMessageAvatar
                            time_stamp={timeSince}
                            avatar_img={this.props.avatar_img}
                        />
                    </div>
                    <div className='conversationActivitiesTextOuterContainer'>
                        <ConversationsMessageText
                            chat_name={this.props.chat_name}
                            last_message={this.props.last_message}
                            time_stamp={timeToShow}
                        />
                    </div>
                    <div className='conversationActivitiesReactOuterContainer'>
                        <ConversationsMessageReact />
                    </div>
                </div>
            </Link>
        );
    }
}
