import React from 'react';
import '../../../css/conversationsActivititesTextShared.css';
import { Block, Link } from 'framework7-react';

import DatePicker from '../../shared/DatePicker/DatePicker';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const informationText = this.props.informationText; //Dette er litt informasjon om hva aktiviteten kommer til å gå ut på.";
        var information = <div />;
        if (informationText !== '') {
            information = (
                <div className='conversationsActivitiesTextMessageContainer activitiesTextInformation'>
                    <p>{informationText}</p>
                </div>
            );
        }

        return (
            <Block
                strong
                inset
                className='conversationsActivitiesTextInnerContainer'
                style={{ minWidth: '180px' }}
            >
                <div className='conversationsActivitiesTextContentContainer'>
                    <div className='conversationsActivitiesTextHeaderContainer'>
                        <h1>{this.props.header}</h1>
                    </div>
                    <div className='conversationsActivitiesTextMessageContainer'>
                        <p>{DatePicker.dateFormatFromAndTo(this.props.startDate,this.props.endDate)} at {this.props.address}</p>
                    </div>
                    {information}

                    {/*<div className='conversationsActivitiesTextMessageContainer activitiesTextAddress'>
                            <p>{this.props.address}</p>
                        </div>*/}
                </div>
            </Block>
        );
    }
}
