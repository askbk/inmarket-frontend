import React from 'react';
import '../../../css/conversationsActivitiesViewShared.css';
import ActivitiesInstance from '../../Activities/ActivitiesInstance/ActivitiesInstance.jsx';
import { List, ListItem, Searchbar } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchbarContent: '',
            activities: [
                {
                    id: 1
                }
            ]
        };
    }

    render() {
        return (
            <div className='conversationsActivitiesViewContainer'>
                <div className='conversationsActivitiesViewInnerContainer'>
                    <List
                        noHairlines
                        noHairlinesBetween
                        className='searchbar-not-found'
                    >
                        <ListItem title='Nothing found' />
                    </List>
                    <List
                        noHairlines
                        noHairlinesBetween
                        className='search-list searchbar-found conversationsActivitiesViewList'
                    >
                        {this.state.activities.map((activity, index) => (
                            <ListItem
                                className='conversationsActivitiesViewListItem'
                                title={activity.header}
                                key={index}
                                title=''
                            >
                                <div className='conversationsActivitiesViewInstanceContainer'>
                                    <ActivitiesInstance
                                        id={activity.id}
                                        header={activity.header}
                                        informationText={
                                            activity.informationText
                                        }
                                        start_date={activity.start_date}
                                        end_date={activity.end_date}
                                        start_time={activity.start_time}
                                        end_time={activity.end_time}
                                        frequency={activity.frequency}
                                        address={activity.address}
                                        state={activity.state}
                                    />
                                </div>
                            </ListItem>
                        ))}
                        {/*
                <ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>
                <ListItem className="conversationsViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>*/}
                    </List>
                </div>
            </div>
        );
    }
}
