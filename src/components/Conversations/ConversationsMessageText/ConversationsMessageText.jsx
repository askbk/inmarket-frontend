import React from 'react';
import '../../../css/conversationsActivititesTextShared.css';
import { Block } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*const name = "Endre Braut Medhus";
    const content = "This is a message for ";//everyone who goes a long way at following what we do and how things are getting along with each other circumstances are pushing us to renew.";
    const time = "12.03";*/

        return (
            <Block
                strong
                inset
                className='conversationsActivitiesTextInnerContainer'
            >
                <div className='conversationsActivitiesTextContentContainer'>
                    <div className='conversationsActivitiesTextHeaderContainer'>
                        <h1>{this.props.chat_name}</h1>
                    </div>
                    <div className='conversationsActivitiesTextMessageContainer'>
                        <p>{this.props.last_message}</p>
                    </div>
                </div>
                <div className='conversationsActivitiesTextTimeContainer'>
                    <p className='conversationsActivitiesTextTime'>
                        {this.props.time_stamp}
                    </p>
                </div>
            </Block>
        );
    }
}
