import React from 'react';
import '../../../css/conversationsActivititesTextShared.css';
import {Block, Link} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const informationText = this.props.informationText; //Dette er litt informasjon om hva aktiviteten kommer til å gå ut på.";
        var information = <div/>;
        if (informationText !== '') {
            information = (
                <div
                    className='conversationsActivitiesTextMessageContainer activitiesTextInformation'>
                    <p>{informationText}</p>
                </div>
            );
        }

        return (
            <Link href={`/activities/${this.props.id}`}>
                <Block
                    strong
                    inset
                    className='conversationsActivitiesTextInnerContainer'>
                    <div className='conversationsActivitiesTextContentContainer'>
                        <div className='conversationsActivitiesTextHeaderContainer'>
                            <h1>{this.props.header}</h1>
                        </div>
                        <div className='conversationsActivitiesTextMessageContainer'>
                            <p>{this.props.date}</p>
                        </div>
                        <div className='conversationsActivitiesTextMessageContainer'>
                            <p>{this.props.time}</p>
                        </div>
                        {information}
                        {/*<div className='conversationsActivitiesTextMessageContainer activitiesTextAddress'>
                            <p>{this.props.address}</p>
                        </div>*/
                        }
                    </div>
                </Block>
            </Link>
        );
    }
}
