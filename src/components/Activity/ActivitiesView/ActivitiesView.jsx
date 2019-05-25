import React from 'react';
import '../../../css/conversationsActivitiesViewShared.css';
import ActivitiesInstance from '../ActivitiesInstance/ActivitiesInstance.jsx';
import { List, ListItem, Searchbar } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchbarContent: '',
            activities: [
                {
                    id:1,
                    header: 'Inmarket - Intervju',
                    informationText: '',
                    start_date: '2019-02-12',
                    end_date: '2019-06-10',
                    start_time: '11:30:00',
                    end_time: '14:05:00',
                    frequency: [true, false, true, true, true],
                    address: 'Wessels Gate 20A',
                    state: ''
                },
            ]
        };
    }

    handleChange(e) {
        const value = e.target.value.toLowerCase();
        this.setState({ searchbarContent: value });
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
                        {this.state.activities
                            .filter(a =>
                                a.header
                                    .toLowerCase()
                                    .includes(this.state.searchbarContent)
                            )
                            .filter(
                                a =>
                                    new Date(a.end_date + ' ' + a.end_time) >=
                                    new Date(Date.now())
                            )
                            .sort(
                                (a, b) =>
                                    new Date(
                                        a.start_date + ' ' + a.start_time
                                    ) -
                                    new Date(b.start_date + ' ' + b.start_time)
                            )
                            .map((activity, index) => (
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
